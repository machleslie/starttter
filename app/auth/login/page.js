import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="">
        <div className="mx-auto">
          <div className="m-auto w-1/2 rounded-lg border-black px-28 py-16">
            <div className="mb-4">
              <h1 className="text-7xl font-bold text-gray-800">Login </h1>
              <p className="mt-4 text-xl text-gray-600">Login to get started</p>
            </div>

            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="username"
                className="mt-4 h-12 rounded-md border-2 border-gray-300 p-2"
                name="username"
              />
              <input
                type="password"
                placeholder="password"
                className="h-12 rounded-md border-2 border-gray-300 p-2"
                name="password"
              />
              <button className="h-12 rounded-md bg-gray-800 text-white">
                Login
              </button>
              <Link href="/auth/forgotpassword">
                <p className="text-center text-slate-500">Forgot password?</p>
              </Link>
              <Link href="/auth/register">
                <p className="text-center text-slate-500">
                  Don&apos;t have an account? Register
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
