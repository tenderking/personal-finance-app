import type {Meta, StoryObj} from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'shared/Pagination',
  component: Pagination,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta

type PaginationStory = StoryObj<typeof meta>;

export const Default: PaginationStory = {
  args: {
    pages: 5,
    currentPage: 1,
  },
};