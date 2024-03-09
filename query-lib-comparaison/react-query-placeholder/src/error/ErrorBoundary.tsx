/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { ErrorModal } from './ErrorModal';

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any): void {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorModal />;
    }

    return this.props.children;
  }
}
