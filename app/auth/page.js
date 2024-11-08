import Link from "next/link";

export default function page() {
  return (
    <div className="mx-10">
      <Link href={"/auth/login"}>
        <div className="login mt-10 w-96 rounded border-2 border-black p-5">
          <h1 className="text-xl font-bold">Login form</h1>
          <p className="">
            This page contains a login form
          </p>
        </div>
      </Link>

      <Link href={"/auth/register"}>
        <div className="login mt-10 w-96 rounded border-2 border-black p-5">
          <h1 className="text-xl font-bold">Create user form</h1>
          <p className="">
            This page contains a create user form 
          </p>
        </div>
      </Link>
      <Link href={"/auth/forgotpassword"}>
        <div className="login mt-10 w-96 rounded border-2 border-black p-5">
          <h1 className="text-xl font-bold">Reset password form</h1>
          <p className="">
            This page contains a reset password form
          </p>
        </div>
      </Link>
    </div>
  );
}
