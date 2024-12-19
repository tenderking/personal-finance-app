import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { PotsWidget } from '~/features/pots/components/PotsWidget';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PotsWidget> = {
  title: 'overview/PotsWidget',
  component: PotsWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PotsWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    pots: [
      { 'amount': 1000, 'name': 'Emergency Fund', 'color': 'green' },
      { 'amount': 2000, 'name': 'Vacation Fund', 'color': 'blue' },
      { 'amount': 3000, 'name': 'New Car Fund', 'color': 'red' },
    ],
    totalSavings: 6000,
  },
};
