import { useState } from "react";
import Masonry from "react-masonry-css";
import { Heart } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import ImageModal from "./ImageModal";
import type { Photo } from "../types";

interface MasonryGalleryProps {
  photos: Photo[];
  onVote?: (photoId: string) => Promise<void>;
}

export default function MasonryGallery({
  photos,
  onVote,
}: MasonryGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { user } = useAuth();

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="mb-4 relative group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={photo.image_url}
              alt={photo.title}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg">
              {user && onVote && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onVote(photo.id);
                  }}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-5 w-5 text-red-500" />
                </button>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
                <p className="text-sm">{photo.votes} votes</p>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      {selectedIndex !== null && (
        <ImageModal
          photos={photos}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={() =>
            setSelectedIndex((prev) =>
              Math.min((prev || 0) + 1, photos.length - 1)
            )
          }
          onPrevious={() =>
            setSelectedIndex((prev) => Math.max((prev || photos.length) - 1, 0))
          }
        />
      )}
    </>
  );
}
