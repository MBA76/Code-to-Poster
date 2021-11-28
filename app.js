let textarea= document.getElementById('textarea')
let editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true
});
editor.setOption('theme','darcula');