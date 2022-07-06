import { render, screen } from '@testing-library/react';
import Navbar from '.';

describe('Navbar', () => {
  beforeAll(() => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');
    useRouter.mockImplementationOnce(() => ({
      pathname: '/',
    }));
  });

  afterAll(() => jest.resetAllMocks());

  it('renders a menu, a list of links', () => {
    render(<Navbar />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
});
