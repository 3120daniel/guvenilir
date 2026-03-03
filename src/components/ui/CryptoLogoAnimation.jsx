import React, { useState, useEffect } from 'react';
import btc from "../../assets/crypto/btc.png"
import eth from "../../assets/crypto/eth.png"
import xrp from "../../assets/crypto/xrp.png"
import ltc from "../../assets/crypto/ltc.png"


const CryptoLogoAnimation = () => {
  const [currentCoinIndex, setCurrentCoinIndex] = useState(0);
  const [animationState, setAnimationState] = useState('entering');
  
  const coins = [
    { 
      name: 'Bitcoin', 
      symbol: 'BTC',
      logo: btc
    },
    { 
      name: 'Ethereum', 
      symbol: 'ETH',
      logo: eth
    },
    { 
      name: 'XRP', 
      symbol: 'XRP',
      logo: xrp
    },
    { 
      name: 'Litecoin', 
      symbol: 'LTC',
      logo: ltc
    }
  ];

  useEffect(() => {
    let timeoutId;

    const runAnimation = async () => {
      setAnimationState('entering');
      
      timeoutId = setTimeout(() => {
        setAnimationState('exiting');
        
        timeoutId = setTimeout(() => {
          setAnimationState('empty');
          
          timeoutId = setTimeout(() => {
            setCurrentCoinIndex((prevIndex) => (prevIndex + 1) % coins.length);
            setAnimationState('entering');
          }, 2000);
          
        }, 500);
        
      }, 4000);
    };

    runAnimation();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentCoinIndex]);

  const getAnimationStyle = () => {
    const baseStyle = {
      transition: 'all 0.5s ease-in-out',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    };

    if (animationState === 'entering') {
      return {
        ...baseStyle,
        animation: 'flipRight 0.5s ease-in-out forwards'
      };
    }
    
    if (animationState === 'exiting') {
      return {
        ...baseStyle,
        animation: 'flipRightExit 0.5s ease-in-out forwards'
      };
    }
    
    return {
      ...baseStyle,
      opacity: 0
    };
  };

  // Add keyframes to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes flipRight {
        0% { 
          transform: rotateY(-90deg);
          opacity: 0;
        }
        100% { 
          transform: rotateY(0);
          opacity: 1;
        }
      }
      
      @keyframes flipRightExit {
        0% { 
          transform: rotateY(0);
          opacity: 1;
        }
        100% { 
          transform: rotateY(90deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex items-center justify-center absolute right-20 z-50">
      <div className="relative w-80 h-80" style={{ perspective: '1000px' }}>
        {animationState !== 'empty' && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-8"
            style={getAnimationStyle()}
          >
            <img
              src={coins[currentCoinIndex].logo}
              alt={coins[currentCoinIndex].name}
              className="w-52 h-52 object-contain mb-6 drop-shadow-2xl"
            />
            {/* <span className="text-2xl font-bold text-white mb-2">
              {coins[currentCoinIndex].name}
            </span> */}
            {/* <span className="text-lg text-purple-300 font-semibold">
              {coins[currentCoinIndex].symbol}
            </span> */}
          </div>
        )}
      </div>
      
      {/* Progress Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {coins.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentCoinIndex && animationState !== 'empty'
                ? 'w-8 bg-purple-500'
                : 'w-2 bg-gray-600'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CryptoLogoAnimation;