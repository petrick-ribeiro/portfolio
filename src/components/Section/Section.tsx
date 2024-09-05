import { SectionProps } from "../types/SectionProps";

const Section = (props: SectionProps) => {
  return (
    <section id={props.id} className="space-y-10">
      <div className="pb-4 border-b-[1.5px] border-rose">
        <h1 className="font-bold text-4xl text-black">{props.title}</h1>
      </div>

      <div>{props.children}</div>
    </section>
  );
};

export default Section;
