import { Header } from "@/components/section/header";
import { Hero } from "@/components/section/hero";
import { Tags } from "@/components/section/tags";
import { Popular } from "@/components/section/popular";
import { Customer } from "@/components/section/customer";
import { Featured } from "@/components/section/featured";
import { Footer } from "@/components/section/footer";
import { Play } from "@/components/section/play";

export default function Home() {
  const pages = [
    {
      key: "hero",
      component: <Hero key="hero" />,
      index: 0,
    },
    {
      key: "play",
      component: <Play key="play" />,
      index: 0,
    },
    {
      key: "categories",
      component: <Tags key="tags" />,
      index: 1,
    },
    {
      key: "popular",
      component: <Popular key="popular" />,
      index: 2,
    },
    {
      key: "customer",
      component: <Customer key="customer" />,
      index: 3,
    },
    {
      key: "featured",
      component: <Featured key="featured" />,
      index: 4,
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {pages.map((page) => page.component)}

      {/* Footer */}
      <Footer />
    </div>
  );
}
