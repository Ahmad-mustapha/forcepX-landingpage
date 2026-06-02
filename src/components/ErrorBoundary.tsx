import { Component } from 'react'
import type { ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  message: string
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error?.message || 'Something went wrong while loading.' }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-16 px-4 text-red-600">
          <p className="text-lg font-semibold">Unable to load the hero section.</p>
          <p>{this.state.message}</p>
        </div>
      )
    }

    return this.props.children
  }
}
