"use client";
import { Suspense, useEffect, useState } from "react";
import { getImages } from "@/lib/galleryUtils/fetchImages";
import { ThreeDCard } from "@/components/3dcard";
import GalleryLoading from "@/components/loadingspinner";
import Loading from "./loading";

export default function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadImages() {
      const fetchedImages = await getImages();
      setImages(fetchedImages);
      setIsLoading(false);
    }

    loadImages();
  }, []);

  return (
    <>
      {isLoading && <GalleryLoading />}
      <div className="grid gap-x-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {images.map(({ id, public_id, format, blurDataUrl }) => (
          <Suspense key={id} fallback={<Loading />}>
            <ThreeDCard
              key={id}
              id={id}
              public_id={public_id}
              format={format}
              blurDataUrl={blurDataUrl}
            />
          </Suspense>
        ))}
      </div>
    </>
  );
}
