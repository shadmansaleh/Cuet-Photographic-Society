// import React from 'react';
import { X } from 'lucide-react';
import type { Photo } from '../types';

interface ImageModalProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ImageModal({
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrevious
}: ImageModalProps) {
  const photo = photos[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="h-8 w-8" />
      </button>
      
      <button
        onClick={onPrevious}
        className="absolute left-4 text-white hover:text-gray-300 text-4xl"
        disabled={currentIndex === 0}
      >
        ‹
      </button>
      
      <div className="max-w-7xl max-h-[90vh] relative">
        <img
          src={photo.image_url}
          alt={photo.title}
          className="max-h-[90vh] max-w-full object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-xl font-bold">{photo.title}</h3>
          {photo.description && (
            <p className="mt-2">{photo.description}</p>
          )}
        </div>
      </div>
      
      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300 text-4xl"
        disabled={currentIndex === photos.length - 1}
      >
        ›
      </button>
    </div>
  );
}
