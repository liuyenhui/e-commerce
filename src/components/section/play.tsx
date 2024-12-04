import { getPlay } from "@/sanity/query/section";
import { VideoPlayer } from "@/components/section/page-components/video-player";
import { Button } from "@/components/ui/button";
export const Play = async () => {
  const play = await getPlay();
  console.log(play);
  return (
    play?.isShow && (
      <section className="py-0">
        <VideoPlayer videoUrl={play?.video as string}>
          <div className="flex flex-col justify-end items-end p-32">
            <div className="space-y-4 self-end">
              <p className="text-sm uppercase tracking-wider">{play?.title}</p>
              <h1 className="text-4xl font-bold tracking-tight">
                {play?.product?.name}
              </h1>
              <p className="text-muted-foreground">
                {play?.product?.description}
              </p>
              <Button>{play?.buttonText}</Button>
            </div>
          </div>
        </VideoPlayer>
      </section>
    )
    // <video className="w-full h-screen object-contain" controls autoPlay>
    //   <source src={play?.video} type="video/mp4" />

    //   <section className=" flex flex-col justify-end items-end py-16">
    //     <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
    //       <div className="space-y-4">
    //         <h1 className="text-4xl font-bold tracking-tight">
    //           {play?.product?.name}
    //         </h1>
    //         <p className="text-muted-foreground">
    //           {play?.product?.description}
    //         </p>
    //       </div>
    //       {/* <div className="flex justify-center">
    //         <Image
    //         src="/placeholder.svg?height=400&width=200"
    //         // src={hero?.background}
    //         alt="Skull Skateboard"
    //         width={200}
    //         height={400}
    //         className="object-contain"
    //         />
    //         </div> */}
    //     </div>
    //   </section>
    // </video>
  );
};
