import smd from "@/content/data/siteMetaData";
import PageTitle from "@/components/templates/pageTitle";
import Hero from "@/components/sections/home-hero";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
