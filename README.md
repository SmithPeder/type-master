# CSS Modules quick start

> Using [css-modules](https://github.com/css-modules/css-modules)
with [webpack](http://webpack.github.io/) 
and [style-loader](https://github.com/webpack/style-loader)

## Setup

```zsh
git clone git@github.com:SmithPeder/css-modules.git

npm install

npm start
```

## Description
To get CSS Modules to work the [style-loader](https://github.com/webpack/style-loader) has to be added to your development dependencies.

```js
// package.json
...
"devDependencies": {
    ...
    style-loader: "^0.12.3",
    ...
}
...
```

Then a loader needs to be added for handling `.css` files
```js
// webpack.config.js
...
{
    test: /\.css$/,
    loader:
    'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
}
...
```

The rest of the configurations in `package.json` and `webpack.config.js` are needed to get the
boilerplate project to run, but are technically not needed for the CSS Modules.

After the dependencies and loader configuration is complete, you can import a style sheet in your `.js` file.
```js
import styles from './someFile.css';
```
Then use the style sheet the normal way by giving a element a className.
```js
<div className={styles.root}>
```
The power of the dependency is shown in the result section below. The CSS you write in that specific file is scoped
and cannot be used by elements that don't import that specific file.

## Result

> The loader adds a hash suffix after every classname as seen when inspection the webpage with chrome dev tool.
```html
<div>
    <div class="Header__root___1bSWx">
        <h1 class="Header__text___2F6ja"> Header </h1>
    </div>
    <div class="Main__root___2pBCi">
        <h1 class="Main__text___380AU">Main</h1>
    </div>
    <div class="Footer__root___2RaCj">
        <h1 class="Footer__text___2vHCC">Footer</h1>
    </div>
</div>
```
> The result is six components that share classnames but have different style
<img src="https://i.imgur.com/PRimUbx.png"/>

## Extra

The dependency brings a lot more then just scoping. You can also compose selectors.

> From same file:
```CSS
.className {
    color: green;
    background: red;
}

.otherClassName {
    composes: className;
    color: yellow;
}
```
> From another file:
```CSS
.otherClassName {
    composes: className from "./style.css";
}
```
Using compose selectors becomes critical if you want to reuse classes, and avoid duplicate code.
Composing and more is described in more detail at the dependency repo [css-modules](https://github.com/css-modules/css-modules).


