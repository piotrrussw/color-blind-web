import { render, screen } from '@testing-library/react';
import Index from '~/pages/index';

describe('Home page test', () => {
    it('renders home without crashing', () => {
        render(<Index />);
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
});
