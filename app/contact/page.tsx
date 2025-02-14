import React from "react";
import { Hand, Mail, MapPin, Phone } from "lucide-react";
import whatsappIcon from "@/public/assets/icons8-whatsapp.svg";
import xIcon from "@/public/assets/icons8-x.svg";
import Image from "next/image";
import ContactForm from "@/Components/ContactForm";
import Link from "next/link";

function ContactPage() {
  return (
    <main className="mt-12 md:mt-10 flex flex-col-reverse md:block">
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
            <a href="mailto:clementojigs@hotmail.com">clementojigs@hotmail.com</a>
          </li>
          <li className="flex items-center space-x-2">
            <Phone />
            <a href="tel:+2348063824618">+234-80-6382-4618</a>
          </li>
          <li className="flex items-center space-x-2">
            <MapPin />
            <div>Nigeria, Africa.</div>
          </li>
        </ul>

        <ul className="space-x-4 flex items-center">
          <li className="">
            <Link href="https://wa.me/2348063824618" target="_blank">
              <Image src={whatsappIcon} alt={"whatsapp"} />
            </Link>
          </li>
          <li className="">
            <Link href="https://x.com/talk2clemzy?s=21&t=s9kG0KcIHmU1_eOP4aWRMQ" target="_blank">
            <Image src={xIcon} alt={"x-app"} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-[80vh] md:h-[80vh] flex flex-col justify-center md:max-w-4xl md:mx-auto">
        <h2 className="text-2xl font-extrabold my-4 md:my-8 ">Contact Me</h2>
        <div className="h-[500px] md:h-[600px] w-full">
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
              <div className="grid md:grid-cols-2 h-full w-full p-2 sm:p-4 md:p-10">
                <div className="md:flex-col md:flex md:justify-center md:space-y-12 py-6 hidden">
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
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
