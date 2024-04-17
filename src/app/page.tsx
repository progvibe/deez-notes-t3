import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Note } from "./_components/note";

export default async function Home() {
  const notes = [1, 2, 3, 4, 5];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2a82dd] to-[#15162c] text-white">
      <div className="wrap flex-wrap">
        {notes.map((note) => (
          <div key={note} className="w-1/2 p-4">
            <h3>Note title</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
