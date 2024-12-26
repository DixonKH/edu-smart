import React, { useMemo } from "react";

export default function WriteArticle() {


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

  return ( 
    <div className="flex justify-center items-center">
      <div className="w-[318px] sm:w-[320px] base:w-[280px] md:w-[450px] lg:w-full">
      </div>
    </div>
  );
}
