import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from './Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-500">
            <AlertTriangle size={28} />
          </div>
          <h2 className="font-display mt-6 text-2xl font-semibold text-slate-900">
            Something went wrong
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <Button onClick={this.handleReset} className="mt-6 group">
            <RefreshCw size={14} className="transition-transform group-hover:rotate-180" />
            Try Again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
