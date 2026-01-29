import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BoardArticleCategory } from "@/shared/enums/article.enum";
import { BoardArticleInput, BoardArticleUpdate } from "@/shared/types/article";
import { useArticleStore } from "../community/model/store";
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
import "froala-editor/js/plugins/emoticons.min.js"; // Emoticons plugin
import "froala-editor/css/plugins/emoticons.min.css";
import "froala-editor/js/plugins/fullscreen.min.js"; // Fullscreen plugin
import "froala-editor/js/plugins/print.min.js"; // Print plugin
import "froala-editor/js/plugins/word_paste.min.js"; // Word Paste plugin
import "froala-editor/css/plugins/fullscreen.min.css"; // Fullscreen CSS

export const resolveImageUrl = (url?: string) => {
  if (!url) return "";

  // Cloudinary URL
  if (url.startsWith("http")) {
    return url;
  }

  // eski local upload
  return `${serverApi}/${url}`;
};

export default function WriteArticle() {
  const location = useLocation();
  const navigate = useNavigate();
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
        articleCategory:
          articleToEdit.articleCategory || BoardArticleCategory.NEWS,
        articleTitle: articleToEdit.articleTitle || "",
        articleContent: articleToEdit.articleContent || "",
        articleImage: articleToEdit.articleImage || "",
        memberId: articleToEdit.memberId || "",
      });

      if (articleToEdit.articleImage) {
        setImagePreview(resolveImageUrl(articleToEdit.articleImage));
      }
    }
  }, [articleToEdit]);

  const config = {
    placeholderText: "Write your article here...",
    toolbarButtons: [
      ["bold", "italic", "underline"],
      ["fontFamily", "fontSize", "textColor", "backgroundColor"],
      ["align", "formatOL", "formatUL"],
      ["emoticons"],
      ["undo", "redo"],
      ["fullscreen"], // Fullscreen button
      ["print"], // Print button
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

  const submitArticle = async () => {
    try {
      if (
        !article.articleTitle ||
        !article.articleContent ||
        !article.articleCategory
      ) {
        throw new Error(Messages.error3);
      }

      const memberId = currentMember?._id;
      if (!memberId) throw new Error("Member not found");

      if (articleToEdit) {
        await updateArticle(memberId, {
          _id: articleToEdit._id,
          articleTitle: article.articleTitle,
          articleContent: article.articleContent,
          articleCategory: article.articleCategory,
          articleImage: article.articleImage, // string yoki File
        });
        await sweetTopSmallSuccessAlert("Article updated!", 800);
      } else {
        await createArticle(memberId, article);
        await sweetTopSmallSuccessAlert("Article created!", 800);
      }

      navigate(-1);
    } catch (error) {
      console.error(error);
      sweetErrorHandling(error);
    }
  };

  const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];

    setArticle((prev) => ({
      ...prev,
      articleImage: file, // 🔥 File object
    }));

    setImagePreview(URL.createObjectURL(file));
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
              model={article.articleContent || ""}
              config={config}
              onModelChange={handleEditorChange}
            />
          )}
          {!article.articleContent && (
            <Editor
              tag="textarea"
              model={article.articleContent || ""}
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
              <img src={imagePreview} className="w-[50%] object-cover" />
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
