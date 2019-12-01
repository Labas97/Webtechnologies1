$(document).ready(function () {
    $.get('/manufacturers', function (manufacturers) {
        for (var i = 0; i < manufacturers.length; i++) {
            $('.manufacturer-list').append('<li class="manufacturer-list-elem" data-m="' + manufacturers[i].name + '">' + manufacturers[i].name + '<small>Alapitva ' + manufacturers[i].country + ', ' + manufacturers[i].founded + '</small></li>');
        }
    });


    $(document).on('click', '.manufacturer-list-elem', function (e) {
        var _this = $(this);

        if (_this.hasClass('opened')) {
            _this.find('ul').remove();
            _this.removeClass('opened');
            return;
        }

        _this.addClass('opened');
        document.cookie = 'name=' + _this.attr('data-m');
        $.get('/manufacturer', function (cars) {
            _this.append('<ul class="m-cars"></ul>');
            for (var car of cars) {
                _this.find('.m-cars').append('<li>' + car.name + '</li>');
            }
        });
    });

    $('#addNewManufacturerBtn').on('click', function () {
        $.get('/partials/new-manufacturer.html', function (modal) {
            $('body').append(modal);
        });
    });

    $('#addCarBtn').on('click', function () {
        $.get('/partials/new-car.html', function (modal) {
            $('body').append(modal);
        });
    });

    $('#listCars').on('click',function(){
        $.getJSON("cars", function(data){
            var table = $("<table></table>");
            table.append("<tr><th>Gyarto</th><th>Nev</th><th>Szin</th><th>Evjarat</th><th>Elerheto</th><th>Loero</th></tr");

            $.each(data, function(key, value){
                var row = $("<tr></tr>");
                var manufacturerCell = $("<td>" + value.manufacturer + "</td>");
                var nameCell = $("<td>" + value.name + "</td>");
                var colorCell = $("<td>" + value.color + "</td>");
                var yearCell = $("<td>" + value.year + "</td>");
                var availableCell = $("<td>" + value.available + "</td>");
                var horsepowerCell = $("<td>" + value.horsepower + "</td>");

                row.append(manufacturerCell);
                row.append(nameCell);
                row.append(colorCell);
                row.append(yearCell);
                row.append(availableCell);
                row.append(horsepowerCell);
                table.append(row);
            });

            $(".manufacturer-list").html(table);
        });
    });


    $(document).on('click', '.modal-close', function () {
        $('.modal').remove();
    });
});



