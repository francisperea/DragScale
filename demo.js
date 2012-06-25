$(function() {

$('#outer').draggable({
    start: function(e, ui) {
        if ($(e.originalEvent.target).is(".scroll")) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
});


$('#nested').click(function(event) {
    event.stopPropagation();
    $('#outer').effect('scale', {
        scale: 'content',
        percent: 50
    }, 1000);

});
$('#outer').click(function() {
    $('#outer').effect('scale', {
        scale: 'content',
        percent: 200
    }, 1000);
});
});​