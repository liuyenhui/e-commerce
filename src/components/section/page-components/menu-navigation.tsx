"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export const MenuHome = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button className="md:hidden" onClick={() => setOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md">
          <nav className="flex flex-col p-4">
            <Link href="/" className="py-2">
              HOME
            </Link>
            <Link href="/category" className="py-2">
              CATEGORY
            </Link>
            <Link href="/photos" className="py-2">
              PHOTO SOCIAL
            </Link>
            <Link href="/shop" className="py-2">
              SHOP
            </Link>
            <Link href="/blog" className="py-2">
              BLOG
            </Link>
            <Link href="/contact" className="py-2">
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
