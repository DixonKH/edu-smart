import { FileInputButton, FileCard, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function App() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles: ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: number | string | undefined) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <div
    
      className="border h-[150px] text-xs lg:text-xl sm:text-sm w-[100px] lg:h-[200px] p-5 rounded-xl"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "10px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <FileInputButton
        onChange={updateFiles}
        value={files}
        autoClean
        uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
        fakeUpload
        style={{ backgroundColor: "#00987b", width: "50px", fontSize: "10px" }}
        actionButtons={{
          position: "after",
          uploadButton: {
            style: {
              width: "50px",
              fontSize: "10px",
              textTransform: "uppercase",
              backgroundColor: "#00987b",
            },
          },
          abortButton: {
            style: {
              width: "50px",
              fontSize: "10px",
              textTransform: "uppercase",
              backgroundColor: "#00987b",
            },
          },
          cleanButton: {
            style: {
              width: "50px",
              fontSize: "10px",
              textTransform: "uppercase",
              backgroundColor: "#00987b",
            },
          },
          deleteButton: {
            style: {
              width: "50px",
              fontSize: "10px",
              textTransform: "uppercase",
              backgroundColor: "#00987b",
            },
          },
        }}
      />
      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "5px",
            minWidth: "50%",
          }}
        >
          {files.map((file: ExtFile) => (
            <FileCard
              key={file.id}
              {...file}
              onDelete={removeFile}
              info
              preview
            />
          ))}
        </div>
      )}
    </div>
  );
}
