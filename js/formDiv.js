$(document).ready(function() {
    $('.group').hide();
    $('#option0').show();
    $('#selectMe').change(function() {
        $('.group').hide();
        $('#' + $(this).val()).show();
    });
});
