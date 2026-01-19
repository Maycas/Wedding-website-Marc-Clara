import React, { useEffect, useState } from 'react';
import './Hero.css'; // Reusing Hero.css for simplicity as they are tightly coupled

const HeartReaction = ({ visible }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (visible) {
      // Create a batch of hearts when triggered
      const newHearts = Array.from({ length: 10 }).map((_, i) => ({
        id: Date.now() + i,
        left: i % 2 === 0, // Alternate sides
        delay: Math.random() * 2, // Random starting time
        offset: Math.random() * 50, // Random horizontal offset
      }));
      setHearts(prev => [...prev, ...newHearts]);
      
      // Cleanup hearts after animation (approx 4s)
      const timer = setTimeout(() => {
        setHearts([]);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible && hearts.length === 0) return null;

  return (
    <div className="heart-reaction-container">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className={`floating-heart ${heart.left ? 'left' : 'right'}`}
          style={{
            animationDelay: `${heart.delay}s`,
            [heart.left ? 'left' : 'right']: `${10 + (heart.offset / 10)}%`, // 10-15% from side
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartReaction;
