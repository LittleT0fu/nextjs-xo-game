import Image from "next/image";
import Board from "@/containers/Board";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container-middle h-dvh bg-chalk">
      <div className="border p-4 rounded-lg shadow-frame h-fit w-[240px]">
        <p>TicTacToe</p>
        <div className="flex flex-col text-center gap-4 mt-2">
          <Link
            href={{
              pathname: "/tictactoe",
              query: {
                gameMode: "pvp",
                boardSize: 3,
              },
            }}
            className="btn1"
          >
            3x3
          </Link>
          <Link
            href={{
              pathname: "/tictactoe",
              query: {
                gameMode: "pvp",
                boardSize: 4,
              },
            }}
            className="btn1"
          >
            4x4
          </Link>
          <Link href="/tictactoe" className="btn1">
            3x3 AI
          </Link>
        </div>
      </div>
    </div>
  );
}
