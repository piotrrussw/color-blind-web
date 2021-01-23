import { render, screen } from '@testing-library/react';
import Header from '~/components/Header/Header';

describe('Header test', () => {
    const text = 'test header';

    beforeEach(() => {
        render(<Header>{text}</Header>);
    });

    it('renders header without crashing', () => {
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('renders header text correctly', () => {
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
