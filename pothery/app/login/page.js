export default function Login() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-medium mb-3">Sign In</h1>

      <p className="font-medium">
        Dont have an account?{" "}
        <a className="underline" href="/register">
          Sign up
        </a>
      </p>

      <p className="mb-10 font-medium">
        Forgot password?{" "}
        <a className="underline" href="/resetPassword">
          Reset password
        </a>
      </p>

      <form className="flex flex-col w-96 mx-auto space-y-4" method="post">
        <input
          className="border rounded-md py-2 px-3 w-96"
          type="text"
          id="username"
          name="username"
          placeholder="username/email"
        />

        <input
          className="border rounded-md py-2 px-3 w-96"
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />

        <button
          className="bg-black text-white border rounded-md py-2 px-4"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
