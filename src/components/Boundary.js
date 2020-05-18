/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'

class Boundary extends Component {
    state = { eventId: null }

    static getDerivedStateFromError() {
      return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
      Sentry.withScope((scope) => {
          scope.setExtras(errorInfo)
          const eventId = Sentry.captureException(error)
          this.setState({eventId})
      })
    }

    render() {
        if (this.state.hasError) {
            return (
              <button onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</button>
            )
        }

        return this.props.children
    }
}

export default Boundary
