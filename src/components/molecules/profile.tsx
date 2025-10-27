import Image from "next/image";
import profiles from "@/data/profiles.json";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";

export function Profile() {
  return (
    <section id={profiles.id} className="flex justify-center py-20 px-10">
      <div className="max-w-6xl flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-64 sm:h-80 md:h-96"
        >
          <Image
            src={`/${profiles.image}`}
            alt="Automation preview"
            fill
            className="object-cover object-top rounded-2xl"
            priority
          />
        </motion.div>
        <div className="flex flex-col gap-5 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-2"
          >
            <Sparkle className="duration-300" />
            <p className="duration-300">{profiles.id}</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
          >
            {profiles.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted-foreground duration-300"
          >
            {profiles.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
