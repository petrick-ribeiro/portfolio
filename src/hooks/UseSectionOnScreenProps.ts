import { RefObject } from "react";

export type UseSectionOnScreenProps = {
  refs: RefObject<HTMLDivElement>[];
  onVisibilityChange: (visibleSections: Set<HTMLDivElement | null>) => void;
};
