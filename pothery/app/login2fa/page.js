"use client";

import { Label } from "@/components/ui/label";
import IconLock from "./_components/IconLock";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login2fa() {
  const [code, setCode] = useState("");

  function codeChangeHandle(e) {
    setCode(e.target.value);
  }

  function submitCodehandle(e) {
    // Submit code to the backend via post request
    // Require path to backend
  }

  return (
    <div className="w-4/12 m-auto">
      <h1 className="flex text-zinc-700 text-4xl justify-center items-center mb-10">
        {" "}
        <IconLock /> 2 Factor Authentication
      </h1>
      <p className="text-center mb-5">
        Enter the 6 digit code on your authenticator app associated with this
        account.
      </p>
      <Label htmlFor="code">Code: </Label>
      <Input
        type="text"
        id="code"
        placeholder="(6 digit code)"
        value={code}
        onChange={codeChangeHandle}
      />
      <Button className="mt-10 w-full" onClick={submitCodehandle}>
        Confirm
      </Button>
    </div>
  );
}
