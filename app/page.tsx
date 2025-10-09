import ContainerLayout from "@/components/layout/ContainerLayout";
import CardMotion from "@/components/motion/CardMotion";
import About from "@/components/section/About";
import Certifications from "@/components/section/Certifications";
import Education from "@/components/section/Education";
import Header from "@/components/section/Header";
import Projects from "@/components/section/Projects";
import Stack from "@/components/section/Stack";


const page = () => {
  return <>
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

export default page;