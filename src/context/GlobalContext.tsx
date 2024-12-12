import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedChipsContextType {
    selectedChips: string[];
    setSelectedChips: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectedChipsContext = createContext<SelectedChipsContextType | undefined>(undefined);

export const SelectedChipsProvider = ({ children }: { children: ReactNode }) => {
    const [selectedChips, setSelectedChips] = useState<string[]>([]);

    return (
        <SelectedChipsContext.Provider value={{ selectedChips, setSelectedChips }}>
            {children}
        </SelectedChipsContext.Provider>
    );
};

export const useSelectedChips = (): SelectedChipsContextType => {
    const context = useContext(SelectedChipsContext);
    if (!context) {
        throw new Error('useSelectedChips must be used within a SelectedChipsProvider');
    }
    return context;
};
