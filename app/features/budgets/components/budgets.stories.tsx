import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { BudgetsWidget } from '~/features/budgets/components/BudgetsWidget';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BudgetsWidget> = {
  title: 'overview/BudgetsWidget',
  component: BudgetsWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} satisfies Meta<typeof BudgetsWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    seeDetailsUrl: '/budgets',
    totalBudget: 1000,
    totalSpent: 450,
    budgets: [
      { name: "Groceries", amount: 300 },
      { name: "Entertainment", amount: 50 },
      { name: "Transport", amount: 100 },
    ],
  },
  // More on parameters: https://storybook.js.org/docs/react/writing-stories/parameters
};


