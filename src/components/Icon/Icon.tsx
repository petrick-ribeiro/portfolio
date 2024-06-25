import { IconProps } from "./types/IconProps";

const Icon = (props: IconProps) => {
  return (
    <a href={props.link} target="_blank" className="rounded-full p-2 shadow-md bg-white">
      {props.children}
    </a>
  )
}

export default Icon;
