import { render, screen } from '@testing-library/react';
import cgu from '../../informations/cgu';
import InfoPage from '.';

describe('InfoPage', () => {
  it('renders an information page like CGU page, by passing informations as children', () => {
    render(<InfoPage pageTitle='page des CGU' headDescription='description CGU'>{cgu}</InfoPage>);

    const cguContent = screen.getByRole('heading', {  name: /cgu \- condition général d'utilisation/i});
    expect(cguContent).toBeInTheDocument();
  });

  it('renders informations containing in a JSX Element as children', () => {
    const myCustomJSXElement: JSX.Element = <p>my test should pass</p>;
    render(<InfoPage pageTitle='test'>{myCustomJSXElement}</InfoPage>);

    const customText = screen.getByText(/my test should pass/i);
    expect(customText).toBeInTheDocument();
  });
});
