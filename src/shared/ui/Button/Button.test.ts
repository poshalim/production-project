import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('classNames', () => {
  test('with only first param', () => {
    render(<Button>test</Button>);

    expect(screen.getByText('test')).toBeInTheDocument()
  });
});
