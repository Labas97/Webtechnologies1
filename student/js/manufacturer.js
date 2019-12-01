$('#newManufacturerForm').on('submit', function (event) {
    event.preventDefault();

    var name = $('#mName').val();
    var country = $('#mCountry').val();
    var founded = $('#mFounded').val();

    $.post('/addManufacturers', {
        name: name,
        country: country,
        founded: founded
    }, function (response) {
        console.log(response);
        alert("Sikeresen hozzaadta a gyartot!");
    }).fail(function(response) {
        alert('Sikertelen hozzaadas!');
    });
    
    $('.modal').remove();
});
