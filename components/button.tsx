import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  type?: "solid" | "outline";
  link: string;
  children: ReactNode;
};

const Button = ({ type = "solid", link, children }: ButtonProps) => (
  <Link href={link} passHref>
    <a
      href="replaced-by-passhref"
      className={clsx("block text-black font-bold py-5 px-2 rounded-full", {
        "bg-tangie-mint-500": type === "solid",
        "border-tangie-mint-500 border-4": type === "outline",
      })}
    >
      {children}
    </a>
  </Link>
);

export default Button;
