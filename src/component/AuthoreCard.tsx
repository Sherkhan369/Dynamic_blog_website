import React from "react";
import Image from "next/image";
function AuthoreCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12 ">
      <div className="flex items-center animation-fadeIn">
        <Image
          src={"/image/sherkhan.png"}
          alt=""
          width={64}
          height={64}
          className=" w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
        />

        <div>
          <h3 className="text-xl font-bold">Sher Khan</h3>
          <p className="text-slate-500">Full Stack Web Developer</p>
        </div>
      </div>
      <p className="mt-4 leading-relaxed">
        Sherkhan is an experience full stack developer with a passion for web
        development and sharing knowledge through articals{" "}
      </p>
      <div className="mt-4 flex  gap-3">
        <a
          href=""
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>
        <a
          href=""
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href=""
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Facebook
        </a>
        <a
          href=""
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Github
        </a>
      </div>
    </div>
  );
}
export default AuthoreCard;
