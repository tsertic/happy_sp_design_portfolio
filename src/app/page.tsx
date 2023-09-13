import {
  AboutMe,
  Contact,
  Hero,
  MyWork,
} from "@/components/pageSections/homepage";

export default function Home() {
  return (
    <main className="">
      <section>
        <Hero />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <MyWork />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
