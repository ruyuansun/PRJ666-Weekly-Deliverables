import UploadImageButton from "./UploadImageButton";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ModalUpload({ setImageUrl, setModalUploadCloseState }) {
  function handleCloseClick() {
    setModalUploadCloseState(true);
  }

  return (
    <div className="bg-black/40 fixed left-0 top-0 w-full h-full">
      <div className="absolute px-7 py-5">
        <Button onClick={handleCloseClick}>
          <Image src="/close.png" alt="close button" width={17} height={17} />
        </Button>
      </div>
      <div className="absolute left-1/2 top-1/2">
        <div id="change-background-image">
          <UploadImageButton setState={setImageUrl} />
        </div>
      </div>
    </div>
  );
}
