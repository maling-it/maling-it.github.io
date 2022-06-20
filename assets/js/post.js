
    // Copies code to the clipboard
function copyCode(elem, containerId) {
    // Copy code to clipboard
    var range = document.createRange();
    range.selectNode(document.getElementById(containerId));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    // Show confirmation
    elem.innerHTML = "<i class='bi bi-clipboard-check' aria-hidden='true'></i> Copied!";

    // Hide confirmation
    setTimeout(function() {
        elem.innerHTML = "<i class='bi bi-clipboard' aria-hidden='true'></i> Copy";
    }, 2000);

    // Built-in function
    zxce3.initStickyAlert({
      title: "Success copy",
      alertType: "alert-success",
      fillType: "filled",
      hasDismissButton: true,
      timeShown: 5000
    });
};
// Set code-block
var codeBl = document.querySelectorAll('.highlight');
var cpbtn = document.querySelectorAll('.cpbtn');
// Set Id
for (var i = 0; i < codeBl.length; i++)
    codeBl[i].id = 'code-block-' + i;
// Set Attr
for (var i = 0; i < cpbtn.length; i++)
    cpbtn[i].setAttribute("onclick", "copyCode(this, 'code-block-" + i + "')");

    function prints(content) {
        var printContents = document.getElementById(content).innerHTML;
        w=window.open();
        w.document.write(printContents);
        w.print();
        w.close();
    }
