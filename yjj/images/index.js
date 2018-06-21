$(function() {

	function serverbianh() {
		var serveritemswid = $('.thewida a').width();
		myhei = Math.floor((serveritemswid / 2));
		//console.log(serveritemswid)
		$('.thewida a').css('height', myhei + 'px');
	}
	serverbianh();
	$(window).resize(function() {
			serverbianh();
	})
	$('.serveritems a').hover(function(){
		$(this).addClass('hsbg')
	},function(){
		$('.serveritems a').removeClass('hsbg')
		
	})
	$('.scienul li').hover(function(){
		$('.scienul li').removeClass('hsbg')
		$(this).addClass('hsbg')
	},function(){
		$('.scienul li').removeClass('hsbg')
		
	})
	$('.scirightul li').hover(function(){
		$('.scirightul li').removeClass('hsbg')
		$(this).addClass('hsbg')
	},function(){
		$('.scirightul li').removeClass('hsbg')
		
	})
	

	
})