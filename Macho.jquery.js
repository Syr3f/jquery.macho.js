/**
 *  Macho.jquery.js - jQuery plugin for Hogan.js
 *
 *  @author Seraf Dos Santos
 *  @copyright 2012 Seraf Dos Santos
 *  @license MIT License
 */


(function( $ ) {
  $.fn.Macho = function(data, compOpts) {
    /**
     *  var myData = {"key": "value"};
     *
     *  $('#myTemplateId').Macho(myData)
     */
    
    if (!Hogan) {
        alert("You need Twitter's Hogan.js (https://github.com/twitter/hogan.js).");
        return this;
    }
    
    var _hogan = Hogan;
    
    var _html = this.html();
    
    var _template = _hogan.compile(_html, (!compOpts?{}:compOpts));
    var _output = _template.render(data);
    
    this.html(_output);
    
    return this;
  };
})( jQuery );