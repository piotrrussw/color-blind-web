import { Component } from 'react';
import Camera from '~/components/Camera';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error) {
        alert(error);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error</h1>;
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

function CameraPage() {
    return (
        <ErrorBoundary>
            <div id="webgl-container" />
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video id="video" style={{ display: 'none' }} autoPlay playsInline />
            <Camera />
        </ErrorBoundary>
    );
}

export default CameraPage;
