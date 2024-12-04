import { Button } from "@/components/ui/button";
import { getHero } from "@/sanity/query/section";

export const Hero = async () => {
  const hero = await getHero();
  return (
    hero?.isShow && (
      <div
        className=" h-screen w-full"
        style={{ backgroundImage: `url(${hero?.background})` }}
      >
        <section className=" flex flex-col justify-end items-center py-16 absolute inset-0 ">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider">{hero?.title}</p>
              <h1 className="text-4xl font-bold tracking-tight">
                {hero?.product?.name}
              </h1>
              <p className="text-muted-foreground">
                {hero?.product?.description}
              </p>

              <Button>{hero?.buttonText}</Button>
            </div>
          </div>
        </section>
      </div>
    )
  );
};
