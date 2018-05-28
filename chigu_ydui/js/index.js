! function($) {
	$('.shopselect .checkbox-all').click(function() { //购物车全选功能
		if($(this).find('input').get(0).checked == true) {
			$('.list-check').find('input').each(function(i, el) {
				$(el).prop('checked',true);
			})
		} else {
			$('.list-check').find('input').each(function(i, el) {
				$(el).prop('checked',false);
			})
		}
		aa();
	})

	var total = 0;

	function aa() {
		total = 0;
		$('.ischecked').find('input[type="checkbox"]').each(function(i, el) {
			if(el.checked == true&&$(el).parents('.list-item').is(":visible")) {
				total += parseFloat($(el).parents('.list-item').find('.list-price').prop('lastChild').nodeValue) * parseFloat($(el).parents('.list-item').find('.J_Input').val());
			}
		})
		$('.mid4').find('.list-price').text("¥ " +parseFloat(total).toFixed(2))

	}
	$('.ischecked input[type="checkbox"]').click(function() {
		aa();
	})

	$('.J_Quantity').spinner({
		input: '.J_Input',
		add: '.J_Add',
		minus: '.J_Del',
		unit: function() {
			return 1;
		},
		max: function() {
			return(1 + 2 + 3 + 4 + 5) * 5;
		},
		callback: function(value, $ele) {
			// $ele 当前文本框[jQuery对象]
			// $ele.css('background', '#FF5E53');
			console.log('值：' + value);
			aa();
		}
	});
	
	$('.btndel').click(function(){
		$('.list-check').find('input').each(function(i, el) {
			if(el.checked == true)
			{
				$(el).parents('.list-item').hide();
				aa()
			}
		})
	})
}(jQuery);