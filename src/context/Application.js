import { createContext, useContext } from 'react';

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
  return (
    <ApplicationContext.Provider value={{}}>
      {children}
    </ApplicationContext.Provider>
  );
};

const useApplication = () => {
  const context = useContext(ApplicationContext);

  return context;
};

export { ApplicationProvider, useApplication };
