
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
  className?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export default function CountdownTimer({ targetDate, onComplete, className }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true
        });
        
        if (onComplete) {
          onComplete();
        }
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        isComplete: false
      });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  const timeElements = [
    { value: timeRemaining.days, label: "Days" },
    { value: timeRemaining.hours, label: "Hours" },
    { value: timeRemaining.minutes, label: "Minutes" },
    { value: timeRemaining.seconds, label: "Seconds" }
  ];

  if (timeRemaining.isComplete) {
    return <div className={className}><h3 className="text-2xl font-bold">Hackathon in progress!</h3></div>;
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {timeElements.map((element, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center bg-background p-4 rounded-lg shadow-md min-w-24"
          >
            <span className="text-3xl sm:text-4xl font-bold text-nepal-blue">
              {element.value.toString().padStart(2, '0')}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {element.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
