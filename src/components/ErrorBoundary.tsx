import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // @ts-ignore - React.Component state initialization
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    // @ts-ignore - React.Component state access
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-syntra-dark p-4">
          <div className="max-w-md w-full space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">Something went wrong</h1>
              <p className="text-gray-400">
                {error?.message || 'An unexpected error occurred'}
              </p>
              <div className="pt-4">
                <Link to="/">
                  <Button 
                    className="bg-gradient-to-r from-syntra-purple to-syntra-blue hover:from-syntra-blue hover:to-syntra-purple"
                    variant="default"
                    size="lg"
                  >
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // @ts-ignore - React.Component props access
    return this.props.children;
  }
}

export default ErrorBoundary; 