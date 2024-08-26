import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import { redirect } from "next/navigation";
import GoogleIcon from "../../../public/google.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import Link from "next/link";
import Image from "next/image";
export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return (
    <>
      <div className="mt-24 rounded bg-black/80  py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
        <form method="post" action="/api/auth/signin">
          <h1 className="text-3xl font-semibold text-white">Sign up</h1>
          <div className="space-y-4 mt-5 ">
            <Input
              type="emial"
              name="email"
              placeholder="Email"
              className="bg-[#333] placeholder:tect-xs placeholder:text-gray-400 w-full inline-block "
            />
            <Button variant={"destructive"} className="w-full bg-[#e50914] ">
              {" "}
              Sign up
            </Button>
          </div>
        </form>
        <div className=" text-gray-500 text-sm mt-2">
          Already have a account?{" "}
          <Link className="text-white hover:underline" href="/sign-in">
            {" "}
            Sign in
          </Link>
        </div>
        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <Button variant="outline" size="icon">
            <GithubIcon className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Image src={GoogleIcon} alt="Google" className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </>
  );
}
