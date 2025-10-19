import {
  Instagram,
  Linkedin,
  Youtube,
  Github,
  LucideProps,
} from "lucide-react";
import { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const iconMap: { [key: string]: ComponentType<LucideProps> } = {
  Instagram,
  Linkedin,
  Youtube,
  Github,
};

export function Social({
  icon,
  delay,
  href,
}: {
  icon: string;
  delay: number;
  href: string;
}) {
  const IconComponent = iconMap[icon];
  if (!IconComponent) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href} target="_blank">
        <Button variant="secondary" className="rounded-full cursor-pointer p-5">
          <IconComponent />
        </Button>
      </Link>
    </motion.div>
  );
}
