import React, { useEffect } from 'react';

export default function TawkToWidget() {
    useEffect(() => {
        // Initialize Tawk.to
        var Tawk_API = window.Tawk_API || {};
        var Tawk_LoadStart = new Date();

        (function() {
            var s1 = document.createElement("script");
            var s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/69a6e3a27b02b21c3601d958/1jipuid97';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();

        // Cleanup function to remove script if component unmounts
        return () => {
            const script = document.querySelector('script[src*="tawk.to"]');
            if (script) {
                script.remove();
            }
            // Optional: Hide widget if needed
            if (window.Tawk_API && window.Tawk_API.hideWidget) {
                window.Tawk_API.hideWidget();
            }
        };
    }, []); // Empty dependency array means this runs once when component mounts

    return null; // This component doesn't render anything
}