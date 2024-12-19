import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { RecurringWidget } from '~/features/recurring/components/RecurringWidget';

const meta: Meta<typeof RecurringWidget> = {
  title: 'overview/RecurringWidget',
  component: RecurringWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bill: [
      { amount: 1000, name: 'Emergency Fund', color: 'green' },
      { amount: 2000, name: 'Vacation Fund', color: 'red' },
      { amount: 3000, name: 'New Car Fund', color: 'pink' },
    ],
  },
};

