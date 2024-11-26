import type { Meta, StoryObj } from '@storybook/react';

import { RecurringWidget } from './RecurringWidget';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof RecurringWidget> = {
  title: 'overview/RecurringWidget',
  component: RecurringWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof RecurringWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    bill: [
      { 'amount': 1000, 'name': 'Emergency Fund', 'color': 'green' },
      { 'amount': 2000, 'name': 'Vacation Fund', 'color': 'red' },
      { 'amount': 3000, 'name': 'New Car Fund', 'color': 'pink' },
    ],
  },

};


