import { CalendarDays } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update date every minute (optional)
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format date options
  const dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);

  return (
    <div className="rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        {/* Calendar Icon */}
        <CalendarDays />
        
        {/* Date Display */}
        <div>
          {/* <p className="text-sm text-gray-500 font-medium">Current Date</p> */}
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentDate;