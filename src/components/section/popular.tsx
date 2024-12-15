import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getPopular } from "@/sanity/query/section";

import Image from "next/image";

export const Popular = async () => {
  const popularProducts = await getPopular();
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          {popularProducts?.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {popularProducts?.goods?.map((goods) => (
            <Card key={goods.sku}>
              <CardHeader>
                <div className="relative aspect-[1/1] mb-4">
                  <Image
                    src={goods.image as string}
                    alt={goods.name as string}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{goods.name}</CardTitle>
                <p className="text-primary font-bold mt-2">
                  ${goods.retailPrice?.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
