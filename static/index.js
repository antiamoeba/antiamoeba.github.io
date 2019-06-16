$(function() {
    $("[url]").click(function() {
        var win = window.open($(this).attr("url"), '_blank');
        win.focus();
    });
});