import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import { NavBar } from "../components/NavBar";
export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/sign-in");
  }
  return (
    <>
      <NavBar />
      <main className="w-full  mx-auto  sm:px-6 lg:px-8">{children}</main>
    </>
  );
}
