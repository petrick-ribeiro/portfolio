import { SkillLabelProps } from "./types/SkillLabelProps";

const SkillLabel = ({
  skill,
  children: Icon,
  width,
  fill,
}: SkillLabelProps) => {
  return (
    <div className="flex flex-col items-center p-4 font-bold text-black">
      <Icon width={width} fill={fill} />
      <span>{skill}</span>
    </div>
  );
};

export default SkillLabel;
