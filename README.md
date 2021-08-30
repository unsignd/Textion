[![CodeFactor](https://www.codefactor.io/repository/github/unsignd/textion/badge)](https://www.codefactor.io/repository/github/unsignd/textion)

# Textion
Textion is a javascript module for text animation.<br>
It adds text animation without any affecting your code.

<img src="./examples/data/textionGIF.gif">

## Install
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
|`timeout-{number}`|0|The latency before animation starts. (ms)|
|`interval-{number}`|65|The interval of animation loop. (ms)|
|`repeat-{number}`|2|The number of character changes.|
|`lerpSpeed-{number}`|4 / `{timeout.number}`|The speed of opacity lerp function|
