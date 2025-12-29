// app/context/FacultyContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Project {
  name: string;
  status: string;
}

export interface FacultyMember {
  _id: string;
  id?: number;
  name: string;
  title?: string;
  specialization?: string;
  image?: string;
  email?: string;
  achievements?: string;
  bio?: string;
  researchAreas?: string[];
  qualifications?: string[];
  currentProjects?: Project[];
  publications?: number;
  students?: number;
  linkedin?: string;
  // any other fields you have in your JSON
  [key: string]: any;
}

type FacultyContextType = {
  selected: FacultyMember | null;
  setSelected: (m: FacultyMember | null) => void;
};

const FacultyContext = createContext<FacultyContextType | undefined>(undefined);

export const FacultyProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<FacultyMember | null>(null);

  return (
    <FacultyContext.Provider value={{ selected, setSelected }}>
      {children}
    </FacultyContext.Provider>
  );
};

export const useFaculty = (): FacultyContextType => {
  const ctx = useContext(FacultyContext);
  if (!ctx) throw new Error("useFaculty must be used inside a FacultyProvider");
  return ctx;
};
