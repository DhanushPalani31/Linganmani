import { createContext, useContext, useState, useCallback } from "react";

const AdmissionModalContext = createContext(null);

export function AdmissionModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  return (
    <AdmissionModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </AdmissionModalContext.Provider>
  );
}

export function useAdmissionModal() {
  const ctx = useContext(AdmissionModalContext);
  if (!ctx) throw new Error("useAdmissionModal must be used inside AdmissionModalProvider");
  return ctx;
}
