"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
      <div className=" flex flex-col w-full h-screen items-center justify-center text-black font-sans font-bold italic text-2xl select-none">
        <div>
          <motion.span
            transition={{
              delay: 1,
            }}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Would{" "}
          </motion.span>
          <motion.span
            transition={{
              delay: 1.5,
            }}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            you{" "}
          </motion.span>
          <motion.span
            transition={{
              delay: 2,
            }}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            be{" "}
          </motion.span>
          <motion.span
            transition={{
              delay: 2.5,
            }}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            My{" "}
          </motion.span>
          <motion.span
            transition={{
              delay: 3,
            }}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Valentine{" "}
          </motion.span>
        </div>

        <motion.div
          className="flex gap-10 m-10"
          transition={{
            delay: 3.5,
          }}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link
            href="/sheSaidYes"
            className="text-white bg-gradient-to-tl from-pink-500 to-gray-200  px-10 p-2 rounded-lg animate-pulse"
          >
            Yes
          </Link>
          <Link
            href="/wji3a"
            className="text-white bg-gradient-to-tl from-gray-200 to-pink-500 px-10 p-2 rounded-lg"
          >
            No
          </Link>
        </motion.div>
      </div>
    </>
  );
}
