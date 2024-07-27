import prisma from "@/db";
import React from "react";
import PlayButton from "./PlayButton";
import { X } from "lucide-react";

const Modal = async () => {
  const data = await prisma.movie.findUnique({
    where: { id: "669e501b80658e5d10580e7b" },
  });

  return (
    <main className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-[8px] overflow-hidden">
        <div
          className={`scale-100 transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              poster={data?.image}
              autoPlay
              muted
              loop
              src={data?.trailer}
              className="w-full brightness-[60%] object-cover h-full"
            />
            <div
              // onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <X className="text-white w-6" />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton />
                {/* <FavoriteButton movieId={data?.id} /> */}
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <div className="flex flex-row items-center gap-2 mb-8">
              <p className="text-green-400 font-semibold text-lg">New</p>
              {/* <p className="text-white text-lg">{data?.duration}</p>
              <p className="text-white text-lg">{data?.genre}</p> */}
            </div>
            <p className="text-white text-lg">{data?.overview}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Modal;
