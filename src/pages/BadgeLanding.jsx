import React from 'react';
import { useParams } from 'react-router-dom';
import Quiz from './Quiz';

const badgeConfig = {
  engineer: {
    title: "Engineer STEAM Card",
    message: "You’re holding the Engineer STEAM Card. Activate your STEAM identity by taking the quiz below.",
  },
  technologist: {
    title: "Technologist STEAM Card",
    message: "Technology is your power. Take the quiz below and reveal your STEAM badge.",
  },
  artist: {
    title: "Artist STEAM Card",
    message: "Creativity lives in everything you do. Take the quiz below to reveal your STEAM identity.",
  },
  scientist: {
    title: "Scientist STEAM Card",
    message: "Your curiosity drives discovery. Take the quiz and activate your STEAM identity.",
  },
  mathematician: {
    title: "Mathematician STEAM Card",
    message: "Patterns and strategy fuel you. Take the quiz below to reveal your level.",
  },
};

export default function BadgeLanding() {
  const { badgeKey } = useParams();
  const config = badgeConfig[badgeKey] || {
    title: "GeniusSeeker STEAM Card",
    message: "Take the quiz below to reveal your badge and level.",
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-2">{config.title}</h1>
      <p className="text-lg mb-6">{config.message}</p>

      <Quiz />
    </div>
  );
}
