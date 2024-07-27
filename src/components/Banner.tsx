import prisma from "@/db";
import { Info, Play } from "lucide-react";
import PlayButton from "./PlayButton";

const Hero = async () => {
  const data = await prisma.movie.findUnique({
    where: { id: "669e501b80658e5d10580e7b" },
  });

  return (
    <main className="flex flex-col space-y-2 py-4 md:space-y-4 h-[50vh] justify-end ml-4">
      <div className="absolute top-0 left-0 -z-10 w-screen h-[60vh]">
        <video
          poster={data?.image}
          src={data?.trailer}
          autoPlay
          loop
          muted
          className="w-full object-cover h-full brightness-95 object-center"
        ></video>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold">{data?.title}</h1>
      <p className="max-w-xs text-xs md:max-w-lg text-shadow-xl">
        {data?.overview}
      </p>

      <div className="flex space-x-4 ml-8 pt-1">
        <PlayButton />
        <button className="bannerButton bg-black bg-opacity-30 ">
          <Info className="h-4" />
          <p>More</p>
        </button>
      </div>
    </main>
  );
};
export default Hero;
