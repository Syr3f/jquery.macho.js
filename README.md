# Macho.jquery.js

**A jQuery plugin for Hogan.js**

Basically, it's simply an extension to jQuery to apply Hoggan.js templating at 
the selected DOM element.

Here's a usage example:

```javascript
var myData = {"myKey": "myValue"};

$('#myTemplateId').Macho(myData)
````

It is equivalent to:

```javascript
var myData = {"myKey": "myValue"};

var html = $('#myTemplateId').html();

var template = _hogan.compile(html);
var output = template.render(myData);

$('#myTemplateId').html(output);
````

Having:

```html
<div id="myTemplate">{{myKey}}</div>
````

>> Author: Seraf Dos Santos
>> MIT License
>> copyright (c) 2012 Seraf Dos Santos