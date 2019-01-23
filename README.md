<h1 align="center">
  <img src="http://zesh.me/pZgxqy+" width="100" />
  <br/>
  <span align="center">
    Slide
  </span>
</h1>

<p align="center">Slide is an <strong>extremely lightweight</strong> (~2.13kB minified) jQuery plugin for interactive slideshows.</p>

## 📚 Usage
1. Ensure **jQuery** is included on your page (using a `<script>` tag or otherwise)
2. Include `slide.js` with a `<script>` tag
3. Add the container HTML to your page: `<div class="slider"></div>` 
4. Fill the slider container with your slides (images, divs etc.) which must all have the same width and height.
5. Add one rule to your CSS:
```css
.slider div {
  width:100%;
  height:100%;
  display:inline-block;
}
```
6. Activate the plugin with the following code snippet
```javascript
$(document).ready(function() {
    $('.slider').slide();
});
```

## ⚙️ Options
Below is an example of all the options available for you to configure and their default values.
```javascript
$('element').slide({
    speed: 1000, // Animation Speed in milliseconds
    easingFunc: 'ease', // CSS transition easing function
    controls: {
        visible: true,
        prevLabelText: 'Prev',
        nextLabelText: 'Next'
    }
});
```

## 📄 License
Slide is no longer actively maintained and is only on GitHub for archive purposes. Feel free to use the code in any way you like, enjoy!
