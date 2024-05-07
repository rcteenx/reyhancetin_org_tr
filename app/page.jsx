import smd from "@/content/data/siteMetaData";
import PageTitle from "@/components/templates/pageTitle";
import { rVideo } from "@/public/assets/images";
import Hero from "@/components/sections/home-hero";

import { barInfo, conditions, meetingTitle, meetingList } from "@/content/data";
import Bar from "@/components/ui/bar";
import ImageList from "@/components/ui/image-list";
import CardList from "@/components/ui/cards";
import Seperator from "@/components/ui/seperator";
import InfoPage from "@/components/ui/info-page";
import Faq from "@/components/ui/x_faq";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Home() {
  return (
    <>
      <Hero />

      <Bar info={barInfo} />
      <ImageList img={rVideo} con={conditions} />
      <InfoPage />

      <CardList cardTitle={meetingTitle} cardList={meetingList} />
      <Faq />
      <Seperator />
    </>
  );
}
