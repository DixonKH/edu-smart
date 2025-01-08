import { useMemo, useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BoardArticleCategory } from "@/shared/enums/article.enum";

export default function WriteArticle() {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstanceRef = useRef<Quill | null>(null);
  const [articleContent, setArticleContent] = useState("");

  const memoizedValues = useMemo(() => {
    const articleTitle = "",
      articleContent = "",
      articleImage = "";

    return { articleTitle, articleContent, articleImage };
  }, []);

  const uploadImage = async (image: File): Promise<string | null> => {
    try {
      const formData = new FormData();
      formData.append(
        "operations",
        JSON.stringify({
          query: `mutation ImageUploader($file: Upload!, $target: String!) {
                imageUploader(file: $file, target: $target) 
          }`,
          variables: {
            file: null,
            target: "article",
          },
        })
      );
      formData.append("0", image);

      const response = await fetch("YOUR_IMAGE_UPLOAD_ENDPOINT", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      return result.data?.imageUploader || null; // Adjust based on API response
    } catch (err) {
      console.error("Image upload failed:", err);
      return null;
    }
  };

  useEffect(() => {
    if (!editorRef.current || quillInstanceRef.current) return;

    // Initialize Quill editor only once
    const quill = new Quill(editorRef.current, {
      theme: "snow",
      placeholder: "Write your article here...",
      modules: {
        toolbar: [
          ["bold", "italic", "underline"], // Text styles
          [{ header: [1, 2, false] }], // Headings
          [{ list: "ordered" }, { list: "bullet" }], // Lists
          ["link", "image"], // Links and images
          ["clean"], // Remove formatting
        ],
      },
    });

    quill.on("text-change", () => {
      setArticleContent(quill.root.innerHTML); // Capture HTML content of the editor
    });

    quillInstanceRef.current = quill; // Store the instance to avoid multiple initializations
  }, []);

  const submitArticle = () => {
    console.log("Article Content:", articleContent);
    console.log("Other Data:", memoizedValues);
    alert("Article submitted!");
  };

  return (
    <div className="flex justify-center items-start h-[820px]">
      <div className="w-full p-6">
        <div className="flex items-center justify-center mb-3">
          <div className=" p-1 w-full md:w-4/6">
            <p className="font-semibold mb-1 text-xl">Title</p>
            <input
              type="text"
              placeholder="Enter article title"
              className="border px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
            />
          </div>
          <div className=" p-1 w-full md:w-2/6">
            <p className="font-semibold mb-1 text-xl">Category</p>
            <Select
            // defaultValue={memberData.memberCategory}
            // onValueChange={handleSelectChange}
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
        <div ref={editorRef} className="h-[550px] border rounded-b-2xl text-xl p-1" />
        <div className="mx-auto text-center flex items-center justify-end m-2 w-full">
          <button
            onClick={submitArticle}
            className="mt-4 px-4 w-48 border bg-green py-2 flex items-center justify-center text-white text-lg rounded-xl"
          >
            Submit Article
          </button>
        </div>
      </div>
    </div>
  );
}
