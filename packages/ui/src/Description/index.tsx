import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export function Description() {
  return (
    <p className={`${poppins.className} text-gray-500 max-w-2xl`}>
      Former digital-marketing specialist, seeking to apply competent
      development skills with focus on collaboration, communication, and passion
    </p>
  );
}
