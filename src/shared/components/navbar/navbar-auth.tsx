"use client";

import { Modal } from "@heroui/react";
import { useCallback, useState } from "react";
import { HiMiniUser, HiOutlineXMark } from "react-icons/hi2";
import { Button } from "../button";

export function NavbarAuth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignUp = useCallback(() => setIsSignUp((prev) => !prev), []);

  return (
    <Modal>
      <Modal.Trigger>
        <button
          className="flex min-h-11 min-w-11 items-center justify-center text-foreground transition hover:text-primary"
          type="button"
        >
          <HiMiniUser className="h-5 w-5 sm:h-6 sm:w-6" />
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
                <div className="space-y-1.5">
                  <label
                    className="font-medium text-muted text-sm"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full appearance-none rounded border border-border bg-surface-alt px-4 py-2.5 text-foreground text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
              ) : null}
              <div className="space-y-1.5">
                <label
                  className="font-medium text-muted text-sm"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full appearance-none rounded border border-border bg-surface-alt px-4 py-2.5 text-foreground text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  className="font-medium text-muted text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full appearance-none rounded border border-border bg-surface-alt px-4 py-2.5 text-foreground text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
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
