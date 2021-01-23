import { render, screen } from '@testing-library/react';
import App from '~/pages/_app';

const ExampleComponent = () => {
    return <div>Example</div>;
};

describe('Next custom App test', () => {
    it('renders app without crashing', () => {
        render(<App Component={ExampleComponent} />);
        expect(screen.getByTestId('app')).toBeInTheDocument();
    });
});
