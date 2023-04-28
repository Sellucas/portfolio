// hooks/useUpdateSection.ts
import { useEffect } from "react";
import { useSectionContext } from "./SectionContext";


export const useUpdateSection = (
  sectionName: string,
  ref: React.RefObject<HTMLElement>
) => {
  const { setCurrentSection } = useSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setCurrentSection(sectionName);
          console.log('Current section:', sectionName);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionName, ref, setCurrentSection]);
};
