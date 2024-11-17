import { ShoppingCart, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Product } from "@/types/product";
type CartItem = Product & { quantity: number };

export const ShopCart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="flex items-center space-x-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-2"
              >
                {totalItems}
              </Badge>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => console.log("removeFromCart", item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Separator className="my-4" />
            <div className="font-bold">Total: ${totalPrice.toFixed(2)}</div>
          </div>
        </SheetContent>
      </Sheet>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  );
};
