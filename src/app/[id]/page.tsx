import prisma from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const MovieId = async ({ params }: { params: { id: string } }) => {
  const movie = await prisma.movie.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!movie) {
    notFound();
  }
  const movies = await prisma.movie.findMany();

  const movies = movies;

  return (
    <main className="h-screen w-full space-y-4 flex flex-col lg:flex-row">
      <div className="h-screen w-full">
        <video
          autoPlay
          loop
          poster={movie?.image}
          src={movie?.trailer}
          controls
          muted
          className="lg:max-w-[70vw] h-full object-center object-cover lg:object-contain"
        ></video>
      </div>
      <div className="space-y-3 mx-8 ">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-xs">{movie.overview}</p>
        <div>
          <div className="grid grid-cols-4 gap-4 items-center">
            {Array.from({ length: 16 }, (_, index) => index + 1).map(
              (number) => (
                <Link href={`/${movies.id}`} key={movie.id}>
                  <p className="p-4 min-w-[40px] text-white bg-gray-800 text-center font-semibold rounded-[8px] shadow-md hover:bg-black">
                    {number}
                  </p>
                </Link>
              )
            )}

            {/* {movie.episodes.map((episode) => (
            <Link href={`/episode/${episode.id}`}>
              <a className="p-4 text-white hover:text-gray-800">
                {episode.title}
              </a>
            </Link>
          ))} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieId;
