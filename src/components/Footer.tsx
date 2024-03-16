import { FC } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaTelegram } from 'react-icons/fa';

export const Footer: FC = () => {
  const [state, handleSubmit] = useForm("mzbnzpqr");
  if (state.succeeded) {
    return (
      <h1 class="md:text-5xl/tight my-4 max-w-lg text-4xl font-medium text-white">
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
  ///
  return (
    <footer class="bg-default-950/40 backdrop-blur-3xl">


      <div class="border-t border-white/10 py-6">
        <div class="md:text-start container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between lg:px-20">
          <p class="text-default-400 text-base font-medium">
            @2024 SolDeployerAI All Rights Reserved.
            {/* <a href="#">
              Design & Crafted
              <i
                data-lucide="heart"
                class="inline h-4 w-4 fill-red-500 text-red-500"
              ></i>
              by @theblockchaincoders
            </a> */}
          </p>
          <p class="text-default-400 text-base font-medium">
            <a href="#">Terms Conditions & Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
