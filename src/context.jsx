import { createContext, useState, useContext, Children } from "react";

const AppContext = createContext();
function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        isModalOpen,
        isSidebarOpen,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
function useGlobalContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }

  return context;
}
export { AppProvider, useGlobalContext };
