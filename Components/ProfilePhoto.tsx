import Image from "next/image";

function ProfilePhoto() {
  return (
    <div className="h-36 w-36 md:h-40 md:w-40 rounded-full relative overflow-hidden bg-neutral-300 border-[10px]">
      <Image
        src={"/assets/profile_pic.png"}
        alt="chat app"
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={"transform scale-x-[-1] object-cover object-center"}
      />
    </div>
  );
}

export default ProfilePhoto;
