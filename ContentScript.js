// content.js

<script type="text/javascript"></p>
<p>// Get user selection text on page
function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection();
    }
    else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}</p>
<p>$(document).ready(function(){
		$("#button").click(function(){
			var myObj = $('#highlight');//change to the location of the text you want selected/highlight-able
			myObj.html( myObj.html().replace(getSelectedText(),'<span class="selected">'+getSelectedText()+'</span>') );//notice class name "selected"
		});
});</p>
<p></script>
