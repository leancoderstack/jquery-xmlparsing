$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "people.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('people>name').each(function (index) {
                var html = '<p>' + $(this).text() + '</p>';
                
                if (index == 0) {
                    $('#people').html(html);
                }
                else {
                    $(html).appendTo('#people');
                }
            });
        }
    });
});
