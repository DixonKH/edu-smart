import React, { useMemo } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function WriteArticle() {
  const editorRef = React.createRef<Editor>();

  const memoizedValues = useMemo(() => {
    const articleTitle = "",
      articleContent = "",
      articleImage = "";

    return { articleTitle, articleContent, articleImage };
  }, []);

  const uploadImage = async (image: any) => {
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
    } catch (err) {}
  };

  const handleClick = () => {
    if (editorRef.current) {
      const articleContent = editorRef.current
        .getInstance()
        .getHTML() as string;
      memoizedValues.articleContent = articleContent;
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[318px] sm:w-[320px] base:w-[280px] md:w-[450px] lg:w-full">
        <Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="WYSIWYG"
          useCommandShortcut={true}
          ref={editorRef}
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["image", "table", "link"],
            ["ul", "ol", "task"],
          ]}
        />
        <button
          className="bg-green1 text-white px-4 py-2 rounded-md"
          onClick={handleClick}
        >
          Register
        </button>
      </div>
    </div>
  );
}
