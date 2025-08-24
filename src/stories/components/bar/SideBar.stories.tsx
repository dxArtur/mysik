import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Sidebar from "../../../components/bar/SideBar";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/components/bar/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
