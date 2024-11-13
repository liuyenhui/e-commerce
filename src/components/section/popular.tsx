import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import type { Product } from "@/types/product";

import { useState } from "react";

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
export const Popular = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const addToCart = (product: Product) => {
    // setCart(prevCart => {
    //   const existingItem = prevCart.find(item => item.id === product.id);
    //   if (existingItem) {
    //     return prevCart.map(item =>
    //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    //     );
    //   }
    //   return [...prevCart, { ...product, quantity: 1 }];
    // });
    // toast({
    //   title: "Added to cart",
    //   description: `${product.name} has been added to your cart.`,
    // })
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          POPULAR IN STORE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <div className="relative aspect-[1/1] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-primary font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => addToCart(product)} className="w-full">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
