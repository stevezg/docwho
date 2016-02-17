$(document).ready(function() {
    $('#doctorSearch').submit(function(event) {
        event.preventDefault();
        var $inputs = $('#doctorSearch :input');
        var search = $inputs[1].value;
        $.ajax({
            type:    "POST",
            url:     "/searchdoctors",
            data:    {"search":search},
            success: function(data) {
                $('#searchResults').html(data);
            },
            error:   function(jqXHR, textStatus, errorThrown) {
                console.log("Error, status = " + textStatus + ", " +
                    "error thrown: " + errorThrown
                );
            }
        });
    });
});