import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { SidebarTabletMobile } from '~/components/dashboard/SidebarTabletMobile';

const meta: Meta<typeof SidebarTabletMobile> = {
  title: 'shared/Sidebar Tablet Mobile',
  component: SidebarTabletMobile,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarTabletMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {


  name: 'Primary',

  render: () => (
    <BrowserRouter>
      <SidebarTabletMobile />
    </BrowserRouter>
  )
};