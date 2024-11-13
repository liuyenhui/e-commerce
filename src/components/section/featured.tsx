import Image from "next/image"
import { Button } from "@/components/ui/button"
export function Featured() {
    return (
        <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Pacific Skateboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">PACIFIC SKATEBOARD</h3>
                  <p className="mb-4">Ride the waves of the street</p>
                  <Button variant="secondary">DISCOVER MORE</Button>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Green Monster Skateboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-green-800 bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">GREEN MONSTER SKATEBOARD</h3>
                  <p className="mb-4">Unleash your inner beast</p>
                  <Button variant="secondary">SHOP NOW</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}