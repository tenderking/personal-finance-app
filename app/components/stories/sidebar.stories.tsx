import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from '~/components/dashboard/Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'shared/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {


  name: 'Primary',

  render: () => (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  )
};