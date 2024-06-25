"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dcard";

export function ThreeDCard({ id, public_id, format, blurDataUrl }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative h-full w-full rounded-xl border border-black/[0.1] bg-gray-50 p-2 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            key={id}
            alt="Rofies gallery image"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
