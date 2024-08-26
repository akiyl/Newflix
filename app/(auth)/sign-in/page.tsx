import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import GithubSigninButton from "@/app/components/GithubSigninButton";
import GoogleSigninButton from "@/app/components/GoogleSigninButton";
export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return (
    <div className="mt-24 rounded bg-black/80  py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Sign in</h1>
        <div className="space-y-4 mt-5 ">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:tect-xs placeholder:text-gray-400 w-full inline-block "
          />
          <Button variant={"destructive"} className="w-full bg-[#e50914] ">
            {" "}
            Sign in
          </Button>
        </div>
      </form>
      <div className=" text-gray-500 text-sm mt-2">
        dont have an account?{" "}
        <Link className="text-white hover:underline" href="/sign-up">
          Create an Account
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSigninButton />
        <GoogleSigninButton />
      </div>
    </div>
  );
}
