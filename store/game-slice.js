import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    values: [
      {
        value: 'A',
        sources: [
          {
            src: '/tata/hubert-a.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-a.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'B',
        sources: [
          {
            src: '/tata/hubert-b.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-b.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'C',
        sources: [
          {
            src: '/tata/hubert-c.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-c.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'D',
        sources: [
          {
            src: '/tata/hubert-d.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-d.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'E',
        sources: [
          {
            src: '/tata/hubert-e.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-e.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'F',
        sources: [
          {
            src: '/tata/hubert-f.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-f.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'G',
        sources: [
          {
            src: '/tata/hubert-g.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-g.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'H',
        sources: [
          {
            src: '/tata/hubert-h.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-h.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'I',
        sources: [
          {
            src: '/tata/hubert-i.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-i.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'J',
        sources: [
          {
            src: '/tata/hubert-j.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-j.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'K',
        sources: [
          {
            src: '/tata/hubert-k.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-k.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'L',
        sources: [
          {
            src: '/tata/hubert-l.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-l.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'M',
        sources: [
          {
            src: '/tata/hubert-m.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-m.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
      {
        value: 'N',
        sources: [
          {
            src: '/tata/hubert-n.mp3',
            spokenBy: 'Tata',
            image: '/tata/tata.jpg',
          },
          {
            src: '/mama/ola-n.mp3',
            spokenBy: 'Mama',
            image: '/mama/mama.jpeg',
          },
        ],
      },
    ],
    player: {
      points: 0,
    },
  },
  reducers: {
    addPoints(state, action) {
      state.player.points = state.player.points + action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
