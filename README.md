# Angular Prevent Scroll

#### Directive Prevent Scroll
---
This directive makes the treatment of the scrolls, so that work independently of each other.

Download [Angular Prevent Scroll (v.0.1.0)](http://jonasantonelli.github.io/angular-prevent-scroll/)
Check out the sample app: http://jonasantonelli.com/angular-prevent-scroll/sample/


## Get Started :

 - Add `jquery.js`, `angular.js`, `prevent-scroll.directive.js` to your code:
```html
<script src="jquery.js"></script>
<script src="angular.js"></script>
<script src="prevent-scroll.directive.js"></script>
```
 - Add `'ja.preventscroll'` as a module dependency to your app: `angular.module('app', ['ja.preventscroll'])`

 - Add a `prevent-scroll` attribute to your element content.
```html
<div prevent-scroll >
Content...
</div>
```
