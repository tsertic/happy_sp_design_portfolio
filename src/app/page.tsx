import {
  AboutMe,
  Contact,
  Hero,
  MyWork,
} from "@/components/pageSections/homepage";

export default function Home() {
  return (
    <main className="">
      <section className="mb-[100px] md:mb-[120px] xl:mb-[136px]">
        <Hero />
      </section>
      <section className=" mb-[100px] md:mb-[120px] xl:mb-[88px] ">
        <AboutMe />
      </section>
      <section className=" mb-[100px] md:mb-[120px] xl:mb-[88px] ">
        <MyWork />
      </section>
      <section className="mb-[40px] xl:mb-[56px]">
        <Contact />
      </section>
    </main>
  );
}
