import { v2 as cloudinary } from "cloudinary";

export async function uploadProjectImage(file: Express.Multer.File) {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "portfolio",
      use_filename: true,
      unique_filename: false,
    });

    return result.secure_url;
  } catch (error: any) {
    throw new Error("Error uploading image: " + error.message);
  }
}
