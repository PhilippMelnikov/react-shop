$(function() {
	var sidebarIn = false;
	$(".hamburger").click(function(){
		if(!sidebarIn)
		{
			$(".sidebar").addClass("slide-in");
		}
		else
		{
			$(".sidebar").removeClass("slide-in");
		}
		sidebarIn = !sidebarIn;
	});

	$("#psearch").change(function() {
    if(this.checked) {
        $(".search").addClass("slide-input");
    }
    else
    {
    	$(".search").removeClass("slide-input");
    }
	});

});