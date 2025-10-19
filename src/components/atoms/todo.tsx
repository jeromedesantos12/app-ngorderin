import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Todo({
  id,
  title,
  delay,
  description,
}: {
  id: number;
  title: string;
  delay: number;
  description: string;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col md:max-w-sm items-center text-center gap-4"
    >
      <Button className="rounded-full w-fit text-xl font-bold p-5">{id}</Button>
      <h1 className="font-bold text-lg delay-300">{title}</h1>
      <p className="text-muted-foreground delay-300">{description}</p>
    </motion.li>
  );
}
