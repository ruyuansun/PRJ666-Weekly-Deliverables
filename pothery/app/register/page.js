export default function Register() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-medium m-3">Create an Account</h1>

      <p className="font-medium mb-10">
        Already have an account?{" "}
        <a className="underline" href="/login">
          Sign in
        </a>
      </p>

      <form className="flex flex-col w-96 mx-auto space-y-4" method="post">
        <input
          className="border rounded-md py-2 px-3 w-96"
          type="email"
          id="email"
          name="email"
          placeholder="email"
        />

        <input
          className="border rounded-md py-2 px-3 w-96"
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />

        <input
          className="border rounded-md py-2 px-3 w-96"
          type="password"
          id="password"
          name="password"
          placeholder="confirm password"
        />

        <button
          className="bg-black text-white border rounded-md py-2 px-4"
          type="submit"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
