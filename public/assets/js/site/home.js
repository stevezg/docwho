$.fn.scrollTo = function (target, options, callback) {
    if (typeof options == 'function' && arguments.length == 2) {
        callback = options;
        options = target;
    }
    var settings = $.extend({
        scrollTarget: target,
        offsetTop: 50,
        duration: 500,
        easing: 'swing'
    }, options);
    return this.each(function () {
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({scrollTop: scrollY}, parseInt(settings.duration), settings.easing, function () {
            if (typeof callback == 'function') {
                callback.call(this);
            }
        });
    });
};

$(document).ready(function () {
    $("#doctorTypeSelect").change(function () {
        if ($(this).val() == 'Select Doctor Type') return;

        $.ajax({
                type: "GET",
                url: "http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors"
            })
            .then(function (doctors) {
                return $.ajax({
                    type: "POST",
                    url: "/updateResults",
                    data: {"doctors": doctors}
                });
            })
            .then(function (data) {
                $('#searchResults').html(data);
                $('body').scrollTo('#searchResults');
            });

    });
});

//$('#doctorSearch').submit(function (event) {
//    event.preventDefault();
//    var $inputs = $('#doctorSearch :input');
//
//    // TODO use this value when searching for doctors
//    var search = $inputs[1].value;
//
//    $.ajax({
//            type: "GET",
//            url: "http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors"
//        })
//        .then(function (doctors) {
//            return $.ajax({
//                type: "POST",
//                url: "/updateResults",
//                data: {"doctors": doctors}
//            });
//        })
//        .then(function (data) {
//            $('#searchResults').html(data);
//            $('body').scrollTo('#searchResults');
//        });
//
//});
//})
//;