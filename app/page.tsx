'use client'

import ContainerLayout from "@/components/layout/ContainerLayout";
import CardMotion from "@/components/motion/CardMotion";
import About from "@/components/section/About";
import Certifications from "@/components/section/Certifications";
import Education from "@/components/section/Education";
import Header from "@/components/section/Header";
import Projects from "@/components/section/Projects";
import Stack from "@/components/section/Stack";
import Snowfall from "react-snowfall";
import { useTheme } from "next-themes";


const Page = () => {
 const theme = useTheme();
  return <>
    <Snowfall
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 999,
      }}
      snowflakeCount={300}
      color={theme.theme === 'dark' ? '#fff' : '#000000'}
    />
    <div className="w-full h-full bg-[#f9f9f9] dark:bg-black"></div>
    <ContainerLayout>
      <CardMotion delay={0.2}>
        <Header />
      </CardMotion>
      <CardMotion delay={0.3}>
        <About />
      </CardMotion>
      <CardMotion delay={0.4}>
        <Stack />
      </CardMotion>
      <CardMotion delay={0.5}>
        <Education />
      </CardMotion>
      <CardMotion delay={0.6}>
        <Certifications />
      </CardMotion>
      <CardMotion delay={0.7}>
        <Projects />
      </CardMotion>
    </ContainerLayout>
  </>;
};

export default Page;