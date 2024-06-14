import { UploadButton } from "@uploadthing/react";

export default function UploadImageButton({ className, setState }) {
  return (
    <UploadButton
      className={className}
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        setState(res[0].url);
      }}
      onUploadError={(error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
