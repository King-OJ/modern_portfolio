import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

interface CustomFile extends File {
  path: string;
}

export const uploadImages = async (files: CustomFile[]) => {
  const uploadedUrls: string[] = [];

  for (const file of files) {
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto", // automatically detect file type (image/video)
    });
    uploadedUrls.push(result.secure_url);
  }

  return uploadedUrls;
};
