import { createContext, useContext, useState } from "react";

interface SectionContextData {
  currentSection: string | null;
  setCurrentSection: (section: string | null) => void;
}

const SectionContext = createContext<SectionContextData>({
  currentSection: null,
  setCurrentSection: () => {},
});

export const useSectionContext = () => useContext(SectionContext);

export const SectionProvider: React.FC = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};
