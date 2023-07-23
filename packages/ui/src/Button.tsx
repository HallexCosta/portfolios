import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export const Button = () => {
  return (
    <button
      className={`${poppins.className} p-3 text-white text-lg w-52 rounded-full 
      bg-gradient-to-r from-purple-500 via-blue-600 to-blue-400 
      hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-600 hover:to-blue-400 
      active:bg-gradient-to-r active:from-purple-500 active:via-blue-600 active:to-blue-400 
      `}
    >
      Download CV
    </button>
  );
};
