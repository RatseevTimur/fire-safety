import React, { useEffect } from 'react';
import './FlyingBlocks.css'; // Создайте файл стилей FlyingBlocks.css

const FlyingBlocks = () => {
  useEffect(() => {
    const createBlocks = () => {
      const container = document.getElementById('flying-blocks-container');
      const numberOfBlocks = 10;

      for (let i = 0; i < numberOfBlocks; i++) {
        const block = document.createElement('div');
        block.className = 'flying-block';
        // block.style.backgroundImage =  "url(./111.png)"
        container.appendChild(block);
        animateBlock(block);
      }
    };

    const animateBlock = (block) => {
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;

      const speed = Math.random() * 2 + 1;

      block.style.left = `${startX}px`;
      block.style.top = `${startY}px`;

      const flyInterval = setInterval(() => {
        const currentX = parseFloat(block.style.left);
        const currentY = parseFloat(block.style.top);

        if (currentX > window.innerWidth) {
          clearInterval(flyInterval);
          block.remove();
          animateBlock(block);
        } else {
          block.style.left = `${currentX + speed}px`;
          // block.style.top = !Math.round(Math.random()) ? `${currentY + speed}px` : `${currentY - speed}px`;
        }
      }, 10);
    };

    createBlocks();
  }, []);

  return (
    <div id="flying-blocks-container" className="flying-blocks-container">
      {/* Container for flying blocks */}
    </div>
  );
};

export default FlyingBlocks;

// import React, { useState, useEffect } from 'react';

// const FlyingBlocks = () => {
//   const [blocks, setBlocks] = useState([]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setBlocks((prevBlocks) =>
//         prevBlocks.map((block) => ({
//           ...block,
//           left: block.left + (e.clientX - window.innerWidth / 2) * 0.01,
//           top: block.top + (e.clientY - window.innerHeight / 2) * 0.01,
//         }))
//       );
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     // Генерация начальных блоков
//     const initialBlocks = Array.from({ length: 10 }, (_, index) => ({
//       id: index,
//       left: Math.random() * window.innerWidth,
//       top: Math.random() * window.innerHeight,
//     }));
//     setBlocks(initialBlocks);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div style={{ position: 'fixed', width: '100%', height: '100%' }}>
//       {blocks.map((block) => (
//         <div
//           key={block.id}
//           style={{
//             position: 'absolute',
//             width: '50px',
//             height: '50px',
//             backgroundColor: 'blue',
//             left: `${block.left}px`,
//             top: `${block.top}px`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FlyingBlocks;
