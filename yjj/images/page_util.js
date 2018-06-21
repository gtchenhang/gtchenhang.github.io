/*
//js分页代码 edit by guoyl 2008-05-06
document.writeln("<style type=\"text/css\">分页导航 123 ... 下一页之类");
document.writeln(".pageNum{position:relative;text-align:center;font-family:tahoma,arial,'bitstream vera sans',helvetica,sans-serif,'宋体';font-size:14px;width:620px;height:100%;overflow:hidden;color:#007FBE;float:left}");
document.writeln(".pageNum a{text-decoration:none;text-align:left;margin:0px 1px;padding:3px 5px 3px 5px;height:22px;background-color:#FCF9EA;border:1px solid #D6DAD9;color:#007FBE;line-height:24px;font-family:Arial,Sans,'宋体';}");
document.writeln(".pageNum a:hover{background-color:#017EBE;color:#fff;text-decoration:none;border:1px solid #017EBE;}");
document.writeln("</style>");
function createPageHTML(_nPageCount, _nCurrIndex, _sPageName, _sPageExt){
		if(_nPageCount == null || _nPageCount<=1){
			return;
		}

		var nCurrIndex = _nCurrIndex || 0;
		if(nCurrIndex == 0){
			document.write("首 页&nbsp;上一页&nbsp;1&nbsp;");
		}else{
			var nPreIndex = nCurrIndex - 1;
			var sPreFileExt = nPreIndex == 0 ? "" : ("_" + nPreIndex);

			document.write("<a href=\""+_sPageName+"."+_sPageExt+"\">首 页</a>&nbsp;");
			document.write("<a href=\"" + _sPageName + sPreFileExt + "."+_sPageExt+"\">上一页</a>&nbsp;");
			document.write("<a href=\""+_sPageName+"."+_sPageExt+"\">1</a>&nbsp;");
		}

		for(var i=1; i<_nPageCount; i++){
			if(nCurrIndex == i)
				document.write((i+1) + "&nbsp;");
			else
				document.write("<a href=\""+_sPageName+"_" + i + "."+_sPageExt+"\">"+(i+1)+"</a>&nbsp;");
		}

		// 3 输出下一页和尾页
		// 3.1 当前页是尾页
		if(nCurrIndex == (_nPageCount-1)){
			document.write("下一页&nbsp;尾 页");
		}
		// 3.2 当前页不是尾页
		else{
			var nNextIndex = nCurrIndex + 1;
			var sPreFileExt = nPreIndex == 0 ? "" : ("_" + nPreIndex);

			document.write("<a href=\""+_sPageName+"_" + nNextIndex + "."+_sPageExt+"\">下一页</a>&nbsp;");
			document.write("<a href=\""+_sPageName+"_" + (_nPageCount-1) + "."+_sPageExt+"\">尾 页</a>");
		}
	}
*/
function createPageHTML(_nPageCount, _nCurrIndex, _sPageName, _sPageExt){
	if(_nPageCount == null || _nPageCount<=1 || _nCurrIndex>=_nPageCount){
	return;
	}
	var nCurrIndex = _nCurrIndex || 0;
	var firstPage = "<a href=\""+_sPageName+"."+_sPageExt+"\" class=s1 target=_self>首 页</a>&nbsp;&nbsp;";
	var nextPage = "<a href=\""+_sPageName+"_"+(nCurrIndex+1)+"."+_sPageExt+"\" class=s1 target=_self>下一页</a>&nbsp;&nbsp;";
	var prePage = "<a href=\""+_sPageName+"."+_sPageExt+"\" class=s1 target=_self>上 页</a>&nbsp;&nbsp;";
	var prePage_1 = "<a href=\""+_sPageName+"_"+(nCurrIndex-1)+"."+_sPageExt+"\" class=s1 target=_self>上一页</a>&nbsp;&nbsp;";
	var lastPage = "<a href=\""+_sPageName+"_" +(_nPageCount-1)+"."+_sPageExt+"\" class=s1 target=_self>尾 页</a>&nbsp;&nbsp;";
	var firstPage_off = "<a href='javascript:void(0)' class=s2>首 页</a>&nbsp;&nbsp;";
	var nextPage_off = "<a href='javascript:void(0)' class=s2>下一页</a>&nbsp;&nbsp;";
	var prePage_off = "<a href='javascript:void(0)' class=s2>上一页</a>&nbsp;&nbsp;";
	var lastPage_off = "<a href='javascript:void(0)' class=s2>尾 页</a>&nbsp;&nbsp;";
	
	document.write("当前第<span class=font_red>"+(nCurrIndex+1)+"</span>页　总共<span class=font_red>"+_nPageCount+"</span>页 ");
	if(nCurrIndex == 0)
	{
		document.write(firstPage_off);
		document.write(prePage_off);
		document.write(nextPage);	
		document.write(lastPage);
		
	}
	else
		if(nCurrIndex==(_nPageCount-1))
		{
			document.write(firstPage);
			if(_nPageCount==2){
				document.write(prePage);
			}else{
				document.write(prePage_1);
			}
			document.write(nextPage_off);
			document.write(lastPage_off);
		}
		else
		{
			document.write(firstPage);
			if(nCurrIndex==1){
				document.write(prePage);
			}else{
				document.write(prePage_1);
			}
			document.write(nextPage);
			document.write(lastPage);
			
			document.write("<select name=\"select\" onchange=\"location.replace(this.value)\">");
			document.write("<option selected=\"selected\" >转到</option>");
			for(var i=0; i<_nPageCount; i++)
			{
				if(i==0){
					document.write("<option value=\""+_sPageName+"."+_sPageExt+"\">第1页</option>");
				}else{
					document.write("<option value=\""+_sPageName+"_" + i + "."+_sPageExt+"\">第"+(i+1)+"页</option>");
				}
			}
			document.write("</select>");
			
			
	}
}


//导航定位函数 20100920 add by guoyl
function curNav(id) {
		$("#headerNav > li a").addClass("nav_off");
		$("#headerNav > li a").removeClass("nav_on");
		$("#mynav"+id).addClass("nav_on");
	}

String.prototype.trim = function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
}


function IsURL(str_url){
  var strRegex = "^((https|http)+://)";
	var re=new RegExp(strRegex); 
	if (re.test(str_url)){
		return (true); 
	}else{ 
		return (false); 
	}
}

function ow(obj,w,h,t,l) { 
	URL=obj.href; 
	window.open(URL,'','width='+ w +',height='+ h + ',top='+t+',left='+l+',resizable=no,scrollbars=no,toolbars=no,status=no'); 
	return false; 
} 

function showRelDocs(_istable,istableurl,_absurl,desc){
	var istable = _istable || "";
	var istableurl = istableurl || "";
	if(istable!=""){
		document.writeln("<span>|</span>");
		document.writeln('<a onclick="return ow(this,450,300,200,300)" href="/cn/js2008/relBg.htm?from='+_absurl+'"  target="_blank">'+desc+'</a>');
	}else if (istableurl!="" && IsURL(istableurl)){
		document.writeln("<span>|</span>");
		document.writeln('<a href="'+istableurl+'" target="_blank">'+desc+'</a>');
	}
}