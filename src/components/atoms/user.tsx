import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function User({
  src,
  delay,
  name,
  dept,
  msg,
}: {
  src: string;
  delay: number;
  name: string;
  dept: string;
  msg: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-transparent p-6 rounded-xl shadow-lg">
        <CardContent className="flex flex-col gap-2">
          <p className="italic text-muted-foreground">{msg}</p>
          <div className="mt-4 flex gap-3">
            <Avatar>
              <AvatarImage src={src} />
              <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-muted-foreground text-sm">{dept}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
