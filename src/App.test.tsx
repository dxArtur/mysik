import React from 'react';
import { act, renderHook, waitFor} from '@testing-library/react';
import MusicPlayer from './components/music/MusicPlayer';
import { useLikedTracks } from '../src/hooks/userLikedTracks';


const mockTrack = { id: '1', title: 'Test Song', artist: 'Test Artist', coverUrl: 'cover.jpg', audioUrl: 'song.mp3' };
global.caches = { open: jest.fn(() => Promise.resolve({ put: jest.fn(), match: jest.fn() })) } as any;

describe('useLikedTracks', () => {
  it('1. should add a track to the liked list', () => {
    const { result } = renderHook(() => useLikedTracks());
    act(() => {
      result.current.toggleLike(mockTrack);
    });
    expect(result.current.likedTracks).toEqual([mockTrack]);
  });

  it('2. should remove a track if it is already liked', () => {
    const { result } = renderHook(() => useLikedTracks());
    act(() => {
      result.current.toggleLike(mockTrack);
    });
    act(() => {
      result.current.toggleLike(mockTrack);
    });
    expect(result.current.likedTracks).toEqual([]);
  });

  it('3. should load tracks from cache on initial render', async () => {
    global.caches.open = jest.fn(() =>
      Promise.resolve({
        match: jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve([mockTrack]) })
        ),
      })
    ) as any;
    const { result } = renderHook(() => useLikedTracks());

    await waitFor(() => {
      expect(result.current.likedTracks).toEqual([mockTrack]);
    });
  });

  it('4. should not add the same track twice', () => {
    const { result } = renderHook(() => useLikedTracks());
    act(() => {
      result.current.toggleLike(mockTrack);
    });
    act(() => {
      result.current.toggleLike(mockTrack);
    });
    expect(result.current.likedTracks.length).toBe(0);
  });

  it('5. should call saveLikedTracksToCache after toggling a like', async () => {
    
    const saveLikedTracksToCacheMock = jest.fn();

    const spy = jest.spyOn(
      (await import('../src/hooks/userLikedTracks')), 
      'useLikedTracks'
    ).mockReturnValue({
      likedTracks: [],
      toggleLike: saveLikedTracksToCacheMock,
    });

    const { result } = renderHook(() => useLikedTracks());

    act(() => {
      result.current.toggleLike(mockTrack);
    });

    expect(saveLikedTracksToCacheMock).toHaveBeenCalledTimes(1);
    
    expect(saveLikedTracksToCacheMock).toHaveBeenCalledWith(mockTrack);

    spy.mockRestore();
  });
});