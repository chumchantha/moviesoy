import prisma from "@/db";
import Link from "next/link";

const Lists = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="my-2 space-y-2">
      <h1>Recently Added</h1>

      <div className="flex items-center scrollbar-hide space-x-2 overflow-hidden  overflow-x-scroll">
        {movies.map((movie) => (
          <Link
            href={`/${movie.id}`}
            key={movie.id}
            className="
            rounded-[6px]
            shadow-md
            min-w-[200px]   md:min-w-[280px]
            bg-black
            overflow-hidden
            text-center
            cursor-pointer
          "
          >
            <img
              src={movie.image}
              alt="backdrop"
              className="
              w-full
              h-[110px] md:h-[160px]
              object-cover
            "
            />

            <h2 className="py-2">{movie.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Lists;
