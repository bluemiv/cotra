import React from 'react';
import { TPropsWithChildren } from '@/types';

interface TState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<TPropsWithChildren, TState> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-contents flex flex-col gap-lg items-center justify-center text-xl sm:text-2xl font-semibold">
          <span>시스템에 오류가 있습니다.</span>
          <span>잠시 후 다시 시도해주세요.</span>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
