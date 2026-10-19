import HomePageContent from "@/components/home/HomePageContent";
import HomeLatestArticles from "@/components/home/HomeLatestArticles";

export default function HomePage() {
  return <HomePageContent latestArticles={<HomeLatestArticles />} />;
}
