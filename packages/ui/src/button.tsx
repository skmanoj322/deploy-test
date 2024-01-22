"use client";

// import { ReactNode } from "react";

interface ButtonProps {
  appName: string;
}

export const Button = ({ appName }: ButtonProps) => {
  return <button> {appName}</button>;
};
