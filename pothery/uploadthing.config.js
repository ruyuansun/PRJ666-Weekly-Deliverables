import { createUploadthing, defineUploadthing } from "@uploadthing/react";
const uploadthing = createUploadthing({
  secret: process.env.UPLOADTHING_SECRET,
  appId: process.env.UPLOADTHING_APP_ID,
});

const imageUploader = defineUploadthing({
  allowedFileTypes: ["image/jpeg", "image/png", "image/gif"],
  maxFileSize: "4MB",
});

export { uploadthing, imageUploader };
