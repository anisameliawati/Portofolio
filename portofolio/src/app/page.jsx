import AboutComponents from "./components/about";
import HeroComponents from "./components/hero";
import NavbarComponents from "./components/navbar";
import ProjectComponents from "./components/project";
import SkillComponents from "./components/skill";

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <HeroComponents />
      <AboutComponents />
      <SkillComponents />
      <ProjectComponents />
    </>
  );
}
