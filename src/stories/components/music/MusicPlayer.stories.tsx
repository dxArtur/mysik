import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import MusicPlayer from '../../../components/music/MusicPlayer';

const meta: Meta<typeof MusicPlayer> = {
  title: 'Layout/components/Music/MusicPlayer',
  component: MusicPlayer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MusicPlayer>;

export const Default: Story = {
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'SoundHelix Song 1',
    artist: 'SoundHelix',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Musical_notes.svg/768px-Musical_notes.svg.png',
    autoPlay: false,
  },
};

export const AutoPlay: Story = {
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'SoundHelix Song 2',
    artist: 'Helix Artist',
    autoPlay: true,
  },
};
