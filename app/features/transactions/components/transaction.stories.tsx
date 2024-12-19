import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { TransactionWidget } from '~/features/transactions/components/TransactionWidget';

const meta: Meta<typeof TransactionWidget> = {
  title: 'overview/TransactionWidget',
  component: TransactionWidget,
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
    transactions: [
      { amount: 100, date: '2021-01-01', name: 'Salary', icon: `/avatars/bytewise.jpg` },
      { amount: 1000, date: '2021-01-01', name: 'Salary', icon: `/avatars/bytewise.jpg` },
      { amount: 500, date: '2021-01-01', name: 'Salary', icon: `/avatars/bytewise.jpg` },
    ],
  },
};
