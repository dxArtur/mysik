import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import MainContent from '../../../components/ui/MainContent';

const meta: Meta<typeof MainContent> = {
  title: 'Layout/components/ui/MainContent',
  component: MainContent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MainContent>;

export const Default: Story = {
  render: () => <MainContent />,
};
