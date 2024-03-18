import { FC } from "react";
import { useForm } from "@formspree/react";

export const Footer: FC = () => {
  const [state, handleSubmit] = useForm("mzbnzpqr");
  if (state.succeeded) {
    return (
      <h1 className="md:text-5xl/tight my-4 max-w-lg text-4xl font-medium text-white">
        Thanks for sending your message!
      </h1>
    );
  }
  const menuOne = [
    "Support Center",
    "Customer Support",
    "About Us",
    "Project",
    "Return Policy",
  ];

  const menuTwo = [
    "Press Inquiries",
    "Social Media Directories",
    "Images & B-roll",
    "Site Map",
  ];
  
  return (
    <footer className="bg-default-950/40 backdrop-blur-3xl">
      <div className="border-t border-white/10 py-6">
        <div className="md:text-start container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between lg:px-20">
          <p className="text-default-400 text-base font-medium">
            @2024 SolDeployerAI All Rights Reserved.
          </p>
          <p className="text-default-400 text-base font-medium">
            <a href="#">Terms Conditions & Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
