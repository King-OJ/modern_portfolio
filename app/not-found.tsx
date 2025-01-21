import Image from "next/image";
import Link from "next/link";
import errorImg from "../public/assets/undraw_page-not-found_6wni.svg";

export default function NotFound() {
  return (
    <main className="mt-12 md:mt-10 h-[70vh]">
      <div className="grid place-content-center h-full space-y-4 text-center">
        <Image
          src={errorImg}
          alt="not found"
          className="h-72  w-72 md:h-96 md:w-96"
        />
        <h2 className="text-2xl font-extrabold">Page Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="btn bg-primary">
          Return Home
        </Link>
      </div>
    </main>
  );
}
