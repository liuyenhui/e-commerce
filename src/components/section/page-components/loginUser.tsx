import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
export const Login = () => {
  return (
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
            Logged in as {"user.name"} ({"user.email"})
          </DialogDescription>
        </DialogHeader>
        <Button onClick={() => "handleLogout"}>Log out</Button>
      </DialogContent>
    </Dialog>
    //       ) : (
    //         <Dialog>
    //           <DialogTrigger asChild>
    //             <Button variant="ghost" size="icon">
    //               <LogIn className="h-5 w-5" />
    //               <span className="sr-only">Log in</span>
    //             </Button>
    //           </DialogTrigger>
    //           <DialogContent>
    //             <DialogHeader>
    //               <DialogTitle>Log in or Register</DialogTitle>
    //             </DialogHeader>
    //             <Separator />
    //             <form onSubmit={handleLogin} className="space-y-4">
    //               <div>
    //                 <Label htmlFor="email">Email</Label>
    //                 <Input id="email" name="email" type="email" required />
    //               </div>
    //               <div>
    //                 <Label htmlFor="password">Password</Label>
    //                 <Input id="password" name="password" type="password" required />
    //               </div>
    //               <Button type="submit">Log in</Button>
    //             </form>
    //             <Separator />
    //             <Button onClick={handleGoogleLogin} variant="outline">
    //               Log in with Google
    //             </Button>
    //             <Separator />
    //             <DialogTitle>Register</DialogTitle>
    //             <form onSubmit={handleRegister} className="space-y-4">
    //               <div>
    //                 <Label htmlFor="register-name">Name</Label>
    //                 <Input id="register-name" name="name" required />
    //               </div>
    //               <div>
    //                 <Label htmlFor="register-email">Email</Label>
    //                 <Input id="register-email" name="email" type="email" required />
    //               </div>
    //               <div>
    //                 <Label htmlFor="register-password">Password</Label>
    //                 <Input
    //                   id="register-password"
    //                   name="password"
    //                   type="password"
    //                   required
    //                 />
    //               </div>
    //               <Button type="submit">Register</Button>
    //             </form>
    //           </DialogContent>
    //         </Dialog>
  );
};
