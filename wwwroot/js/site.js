// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#get-fee').click(function (e) {

    e.preventDefault();
    $("#result").empty();

    var url = "/Home/GetFee";
    var data = {
        Vehicle: $('#vehicle').val()
    };
    $.ajax(
        {
            type: 'POST',
            url: url,
            dataType: 'text',
            cache: false,
            data: data
        }).fail(function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown + this.url);
        }).done(function (res, textStatus, jqXHR) {
            $("#result").append(`<h3>The vehicle has a fee of: ${res} kr</h3>`);
        });

});