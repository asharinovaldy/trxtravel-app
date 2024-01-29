import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const links = [
  {
    id: 0,
    name: "Home",
    url: "/",
  },
  {
    id: 1,
    name: "Stays",
    url: "/stays",
  },
  {
    id: 2,
    name: "Flights",
    url: "/flights",
  },
  {
    id: 3,
    name: "Packages",
    url: "/packages",
  },
];

export default function Navbar() {
  const route = useRouter();
  const path = route.pathname;

  return (
    <div className="container mx-auto px-[47px] py-[24px]">
      <div className="flex justify-between">
        <Link href="/" className="text-white">
          <h1 className="text-2xl font-bold">trxvl.</h1>
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link href={link?.url} key={link?.id} className="text-white">
              <h1
                className={`text-base ${
                  path === link.url ? "underline underline-offset-8" : "none"
                }`}
              >
                {link?.name}
              </h1>
            </Link>
          ))}

          <Link href="/" className="text-white">
            <h1 className="text-base font-bold">Sign Up</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
