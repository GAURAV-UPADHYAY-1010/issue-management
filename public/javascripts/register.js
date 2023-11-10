$('#registeration-form').on('submit', function (e) {
    e.preventDefault();

    const form = new FormData($(this)[0]);

    $.ajax({
        url: '/api/register',
        data: form,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            console.log(data)
        },
        error: function ({responseJSON}) {
            alert(responseJSON.message)
        }
    });
})