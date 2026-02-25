import React, { useEffect, useRef, useState } from 'react';

const TradingViewTickerTape = ({ 
  symbols = [
    'FOREXCOM:SPXUSD',
    'FOREXCOM:NSXUSD',
    'FOREXCOM:DJI',
    'FX:EURUSD',
    'BITSTAMP:BTCUSD',
    'BITSTAMP:ETHUSD',
    'CMCMARKETS:GOLD'
  ],
  colorTheme = 'light',
  width = '100%',
  height = 60,
  autosize = true,
  locale = 'en'
}) => {
  const containerRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Clean up function
    const cleanup = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };

    // Check if TradingView script is already loaded
    const isTradingViewLoaded = typeof window.TradingView !== 'undefined';

    const initWidget = () => {
      if (!containerRef.current) return;

      // Clear container
      containerRef.current.innerHTML = '';

      try {
        // Create widget configuration
        const widgetConfig = {
          symbols: symbols.map(symbol => {
            // Format symbols properly
            const parts = symbol.split(':');
            return {
              proName: symbol,
              title: parts.length > 1 ? parts[1] : symbol
            };
          }),
          showSymbolLogo: true,
          colorTheme: colorTheme,
          isTransparent: false,
          displayMode: 'adaptive',
          locale: locale,
          width: width,
          height: height
        };

        // Create and load the widget
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.type = 'text/javascript';
        script.innerHTML = JSON.stringify(widgetConfig);
        
        // Handle script load error
        script.onerror = () => {
          setError('Failed to load TradingView widget');
        };

        containerRef.current.appendChild(script);
        setIsScriptLoaded(true);
        setError(null);
      } catch (err) {
        console.error('Error initializing TradingView widget:', err);
        setError('Failed to initialize widget');
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (isTradingViewLoaded) {
        initWidget();
      } else {
        // Load the TradingView library if not available
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://s3.tradingview.com/tv.js';
        
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = initWidget;
        script.onerror = () => {
          setError('Failed to load TradingView library');
        };
        
        document.head.appendChild(script);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [symbols, colorTheme, width, height, locale]);

  if (error) {
    return (
      <div style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        color: '#dc3545',
        fontSize: '14px',
        border: '1px solid #dee2e6',
        borderRadius: '4px'
      }}>
        {error}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="tradingview-widget-container"
      style={{ 
        width, 
        height,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="tradingview-widget-container__widget"
        style={{ width: '100%', height: '100%' }}
      />
      <div 
        className="tradingview-widget-copyright"
        style={{
          position: 'absolute',
          bottom: '2px',
          right: '5px',
          fontSize: '10px',
          color: '#888',
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      >
        <a 
          href="https://www.tradingview.com/" 
          rel="noopener noreferrer" 
          target="_blank"
          style={{ color: '#888', textDecoration: 'none' }}
        >
          TradingView
        </a>
      </div>
    </div>
  );
};

// Alternative version using iframe approach (more stable)
export const TradingViewTickerTapeIframe = ({ 
  symbols = [
    'FOREXCOM:SPXUSD',
    'FOREXCOM:NSXUSD',
    'FOREXCOM:DJI',
    'FX:EURUSD',
    'BITSTAMP:BTCUSD',
    'BITSTAMP:ETHUSD',
    'CMCMARKETS:GOLD'
  ],
  colorTheme = 'light',
  width = '100%',
  height = 60
}) => {
  const iframeRef = useRef(null);
  const [error, setError] = useState(false);

  // Format symbols for the widget
  const formattedSymbols = symbols.map(symbol => {
    const parts = symbol.split(':');
    return `${parts[0]}.${parts[1]}`;
  }).join(',');

  const widgetUrl = `https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B${symbols.map(s => `%7B%22proName%22%3A%22${s}%22%2C%22title%22%3A%22${s.split(':')[1]}%22%7D`).join('%2C')}%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22${colorTheme}%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22${typeof width === 'number' ? width + 'px' : width}%22%2C%22height%22%3A${height}%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D`;

  const handleIframeError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        color: '#dc3545',
        fontSize: '14px',
        border: '1px solid #dee2e6',
        borderRadius: '4px'
      }}>
        Failed to load ticker tape
      </div>
    );
  }

  return (
    <div style={{ width, height, position: 'relative' }}>
      <iframe
        ref={iframeRef}
        src={widgetUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden'
        }}
        title="TradingView Ticker Tape"
        loading="lazy"
        onError={handleIframeError}
      />
    </div>
  );
};

// Simplified version with error boundary
export class TradingViewTickerTapeWithErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('TradingView Ticker Tape Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: this.props.width || '100%',
          height: this.props.height || 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          color: '#666',
          fontSize: '14px',
          border: '1px solid #dee2e6',
          borderRadius: '4px'
        }}>
          Market data temporarily unavailable
        </div>
      );
    }

    return <TradingViewTickerTape {...this.props} />;
  }
}

// Usage example component
export const TickerTapeExample = () => {
  const [activeTab, setActiveTab] = useState('standard');

  const customSymbols = [
    'FOREXCOM:SPXUSD',
    'FOREXCOM:NSXUSD',
    'FOREXCOM:DJI',
    'FX:EURUSD',
    'BITSTAMP:BTCUSD',
    'BITSTAMP:ETHUSD',
    'CMCMARKETS:GOLD'
  ];

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Market Ticker Tape</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveTab('standard')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: activeTab === 'standard' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'standard' ? 'white' : '#333',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Standard Widget
        </button>
        <button 
          onClick={() => setActiveTab('iframe')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'iframe' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'iframe' ? 'white' : '#333',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Iframe Widget (More Stable)
        </button>
      </div>

      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {activeTab === 'standard' ? (
          <>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Standard TradingView Ticker</h3>
            <TradingViewTickerTape 
              symbols={customSymbols}
              colorTheme="light"
              height={60}
            />
          </>
        ) : (
          <>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Iframe-based Ticker (More Stable)</h3>
            <TradingViewTickerTapeIframe 
              symbols={customSymbols}
              colorTheme="light"
              height={60}
            />
          </>
        )}
      </div>

      <div style={{
        marginTop: '20px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        padding: '15px',
        fontSize: '14px',
        color: '#666'
      }}>
        <strong>Note:</strong> The iframe version is generally more stable as it isolates the TradingView 
        widget in its own context, preventing React from interfering with its DOM operations.
      </div>
    </div>
  );
};

export default TradingViewTickerTape;