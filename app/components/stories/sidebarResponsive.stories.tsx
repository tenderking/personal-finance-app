import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ResponsiveSidebar } from '~/components/dashboard/SidebarResponsive';

const meta: Meta<typeof ResponsiveSidebar> = {
  title: 'shared/Sidebar Responsive',
  component: ResponsiveSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResponsiveSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {


  name: 'Primary',

  render: () => (
    <BrowserRouter>
      <ResponsiveSidebar />
    </BrowserRouter>
  )
};