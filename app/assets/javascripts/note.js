$(document).ready(function() {
	$(document).on("submit", "form", function(){
		$.post($(this).attr("action"), $(this).serialize(), function(response) {
			$("#notes").html(response);
		})
		return false;
	})
})