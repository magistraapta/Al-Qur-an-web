$('#search-btn').on('click', function () {
    $.ajax({
        type: "get",
        url: "http://api.alquran.cloud",
        
        dataType: "json",
        success: function (response) {
            console.log(response.data);
        }
    });  
});