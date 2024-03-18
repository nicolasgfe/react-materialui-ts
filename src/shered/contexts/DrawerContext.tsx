import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDreawerOption[];
  setDrawerOptions: (newDrawerOptions: IDreawerOption[]) => void;
}

interface IDreawerOption {
  icon: string;
  path: string;
  label: string;
}

const DrawerContext = createContext({} as IDrawerContextData);


interface IDrawerProviderProp {
  children: ReactNode;
}

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProviderProp> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [drawerOptions, setDrawerOptions] = useState<IDreawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDreawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};