"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getImages } from "@/lib/galleryUtils/fetchImages";

export default function Home() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function loadImages() {
      const fetchedImages = await getImages();
      setImages(fetchedImages);
    }

    loadImages();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Image
              key={id}
              alt="Next.js Conf photo"
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
          ))}
        </div>
      </main>
    </>
  );
}
