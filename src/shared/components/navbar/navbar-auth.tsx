"use client";

import { Modal } from "@heroui/react";
import { useCallback, useState } from "react";
import { HiMiniUser, HiOutlineXMark } from "react-icons/hi2";
import { Button } from "../button";
import { Input } from "../input";

export function NavbarAuth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignUp = useCallback(() => setIsSignUp((prev) => !prev), []);

  return (
    <Modal>
      <Modal.Trigger>
        <button
          className="group flex min-h-11 min-w-11 items-center justify-center text-foreground transition hover:text-primary dark:text-white"
          type="button"
        >
          <HiMiniUser className="h-5 w-5 group-hover:text-primary sm:h-6 sm:w-6" />
        </button>
      </Modal.Trigger>
      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="relative mx-auto my-auto w-[90vw] max-w-md rounded-2xl border border-border bg-surface/40 shadow-2xl backdrop-blur-2xl">
            <Modal.Header className="flex items-center justify-between border-border border-b px-6 pt-6 pb-4">
              <h3 className="font-bold text-foreground text-xl">
                {isSignUp ? "Create an Account" : "Sign In to DriveEz"}
              </h3>
              <Modal.CloseTrigger className="rounded-full p-1 text-muted transition hover:bg-surface-alt hover:text-foreground">
                <HiOutlineXMark size={24} />
              </Modal.CloseTrigger>
            </Modal.Header>
            <Modal.Body className="space-y-4">
              {isSignUp ? (
                <Input
                  id="name"
                  inputClassName="bg-surface-alt py-2.5"
                  label="Full Name"
                  placeholder="Enter your name"
                  type="text"
                />
              ) : null}
              <Input
                id="email"
                inputClassName="bg-surface-alt py-2.5"
                label="Email Address"
                placeholder="Enter your email"
                type="email"
              />
              <Input
                id="password"
                inputClassName="bg-surface-alt py-2.5"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <Button className="mt-2 w-full justify-center" variant="primary">
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </Modal.Body>
            <Modal.Footer className="justify-center px-6 pb-6 text-center text-muted text-sm">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                className="ml-1 font-semibold text-primary hover:underline"
                onClick={toggleSignUp}
                type="button"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
