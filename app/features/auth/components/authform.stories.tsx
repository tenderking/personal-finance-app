import type { Meta, StoryObj } from '@storybook/react';
import AuthForm from '~/features/auth/components/AuthForm';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';

const meta: Meta<typeof AuthForm> = {
  title: 'Auth/AuthForm',
  component: AuthForm,
  decorators: [
    (Story) => {
      const routes = [
        {
          path: '/',
          element: <Story />,
        },
      ];

      const router = createMemoryRouter(routes);

      return <RouterProvider router={router} />;
    },
  ],

};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
