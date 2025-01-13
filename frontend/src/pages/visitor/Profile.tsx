import { useState, useEffect } from "react";
import MasonryGallery from "../../components/MasonryGallery";
import type { Photo } from "../../types";
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // TODO: Fetch user's photos from API
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
  }, []);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-7xl min-h-dvh mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">My Profile</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Photos</h2>
        <MasonryGallery photos={photos} />
      </div>
    </div>
  );
}
