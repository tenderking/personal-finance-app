import type { Meta, StoryObj } from '@storybook/react';

import BaseField from './BaseField';
import IconArrowDown from './Icons/IconArrowDown';

const meta: Meta<typeof BaseField> = {
  title: 'shared/BaseField',
  component: BaseField,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'beige',
      values: [
        { name: 'beige', value: '#f5f5f5' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Primary',
  render: () => <BaseField onChange={() => {}} />,
};

export const WithLeftIcons: Story = {
  name: 'With Left Icons',
  render: () => <BaseField leftIcons={[()=> <span className='text-black' key="dollar">{'$'}</span>, () => <IconArrowDown key="arrow" className='fill-green'/> ]} onChange={() => {}} />,
};

export const WithRightIcon: Story = {
  name: 'With Right Icon',
  render: () => <BaseField rightIcon={() => <IconArrowDown className='fill-black'/>} onChange={() => {}} />,
};

export const WithValue: Story = {
  name: 'With Value',
  render: () => <BaseField value="Value" onChange={() => {}} />,
};