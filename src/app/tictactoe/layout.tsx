import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function layout({ children }: any) {
  return (
    <div className="h-dvh flex flex-col  bg-chalk">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
