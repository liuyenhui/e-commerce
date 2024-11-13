'use client'
import Link from "next/link";
import { useState } from "react";

import { ShoppingCart, User, Menu, X, LogIn } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"


import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
type User = {
  id: string;
  name: string;
  email: string;
};
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number };
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast()


  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast({
      title: "Removed from cart",
      description: "The item has been removed from your cart.",
      variant: "destructive",
    });
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const password = formData.get("password") as string;

    // Here you would typically make an API call to register the user
    // For this example, we'll just simulate a successful registration
    setUser({ id: "1", name, email });
    toast({
      title: "Registration successful",
      description: "You have successfully registered and logged in.",
    });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const password = formData.get("password") as string;

    // Here you would typically make an API call to authenticate the user
    // For this example, we'll just simulate a successful login
    setUser({ id: "1", name: "John Doe", email });
    toast({
      title: "Login successful",
      description: "You have successfully logged in.",
    });
  };

  const handleGoogleLogin = async () => {
    // Here you would typically initiate the Google OAuth flow
    // For this example, we'll just simulate a successful Google login
    setUser({ id: "2", name: "Google User", email: "google@example.com" });
    toast({
      title: "Google login successful",
      description: "You have successfully logged in with Google.",
    });
  };

  const handleLogout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <header className="border-b sticky top-0 z-40 bg-background">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          FCI STORE
        </Link>
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
                      onClick={() => removeFromCart(item.id)}
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
          {user ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>User Profile</DialogTitle>
                  <DialogDescription>
                    Logged in as {user.name} ({user.email})
                  </DialogDescription>
                </DialogHeader>
                <Button onClick={handleLogout}>Log out</Button>
              </DialogContent>
            </Dialog>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <LogIn className="h-5 w-5" />
                  <span className="sr-only">Log in</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log in or Register</DialogTitle>
                </DialogHeader>
                <Separator />
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit">Log in</Button>
                </form>
                <Separator />
                <Button onClick={handleGoogleLogin} variant="outline">
                  Log in with Google
                </Button>
                <Separator />
                <DialogTitle>Register</DialogTitle>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-name">Name</Label>
                    <Input id="register-name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit">Register</Button>
                </form>
              </DialogContent>
            </Dialog>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
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
    </header>
  );
};
