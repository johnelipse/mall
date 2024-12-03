import { Header } from "@/components/front/header";
import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white px-3">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">{children}</div>
    </div>
  );
}
