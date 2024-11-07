import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex shadow-frame h-16">
      <Link href="/">Home</Link>
    </div>
  );
}
