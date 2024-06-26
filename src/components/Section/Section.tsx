import { SectionProps } from "./types/SectionProps";

const Section = (props: SectionProps) => {
  return (
    <section className="space-y-10">
      <div className="pb-4 border-b-2 border-rose">
        <h1 className="font-bold text-4xl">{props.title}</h1>
      </div>

      <div className="space-y-2">{props.children}</div>
    </section>
  );
};

export default Section;
