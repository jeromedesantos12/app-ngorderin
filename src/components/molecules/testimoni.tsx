import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { User } from "@/components/atoms/user";
import testimonies from "@/data/testimonies.json";

export default function Testimoni() {
  return (
    <section
      className="pb-50 pt-30 px-5 flex flex-col gap-15 items-center"
      id={testimonies.id}
    >
      <div className="flex flex-col gap-5 max-w-6xl items-center">
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-2"
        >
          <Sparkle className="duration-300" />
          <p className="duration-300">{testimonies.id}</p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
        >
          {testimonies.title}
        </motion.h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl px-4">
        {testimonies.users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </section>
  );
}
