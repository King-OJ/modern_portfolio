import { Hand, Handshake, Mail, MapPin, Phone } from "lucide-react";
import whatsappIcon from "@/public/assets/icons8-whatsapp.svg";
import xIcon from "@/public/assets/icons8-x.svg";
import Image from "next/image";
import FloatingLabel from "@/Components/FloatingLabel";

function ContactPage() {
  return (
    <main className="mt-10 md:mt-12 flex flex-col-reverse md:block">
      <div className="space-y-6 md:hidden mt-8 md:mt-0">
        <h6 className="text-lg md:text-2xl font-bold flex items-center">
          Get in touch with me!{" "}
          <span className="ml-2 ">
            <Hand />
          </span>
        </h6>
        <ul className="space-y-8 text-sm md:text-base">
          <li className="flex items-center space-x-2">
            <Mail />
            <a href="">dummy@gmsil.com</a>
          </li>
          <li className="flex items-center space-x-2">
            <Phone />
            <a href="">+234-80-6382-4618</a>
          </li>
          <li className="flex items-center space-x-2">
            <MapPin />
            <a href="">Nigeria, Africa.</a>
          </li>
        </ul>

        <ul className="space-x-4 flex items-center">
          <li className="">
            <Image src={whatsappIcon} alt={"whatsapp"} />
          </li>
          <li className="">
            <Image src={xIcon} alt={"x-app"} />
          </li>
        </ul>
      </div>
      <div className="w-full h-[80vh] flex flex-col justify-center">
        <h2 className="text-2xl font-extrabold my-4 md:my-8 ">Contact Me</h2>
        <div className="h-[500px] lg:h-[600px] w-full">
          <div className="relative w-full h-full">
            <div
              className={`absolute h-full w-full 
                   bg-gradient-to-tr ml-[2px] -rotate-[0.2deg]
               from-80%
               from-transparent to-primary rounded-xl -mt-[1px]`}
            ></div>
            <div
              className={`absolute h-full w-full 
                   bg-gradient-to-bl mt-[1px] -ml-[2px] -rotate-[0.2deg]
               from-80%
               from-transparent to-primary rounded-xl`}
            ></div>
            <div
              className={`absolute h-full w-full
               border space-y-1 flex flex-col justify-center items-center bg-muted/95 rounded-xl`}
            >
              <div className="grid md:grid-cols-2 h-full w-full p-4 md:p-10">
                <div className="flex-col md:flex justify-between py-6 hidden">
                  <h6 className="text-2xl font-bold flex items-center">
                    Get in touch with me!{" "}
                    <span className="ml-2 ">
                      <Hand />
                    </span>
                  </h6>
                  <ul className="space-y-8">
                    <li className="flex items-center space-x-2">
                      <Mail />
                      <a href="">dummy@gmsil.com</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Phone />
                      <a href="">+234-80-6382-4618</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin />
                      <a href="">Nigeria, Africa.</a>
                    </li>
                  </ul>

                  <ul className="space-x-4 flex items-center">
                    <li className="">
                      <Image src={whatsappIcon} alt={"whatsapp"} />
                    </li>
                    <li className="">
                      <Image src={xIcon} alt={"x-app"} />
                    </li>
                  </ul>
                </div>
                <form
                  action=""
                  className="text-black h-full bg-background rounded-xl p-6 flex items-center"
                >
                  <div className="space-y-8 w-full">
                    <FloatingLabel type="text" label="your name" name="name" />
                    <FloatingLabel
                      type="email"
                      label="your email"
                      name="email"
                    />
                    <div className="relative">
                      <label
                        htmlFor="floating_outlined"
                        className="text-sm pb-2.5 text-accent-foreground block"
                      >
                        Your message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="outline-none text-foreground border-2 p-2 h-24 md:h-32 border-accent-foreground rounded-xl bg-transparent w-full"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-bold"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
