import AWSSVGIcon from "../assets/svg/AWSSVGIcon";
import AnsibleSVGIcon from "../assets/svg/AnsibleSVGIcon.1";
import DockerSVGIcon from "../assets/svg/DockerSVGIcon";
import GitHubActionsSVGIcon from "../assets/svg/GitHubActionsSVGIcon";
import GolangSVGIcon from "../assets/svg/GolangSVGIcon";
import KubernetesSVGIcon from "../assets/svg/KubernetesSVGIcon";
import LinuxSVGIcon from "../assets/svg/LinuxSVGIcon";
import PostgreSVGIcon from "../assets/svg/PostgresSVGIcon";
import PythonSVGIcon from "../assets/svg/PythonSVGIcon";
import ReactSVGIcon from "../assets/svg/ReactSVGIcon";
import TerraformSVGIcon from "../assets/svg/TerraformSVGIcon";
import TypeScriptSVGIcon from "../assets/svg/TypeScriptSVGIcon";
import { SkillType } from "../types/SkillType";

export const jsonFormatDevSkills: SkillType[] = [
  { name: "Golang", icon: GolangSVGIcon },
  { name: "Python", icon: PythonSVGIcon },
  { name: "TypeScript", icon: TypeScriptSVGIcon },
  { name: "ReactJS", icon: ReactSVGIcon },
  { name: "PostGreSQL", icon: PostgreSVGIcon },
  { name: "Linux", icon: LinuxSVGIcon },
  { name: "Docker", icon: DockerSVGIcon },
  { name: "Kubernetes", icon: KubernetesSVGIcon },
  { name: "Terraform", icon: TerraformSVGIcon },
  { name: "Ansible", icon: AnsibleSVGIcon },
  { name: "AWS", icon: AWSSVGIcon },
  { name: "CI/CD", icon: GitHubActionsSVGIcon },
];
