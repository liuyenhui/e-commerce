"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/product";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products: Product[] = [
    {
      id: 1,
      name: "BAKER THEOTIS BRAND",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 2,
      name: "PRIMITIVE X RICK MORTY",
      price: 64.99,
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 3,
      name: "PRIMITIVE CALLOWAY LEAF",
      price: 69.99,
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 4,
      name: "ELEMENT X TIMBER BARK",
      price: 54.99,
      image: "/placeholder.svg?height=300&width=250",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider">
            HOT TRENDS AND BEST SELLERS
          </p>
          <h1 className="text-4xl font-bold tracking-tight">BERES ANTIHERO.</h1>
          <p className="text-muted-foreground">
            Experience premium skateboarding with our signature collection.
          </p>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
          <Button>DISCOVER MORE</Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=200"
            alt="Skull Skateboard"
            width={200}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
