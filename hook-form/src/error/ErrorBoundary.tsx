import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertError } from "./AlertError";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    return this.state.hasError ? <AlertError messsage="Sorry: shit happens... !" /> : this.props.children;
  }
}