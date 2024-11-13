import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">OCEAN SKATEBOARD</h2>
            <p className="text-muted-foreground">
              Discover our latest premium skateboards, get superior durability
              and exceptional performance.
            </p>
            <Button>SHOP IT NOW</Button>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Skateboarding action"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      {/* Mini Skateboard Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Mini Skateboard action"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">MINI SKATEBOARD</h2>
            <p className="text-muted-foreground">
              Perfect for beginners and kids, our mini skateboards offer great
              maneuverability and control. Ideal for learning tricks or cruising
              around the neighborhood.
            </p>
            <Button>SHOP IT NOW</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
