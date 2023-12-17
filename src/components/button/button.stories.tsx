import type { Meta } from '@storybook/react';
import { Button } from '.';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const ButtonPrimary = {
  render: () => <Button variant="primary">Button</Button>,
};

export const ButtonSecondary = {
  render: () => <Button variant="secondary">Button</Button>,
};

export const ButtonBordered = {
  render: () => <Button variant="bordered">Button</Button>,
};
