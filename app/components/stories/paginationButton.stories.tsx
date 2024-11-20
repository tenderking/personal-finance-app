import type { Meta, StoryObj } from '@storybook/react';

import { PaginationButton } from '~/components/shared/PaginationButton';

const meta: Meta<typeof PaginationButton> = {
  title: 'shared/PaginationButton',
  component: PaginationButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaginationButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Prev: Story = {
  args: {
    variant: 'prev',
  },
};

export const Next: Story = {
  args: {
    variant: 'next',
  },
};

export const Number: Story = {
  args: {
    variant: 'num',
    num: 1,
  },
};

export const ActiveNumber: Story = {
  args: {
    variant: 'num',
    num: 1,
    active: true,
  },
};