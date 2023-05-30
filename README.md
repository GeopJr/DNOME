<p align="center">
  <img alt="a circle logo with an emblem of a speech bubble and a background of a gradient of blue and green" width="129" src="./logo.svg">
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
    <img alt="screenshot of the friends page" width="768" src="https://i.imgur.com/rminT0B.png"><br />
    <img alt="screenshot of a text channel with a new messages banner" width="768" src="https://i.imgur.com/GQMxEnv.png"><br />
    <img alt="screenshot of guild settings, safety setup showing radio buttons" width="768" src="https://i.imgur.com/XYySTGK.png"><br />
    <img alt="screenshot of a text channel with a thread open" width="768" src="https://i.imgur.com/W5nZNig.png"><br />
    <img alt="screenshot of the global search or spotlight" width="768" src="https://i.imgur.com/v3ECLGN.png"><br />
    <img alt="screenshot of inbox popup" width="256" src="https://i.imgur.com/NAPbclF.png">
    <img alt="screenshot of search popup" width="256" src="https://i.imgur.com/fiMljXZ.png">
    <img alt="screenshot of context menu on a message" width="256" src="https://i.imgur.com/sLrsV2v.png">
    <img alt="screenshot of guild settings popup" width="256" src="https://i.imgur.com/eP0RPXf.png">
    <img alt="screenshot of search results" width="256" src="https://i.imgur.com/AkMm7wl.png">
    <img alt="screenshot of create a server modal" width="256" src="https://i.imgur.com/11rk1c7.png">
    <img alt="screenshot of user profile popup" width="256" src="https://i.imgur.com/KOGRtVr.png">
    <img alt="screenshot of gif picker" width="256" src="https://i.imgur.com/CAz4DJH.png">
    <img alt="screenshot of inbox unread mentions popup" width="256" src="https://i.imgur.com/ggJoB4n.png">
    <img alt="screenshot of replying to message bar accessory" width="256" src="https://i.imgur.com/50jfu08.png">
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

### GTK Themes

You can use colors from your current GTK theme by running:

- `$ ruby grab_theme_colors.rb`
or
- `$ make gtk`

and then compiling DNOME again.

> *Warning*
> Manually set your Discord theme in settings to the one matching your GTK theme (Dark/Light). DNOME doesn't override everything on Discord but rather enhance it.

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
