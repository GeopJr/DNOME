# Discord theming guide

This is a tiny discord theming guide to get contributors started.

## Project

The project stacture is:

- `./src/DNOME.less` => Entrypoint
- `./src/**/index.less` => Entrypoint of folder
- `./src/modules/index.less` => Entrypoint of folder
- `./src/modules/*/` => Group of component either by page or by z-index.
- `./src/modules/**/*/` => Subgroup that usually shares parent's styles.
- `global.less` => Styles shared by multiple components.

## Selecting the correct elements

Discord's class names get a randomized suffix every time they compile their frontend.
This makes it a bit harder to select the element you need.

For example consider the following:

```html
<div class="base-2jDfDU">
    <div class="content-1SgpWY">
        <div class="sidebar-1tnWFu">
        </div>
    </div>
</div>
```

If the class names were static, you could do:

```css
.sidebar-1tnWFu {
    color: red;
}
```

but since they aren't, you have to use wildcard selectors:

```css
div[class*="sidebar-"] {
    color: red;
}
```

However, there's a problem with that - it's too easy to target element you don't want to:

```html
<div class="base-2jDfDU">
    <div class="content-1SgpWY">
        <div class="sidebar-1tnWFu"></div>
    </div>
    <div class="sidebar-1jsabYE"></div>
</div>
```

the previous selector would target both. You need to instead "re-create" the DOM using child combinators:

```css
div[class*="base-"] > div[class*="content-"] > div[class*="sidebar-"] {
    color: red;
}
```

CSS preprocessors help with that through nested CSS making maintaining your theme slightly easier:

```less
div[class*="base-"] {
    div[class*="content-"] {
        div[class*="sidebar-"] {
            color: red;
        }
    }
}
```

## Inspecting Discord's elements

On the stable client, web tools are not available. To re-enable them, you have to quit Discord, open Discord's `settings.json` (search online for its location on your platform and/or package format) and add `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` to it.

Next time you open Discord you'll be able to press Ctrl + Shift + I to open web tools.

To select an element that dissapears when it loses focus you need to use breakpoints.

For example, to select the search bar popup, you need to right click `<div class="layerContainer-2v_Sit">` (near the bottom) (you can see it getting children every time you open the search popup and removing them when it loses focus) and select `Break on > subtree modifications`.

Now you have to trigger a subtree modification by triggering the popup (click on the search bar). The script will now stop. The popup isn't there yet so you need to skip a tep by clicking the icon next to the play button at the top. It should now show up.

You can now freely select it, see its classes and modify your style.
