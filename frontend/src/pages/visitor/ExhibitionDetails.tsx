import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MasonryGallery from "../../components/MasonryGallery";
import type { Exhibition, Photo } from "../../types";
import PhotoUploadModal from "@/components/PhotoUploadModal";
import { useAuth } from "@/contexts/AuthContext";
import { IoMdCloudUpload } from "react-icons/io";

export default function ExhibitionDetails() {
  const { id } = useParams<{ id: string }>();
  const [exhibition, setExhibition] = useState<Exhibition | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // TODO: Fetch exhibition and photos from API
    setExhibition({
      id: "1",
      title: "Nature Photography",
      description: "Celebrating the beauty of nature",
      thumbnail_url:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      start_date: "2024-03-01",
      end_date: "2024-03-31",
      status: "active",
      created_at: new Date().toISOString(),
    });

    setPhotos([
      {
        id: "1",
        title: "Mountain Landscape",
        description: "Beautiful mountain view at sunset",
        image_url:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        user_id: "1",
        votes: 42,
        created_at: new Date().toISOString(),
      },
      // Add more sample photos
    ]);
  }, [id]);

  if (!exhibition) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-7xl min-h-dvh mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {exhibition.title}
          </h1>
          <p className="text-gray-600 mb-4">{exhibition.description}</p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <span>Status: {exhibition.status}</span>
            <span>
              Start: {new Date(exhibition.start_date).toLocaleDateString()}
            </span>
            <span>
              End: {new Date(exhibition.end_date).toLocaleDateString()}
            </span>
          </div>
        </div>
        <MasonryGallery photos={photos} />
        {user && (
          <PhotoUploadModal className="absolute bottom-12 right-12">
            <IoMdCloudUpload className="text-blue-600 cursor-pointer h-16 w-16" />
          </PhotoUploadModal>
        )}
      </div>
    </div>
  );
}
