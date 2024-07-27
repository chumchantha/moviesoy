import prisma from "@/db";
import { Props, ScriptProps } from "next/script";

const StandCard = async ({ label }: { label: string }) => {
  const movies = await prisma.movie.findMany();
  return (
    <main className="my-2 space-y-2">
      <h1>{label}</h1>

      <div className="flex flex-nowrap gap-2 overflow-hidden overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="
            rounded-[6px]
            shadow-md
            min-w-[240px]
            bg-black
            overflow-hidden
            text-center
          "
          >
            <img
              src={movie.poster}
              alt="backdrop"
              className="
              w-full
              h-[360px] 
              object-cover
            "
            />

            <h2 className="py-2">{movie.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default StandCard;
