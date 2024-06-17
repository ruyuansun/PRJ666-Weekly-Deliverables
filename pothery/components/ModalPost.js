import Image from "next/image";
import { Button } from "./ui/button";

export default function ModalPost({ setIsOpen }) {
  function handleCloseClick() {
    setIsOpen(false);
  }

  return (
    <div className="bg-black/40 w-full h-full fixed top-0 left-0 flex">
      <div className="w-9/12 relative">
        <div className="absolute px-7 py-5">
          <Button onClick={handleCloseClick}>
            <Image src="/close.png" alt="close button" width={17} height={17} />
          </Button>
        </div>
        <div id="image">Image</div>
      </div>

      <div className="bg-white w-1/4 p-5" id="info">
        Info
        <div id="origin">
          <div id="post-info"></div>
          <div id="settings"></div>
        </div>
        <div id="catalogue">
          <div id="likes"></div>
          <div id="comments"></div>
        </div>
        <div id="comment-section">
          <div id="comment-box">
            <div id="profile"></div>
            <div id="comment"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
