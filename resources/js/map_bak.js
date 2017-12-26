var spot = [{isBo:false,name:"임진강4",id:"1023A25"},
	{isBo:false,name:"가양",id:"1019A05"},
	{isBo:false,name:"노량진",id:"1018A52"},
	{isBo:false,name:"팔당댐",id:"1017A10"},
	{isBo:false,name:"의암댐",id:"1013A40"},
	{isBo:false,name:"경안천5",id:"1016A70"},
	{isBo:false,name:"소양강2",id:"1012A40"},
	{isBo:false,name:"삼봉리",id:"1015A60"},
	{isBo:false,name:"강상",id:"1007A75"},
	{isBo:true,name:"이포보",id:"1007A60"},
	{isBo:true,name:"여주보",id:"1007A27"},
	{isBo:true,name:"강천보",id:"1007A20"},
	{isBo:false,name:"섬강4-1",id:"1006A80"},
	{isBo:false,name:"달천4",id:"1004A60"},
	{isBo:false,name:"충주댐",id:"1003A74"},
	{isBo:false,name:"영월2",id:"1003A05"},
	{isBo:false,name:"안성천3",id:"1101A25"},
	{isBo:false,name:"안동1",id:"2001A60"},
	{isBo:false,name:"반변천2-1",id:"2002A50"},
	{isBo:false,name:"안동3",id:"2003A30"},
	{isBo:false,name:"내성천3-1",id:"2004A90"},
	{isBo:true,name:"상주보",id:"2007A25"},
	{isBo:true,name:"낙단보",id:"2009A05"},
	{isBo:false,name:"상주3",id:"2009A10"},
	{isBo:true,name:"구미보",id:"2009A30"},
	{isBo:true,name:"칠곡보",id:"2011A25"},
	{isBo:false,name:"왜관",id:"2011A30"},
	{isBo:true,name:"강정고령보",id:"2011A55"},
	{isBo:false,name:"금호강6",id:"2012A70"},
	{isBo:false,name:"고령",id:"2014A20"},
	{isBo:true,name:"달성보",id:"2014A25"},
	{isBo:true,name:"합천창녕보",id:"2014A70"},
	{isBo:false,name:"남강4-1",id:"2019A80"},
	{isBo:false,name:"남지",id:"2020A10"},
	{isBo:true,name:"창녕함안보",id:"2020A32"},
	{isBo:false,name:"물금",id:"2022A10"},
	{isBo:false,name:"구포",id:"2022A35"},
	{isBo:false,name:"학성",id:"2201A48"},
	{isBo:false,name:"형산강4",id:"2101A60"},
	{isBo:false,name:"옥천",id:"3006A10"},
	{isBo:false,name:"대청댐",id:"3008A40"},
	{isBo:false,name:"갑천5-1",id:"3009A80"},
	{isBo:false,name:"청원-1",id:"3010A20"},
	{isBo:false,name:"미호천6-1",id:"3011A97"},
	{isBo:true,name:"세종보",id:"3012A07"},
	{isBo:false,name:"공주1",id:"3012A20"},
	{isBo:true,name:"공주보",id:"3012A32"},
	{isBo:true,name:"백제보",id:"3012A42"},
	{isBo:false,name:"부여1",id:"3012A60"},
	{isBo:false,name:"논산천4",id:"3013A50"},
	{isBo:false,name:"곡교천2",id:"3101A60"},
	{isBo:false,name:"김제",id:"3301A55"},
	{isBo:false,name:"동진강3",id:"3302A40"},
	{isBo:false,name:"적성",id:"4004A10"},
	{isBo:false,name:"주암댐",id:"4007A40"},
	{isBo:false,name:"보성천-1",id:"4008A20"},
	{isBo:false,name:"구례",id:"4009A30"},
	{isBo:false,name:"하동",id:"4009A50"},
	{isBo:false,name:"담양",id:"5001A10"},
	{isBo:false,name:"우치",id:"5001A20"},
	{isBo:false,name:"광주1",id:"5001A40"},
	{isBo:false,name:"황룡강3-1",id:"5002A40"},
	{isBo:false,name:"지석천4",id:"5003A60"},
	{isBo:true,name:"승촌보",id:"5004A10"},
	{isBo:false,name:"나주",id:"5004A20"},
	{isBo:true,name:"죽산보",id:"5004A35"},
	{isBo:false,name:"무안2",id:"5008A10"},
	{isBo:false,name:"탐진강3",id:"5101A55"}];

var timeObj = "";
var _spotCnt = - 1;
var _spotCntBo = 0;
var isAutoPlay = false;
var gridObj = [];
var spotBo = [];
var isAutoBo = true;

var allAutoPlay = true;

$(document).ready(function(){
  
	/*var testValue = 1;
	console.info($("li[id=11]").length);*/
	
	//초기 DB 연동
	getGridData(false);
	
	//DB 동기화 - 1시간
	timerObj = setInterval(function(){
		getGridData(true);
	}, 3600000);
	
	
	//처음 값 세팅
	var listFilter = spot.filter(function (el){
        return el.isBo == true
    });
	
	spotBo = listFilter;
	
	$("#" + spotBo[_spotCntBo].id).find('div').show();
	$("#" + spotBo[_spotCntBo].id).siblings().find('div').hide();
	
	autoPlayBo();
	showGrid(spotBo[_spotCntBo].id);
	
	$("#preBtn").click(function(){
		alert("1");
	});
	
	$("#nextBtn").click(function(){
		alert("2");
	});
	
	//일반 지점 마우스 이벤트
	$("#point> li").mouseover(function () {
		var me = this;
		
		$(me).find('div').show();
		$(me).siblings().find('div').hide();
		$(".point2>li").find('div').hide();
		
		stopPlay();
		showGrid(me.id);
		
		if(isAutoBo){
			var listFilter = spotBo.map(function (el){
		        return el.id
		    }).indexOf(me.id);
			
			if(listFilter!=-1){
				_spotCntBo = listFilter;
			}
		}else{
			var listFilter = spot.map(function (el){
		        return el.id
		    }).indexOf(me.id);
			
			_spotCnt = listFilter;
		}
		
	});
	
	$("#point> li").mouseout(function(){
		if(isAutoBo){
			autoPlayBo();
		}else{
			autoPlay();
		}
		
	});
	
	
	//보 지점 마우스 이벤트
	$("#point2> li").mouseover(function () {
		var me = this;
		
		$(me).find('div').show();
		$(me).siblings().find('div').hide();
		$(".point>li").find('div').hide();
		
		stopPlay();
		showGrid(me.id);
		
		if(isAutoBo){
			var listFilter = spotBo.map(function (el){
		        return el.id
		    }).indexOf(me.id);
			
			//console.info(listFilter);
			if(listFilter!=-1){
				_spotCntBo = listFilter;
			}
		}else{
			var listFilter = spot.map(function (el){
		        return el.id
		    }).indexOf(me.id);
			
			_spotCnt = listFilter;
		}
	});
	
	$("#point2> li").mouseout(function(){
		if(isAutoBo){
			autoPlayBo();
		}else{
			autoPlay();
		}
	});
	
	//재생 버튼 이벤트
	$("#playBtn").click(function(){
		
		if(allAutoPlay){
			allAutoPlay = false;
			$(this).removeClass("btn_stop");
			$(this).addClass("btn_play");
			
			stopPlay();
		}else{
			allAutoPlay = true;
			$(this).removeClass("btn_play");
			$(this).addClass("btn_stop");
			
			if(isAutoBo){
				autoPlayBo();
			}
			
			if(isAutoPlay){
				autoPlay();
			}
			
		}
		
		//autoPlay();
		
	});
	
	$("#btn_type> a").click(function(){
		//alert("1");
		if(this.id=="all"){
			isAutoPlay = true;
			isAutoBo = false;
		}else{
			isAutoPlay = false;
			isAutoBo = true;
		}
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	});
	
	
	//css
	$(".hanRiver").mouseover(function () {
		$(".img1").fadeIn(500);
		$(".img1").siblings().fadeOut(500);
	});
	
	$(".geumRiver").mouseover(function () {
		$(".img2").fadeIn(500);
		$(".img2").siblings().fadeOut(500);
	});
	
	$(".nakdongRiver").mouseover(function () {
		$(".img3").fadeIn(500);
		$(".img3").siblings().fadeOut(500);
	});
	
	$(".yeongsanRiver").mouseover(function () {
		$(".img4").fadeIn(500);
		$(".img4").siblings().fadeOut(500);
	});
	
	$(".hanRiver, .menu1").click(function () {
		alert("hanRiver");
      $(".view1, .point_lv2 a").show();
      $(".view1").siblings().hide();
   });
   
   $(".geumRiver, .menu2").click(function () {
	   alert("geumRiver");
      $(".view2, .point_lv2 a").show();
      $(".view2").siblings().hide();
   });
   
   $(".nakdongRiver, .menu3").click(function () {
	   alert("nakdongRiver");
      $(".view3, .point_lv2 a").show();
      $(".view3").siblings().hide();
   });
   
   $(".yeongsanRiver, .menu4").click(function () {
	   alert("yeongsanRiver");
      $(".view4, .point_lv2 a").show();
      $(".view4").siblings().hide();
   });
   
   $(".hanRiver, .geumRiver, .nakdongRiver, .yeongsanRiver, .menu1, .menu2, .menu3, .menu4").click(function () {
      $(this).parents().parents().find('.menu').show();
      $(this).parents().parents().parents().find('#top_btn').show();
   });
   
	$(".all").click(function () {
		alert("all");
		$(".defualt, .point, .point2").show();
		$(this).parents().find(".view1, .view2, .view3, .view4").hide();
	});
});

//----------------------------------------------------------------
//자동 재생 - 5초
//----------------------------------------------------------------
function autoPlay(){
	if(allAutoPlay){
		timerObj = setInterval(function(){
			
			if(isAutoBo){
				stopPlay();
				autoPlayBo();
				return;
			}
			
			if(_spotCnt < spot.length - 1){
				_spotCnt++;
			}else{
				//index 배열 사이즈 보다 클 시 다시 index 0으로 변경
				_spotCnt = 0;
			}
			if(!spot[_spotCnt].isBo){
				$(".point2>li").find('div').hide();
				
			}else{
				$(".point>li").find('div').hide();
			}
			
			$("#" + spot[_spotCnt].id).find('div').show();
			$("#" + spot[_spotCnt].id).siblings().find('div').hide();

			showGrid(spot[_spotCnt].id);

		}, 5000);
	}else{
		stopPlay();
	}
}

//----------------------------------------------------------------
//자동 재생 보 - 5초
//----------------------------------------------------------------
function autoPlayBo(){
	if(allAutoPlay){
		timerObj = setInterval(function(){
			
			if(isAutoPlay){
				stopPlay();
				autoPlay();
				return;
			}
			
			if(_spotCntBo < spotBo.length - 1){
				_spotCntBo++;
			}else{
				//index 배열 사이즈 보다 클 시 다시 index 0으로 변경
				_spotCntBo = 0;
			}
			
			$(".point>li").find('div').hide();
			
			$("#" + spotBo[_spotCntBo].id).find('div').show();
			$("#" + spotBo[_spotCntBo].id).siblings().find('div').hide();

			showGrid(spotBo[_spotCntBo].id);

		}, 5000);
	}else{
		stopPlay();
	}
}

//----------------------------------------------------------------
//자동 재생 정지
//----------------------------------------------------------------
function stopPlay(){
	clearInterval(timerObj);
}

//----------------------------------------------------------------
//표 - DB값 구분
//----------------------------------------------------------------
function showGrid(id){
	
	//기본 object
	var listFilter = spot.filter(function (el){
        return el.id == id
    });
	
	// db object
	var objFilter = gridObj.filter(function (el){
        return el.PT_NO == id
    });
	
	$("#spotTitle").text(listFilter[0].name);
	
	if(listFilter[0].isBo){
		$("#grid01text").text("수질예보제");
	}else{
		$("#grid01text").text("일반측정항목");
	}
	
	
	showGrid01(listFilter,objFilter);
	
	showGrid02(listFilter,objFilter);
	
    showGrid03(objFilter);
    
	
}

//----------------------------------------------------------------
//DB 호출
//----------------------------------------------------------------
function getGridData(async){
	
	
	
	$.ajax({
		type:"POST",
		url:"./resources/jsp/GetGridData.jsp",
		async: async,
		success:function(response){
			var obj = JSON.parse(response).data;
			gridObj = obj;
			
		},complete:function(){
	    	$('#mask').hide();
	    }
	});
}

//----------------------------------------------------------------
//첫번째 표
//----------------------------------------------------------------
function showGrid01(listFilter,objFilter){

	var html = "";
	
	html+="<tr>                                                                  ";
	html+="    <th rowspan='9'>" + objFilter[0].WMYMD + "</th>                       ";
	html+="    <td>BOD(mg/L)</td>                                      ";
	
	if(objFilter[0].ITEM_VALUE_1 != " "){
		html+="    <td>" + parseFloat(objFilter[0].ITEM_VALUE_1).toFixed(1) + "</td>                                                  ";
	}else{
		html+="    <td>" + objFilter[0].ITEM_VALUE_1 + "</td>                                                  ";
	}
	
	html+="</tr>                                                                 ";
	html+="<tr class='st2'>                                                    ";
	html+="    <td>COD(mg/L)</td>                                      ";
	
	if(objFilter[1].ITEM_VALUE_1 != " "){
		html+="    <td>" + parseFloat(objFilter[1].ITEM_VALUE_1).toFixed(1) + "</td>                                            ";
	}else{
		html+="    <td>" + objFilter[1].ITEM_VALUE_1 + "</td>                                            ";
	}
	
	html+="</tr>                                                                 ";
	html+="<tr>                                                                  ";
	html+="    <td>수온(℃)</td>                                       ";
	if(objFilter[2].ITEM_VALUE_1 != " "){
		html+="    <td>" + parseFloat(objFilter[2].ITEM_VALUE_1).toFixed(1) + "</td>                                            ";
	}else{
		html+="    <td>" + objFilter[2].ITEM_VALUE_1 + "</td>                                            ";
	}
	html+="</tr>                                                                 ";
	html+="<tr class='st2'>                                                    ";
	html+="    <td>총인(mg/L)</td>                                       ";
	
	if(objFilter[3].ITEM_VALUE_1 != " "){
		html+="    <td>" + parseFloat(objFilter[3].ITEM_VALUE_1).toFixed(3) + "</td>                                            ";
	}else{
		html+="    <td>" + objFilter[3].ITEM_VALUE_1 + "</td>                                            ";
	}
	html+="</tr>                                                                 ";
	html+="<tr>                                                                  ";
	html+="    <td>총질소(mg/L)</td>                                       ";
	
	if(objFilter[4].ITEM_VALUE_1 != " "){
		html+="    <td>" + parseFloat(objFilter[4].ITEM_VALUE_1).toFixed(3) + "</td>                                            ";
	}else{
		html+="    <td>" + objFilter[4].ITEM_VALUE_1 + "</td>                                            ";
	}
	
	html+="</tr>                                                                 ";
	html+="<tr class='st2'>                                                    ";
	html+="    <td>클로로필-a(mg/m<sup>3</sup>)</td>                                    ";
	
	if(objFilter[5].ITEM_VALUE_1 != " "){
		html+="    <td>" + parseFloat(objFilter[5].ITEM_VALUE_1).toFixed(1) + "</td>                                            ";
	}else{
		html+="    <td>" + objFilter[5].ITEM_VALUE_1 + "</td>                                            ";
	}
	
	html+="</tr>                                                                 ";

	if(listFilter[0].isBo){
		//console.info(objFilter[6].ITEM_VALUE_1);
		html+="<tr>                                                                  ";
		html+="    <td>유해남조류(cells/mL)</td>         ";
		
		if(objFilter[6].ITEM_VALUE_1 != " "){
			html+="    <td>" + parseFloat(objFilter[6].ITEM_VALUE_1).toFixed(0) + "</td>                                            ";
		}else{
			html+="    <td>" + objFilter[6].ITEM_VALUE_1 + "</td>                                            ";
		}
		
		html+="</tr>                                                                 ";
		html+="<tr class='st2'>                                                    ";
		html+="    <td>DO(mg/L)</td>                            ";
		if(objFilter[7].ITEM_VALUE_1 != " "){
			html+="    <td>" + parseFloat(objFilter[7].ITEM_VALUE_1).toFixed(1) + "</td>                                            ";
		}else{
			html+="    <td>" + objFilter[7].ITEM_VALUE_1 + "</td>                                            ";
		}
		html+="</tr>                                                                 ";

	}else{
		html+="<tr>                                                    ";
		html+="    <td>DO(mg/L)</td>                            ";
		
		if(objFilter[6].ITEM_VALUE_1 != " "){
			html+="    <td>" + parseFloat(objFilter[6].ITEM_VALUE_1).toFixed(1) + "</td>                                            ";
		}else{
			html+="    <td>" + objFilter[6].ITEM_VALUE_1 + "</td>                                            ";
		}
		html+="</tr>                                                                 ";
	}

	$("#grid01").html(html);
}

//----------------------------------------------------------------
//두번째 표
//----------------------------------------------------------------
function showGrid02(listFilter,objFilter){
	
	// 수심 데이터 필터
	var grid02Obj = objFilter.filter(function (el){
        return el.NO == 2
    });
	
	// 수심 데이터 수심별 sort
	var sortGrid02 = grid02Obj.sort(function (a, b) {
		  return a.ITEM_NM - b.ITEM_NM;
	});
	
	if(listFilter[0].isBo && listFilter[0].id!="1007A20" && listFilter[0].id!="1007A27" && listFilter[0].id!="3012A07"){
		$("#grid02text").show();
		$("#grid02").show();
		
		var html = "";
		
		for(var i = 0; i < sortGrid02.length; i++){
			
			if(i%2==0){
				html+="<tr>                                                ";
			}else{
				html+="<tr class='st2'>                                                ";
			}
			
			
			if(i==0){
				html+="    <th rowspan='12'>" + sortGrid02[i].WMYMD + "</th>   ";
			}
		    
		    html+="    <td>" + sortGrid02[i].ITEM_NM + "</td>                              ";
		    
		    if(sortGrid02[i].ITEM_VALUE_1 != " "){
		    	html+="    <td>" + parseFloat(sortGrid02[i].ITEM_VALUE_1).toFixed(1) + "</td>                          "; //수온
		    }else{
		    	html+="    <td>" + sortGrid02[i].ITEM_VALUE_1 + "</td>                          "; //수온
		    }
		    
		    if(sortGrid02[i].ITEM_VALUE_2 != " "){
		    	html+="    <td>" + parseFloat(sortGrid02[i].ITEM_VALUE_2).toFixed(1) + "</td>                          "; //pH
		    }else{
		    	html+="    <td>" + sortGrid02[i].ITEM_VALUE_2 + "</td>                          "; //pH
		    }
		    
		    if(sortGrid02[i].ITEM_VALUE_3 != " "){
		    	html+="    <td>" + parseFloat(sortGrid02[i].ITEM_VALUE_3).toFixed(1) + "</td>                          "; //DO
		    }else{
		    	html+="    <td>" + sortGrid02[i].ITEM_VALUE_3 + "</td>                          "; //DO
		    }
		    
		    if(sortGrid02[i].ITEM_VALUE_4 != " "){
		    	html+="    <td>" + parseFloat(sortGrid02[i].ITEM_VALUE_4).toFixed(0) + "</td>                          "; //전기전도도
		    }else{
		    	html+="    <td>" + sortGrid02[i].ITEM_VALUE_4 + "</td>                          "; //전기전도도
		    }
		    
		    
		    if(sortGrid02[i].ITEM_VALUE_5 != " "){
		    	html+="    <td>" + parseFloat(sortGrid02[i].ITEM_VALUE_5).toFixed(1) + "</td>                          "; //클로로필 - a
		    }else{
		    	html+="    <td>" + sortGrid02[i].ITEM_VALUE_5 + "</td>                          "; //클로로필 - a
		    }
		    
		    html+="</tr>                                               ";
		}
		
		$("#grid02_detail").html(html);
	}else{
		$("#grid02text").hide();
		$("#grid02").hide();
	}
}

//----------------------------------------------------------------
//세번째 표
//----------------------------------------------------------------
function showGrid03(objFilter){
	var grid03Obj = objFilter.filter(function (el){
        return el.NO == 3
    });
	
	
	if(grid03Obj.length!=0){
		
		$("#grid03text").show();
		$("#grid03").show();

		var html = "";
		var brText = grid03Obj[0].WMYMD.split("(");
		var brText2 = grid03Obj[1].WMYMD.split("(");
		
		html+=" <tr>                                                                                              ";
		html+="    <th rowspan='2'>" + brText[0] + "<br/>(" + brText[1] + "</th>                         ";
		html+="    <td rowspan='2' style='border-bottom: 1px solid #2a2b34;'>" + grid03Obj[0].ITEM_NM + "</td>   ";
		html+="    <td>종수</td>                                                                             ";
		html+="    <td>개체수</td>                                                                          ";
		html+="    <td>우점종(비율)</td>                                                                          ";
		html+="    <td>아우점종(비율)</td>                                                                             ";
		html+="    <td>비고</td>                                                                             ";
		html+="</tr>                                                                                              ";
		html+="<tr class='st2' style='border-bottom: 1px solid #2a2b34;'>                        ";
		html+="    <td>" + grid03Obj[0].ITEM_VALUE_1 + "</td>                                                                               ";
		html+="    <td>" + grid03Obj[0].ITEM_VALUE_2 + "</td>                                                                                 ";
		html+="    <td>" + grid03Obj[0].ITEM_VALUE_3 + "</td>                                                                             ";
		html+="    <td>" + grid03Obj[0].ITEM_VALUE_4 + "</td>                                                                 ";
		html+="    <td>" + grid03Obj[0].ITEM_VALUE_5 + "</td>                                                                 ";
		html+="</tr>                                                                                              ";
		html+="<tr>                                                                                               ";
		html+="    <th rowspan='2'>" + brText2[0] + "<br/>(" + brText2[1] + "</th>                         ";
		html+="    <td rowspan='2'>" + grid03Obj[1].ITEM_NM + "</td>                                                      ";
		html+="    <td>종수</td>                                                                             ";
		html+="    <td>개체밀도(개체/m<sup>2</sup>)</td>                                        ";
		html+="    <td>우점종(비율)</td>                                                                          ";
		html+="    <td>아우점종(비율)</td>                                                                          ";
		html+="    <td>비고</td>                                                                             ";
		html+="</tr>                                                                                              ";
		html+="<tr class='st2'>                                                                                 ";
		html+="    <td>" + grid03Obj[1].ITEM_VALUE_1 + "</td>                                                                               ";
		html+="    <td>" + grid03Obj[1].ITEM_VALUE_2 + "</td>                                                                                 ";
		html+="    <td>" + grid03Obj[1].ITEM_VALUE_3 + "</td>                                                                             ";
		html+="    <td>" + grid03Obj[1].ITEM_VALUE_4 + "</td>                                                                         ";
		html+="    <td>" + grid03Obj[1].ITEM_VALUE_5 + "</td>                                                                         ";
		html+="</tr>                                                                                              ";
		
		$("#grid03_detail").html(html);
		
	}else{
		$("#grid03text").hide();
		$("#grid03").hide();
	}
}
