define(['jquery'], function() {
	$(document).ready(function() {
		//全選
		$('.prolist_operate').find('.check').click(function() {
			var $this = $(this);
			if ($this.find('i').hasClass('icon-checked')) {
				$('.prolist_operate').find('.check i').removeClass('icon-checked');
				$('.prolist_list ').find('.check i').removeClass('icon-checked');
				$this.parents('.prolist_list').removeClass('active');
			} else {
				$('.prolist_operate').find('.check i').addClass('icon-checked');
				$('.prolist_list ').find('.check i').addClass('icon-checked');
				$this.parents('.prolist_list').addClass('active');
			}
		});
		//單選
		$('.prolist_list ').find('.check').click(function() {
			var $this = $(this);
			if ($this.find('i').hasClass('icon-checked')) {
				$this.find('i').removeClass('icon-checked');
				$this.parents('.prolist_list').removeClass('active');
			} else {
				$this.find('i').addClass('icon-checked');
				$this.parents('.prolist_list').addClass('active');
			}

		});
		$('.prolist_list ').find('.check').click(function() {
			var prolistLenght = $('.prolist_list ').length;
			var icheckedLenght = $('.prolist_list ').has('.icon-checked').length;
			if (prolistLenght == icheckedLenght) {
				$('.prolist_operate').find('.check i').addClass('icon-checked');
			} else {
				$('.prolist_operate').find('.check i').removeClass('icon-checked');
			}
		});

	});
});