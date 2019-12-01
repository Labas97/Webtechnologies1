$.get('/manufacturerNames', function (names) {
    names.forEach(function (name) {
        $('#cManufacturer').append('<option value="' +  name + '">' + name + '</option>');
    });
});

$('#newCarForm').on('submit', function (event) {
    event.preventDefault();

    $.post('/addCar', {
        "name": $('#cName').val(),
        "consumption": $('#cConsumption').val(),
        "color": $('#cColor').val(),
        "manufacturer": $('#cManufacturer').val(),
        "year": $('#cYear').val(),
        "available": $('#cAvailable').val(),
        "horsepower": $('#cHorsepower').val()
    }, function (response) {
        console.log(response);
        alert('Sikeresen hozzaadta az autot!');
    }).fail(function (response) {
        alert('Sikertelen hozzaadas!');
    });
    
    $('.modal').remove();
});
