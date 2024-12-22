import type { Meta, StoryObj } from '@storybook/react';
import CustomSelect from '~/components/shared/CustomSelect';


const meta: Meta<typeof CustomSelect> = {
  title: 'shared/CustomSelect',
  component: CustomSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    onChange: (value: string) => console.log(value),
  },
};