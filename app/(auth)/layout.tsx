import Image from "next/image";
import BackgroundImage from "@/public/login_background.jpg";
import Logo from "@/public/netflix_logo.svg";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent ">
        <Image
          height={120}
          width={120}
          src={Logo}
          alt="Logo"
          className="absolute top-4 left-4 object-containmd:left-10 md:top-10 "
          priority
        />
        <Image
          src={BackgroundImage}
          alt="background"
          className="hidden sm:flex sm:object-cover -z-10 brightness-50"
          priority
          fill
        />
        {children}
      </div>
    </div>
  );
}
