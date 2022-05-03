import "./ErrorBoundary.css";

import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1 className="error-header">Что-то пошло не так :(</h1>
          <img
            src="https://sun9-78.userapi.com/s/v1/if2/7ru8PQqWJ_62k9kIohUbe3OT6v9ZhbMvzK0MjeGUjxCN531skVHj1Xi6bfUtVjWyf4gah2BO5UmQvSx8AMd5Bm9R.jpg?size=489x499&quality=96&type=album"
            alt="error"
            className="error-image"
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
