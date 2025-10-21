import Image from "next/image";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";

export function Profile() {
  return (
    <main id="profile" className="flex justify-center py-20 px-10">
      <div className="max-w-6xl flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-64 sm:h-80 md:h-96"
        >
          <Image
            src="/profile.jpg"
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
            <p className="duration-300">profile</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
          >
            Tentang Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted-foreground duration-300"
          >
            Ngorderin Bot adalah solusi otomatisasi cerdas yang membantu bisnis
            dan tim operasional memantau stok, mengirim notifikasi penting, dan
            mengelola data secara efisien—langsung melalui Telegram. Tanpa perlu
            coding atau sistem rumit, Anda bisa membuat alur kerja (workflow)
            yang bekerja otomatis, cepat, dan bisa diandalkan.
          </motion.p>
        </div>
      </div>
    </main>
  );
}
