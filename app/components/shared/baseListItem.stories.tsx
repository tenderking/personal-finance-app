import type { Meta, StoryObj } from '@storybook/react';

import { BaseListItem } from './BaseListItem';

const meta: Meta<typeof BaseListItem> = {
  title: 'shared/BaseListItem',
  component: BaseListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Base List Item',
    image: 'public/avatars/bytewise.jpg',
  },
};

export const InList: Story = {
  render: (args) => (
    <ul>
      <li><BaseListItem {...args} /></li>
      <li><BaseListItem {...args} title="Another List Item"  subtitle='hello'/></li>
      <li><BaseListItem {...args} title="yet Another List Item" /></li>
    </ul>
  ),
  args: {
    title: 'Base List Item',
    image: 'public/avatars/bytewise.jpg',
  },
};