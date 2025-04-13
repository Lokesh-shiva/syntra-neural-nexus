import React from 'react';

interface LoadingSkeletonProps {
  lines?: number;
  height?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  lines = 3, 
  height = '20px' 
}) => {
  return (
    <div className="loading-sequence">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="skeleton"
          style={{
            height,
            marginBottom: '8px',
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  );
};

type SpinnerSize = 'small' | 'medium' | 'large';

interface LoadingSpinnerProps {
  size?: SpinnerSize;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium' as SpinnerSize
}) => {
  const dimensions: Record<SpinnerSize, string> = {
    small: '24px',
    medium: '40px',
    large: '56px'
  };

  return (
    <div 
      className="loading-pulse"
      style={{
        width: dimensions[size],
        height: dimensions[size],
        borderRadius: '50%',
        border: '3px solid rgba(0, 0, 0, 0.1)',
        borderTopColor: 'var(--primary-color, #3498db)',
        animation: 'spin 1s ease-in-out infinite'
      }}
    />
  );
};

interface TransitionWrapperProps {
  children: React.ReactNode;
  show: boolean;
  duration?: number;
}

export const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
  children,
  show,
  duration = 300
}: TransitionWrapperProps) => {
  const [shouldRender, setShouldRender] = React.useState(show);

  React.useEffect(() => {
    if (show) setShouldRender(true);
    
    const timer = setTimeout(() => {
      if (!show) setShouldRender(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration]);

  if (!shouldRender) return null;

  return (
    <div
      className={`state-transition ${show ? 'state-enter-active' : 'state-exit-active'}`}
      style={{ 
        '--transition-duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

interface ProgressiveLoadProps {
  items: React.ReactNode[];
  staggerDelay?: number;
}

export const ProgressiveLoad: React.FC<ProgressiveLoadProps> = ({
  items,
  staggerDelay = 100
}: ProgressiveLoadProps) => {
  return (
    <div className="loading-sequence">
      {items.map((item: React.ReactNode, index: number) => (
        <div
          key={index}
          style={{
            animationDelay: `${index * staggerDelay}ms`
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export const LoadingStates = {
  Skeleton: LoadingSkeleton,
  Spinner: LoadingSpinner,
  Transition: TransitionWrapper,
  Progressive: ProgressiveLoad,
}; 