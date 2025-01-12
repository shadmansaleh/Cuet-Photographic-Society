import { useState, useEffect } from 'react';
import MasonryGallery from '../../components/MasonryGallery';
import type { Photo } from '../../types';

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // TODO: Fetch photos from API
    setPhotos([
      {
        id: '1',
        title: 'Mountain Landscape',
        description: 'Beautiful mountain view at sunset',
        image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        user_id: '1',
        votes: 42,
        created_at: new Date().toISOString()
      },
      // Add more sample photos here
    ]);
  }, []);

  const handleVote = async (photoId: string) => {
    // TODO: Implement voting
    console.log('Voting for photo:', photoId);
  };

  return (
    <div className="max-w-7xl min-h-dvh mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Photo Gallery</h1>
      <MasonryGallery photos={photos} onVote={handleVote} />
    </div>
  );
}
