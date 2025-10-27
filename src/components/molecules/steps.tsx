import steps from "@/data/steps.json";
import { Todo } from "@/components/atoms/todo";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";

export function Steps() {
  return (
    <section
      id={steps.id}
      className="flex flex-col gap-20 items-center pt-40 py-50 px-5 bg-accent"
    >
      <div className="flex flex-col gap-5 max-w-6xl items-center text-center">
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-2"
        >
          <Sparkle className="duration-300" />
          <p className="duration-300">{steps.id}</p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
        >
          {steps.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground duration-300"
        >
          {steps.description}
        </motion.p>
      </div>
      <ul className="flex flex-col md:flex-row gap-5 justify-center flex-wrap">
        {steps.todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
}
