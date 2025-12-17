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
import Navbar from "@/components/layout/Navbar";


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
      snowflakeCount={200}
      color={theme.theme === 'dark' ? '#79b9eeff' : '#79b9eeff'}
    />
      <CardMotion delay={0.1}>
        <Navbar />
      </CardMotion>
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