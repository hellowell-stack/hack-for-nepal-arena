
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  initial?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  animate?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
  };
}

export const motion = {
  div: ({ 
    children, 
    className, 
    initial, 
    animate, 
    transition, 
    ...props 
  }: MotionProps) => {
    const [mounted, setMounted] = React.useState(false);
    
    React.useEffect(() => {
      setMounted(true);
    }, []);

    // Define the styles for animation
    const style: React.CSSProperties = {
      opacity: mounted ? animate?.opacity : initial?.opacity,
      transform: `
        translateY(${mounted ? animate?.y || 0 : initial?.y || 0}px)
        translateX(${mounted ? animate?.x || 0 : initial?.x || 0}px)
        scale(${mounted ? animate?.scale || 1 : initial?.scale || 1})
      `,
      transition: `all ${transition?.duration || 0.3}s ease ${transition?.delay || 0}s`,
    };

    return (
      <div 
        className={cn(className, "transition-all")} 
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
};
