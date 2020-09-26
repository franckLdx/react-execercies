import React from "react";
import { ShitHappens } from "./ShitHappens";

interface ErrorBoundaryStrate {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryStrate> {
  readonly state: ErrorBoundaryStrate = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
  }

  render() {
    if (this.state.hasError) {
      return (
        <ShitHappens />
      );
    }

    return this.props.children;
  }
}
