import { AboutLabelProps } from "../types/AboutLabelProps";

const AboutLabel = (props: AboutLabelProps) => {
  return (
    <div className="w-full rounded-md p-4 border border-blue shadow-md bg-white">
      <div className="flex items-center justify-start space-x-4">
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
          {props.startDate
            ? `${props.startDate} - ${props.endDate}`
            : props.endDate}
        </span>
      </div>
    </div>
  );
};

export default AboutLabel;
