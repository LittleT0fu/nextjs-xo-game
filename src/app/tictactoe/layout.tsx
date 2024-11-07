import React from "react";
import Header from "@/components/Header";

export default function layout({ children }: any) {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      {children}
    </div>
  );
}
