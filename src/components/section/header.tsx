import Link from "next/link";
import { getHeader } from "@/sanity/query/section";
import { MenuHome } from "./page-components/menu-navigation";
import Image from "next/image";

export const Header = async () => {
  const header = await getHeader();
  // console.log("header", header);

  return (
    <header
      className="fixed top-0 z-40 hidden md:flex w-full"
      style={{
        backgroundColor: `rgba(${header?.backgroundColor?.r}, ${header?.backgroundColor?.g}, ${header?.backgroundColor?.b}, ${header?.backgroundColor?.a})`,
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-2">
          {header?.logo && (
            <Image
              src={header?.logo}
              alt={header?.title || ""}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div className="flex flex-col gap-0">
            <Link href="/" className="text-xl font-bold p-0 m-0 text-black">
              {header?.title}
            </Link>
            <span className="text-sm text-gray-500 float-end">
              {header?.subTitle}
            </span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium">
            HOME
          </Link>
          <Link href="/category" className="text-sm font-medium">
            CATEGORY
          </Link>
          <Link href="/photos" className="text-sm font-medium">
            PHOTO SOCIAL
          </Link>
          <Link href="/shop" className="text-sm font-medium">
            SHOP
          </Link>
          <Link href="/blog" className="text-sm font-medium">
            BLOG
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            CONTACT US
          </Link>
        </nav>
        <MenuHome />
      </div>
      {/* Mobile Menu */}
    </header>
  );
};
