import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TrackCard from '../../../components/music/TrackCard';
import "../../../../src/index.css"

const meta: Meta<typeof TrackCard> = {
  title: 'Layout/components/Music/TrackCard',
  component: TrackCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TrackCard>;

// Adicione a propriedade 'id' ao objeto sampleTrack
const sampleTrack = {
  id: 'track-12345', // Adicione um ID único aqui
  title: 'Imagine',
  artist: 'John Lennon',
  coverUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5e/ImagineCover.jpg',
  audioUrl: 'https://example.com/audio/imagine.mp3',
};

export const Default: Story = {
  args: {
    track: sampleTrack,
    onSelect: (track: any) => {
      console.log('Selecionado:', track);
    },
  },
};