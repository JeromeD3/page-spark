"use server";

import { signIn } from "@/server/auth";

export const loginWithGithub = async () => {
  await signIn("github", {
    redirectTo: "/",
  });
};

export const loginWithGoogle = async () => {
  await signIn("google", {
    redirectTo: "/",
  });
};
