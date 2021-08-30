# Textion
Textion is a javascript module for text animation.<br>
It adds text animation without any affecting your code.

<img src="./examples/data/textionGIF.gif">

## Npm
You can install the module using npm.
```
npm i textion
```

## Usage
Download js file in dist folder or using npm.<br>
And include it.

```html
<script src="path/textion.js"></script>
```
To use Textion, add the class 'textion' to the text elements.
```html
<p class="textion"></p>
```
Then add the options you want to use in the text elements' class list.

### Option List
|Class Name|Default|Description|
|-|-|-|
|`timeout-{ms}`|0|The latency before animation starts.|
|`interval-{ms}`|65|The interval of animation loop.|
|`repeat-{number}`|2|The number of character changes.|
