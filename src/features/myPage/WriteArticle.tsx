import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DOMPurify from "dompurify";
import { BoardArticleCategory } from "@/shared/enums/article.enum";
import { BoardArticleInput } from "@/shared/types/article";
import { useArticleStore } from "../community/model/store";
import axios from "axios";
import { Messages, serverApi } from "@/shared/lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "@/shared/lib/sweetAlert";
import { useMemberStore } from "../teachers/model/store";
import Editor from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js"; // Import Froala plugins
import "froala-editor/js/froala_editor.pkgd.min.js"; // Froala editor
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

export default function WriteArticle() {
  const location = useLocation();
  const articleToEdit = location.state ? location.state?.article : null;
  const currentMember = useMemberStore((state) => state.currentMember);
  const createArticle = useArticleStore((state) => state.createArticle);
  const updateArticle = useArticleStore((state) => state.updateArticle);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [article, setArticle] = useState<BoardArticleInput>({
    articleCategory: BoardArticleCategory.NEWS || undefined,
    articleTitle: "",
    articleContent: "",
    articleImage: "",
    memberId: "",
  });
  
  useEffect(() => {
    if (articleToEdit) {
      setArticle({
        _id: articleToEdit._id || "",
        articleCategory: articleToEdit.articleCategory || BoardArticleCategory.NEWS,
        articleTitle: articleToEdit.articleTitle || "",
        articleContent: articleToEdit.articleContent || "",
        articleImage: articleToEdit.articleImage || "",
        memberId: articleToEdit.memberId || "",
      })
      if(articleToEdit.articleImage) {
        setImagePreview(`${serverApi}/${articleToEdit.articleImage}`);
      }
    }
  }, [articleToEdit]);

  const config = {
    placeholderText: "Write your article here...",
    toolbarButtons: [
      ["bold", "italic", "underline"],
      ["fontFamily", "fontSize", "textColor", "backgroundColor"],
      ["align", "formatOL", "formatUL"],
      ["undo", "redo"],
    ],
    fontSizeDefaultSelection: "18",
    height: 250,
    imageUpload: false,
  };

  const handleEditorChange = (content: string) => {
    setArticle((prev) => ({
      ...prev,
      articleContent: content,
    }));
  };

  const uploadImage = async (image: File): Promise<string | null> => {
    if (!image) {
      console.error("No image file selected");
      return null;
    }
    try {
      const formData = new FormData();
      formData.append("articleImage", image);

      const response = await axios.post(
        `${serverApi}/article/createBoardArticle`,
        formData
      );

      const result = response.data.articleImage;
      console.log("Image uploaded successfully:", result);

      setArticle((prev) => {
        return {
          ...prev,
          articleImage: "",
        };
      });
      return result; // Adjust based on API response
    } catch (err) {
      console.error("Image upload failed in uploadImage:", err);
      return null;
    }
  };

  const submitArticle = async () => {
    try {
      if (
        !article.articleTitle ||
        !article.articleContent ||
        !article.articleCategory
      ) {
        throw new Error(Messages.error3);
      }

      let uploadedImageUrl = null;

      const memberId = currentMember?._id || "";

      if (article.articleImage && typeof article.articleImage !== "string") {
        uploadedImageUrl = await uploadImage(article.articleImage); // Upload image
      }
      const articleData = {
        ...article,
        articleImage: uploadedImageUrl || article.articleImage, // Use the uploaded image URL if available
      };
      if(articleToEdit) {
        // Update article
        await updateArticle(memberId, {
          ...articleData,
          articleImage: uploadedImageUrl || (typeof article.articleImage === "string" ? article.articleImage : ""),
        });
        await sweetTopSmallSuccessAlert("Article successfully updated!", 800);
      } else {
        // Create article
        await createArticle(memberId, articleData);
        await sweetTopSmallSuccessAlert("Article successfully submitted!", 800);
      }
      setArticle({
        articleCategory: BoardArticleCategory.NEWS || undefined,
        articleTitle: "",
        articleContent: "",
        articleImage: "",
        memberId: "",
      });

      const fileInput = document.getElementById(
        "file-input"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      setImagePreview(null);
    } catch (error) {
      console.error("Error submitting article:", error);
      sweetErrorHandling(error).then();
    }
  };

  const handleImageSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setArticle((prev) => ({
        ...prev,
        articleImage: selectedFile, // Store the file object
      }));

      // Generate image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="flex justify-center items-start">
      <div className="w-full p-6">
        <div className="flex items-center justify-center mb-3">
          <div className=" p-1 w-full md:w-4/6">
            <p className="font-semibold mb-1 text-xl">Title</p>
            <input
              type="text"
              value={article.articleTitle}
              onChange={(e) =>
                setArticle({ ...article, articleTitle: e.target.value })
              }
              placeholder="Enter article title"
              className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
            />
          </div>
          <div className=" p-1 w-full md:w-2/6">
            <p className="font-semibold mb-1 text-xl">Category</p>
            <Select
              defaultValue={article.articleCategory}
              onValueChange={(value) =>
                setArticle({
                  ...article,
                  articleCategory: value as BoardArticleCategory,
                })
              }
            >
              <SelectTrigger className="w-full h-14 rounded-2xl border">
                <SelectValue placeholder="FREE" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(BoardArticleCategory).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="my-2">
          {article.articleContent && (
            <Editor
            tag="textarea"
            model={article.articleContent}
            config={config}
            onModelChange={handleEditorChange}
          />
          )}
        </div>
        <div className="my-3">
          <p className="font-semibold text-xl">Upload Image</p>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageSelection}
            className="border px-3 py-1 rounded-2xl w-full"
          />
        </div>
        <>
          {imagePreview && (
            <div className="w-full flex items-center justify-center my-3">
              <img
                src={imagePreview}
                className="w-[50%] object-cover"
              />
            </div>
          )}
        </>
        <div className="mx-auto text-center flex items-center justify-end m-2 w-full">
          <button
            onClick={submitArticle}
            className="mt-4 px-4 w-48 border bg-green py-2 flex items-center justify-center text-white text-lg rounded-xl"
          >
            {articleToEdit ? "Update Article" : "Submit Article"}
          </button>
        </div>
      </div>
    </div>
  );
}
