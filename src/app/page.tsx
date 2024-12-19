import { Header } from "@/components/section/header";
import { Hero } from "@/components/section/hero";
import { Billboard } from "@/components/section/billboard";
import { Popular } from "@/components/section/popular";
import { Comments } from "@/components/section/comments";
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
      key: "billboard",
      component: <Billboard key="billboard" />,
      index: 1,
    },
    {
      key: "popular",
      component: <Popular key="popular" />,
      index: 2,
    },
    {
      key: "comments",
      component: <Comments key="comments" />,
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
