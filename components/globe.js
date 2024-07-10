import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { sampleArcs } from "@/data/samplearcs";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function Globe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="relative flex h-screen w-full flex-row items-center justify-center py-20">
      <div className="relative mx-auto h-full w-full max-w-7xl overflow-hidden px-4 md:h-[40rem]">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl font-bold text-black dark:text-white md:text-4xl">
            Join Us. Be a part of something bigger
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-base font-normal text-neutral-700 dark:text-neutral-200 md:text-lg">
            Be a part of our global community and connect with like-minded people.
          </p>
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full select-none" />
        <div className="absolute -bottom-20 z-10 h-72 w-full md:h-full">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
  );
}
