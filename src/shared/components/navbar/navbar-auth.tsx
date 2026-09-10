"use client";

import { useCallback, useState } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { Button } from "../button";
import { Dialog } from "../dialog";
import { Input } from "../input";

export function NavbarAuth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignUp = useCallback(() => setIsSignUp((prev) => !prev), []);

  return (
    <Dialog
      title={isSignUp ? "Create an Account" : "Sign In to DriveEz"}
      trigger={
        <button
          className="group flex min-h-11 min-w-11 items-center justify-center text-foreground transition hover:text-primary dark:text-white"
          type="button"
        >
          <HiMiniUser className="h-5 w-5 group-hover:text-primary sm:h-6 sm:w-6" />
        </button>
      }
    >
      <Dialog.Body className="space-y-4">
        {isSignUp ? (
          <Input
            id="name"
            label="Full Name"
            placeholder="Enter your name"
            type="text"
          />
        ) : null}
        <Input
          id="email"
          label="Email Address"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          id="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Button className="mt-2 w-full justify-center" variant="primary">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
      </Dialog.Body>
      <Dialog.Footer className="justify-center px-6 pb-6 text-center text-muted text-sm">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          className="ml-1 font-semibold text-primary hover:underline"
          onClick={toggleSignUp}
          type="button"
        >
          {isSignUp ? "Sign in" : "Sign up"}
        </button>
      </Dialog.Footer>
    </Dialog>
  );
}
