import { NextResponse } from "next/server";
import multer from "multer";
import cloudinary from "cloudinary";
import { IncomingMessage } from "http";

// Initialize Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ dest: "uploads/" });

export async function POST(req: IncomingMessage) {
  return new Promise((resolve, reject) => {
    upload.single("image")(req, {} as any, async (err) => {
      if (err) {
        reject(err);
      }

      const file = (req as any).file;

      // Upload image to Cloudinary
      cloudinary.v2.uploader.upload(file.path, async (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(
            NextResponse.json({
              imageUrl: result?.secure_url,
            })
          );
        }
      });
    });
  });
}
