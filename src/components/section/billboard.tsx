import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getBillboard } from "@/sanity/query/section";
export const Billboard = async () => {
  const billboard = await getBillboard();
  const leftImageUrl = `${billboard?.leftImage}`;
  const rightImageUrl = `${billboard?.rightImage}`;
  const leftType =
    billboard?.leftTags?._type || billboard?.leftCategories?._type;
  const leftSlug =
    billboard?.leftTags?.slug?.current ||
    billboard?.leftCategories?.slug?.current;
  const rightType =
    billboard?.rightTags?._type || billboard?.rightCategories?._type;
  const rightSlug =
    billboard?.rightTags?.slug?.current ||
    billboard?.rightCategories?.slug?.current;
  console.log(leftType, rightType, leftSlug, rightSlug);

  return (
    <section className="flex flex-row items-center justify-center gap-8 py-16 bg-gradient-to-r from-cyan-200 to-blue-300">
      <div className="flex flex-col items-center justify-center space-y-4 px-32">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{billboard?.leftTitle}</h2>
          <p className="text-muted-foreground">{billboard?.leftDescription}</p>
          <Button>{billboard?.leftButtonText}</Button>
        </div>
        <div>
          <Image
            src={leftImageUrl}
            alt="Skateboarding action"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      {/* Mini Skateboard Section */}
      <div className="flex flex-col items-center justify-center space-y-4 px-32">
        <div>
          <Image
            src={rightImageUrl}
            alt="Mini Skateboard action"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{billboard?.rightTitle}</h2>
          <p className="text-muted-foreground">{billboard?.rightDescription}</p>
          <Button>{billboard?.rightButtonText}</Button>
        </div>
      </div>
    </section>
  );
};
