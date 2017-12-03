$(function() {
    $('button').click(function(e) {
        var user = $('#txtUsername').val();
        var pass = $('#txtPassword').val();
        $.ajax({
            url: '/signUpUser',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

$.ajax({
	type: "Post",
	url: "~/find_news.py",

})
getData(x, y) {
	....

	return {
		title: 'BLah does that...',
		source: 'KC Star',
		timestamp: '19 hours ago',
		caption: 'sdklfj...',
		image: '<url>'
	}
}
