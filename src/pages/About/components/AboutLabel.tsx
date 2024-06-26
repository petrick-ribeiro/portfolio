import { AboutLabelProps } from "./types/AboutLabelProps";

const AboutLabel = (props: AboutLabelProps) => {
  return (
    <div className="w-4/5 rounded-md p-4 space-y-2 border border-rose shadow-md bg-white">
      <div className="flex space-x-4">
        <div className="rounded-full w-fit h-fit p-2 border border-blue bg-base">
          {props.children}
        </div>
        <div>
          <p className="font-bold">{props.description}</p>
          <p className="text-subtext">{props.name}</p>
        </div>
      </div>

      <div className="text-subtext">
        <span>
          {
            props.startDate ?
              `${props.startDate} - ${props.endDate}`
              :
              props.endDate
          }
        </span>
      </div>
    </div>
  );
};

export default AboutLabel;
