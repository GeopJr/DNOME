<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128"><defs><linearGradient id="a" x1="0" x2="0" y1="0" y2="256" gradientTransform="scale(.5)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1c71d8"/><stop offset="100%" stop-color="#2ec27e"/></linearGradient><filter id="c" width="1" height="1" x="0" y="0"><feColorMatrix in="SourceGraphic" values="0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0"/></filter><svg id="b" width="16" height="16" viewBox="0 0 16 16"><path fill="#222" d="M13.5 1.99a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5H7.12l-3.12 3v-3H2.5c-1.5 0-2.5-1.31-2.5-2.5v-6a2.5 2.5 0 0 1 2.5-2.5zm0 0"/></svg></defs><rect width="128" height="128" fill="url(#a)" ry="64"/><use xlink:href="#b" filter="url(#c)" transform="matrix(4 0 0 4 32 32)"/></svg>
</p>
<h1 align="center">DNOME</h1>
<h4 align="center">Adwaita-inspired Discord Theme</h4>
<p align="center">
  <br />
    <a href="https://github.com/GeopJr/DNOME/blob/main/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.1-ff69b4.svg?style=for-the-badge&labelColor=f8eae3" alt="COC" /></a>
    <a href="https://github.com/GeopJr/DNOME/blob/main/LICENSE"><img src="https://img.shields.io/badge/LICENSE-BSD--2--Clause-000000.svg?style=for-the-badge&labelColor=f8eae3" alt="BSD-2-Clause" /></a>
</p>

# 

## Info

This is a Discord theme inspired by GNOME's default theme, Adwaita, in an attempt to make Discord look like it's part of the environment.

The theme is written in Less and supports both light and dark mode. There's a few config options in [./src/DNOME.less](./src/DNOME.less). If you are looking to recolor it, you can do so by modifying the Less/CSS variables found in [./src/modules/variables/](./src/modules/variables/).

The theme might be missing styles on elements that I don't have access to (Nitro) or are new (app directory) or changed class names. Please open an issue if you find any.

#

## Screenshots

> Note: might be outdated or not match the current version of Discord.

<details>
  <summary>Show All</summary>
  
  <p align="center">
    <img alt="screenshot of main text area" width="768" src="https://i.imgur.com/rminT0B.png"><br />
    <img alt="screenshot of profile modal" width="768" src="https://i.imgur.com/GQMxEnv.png"><br />
    <img alt="screenshot of guild explorer" width="768" src="https://i.imgur.com/XYySTGK.png"><br />
    <img alt="screenshot of playing profile modal" width="768" src="https://i.imgur.com/W5nZNig.png"><br />
    <img alt="screenshot of settings" width="768" src="https://i.imgur.com/v3ECLGN.png"><br />
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/NAPbclF.png">
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/fiMljXZ.png">
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/sLrsV2v.png">
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/eP0RPXf.png">
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/AkMm7wl.png">
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/11rk1c7.png">
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/KOGRtVr.png">
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/CAz4DJH.png">
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/ggJoB4n.png">
  </p>

  > Note: these are just some of the compoenents - not everything.

</details>

#

## Installing

You can inject it using [Crycord](https://github.com/GeopJr/Crycord), [BeauitfulDiscord](https://github.com/leovoel/BeautifulDiscord), [BetterDiscord](https://github.com/rauenzi/BetterDiscordApp), [Powercord](https://powercord.dev/) & any other CSS injector available.

There are 3 options for obtaining the theme:

1. [DNOME-latest.css](./DNOME-latest.css), which imports the latest compiled version.
2. [dist/DNOME.css](./dist/DNOME.css), which is the latest compiled version.
3. [Compile it yourself](#Compiling).

> Some client mods require certain changes. The theme is in its simpliest form.

> However, if you feel something needs extra instructions, open an issue and I'll list it below.

> Keep in mind that many plugins and elements from them might not be styled.

### For BetterDiscord

BetterDiscord requires a non-CSS META tag and a specific suffix on the filename. There are 2 options for installing the theme:

1. Download [./DNOME.theme.css](./DNOME.theme.css) and place it in your `themes/` folder.
2. Copy paste the contents of the desired file in the `Custom CSS` section in settings.

#

## Compiling

- Install [Less](https://lesscss.org/)
- `$ lessc ./src/DNOME.less ./dist/DNOME.css`
- Done

#

## Sponsors

<div align="center">

[![GeopJr Sponsors](https://cdn.jsdelivr.net/gh/GeopJr/GeopJr@main/sponsors.svg)](https://github.com/sponsors/GeopJr)

</div>

#

## Contributing

1. Read the [Code of Conduct](https://github.com/GeopJr/DNOME/blob/main/CODE_OF_CONDUCT.md)
2. Read the [Discord Theming Guide](./discord_theming_guide.md)
3. Fork it ( https://github.com/GeopJr/DNOME/fork )
4. Create your feature branch (git checkout -b my-new-feature)
5. Commit your changes (git commit -am 'feat: some feature')
6. Push to the branch (git push origin my-new-feature)
7. Create a new Pull Request
