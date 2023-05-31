# Music Player made with Shazam API (RapidAPI)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that allows the possibility to search for any song available in Shazam database just for testing purposes, I'm using a custom media player made by a third party (check Stack section) temporally.

The App is Fetching the Top Songs chart (the one below Browse) with the revalidate cached data feature that offers NextJS 13 , every 48 Hours so we can keep sure that is going to be up to date with new songs.

## Live Demo

If you don't want to test it locally you can enter to a live demo [HERE](https://shazam-music-player.vercel.app/) or https://shazam-music-player.vercel.app/

## For testing locally.

First, run the development server depending if you are using npm, yarn, or pnpm:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and do changes on the project, or simply test the functionality locally

## Instructions

simply use the searchbar to find you favourite song, any song uploaded to Shazam or Apple music should be there with the 1:29 (sometims just 30 seconds) of audio file for previewing any song.

## Stack

- React 18.2.0
- NextJs 13.4.1
- TailwindCSS
- [React-h5-audio-player](https://github.com/lhz516/react-h5-audio-player)
- dotenv (for hidden variables and keys)
- Vercel for deployment

# LICENSE

this project use the MIT LICENSE