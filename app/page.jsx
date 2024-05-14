import smd from "@/content/data/siteMetaData";

import {
  barInfo,
  whyweneed,
  whatwegain,
  meetingTitle,
  meetingList,
  conditions,
} from "@/content/data";
import { rcHero, rVideo } from "@/public/assets/images";

import Hero from "@/components/sections/home/1-hero";
import InfoBar from "@/components/sections/home/2-info-bar";

import WhyWeNeed from "@/components/sections/home/b-1-why-we-need";
import WhatWeGain from "@/components/sections/home/b-1-what-we-gain";

import WeeklyMeetings from "@/components/sections/home/c-1-weekly-meetings";
import AttendenceContitions from "@/components/sections/home/c-2-att-conditions";
import Workshops from "@/components/sections/home/c-3-workshops";

import Support from "@/components/sections/home/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";

export async function generateMetadata() {
  return {
    title: smd.title + " - Reyhan Çetin",
  };
}

export default function Home() {
  return (
    <>
      <Hero rVideo={rVideo} />
      <InfoBar info={barInfo} />

      <WhatWeGain img={rVideo} gain={whatwegain} />
      <WhyWeNeed need={whyweneed} />
      <WeeklyMeetings title={meetingTitle} meetingList={meetingList} />

      <AttendenceContitions img={rVideo} con={conditions} />
      <Workshops />

      {/* <Support /> */}
      <SocialMedia />
    </>
  );
}
