import { useState, useEffect } from "react";
import MasonryGallery from "../../components/MasonryGallery";
import type { Photo } from "../../types";

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // TODO: Fetch photos from API
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
      {
        id: "2",
        title: "Ocean View",
        description:
          "A serene view of the ocean with waves crashing on the shore",
        image_url:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        user_id: "2",
        votes: 35,
        created_at: new Date().toISOString(),
      },
      {
        id: "3",
        title: "Forest Path",
        description: "A peaceful forest path surrounded by tall trees",
        image_url:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        user_id: "3",
        votes: 50,
        created_at: new Date().toISOString(),
      },
      {
        id: "4",
        title: "City Skyline",
        description: "A vibrant city skyline during sunset",
        image_url:
          "https://images.unsplash.com/photo-1668786418135-6227c68c8391",
        user_id: "4",
        votes: 29,
        created_at: new Date().toISOString(),
      },
      {
        id: "5",
        title: "Snowy Mountains",
        description: "Snow-covered mountains under a clear blue sky",
        image_url:
          "https://plus.unsplash.com/premium_photo-1674635191027-3d9a5520790f",
        user_id: "5",
        votes: 47,
        created_at: new Date().toISOString(),
      },
      {
        id: "6",
        title: "Desert Dunes",
        description: "Golden sand dunes under a clear sky",
        image_url:
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
        user_id: "6",
        votes: 38,
        created_at: new Date().toISOString(),
      },
      {
        id: "7",
        title: "Tropical Beach",
        description: "Crystal clear water and white sand beach with palm trees",
        image_url:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        user_id: "7",
        votes: 55,
        created_at: new Date().toISOString(),
      },
      {
        id: "8",
        title: "Aurora Borealis",
        description: "Northern lights over a snowy landscape",
        image_url:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        user_id: "8",
        votes: 62,
        created_at: new Date().toISOString(),
      },
      {
        id: "9",
        title: "Countryside View",
        description: "Rolling hills and meadows under a cloudy sky",
        image_url:
          "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        user_id: "9",
        votes: 31,
        created_at: new Date().toISOString(),
      },
      {
        id: "10",
        title: "Rainforest Canopy",
        description: "Lush green rainforest trees viewed from above",
        image_url:
          "https://images.unsplash.com/photo-1444044205806-38f3ed106c10",
        user_id: "10",
        votes: 49,
        created_at: new Date().toISOString(),
      },
      // Add more sample photos here
    ]);
  }, []);

  const handleVote = async (photoId: string) => {
    // TODO: Implement voting
    console.log("Voting for photo:", photoId);
  };

  return (
    <div className="max-w-7xl min-h-dvh mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Photo Gallery</h1>
      <MasonryGallery photos={photos} onVote={handleVote} />
    </div>
  );
}
