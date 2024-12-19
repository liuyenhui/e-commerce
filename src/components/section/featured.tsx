import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getFeatured } from "@/sanity/query/section";
export const Featured = async () => {
  const featured = await getFeatured();
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={featured?.first.imageurl || ""}
              alt={featured?.first.title || ""}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {featured?.first?.title || ""}
                </h3>
                <p className="mb-4">{featured?.first.description || ""}</p>
                <Button variant="secondary">
                  {featured?.first.buttonText}
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={featured?.second.imageurl || ""}
              alt={featured?.second.title || ""}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-green-800 bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {featured?.second?.title || ""}
                </h3>
                <p className="mb-4">{featured?.second.description || ""}</p>
                <Button variant="secondary">
                  {featured?.second.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
