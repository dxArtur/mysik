import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AddMusicPanel from "../../../components/music/AddMusicPanel";

const meta: Meta<typeof AddMusicPanel> = {
  title: "Layout/components/Music/AddMusicPanel",
  component: AddMusicPanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddMusicPanel>;

export const Default: Story = {
  args: {
    onAddTrack: (track:any) => {
      console.log("Música adicionada:", track);
    },
  },
};
