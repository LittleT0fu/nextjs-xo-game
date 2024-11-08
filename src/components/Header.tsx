import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex p-4">
      <Link href="/" className="btn1">
        Back to menu
      </Link>
    </div>
  );
}
