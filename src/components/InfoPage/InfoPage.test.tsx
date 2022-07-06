import { render, screen } from '@testing-library/react';
import InfoPage from '.';

describe('InfoPage', () => {
  it('renders informations containing in a JSX Element as children', () => {
    const myCustomJSXElement: JSX.Element = <p>my test should pass</p>;
    render(<InfoPage pageTitle="test">{myCustomJSXElement}</InfoPage>);

    const customText = screen.getByText(/my test should pass/i);
    expect(customText).toBeInTheDocument();
  });
});
