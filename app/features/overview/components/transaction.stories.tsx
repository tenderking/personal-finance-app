import type { Meta, StoryObj } from '@storybook/react';
import { TransactionWidget } from './TransactionWidget';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TransactionWidget> = {
  title: 'overview/TransactionWidget',
  component: TransactionWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof TransactionWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    transactions: [
      { amount: 100, date: '2021-01-01', name: 'Salary', icon: `/avatars/bytewise.jpg` },
      { amount: 1000, date: '2021-01-01', name: 'Salary', icon: `/avatars/bytewise.jpg` },
      { amount: 500, date: '2021-01-01', name: 'Salary', icon: `/avatars/bytewise.jpg` },
    ]
  },

};


