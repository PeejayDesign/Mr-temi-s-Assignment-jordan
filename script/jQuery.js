$(document).ready(function () {
  
    // FETCHING DATA FROM JSON FILE
    $.getJSON("/Result.JSON", 
            function (data) {
        var student = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' + 
                value.userId + '</td>';

            student += '<td>' + 
                value.id + '</td>';

            student += '<td>' + 
                value.title + '</td>';

            student += '<td>' + 
                value.body + '</td>';
                student += '</tr>';
            });
              
            //INSERTING ROWS INTO TABLE 
            $('#table').append(student);
        });
    });