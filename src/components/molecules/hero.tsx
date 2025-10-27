import { ArrowRight, GitFork, Bot, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextType } from "@/components/ui/text-type";
import { motion } from "framer-motion";
import apps from "@/data/apps.json";
import heros from "@/data/heros.json";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id={heros.id}
      className="flex flex-col md:flex-row gap-8 flex-wrap justify-center py-50 px-5"
    >
      <div className="max-w-3xl flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-2"
        >
          <Sparkle className="duration-300" />
          <p className="duration-300">{heros.id}</p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
        >
          {heros.title}
        </motion.h1>
        <div className="flex flex-col sm:flex-row gap-3 ">
          <motion.h2
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-light text-muted-foreground duration-300"
          >
            with
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-bold flex gap-2 items-center text-primary"
          >
            <Bot size={48} />
            <TextType
              text={[apps.title]}
              typingSpeed={75}
              showCursor={true}
              startOnVisible={true}
              cursorCharacter="|"
              className="font-mono text-primary text-2xl sm:text-3xl"
              variableSpeed={undefined}
              onSentenceComplete={undefined}
            />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground max-w-lg duration-300"
        >
          {heros.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4"
        >
          <Link href={apps.link} target="_blank">
            <Button className="cursor-pointer flex gap-2 items-center justify-center px-6 py-3 shadow-md transform hover:-translate-y-1 transition-transform p-4">
              <p>Hubungi kami</p>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="#steps">
            <Button
              variant="outline"
              className="cursor-pointer flex gap-2 items-center justify-center px-6 py-3  shadow-md transform hover:-translate-y-1 transition-transform"
            >
              Lihat Contoh
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateX: "100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GitFork size={350} className="hidden md:block" />
      </motion.div>
    </section>
  );
}
