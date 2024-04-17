"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href={"/"} className="sidebar-logo lg:ml-6">
          <Image
            src={"/logo.png"}
            alt="side-bar-logo"
            height={28}
            width={180}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul>
              {navLinks.slice(0,6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-200'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-200'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-black bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
            <h1 className="text-sm text-slate-500">"Unlock the full creative potential of your images with Artificial Intelligence. Easily edit your photos in seconds. Experiment with unique and stunning effects. Create digital art quickly and effortlessly!" <span className="text-slate-800">Enjoy ImagicAI</span>.</h1>
           
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
