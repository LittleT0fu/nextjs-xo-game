import Image from "next/image";
import Board from "@/containers/Board";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container-middle h-dvh">
      <Link href="/tictactoe">TicTacToe</Link>
    </div>
  );
}
