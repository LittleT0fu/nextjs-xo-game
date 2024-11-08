import Image from "next/image";
import Link from "next/link";
import HistoryBoard from "@/components/HistoryBoard";
import Footer from "@/components/Footer";
import { title } from "process";

const gameModeBTN = [
  { patchname: "/tictactoe", gameMode: "pvp", boardSize: 3, title: "3x3" },
  { patchname: "/tictactoe", gameMode: "pvp", boardSize: 4, title: "4x4" },
];

export default function Home() {
  return (
    <div className="container-middle h-dvh bg-chalk gap-10">
      <p className="text-6xl">TicTacToe</p>
      <div className="relative">
        <div className=" relative border p-4 rounded-lg shadow-frame h-[320px] w-[240px] bg-white">
          <p className="text-center">Game Mode</p>
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
        <div className="md:absolute top-0 left-full border p-4 rounded-lg shadow-frame w-[240px] h-full md:ml-4 md:mt-0 mt-4 bg-white">
          <p>This is History board</p>
          <HistoryBoard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
