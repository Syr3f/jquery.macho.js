# Macho.jquery.js

**A jQuery Plugin for Hogan.js**

Basically, it's simply an extension to jQuery to apply Hoggan.js templating at 
the selected DOM element.

Here's a usage example:

```javascript
var myData = {"myKey": "myValue"};

$('#myTemplateId').Macho(myData)
````

It is equivalent to:

```javascript
var html = $('#myTemplateId').html();

var template = _hogan.compile(html,);
var output = template.render(data);

$('#myTemplateId').html(output);
````