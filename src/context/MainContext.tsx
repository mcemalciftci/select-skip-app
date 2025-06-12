import { createContext, useContext, useState, type ReactNode, } from "react";

type SelectedCardType = {
  id?: number;
  size?: number;
  price_before_vat?: number;
};

interface MainContextType {
  selectedCard: SelectedCardType;
  setSelectedCard: React.Dispatch<React.SetStateAction<SelectedCardType>>;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCard, setSelectedCard] = useState<SelectedCardType>({});

  const values: MainContextType = { selectedCard, setSelectedCard };

  return (
    <MainContext.Provider value={values}>
      {children}
    </MainContext.Provider>
  );
};

// Kullanım hook'u
export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainProvider");
  }
  return context;
};
