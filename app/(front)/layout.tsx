import { MobileDock } from "@/components/front/dock-comp";
import { Header } from "@/components/front/header";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function FrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div className="px-3">
      <MobileDock />
      <Header session={session} />
      {children}
    </div>
  );
}
