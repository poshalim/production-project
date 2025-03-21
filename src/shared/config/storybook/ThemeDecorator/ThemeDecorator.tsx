import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryCompnent: Story) => (
  <div className={`app ${theme}`}>
    <StoryCompnent />
  </div>
);
