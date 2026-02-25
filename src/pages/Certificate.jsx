import React, { useState, useRef } from 'react';
import certificateImage from "../assets/certifictae.jpg"

const Certificate = () => {
  // Replace with your actual certificate image path
//   const certificateImage = "/path/to/your-company-certificate.jpg"; // or use an online URL
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Add boundaries to prevent dragging too far
    const container = containerRef.current;
    if (container) {
      const maxX = (container.clientWidth * (scale - 1)) / 2;
      const maxY = (container.clientHeight * (scale - 1)) / 2;
      
      setPosition({
        x: Math.min(Math.max(newX, -maxX), maxX),
        y: Math.min(Math.max(newY, -maxY), maxY)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setScale(prev => Math.min(Math.max(prev + delta, 0.5), 3));
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Zoom controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2 bg-white rounded-lg shadow-lg p-2">
        <button
          onClick={zoomOut}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg text-xl font-bold transition-colors"
          title="Zoom Out"
        >
          −
        </button>
        <button
          onClick={resetZoom}
          className="px-3 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition-colors"
          title="Reset Zoom"
        >
          {Math.round(scale * 100)}%
        </button>
        <button
          onClick={zoomIn}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg text-xl font-bold transition-colors"
          title="Zoom In"
        >
          +
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-10 text-xs text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow">
        <p>🖱️ Scroll with Ctrl/Cmd to zoom • Drag to pan</p>
      </div>

      {/* Image container with scroll and zoom */}
      <div 
        ref={containerRef}
        className="flex-1 flex items-center justify-center overflow-hidden relative"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div 
          className="relative cursor-grab active:cursor-grabbing"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
          onMouseDown={handleMouseDown}
        >
          <img
            src={certificateImage}
            alt="Company Certification"
            // max-h-[90vh]
            className=" w-auto object-contain rounded-xl shadow-2xl select-none"
            draggable="false"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%23f8f4e9'/%3E%3Crect x='40' y='40' width='720' height='920' fill='none' stroke='%23c7b28b' stroke-width='8'/%3E%3Ctext x='400' y='240' font-family='Georgia' font-size='72' fill='%233d2b1f' text-anchor='middle'%3E⭐%3C/text%3E%3Ctext x='400' y='360' font-family='Georgia' font-size='64' fill='%2396704b' text-anchor='middle'%3ECERTIFICATE%3C/text%3E%3Ctext x='400' y='500' font-family='Georgia' font-size='48' fill='%2396704b' text-anchor='middle'%3Eof excellence%3C/text%3E%3Ctext x='400' y='680' font-family='Georgia' font-size='36' fill='%233d2b1f' text-anchor='middle'%3ECompany Name%3C/text%3E%3Ctext x='400' y='800' font-family='Georgia' font-size='28' fill='%237b5e3c' text-anchor='middle'%3EISO 9001:2025%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;