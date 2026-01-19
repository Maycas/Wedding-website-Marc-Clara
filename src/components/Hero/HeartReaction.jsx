import React, { useEffect, useState } from 'react';
import HeartIcon from './HeartIcon';
import './Hero.css';

const HeartReaction = ({ visible }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (visible && hearts.length === 0) {
      // Create a batch of ~100 hearts
      const newHearts = Array.from({ length: 100 }).map((_, i) => ({
        id: Date.now() + i,
        left: i % 2 === 0, // Split sides
        delay: Math.random() * 3, // Spread over 3 seconds
        duration: 3 + Math.random() * 2, // 3-5s float duration
        offset: Math.random() * 40, // Horizontal spread 0-40% from side
        size: 30 + Math.random() * 40, // 30px to 70px
      }));
      setHearts(newHearts);
      
      // Cleanup
      const timer = setTimeout(() => {
        setHearts([]);
      }, 6000); 
      
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
            animationDuration: `${heart.duration}s`,
            [heart.left ? 'left' : 'right']: `${5 + (heart.offset / 2)}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
        >
          <HeartIcon size={heart.size} color="#FFD700" />
        </div>
      ))}
    </div>
  );
};

export default HeartReaction;
