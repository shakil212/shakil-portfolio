"use client";

import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { portfolio } from "@/content/portfolio";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { motionTokens } from "@/components/motion/motionTokens";
import { finePointerQuery, useMediaQuery } from "@/components/motion/useMediaQuery";
import { Facebook, Instagram, Youtube, Linkedin, Github } from "./ContactSocialIcons";

const socialLinks = [
  { name: "Facebook", href: portfolio.contact.facebook, icon: Facebook, external: true },
  { name: "Instagram", href: portfolio.contact.instagram, icon: Instagram, external: true },
  { name: "YouTube", href: portfolio.contact.youtube, icon: Youtube, external: true },
  { name: "LinkedIn", href: portfolio.contact.linkedIn, icon: Linkedin, external: true },
  { name: "GitHub", href: portfolio.contact.github, icon: Github, external: true },
  { name: "Email Shakil Mahmud", href: `mailto:${portfolio.contact.email}`, icon: Mail, external: false },
] as const;

export function ContactSocialLinks() {
  const { effectsEnabled } = useMotionPreference();
  const finePointer = useMediaQuery(finePointerQuery);
  const animateHover = effectsEnabled && finePointer;

  return (
    <nav className="contact-social-links" aria-label="Social links">
      {socialLinks.map(({ name, href, icon: Icon, external }) => (
        <motion.a
          key={name}
          className="contact-social-link"
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={external ? `${name} (opens in a new tab)` : name}
          animate={{ scale: 1 }}
          whileHover={{ scale: animateHover ? 1.06 : 1 }}
          transition={{ duration: animateHover ? motionTokens.feedback : 0, ease: motionTokens.ease }}
        >
          <Icon size={21} strokeWidth={1.75} aria-hidden="true" focusable="false" />
        </motion.a>
      ))}
    </nav>
  );
}
