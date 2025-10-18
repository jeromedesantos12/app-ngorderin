import { motion } from "framer-motion";
import { Social } from "@/components/molecules/social";
import socials from "@/data/socials.json";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark pt-10 pb-10">
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {socials.map((social) => (
          <Social key={social.id} {...social} />
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="hover:text-secondary-light text-sm font-medium text-center transition duration-300 ease-in-out"
      >
        Made with &#9829; by {""}
        <Link href="https://github.com/jeromedesantos12" target="_blank">
          Jeremy Santoso
        </Link>
      </motion.p>
    </footer>
  );
}
