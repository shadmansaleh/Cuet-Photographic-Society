import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="p-6 bg-base-200 text-base-content min-h-dvh">
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h1 className="text-5xl font-bold mb-6">About CuetPS</h1>
        <p className="text-lg mb-4 mt-12">
          Welcome to CuetPS, a platform dedicated to celebrating the art of photography. We showcase
          breathtaking images captured by talented photographers, aiming to inspire and connect
          people through the power of visual storytelling.
        </p>
        <p className="text-lg mb-4">
          At CuetPS, we believe every photo has a story to tell. Whether you are a seasoned
          photographer or a passionate admirer of photography, our exhibitions are crafted to
          ignite your imagination and appreciation for the art form.
        </p>
        <p className="text-lg">
          Join us in exploring the beauty of photography and connecting with a vibrant community of
          creative minds. Let’s create and share unforgettable stories through the lens.
        </p>
        <Link to="/gallery" className="btn btn-primary mt-6">Explore Our Gallery</Link>
      </div>
    </div>
  );
}
