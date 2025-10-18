import steps from "@/data/steps.json";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { Todo } from "./todo";

export function Steps() {
  return (
    <main className="flex flex-col gap-20 items-center mt-30 py-20 px-5 bg-accent">
      <div className="flex flex-col gap-5 max-w-6xl items-center text-center">
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-2"
        >
          <Sparkle className="duration-300" />
          <p className="duration-300">steps</p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
        >
          Mulai Otomatiskan Pengecekan Stok Anda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground duration-300"
        >
          Hanya dalam tiga langkah sederhana, Anda dapat mengaktifkan sistem
          notifikasi stok otomatis yang langsung terhubung ke grup Telegram dan
          Google Sheets. Tidak perlu cek manual lagi — biarkan bot bekerja untuk
          Anda.
        </motion.p>
      </div>
      <ul className="flex flex-col md:flex-row gap-5 justify-center flex-wrap">
        {steps.map((step) => (
          <Todo key={step.id} {...step} />
        ))}
      </ul>
    </main>
  );
}
