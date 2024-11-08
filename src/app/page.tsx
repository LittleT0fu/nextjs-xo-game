import Image from "next/image";
import Board from "@/containers/Board";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container-middle h-dvh bg-chalk">
      <Link href="/tictactoe" className="btn1">
        TicTacToe
      </Link>
    </div>
  );
}
