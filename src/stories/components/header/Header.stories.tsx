// stories/Header.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Header from "../../../components/header/Header";
import "../../../../src/index.css"

const meta: Meta<typeof Header> = {
  title: "Layout/components/header/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
