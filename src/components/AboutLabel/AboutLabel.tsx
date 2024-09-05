import NewWindowLinkSVGIcon from "../../assets/svg/NewWindowLinkSVGIcon";
import { AboutLabelProps } from "../types/AboutLabelProps";

const AboutLabel = (props: AboutLabelProps) => {
  return (
    <div className="w-full rounded-md p-4 border border-white shadow-md bg-white">
      <div className="flex items-center justify-start gap-4 text-black">
        <div className="rounded-full w-fit h-fit p-2 border border-white bg-base shadow-md">
          {props.children}
        </div>

        <div>
          <p className="font-bold">{props.description}</p>
          <p className="text-subtext">{props.name}</p>
        </div>

        {props.link && (
          <a href={props.link} target="_blank" className="ml-auto">
            <NewWindowLinkSVGIcon width={28} fill="#4C2215" />
          </a>
        )}
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
