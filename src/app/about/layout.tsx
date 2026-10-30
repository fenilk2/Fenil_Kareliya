import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Beyond the Interface | About | Fenil Kareliya",
  description:
    "Discover the mind behind the code — Fenil Kareliya's journey as a first-year BSc IT student exploring programming, cybersecurity, creative development, and ambitious projects.",
};

export default function AboutLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
