var pagesize = 10; //分页设置每页显示数量
var nowpage = 1; //初始时是多少页

var typenum; //获取地址栏
var listnum;
var itemnum;

var common = {
	//判断PC或者移动端
	equipment: navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),
	//初始化主页

	init: function() {
		if($('.articleinfolist').children('span').eq(1).text().trim()=="")
		{
			$('.articleinfolist').children('span').eq(1).text("深圳统计局");
		}
		
		function currentstyle(){
		
			var duiyintxt= $('.addlv1').text().trim();
		$('.navlist>li').children('a').each(function(i,el){
			if(duiyintxt==$(el).text())
			{	$('.navlist>li').eq(parseInt(typenum) + 1).children('span').show();
			}
			else if(duiyintxt=="")
			{
				$('.navlist').children('li').eq(0).find('span').show();
			}
			})
		}
			
			$("a[href]").click(function(){
			if(!common.equipment)
			{
				if($(this).attr('id')=='142747')
				{
					$(this).attr('href','http://www.sztj.gov.cn/fzlm/wzdh/gdtzym/')
				}
			}
			
	    var ym0=$(this).attr('href').replace(/^\s+|\s+$/g,"");
            var ym0_1=ym0.substring(0,1);
            var ym0_5=ym0.substring(0,5);
            var ym0_10=ym0.substring(0,10);
		var ym0_20=ym0.substring(0,22);
            var ym0_23=ym0.substring(0,25);
		var ym0_25=ym0.substring(0,27);
		var ym0_44=ym0.substring(0,46);
		if(ym0_23=="http://forum.sztj.gov.cn/" || ym0_1=="/" || ym0_1=="." || ym0_1=="#" || ym0_20=="http://www.sztj.gov.cn" || ym0_5=="index" || ym0_10=="javascript" || ym0_20=="http://yjx.sztj.gov.cn" || ym0_20=="http://ysq.sztj.gov.cn" || ym0_25=="http://wza.sztj.gov.cn:9000" || ym0_44=="http://203.91.55.40:9000/b5/www.sztj.gov.cn/cn" || ym0=="http://english.sztj.gov.cn/" || ym0=="http://opendata.sztj.gov.cn" || ym0=="http://mail.sztj.gov.cn/" || ym0=="http://irobot.zteict.com/irobot/szzfzx.htm?access_key=szzfzx")
		{
			return;
		}else{
			return confirm('您访问的链接即将离开“深圳统计局”门户网站，是否继续？');
		}
	});
	
	/* $('.logoicon a').click(function(){
		return confirm('您访问的链接即将离开“深圳统计局”门户网站，是否继续？');
	}) */
		var webwidth_img = $(window).width();
		//alert(webwidth_img)
		//移动端右上角
		$('.nav-itemsp').click(function() {
			var newwids=window.screen.width-$('.logoLeft').outerWidth(true)-$('.nav-itemsp').outerWidth(true);
			$('.logoRight').css('width',newwids+'px');
			if($(this).hasClass('ba_x')) {
				$(this).removeClass('ba_x');
				$('.level_list li').removeClass('addlvmore');
			} else {
				$(this).addClass('ba_x')
			}
			$('.navlist').show();
			$('.level_list').hide();
			if($('.navlist').hasClass('fadeInRight')) {
				$('.navlist').removeClass('fadeInRight').addClass('zoomOutRight');

			} else {
				$('.navlist').removeClass('zoomOutRight').addClass('fadeInRight');
			}
			$('.navlist>li').each(function() {
				if($(this).hasClass('addlv1')) {
					$(this).click()
				}
			})
		})
		if((webwidth_img <= 768)) { //移动导航点击功能
			$('.navlist li').click(function() {
				//已经存在子级直接操作
				common.addlevel($(this), '.level_list');
					
			});
			
			$('.navlist li a').click(function() {	
			if($(this).next('div').find('li').length>0||$(this).parent('li').next('div').find('li').length>0)
				{		
					$(this).attr('href','javascript:void(0)')
				}
			});
		} else if(webwidth_img > 768) //pc端导航点击功能
		{
			currentstyle();

			//$('.navlist>li').eq(0).addClass('navnowbg');
			$('.navlist>li').mouseover(function() {
				$('.navlist>li').find('span').hide();
				$('.navlist>li').removeClass('navnowbg')
				$('.navlist>li').children('div').hide();
				$(this).addClass('navnowbg');
				$(this).find('span').show();
				$(this).children('div').show();
			});
			$('.navlist>li').mouseout(function() {
				$(this).children('div').hide();
				$('.navlist>li').find('span').hide();
				$('.navlist>li').removeClass('navnowbg')
				currentstyle();
			});

			function GetUrlPath() {
				var url = document.location.toString();
				if(url.indexOf("/") != -1) {
					url = url.substring(0, url.lastIndexOf("/"));
				}
				return url;
			}

			$('.navlist>li>.level_list li a').click(function() {
				if($(this).attr('data-url')) {
					self.location.href = GetUrlPath() + "/" + $(this).attr('data-url');
				}

			});

		}


		$('.newslist').css({left:'100%'})
		$('.newslist').eq(0).animate({left:'0%'},'normal');
		$('.newtab p').click(function() {
			$('.newtab p').css({
				'color': '#666'
			});
			$('.newtab p').children('span').hide();
			$(this).css({
				'color': '#3584cf'
			});
			$(this).children('span').css({
				'display': 'inline-block'
			});
			var pindex=$(this).index();
			$('.more').hide();
			$('.more').eq(pindex).show();			
			$('.newslist').css({left:'100%'});			
			$('.newslist').eq(pindex).stop(true,true).animate({left:'0%'},'normal');
		})
			$('.functionality ul li').mouseover(function() {
			if($(this).parent('ul').hasClass('com-items')) {
				$('.functionality ul li').removeClass('com-items-add')
				$('.functionality .com-items li').find('p').css('color', '#666')
				$(this).addClass('com-items-add');

				$(this).find('p').css('color', '#fff');
			} else {
				$('.functionality ul li').css('background-color', 'rgba(0, 0, 0, .5)')
				$('.functionality .com-items  li').css('background-color', '#f2f2f2')
				$(this).css('background', '#3584cf');

			}

		})
		$('.functionality ul li').mouseout(function() {
				if(!$(this).parent('ul').hasClass('com-items')) {
					$(this).css('background-color', 'rgba(0, 0, 0, .5)')
				}

				
		})

		$('.functionality ul li a').mouseenter(function() {
			$('.functionality ul li a').find('i').addClass('leavebg')
			$(this).find('i').removeClass('leavebg');
			$(this).find('i').addClass('hoverbg');
			$(this).find('img').addClass('rubberBandd animated')
		})
		$('.functionality ul li a').mouseleave(function() {

			$(this).find('i').addClass('leavebg');
			if($(this).parent().parent('ul').hasClass('com-items'))
			{
				$(this).find('p').css('color', '#666')
			}
			
			$(this).find('img').removeClass('rubberBandd animated');
			$(this).parent('li').removeClass('com-items-add');
			
		})
		//轮播图响应式调整

		if(768 < webwidth_img) {
			$('.big_pic li img').css({
				'width': 620 + 'px',
				'height': 443 + 'px'
			});
			$('.big_pic li,.big_pic,#ChSlider').css({
				'width': 620 + 'px',
				'height': 566 + 'px'
			});

		} else if(620 <= webwidth_img && webwidth_img <= 768) {
			$('.newsleft').css('height', 443 + 120 + 'px');

			$('.big_pic li img').css({
				'width': 620 + 'px',
				'height': 443 + 'px'
			});
			$('.big_pic li,#ChSlider,.big_pic').css({
				'width': 620 + 'px',
				'height': 566 + 'px'
			});
			$('#ChSlider').addClass('chauto')

		} else if(webwidth_img < 620) {
			$('.newsleft').css('height', webwidth_img * 0.715 + 80 + 'px');
			$('.big_pic li img').css({
				'width': webwidth_img,
				'height': (webwidth_img * 0.715) + 'px'
			});
			$('.big_pic li,#ChSlider,.big_pic').css({
				'width': webwidth_img,
				'height': (webwidth_img * 0.715 + 80) + 'px'
			});
			$('.big_pic .prev,.big_pic .next').css({
				'top': (webwidth_img * 0.715 - 40) / 2 + 'px',
				'width': 40 + 'px',
				'height': 40 + 'px',
				'lineHeight': 39 + 'px'
			})
			
			
		}
		///end
			if((typeof pageid)!='undefined')
			{
			$('.datatypeend').text($('#'+pageid).text());
			}
		
		$('.fjstyle').each(function(){
			if($(this).text()=="")
			{
				$(this).hide();
			}
		
		})
			
		$('.tjsjyd').click(function(){
			if(common.equipment)
			{
				$(this).attr('href','http://www.sztj.gov.cn/fzlm/wzdh/tjsjsjd/')
			}
		})
		 
	
		
	},
	addlevel: function(obj, classlevel) { //无限列表展开功能		
		if(obj.next(classlevel).length > 0) { //如果有元素添加上去则显示隐藏
			if(obj.next(classlevel).is(':hidden')) {
				obj.siblings('.addlvmore').removeClass('addlvmore')
				obj.siblings('.addlv1').removeClass('addlv1')

				obj.siblings(classlevel).hide();

				obj.next(classlevel).show().addClass('animated fadeInDown');
			} else {

				obj.next(classlevel).hide();

			}

		} else { //如果没有元素添加则添加上去
			if(obj.children(classlevel).length > 0) {
				obj.siblings('.addlvmore').removeClass('addlvmore')
				obj.siblings('.addlv1').removeClass('addlv1')
				obj.siblings(classlevel).hide();
				obj.after(obj.children(classlevel).show().addClass('animated fadeInDown'));			
				levelstyle1();
		
			}
		}
		var lv_num = obj.next(classlevel).length > 0 ? obj.next(classlevel).parents(classlevel).length + 1 : 0;
		
		 function levelstyle1(){
			$('.navlist li').each(function(i,el){
				var lv_num1 = $(el).next('.level_list').length > 0 ? $(el).next('.level_list').parents('.level_list').length + 1 : 0;
				$(el).next('.level_list').find('li').css({
					'background-position-x': (lv_num1 - 1) * 20 + 10 + 'px',
					'text-indent': (lv_num1 - 1) * 20 + 30 + 'px'
				})
			})
		} 
		
		//如果是导航的最上级列表
		if(lv_num == 1) {
			if(obj.hasClass('addlv1')) {
				obj.removeClass('addlv1');
			} else {
				obj.addClass('addlv1');
			}

		}
		//如果是导航下面的子列表
		else if(lv_num>=2){
			if(obj.next(classlevel).length > 0) {
				$('.navlist li').removeClass('towlv')
				
				if(obj.next(classlevel).is(':hidden'))
				{
					obj.removeClass('towlv');
				}
				else
				{	obj.addClass('towlv');
					
				}
			}
			
		}

	},
	datalistaddlevel: function(obj, classlevel) { //无限列表展开功能  仅用于PC端的datalist页面。		
		if(obj.next(classlevel).length > 0) { //如果有元素添加上去则显示隐藏
			if(obj.next(classlevel).is(':hidden')) {

				obj.siblings('.addlvmore').removeClass('addlvmore')
				obj.siblings('.addlv1').removeClass('addlv1')

				obj.siblings(classlevel).slideUp();

				obj.next(classlevel).slideDown();

			} else {
				obj.next(classlevel).slideUp();

			}

		} else { //如果没有元素添加则添加上去
			if(obj.children(classlevel).length > 0) {
				obj.siblings('.addlvmore').removeClass('addlvmore')
				obj.siblings('.addlv1').removeClass('addlv1')
				obj.siblings(classlevel).slideUp();
				obj.after(obj.children(classlevel).slideDown());
					levelstyle();
					
			}
		}
		
		function levelstyle(){
			$('.datalist li').each(function(i,el){
				var lv_num = $(el).next('.data_level').length > 0 ? $(el).next('.data_level').parents('.data_level').length + 1 : 0;
				$(el).next('.data_level').find('li').children('a').css({
					'background-position-x': (lv_num - 1) * 20 + 10 + 'px',
					'text-indent': (lv_num - 1) * 20 + 30 + 'px'
				})
			})
		}
		
		var lv_num = obj.next(classlevel).length > 0 ? obj.next(classlevel).parents(classlevel).length + 1 : 0;
		//如果是导航的最上级列表
		if(lv_num == 1) {
			if(obj.hasClass('addlv1')) {
				obj.removeClass('addlv1');
			} else {
				obj.addClass('addlv1');
			}

		}
		//如果是导航下面的子列表
		else {
			if(obj.next(classlevel).length > 0) {
				if(obj.next(classlevel).find(classlevel).length > 0) {
					if(obj.hasClass('addlvmore')) {
						//obj.removeClass('addlvmore');
					} else {
						//obj.addClass('addlvmore');
					}
				}

			}
			
		}
		
		
		if(obj.next('.data_level').length>0)
			{
				if(obj.hasClass('addlv1'))
				{
					
				}
				else
				{
					if(obj.hasClass('yizksanj'))
				{
					obj.removeClass('yizksanj')
					
				}
				else
				{
					obj.addClass('yizksanj')
				}
				}
			}
		
	},
	datalist: function() { //datalist页面
		var webwidth_img = $(window).width();

		if(common.equipment && webwidth_img < 768) //移动端
		{
			$('.navolnylist').hide();

		} else //pc端
		{
			$('.data-more').hide();
		}
		//页面跳转时执行。。。。。。。
	
		
		$('.datalist li').each(function(i,el){
			if($(el).attr('id')==pageid)
			{
				$(el).addClass('myvsibbg');
				$(el).parents('li').each(function(){
					
					common.datalistaddlevel($(this), '.data_level');
					
				})
			}
		})
		
		$('.myvsibbg').parents('.data_level').prev('li').show();
	
	
		//详情多级列表点击功能 已经存在子级直接操作
		$('.datalist li').click(function() {	
			if($(this).hasClass('addlv1'))
			{
				return false;
			}
			else
			{
				common.datalistaddlevel($(this), '.data_level');
			}		
		});
			
			$('.datalist li a').click(function() {	
			if($(this).next('div').find('li').length>0||$(this).parent('li').next('div').find('li').length>0)
			{		
				$(this).attr('href','javascript:void(0)')
			}
			
		});
		common.page();
	},
	show: function(nowpage, pagesize) {
		$('.datalevel-items').find('li').each(function(i, el) {

			if((nowpage - 1) * pagesize <= i && i < (nowpage) * pagesize) {
				$(el).show();

			} else {
				$(el).hide();
			}
		})
	},
	showmore: function() {
		$('.datalevel-items').find('li:hidden').each(function(i,el){
			if(i<10)
			{
				$(el).show();
				$(el).parent('ul').slideDown();
			}
		})
	},
	page: function(nowel) {

		var listlength = $('.datalevel-items').find('li').length;
		var pagenum = Math.ceil(listlength / pagesize);
		$('.pagenum').text('总共' + pagenum + '页');
		$('.pagenow').text('当前第' + nowpage + '页');
		common.show(nowpage, pagesize);

		if($(nowel).hasClass('firstpage')) {
			nowpage = 1;
			$('.pagenow').text('当前第' + nowpage + '页');
			common.show(nowpage, pagesize);
		}
		if($(nowel).hasClass('endpage')) {
			nowpage = pagenum;
			$('.pagenow').text('当前第' + nowpage + '页');
			common.show(nowpage, pagesize);
		}
		if($(nowel).hasClass('nextpage')) {

			if(nowpage >= pagenum) {

				return false;
			} else {
				nowpage += 1;
				$('.pagenow').text('当前第' + nowpage + '页');
				common.show(nowpage, pagesize);

			}

		}
		if($(nowel).hasClass('lastpage')) {
			if(nowpage == 1) {

				return false;
			} else {
				nowpage -= 1;
				$('.pagenow').text('当前第' + nowpage + '页');
				common.show(nowpage, pagesize);
			}

		}

	},
	slider: function() {
		var oDiv = document.getElementById('ChSlider');
		var oBtnPrev = document.getElementsByClassName('prev')[0];
		var oBtnNext = document.getElementsByClassName('next')[0];
		var oDivSmall = document.getElementsByClassName('small_pic')[0];
		var oUlSmall = oDivSmall.getElementsByTagName('ul')[0];
		var aLiSmall = oDivSmall.getElementsByTagName('li');
		var oUlBig = document.getElementsByClassName('big_pic')[0];
		var aLiBig = oUlBig.getElementsByTagName('li');
		var nowZIndex = 2;
		var now = 0;
		var webwidth = window.screen.width;

		function tab() {
			for(var i = 0; i < aLiBig.length; i++) {
				aLiBig[i].style.zIndex = 0;
			}
			aLiBig[now].previousElementSibling.style.zIndex = nowZIndex;
			aLiBig[now].style.zIndex = nowZIndex + 1;
			for(var i = 0; i < aLiSmall.length; i++) {
				startMove(aLiSmall[i], 'opacity', 60);
			}
			startMove(aLiSmall[now], 'opacity', 100);
			aLiBig[now].style.width = 0;
			if(webwidth >= 620) {
				startMove(aLiBig[now], 'width', 620);
			} else {
				startMove(aLiBig[now], 'width', webwidth);
			}
		}

		function getStyle(obj, name) {
			if(obj.currentStyle) {
				return obj.currentStyle[name];
			} else {
				return getComputedStyle(obj, false)[name];
			}
		}

		function startMove(obj, attr, iTarget) {
			clearInterval(obj.timer);
			obj.timer = setInterval(function() {
				var cur = 0;
				var speed;
				if(attr == 'opacity') {
					cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
				} else {
					cur = parseInt(getStyle(obj, attr));
				}
				speed = (iTarget - cur) / 6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(parseInt(cur) == parseInt(iTarget)) {
					clearInterval(obj.timer);
				} else {
					if(attr == 'opacity') {
						obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
						obj.style.opacity = (cur + speed) / 100;

					} else {
						if(navigator.userAgent.indexOf("Chrome") > -1) {
							obj.style[attr] = cur + speed + 1 + 'px';
						} else {
							obj.style[attr] = cur + speed + 'px';
						}

					}
				}
			}, 30);
		}
		oBtnPrev.onclick = function() {
			if(de == 1) {
				now--;
				if(now == -1) {
					now = aLiSmall.length - 1;
				}
				tab();
				delay();
			} else {
				return false;
			}
		};

		//事件一秒钟只会执行一次
		var de = 1;

		function delay() {
			de = 0;
			setTimeout(function() {
				de = 1;
			}, 1000)
		}
		//end
		oBtnNext.onclick = function() {

			if(de == 1) {
				now++;
				if(now == aLiSmall.length) {
					now = 0;
				}
				tab();
				delay();
			} else {
				return false;
			}
		};
		var timer = setInterval(oBtnNext.onclick, 3000);
		oDiv.onmouseover = function() {
			clearInterval(timer);
			$('.big_pic .next,.big_pic .prev').show();
		};
		oDiv.onmouseout = function() {
			timer = setInterval(oBtnNext.onclick, 3000);
			$('.big_pic .next,.big_pic .prev').hide();
		};
	}
}