import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AddMusicButton from "../../../components/buttons/ButtonAddMusic";

const meta: Meta<typeof AddMusicButton> = {
  title: "Layout/components/buttons/AddMusicButton",
  component: AddMusicButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddMusicButton>;

// Como o componente depende do onAddTrack, vamos mockar uma função simples:
export const Default: Story = {
  render: (args:any) => (
    <AddMusicButton
      {...args}
      onAddTrack={(track:any) => {
        // Apenas loga no console para fins de demonstração
        console.log("Música adicionada:", track);
        alert(`Música adicionada: ${track.title} - ${track.artist}`);
      }}
    />
  ),
};
