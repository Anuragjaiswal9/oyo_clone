"use client";
import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border rounded-lg border-gray-200 p-6 ">
      <div className="flex items-center">
        <Image
          src={"/fire.svg"}
          alt="fire"
          width={200}
          height={200}
          className="w-16 h-16 rounded-full mr-5"
        />
        <div>
          <p className="font-bold text-xl">Get access to exclusive deals</p>
          <p className="font-normal text-lg text-gray-500">
            Only the best deals reach your inbox
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <input type="email" className="px-6 py-3 mr-5 outline-none border borer-gray-300  w-80 h-12 rounded-lg" placeholder="e.g. john@gmail.com"/>
        <button type="submit" className="w-32 rounded-lg h-12 bg-customred text-lg text-white cursor-pointer  ">Notify</button>

      </div>
    </div>
  );
};

export default Header4;
