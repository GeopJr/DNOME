<p align="center">
  <img alt="branding" width="128" src="https://i.imgur.com/jE8QoK2.png">
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

This is a Discord theme inspired by GNOME's default theme, Adwaita, in an attempt to make Discord look like it's part of the OS.

The theme is written in Less and supports both light and dark mode. There's a few config options in [./src/DNOME.less](./src/DNOME.less). If you are looking to recolor it, you can do so by modifying the Less/CSS variables found in [./src/modules/variables/](./src/modules/variables/).

The theme might be missing styles on elements that I don't have access to (Nitro) or are new (app directory) or changed class names. Please open an issue if you find any.

#

## Screenshots

<p align="center">
    <img alt="screenshot of main text area" width="768" src="https://i.imgur.com/8RDVBpS.png"><br />
    <img alt="screenshot of profile modal" width="768" src="https://i.imgur.com/HR6B8uZ.png"><br />
    <img alt="screenshot of guild explorer" width="768" src="https://i.imgur.com/ymGaAz2.png"><br />
    <img alt="screenshot of playing profile modal" width="768" src="https://i.imgur.com/TVLrSo9.png"><br />
    <img alt="screenshot of settings" width="768" src="https://i.imgur.com/t87AJuc.png"><br />
    <img alt="screenshot of message" width="256" src="https://i.imgur.com/vQ2ecGv.png">
</p>

#

## Installing

You can inject it using [Crycord](https://github.com/GeopJr/Crycord), [BeauitfulDiscord](https://github.com/leovoel/BeautifulDiscord), [BetterDiscord](https://github.com/rauenzi/BetterDiscordApp), [Powercord](https://powercord.dev/) & any other CSS injector available.

There are 3 options for obtaining the theme:

1. [DNOME-latest.css](https://github.com/GeopJr/DNOME/blob/dev/DNOME-latest.css), which imports the latest compiled version.
2. [dist/DNOME.css](https://github.com/GeopJr/DNOME/blob/dev/dist/DNOME.css), which is the latest compiled version.
3. [Compile it yourself](#Compiling).

> Some client mods require certain changes. The theme is in its simpliest form.

> However, if you feel something needs extra instructions, open an issue and I'll list it below.

> Keep in mind that many plugins and elements from them might not be styled.

### For BetterDiscord

BetterDiscord requires a non-CSS META tag and a specific suffix on the filename. There are 2 options for installing the theme:

1. Download [DNOME.theme.css](https://github.com/GeopJr/DNOME/blob/dev/extra/DNOME.theme.css) and place it in your `themes/` folder.
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
