"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client"; // Import the Supabase client

function ResetPasswordContent() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const code = searchParams.get("code");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!code) {
      setErrorMessage("Reset code is missing.");
      return;
    }

    console.log("RESSET-CODE: " ,  code);
    const { error } = await supabase.auth.updateUser({
      // access_token: code,
      password,
    });

    if (error) {
      if (error.message.includes("flow state has expired")) {
        setErrorMessage("Reset link has expired. Please request a new one.");
        router.push("/forgot-password");
      } else {
        setErrorMessage(error.message);
      }
    } else {
      setSuccessMessage("Your password has been reset successfully.");
      router.push("/login");
    }
  };

  return (
    <div className="warp flex justify-center mt-2 sm:mt-24">
      <div className="page-title relative flex-block px-4">
        <h1 className="text-4xl text-white font-bold tracking-tight text-gray-700 m:text-7xl py-4 sm:py-6">
          Password Reset
        </h1>

        <div
          data-orientation="horizontal"
          aria-labelledby="radix-:r0:-trigger-password"
          id="radix-:r0:-content-password"
          tabIndex={0}
          className="relative ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <p className="text-sm text-muted-foreground">
                Reset your password here. After saving, you will be able to log in with your new password.
              </p>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-1">
                  <label
                    className="text-sm font-medium leading-none focus:ring-indigo-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="new-password"
                  >
                    New Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="new-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New Password"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="text-sm font-medium leading-none focus:ring-indigo-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="confirm-password"
                  >
                    Confirm New Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                  />
                </div>

                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                {successMessage && <p className="text-green-600">{successMessage}</p>}

                <div className="flex items-center py-6 sm:p-6 pt-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
