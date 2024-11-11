import Image from "next/image";
import Link from "next/link";
import HistoryBoard from "@/components/HistoryBoard";
import Footer from "@/components/Footer";
import { title } from "process";

const gameModeBTN = [
  { patchname: "/tictactoe", gameMode: "pvp", boardSize: 3, title: "3x3" },
  { patchname: "/tictactoe", gameMode: "pvp", boardSize: 4, title: "4x4" },
  { patchname: "/tictactoe", gameMode: "ai", boardSize: 3, title: "3x3 AI" },
];
const about = "this project use nextJS tailwindcss typescript to create";

export default function Home() {
  return (
    <div className="container-middle min-h-dvh bg-chalk gap-10">
      <p className="text-6xl md:mt-0 mt-10 font-bold">TicTacToe</p>
      <div className="relative">
        <div className="border p-4 rounded-lg shadow-frame h-[320px] w-[240px] bg-white">
          <p className="border-b-2">Game Mode</p>
          <div className="flex flex-col text-center gap-4 mt-2">
            {gameModeBTN.map((btn) => (
              <>
                <Link
                  href={{
                    pathname: btn.patchname,
                    query: {
                      gameMode: btn.gameMode,
                      boardSize: btn.boardSize,
                    },
                  }}
                  className="btn1"
                >
                  {btn.title}
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="md:absolute top-0 left-full border p-4 rounded-lg shadow-frame w-[280px] h-[320px] md:ml-4 md:mt-0 mt-4 bg-white">
          <p className="border-b-2">History board</p>
          <HistoryBoard />
        </div>
        <div className="md:absolute top-0 right-full border p-4 rounded-lg shadow-frame w-[240px] h-[320px] md:mr-4 md:mt-0 mt-4 bg-white">
          <p className="border-b-2">About</p>
          <p>{about}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
