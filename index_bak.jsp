<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>수질 현황</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=7;IE=8;IE=9;IE=10;IE=11;IE=Edge;" />

<link rel="shortcut icon" href="./resources/images/mainico.ico" />
<link href="./resources/css/BasicSet.css" rel="stylesheet" type="text/css" />
<link href="./resources/css/map.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="./resources/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./resources/js/map.js"></script>
<!-- <style>
@import url("http://fonts.googleapis.com/earlyaccess/notosanskr.css");
</style> -->

<script type="text/javascript">
function chartTest(){
	window.open('./BC/Chart.jsp');
}


</script>
</head>
<body>
<div id="wrap">
	
  <div id="map">
  <!-- <input type="button" value="chart" onclick="chartTest();"/> -->
  	<a class="btn_stop" href="#" id="playBtn"></a>
  	<div id="btn_type">
         <a class="on" href="#" id="bo">보</a>
            <a href="#" id="all">전체</a>
        </div>
    	<ul class="point">
        	<!--한강-->
        	<li style="left: 302px; top: 200px;" id="1023A25"><div class="aa"></div><div class="ov01"></div><div class="nameBox">임진강4</div></li>
            <li style="left: 495px; top: 170px;" id="1012A40"><div class="aa"></div><div class="ov01"></div><div class="nameBox">소양강2</div></li>
            <li style="left: 470px; top: 195px;" id="1013A40"><div class="aa"></div><div class="ov01"></div><div class="nameBox">의암댐</div></li>
            <li style="left: 416px; top: 237px;" id="1015A60"><div class="aa"></div><div class="ov01"></div><div class="nameBox">삼봉리</div></li>
            <li style="left: 312px; top: 257px;" id="1019A05"><div class="aa"></div><div class="ov01"></div><div class="nameBox">가양</div></li>
            <li style="left: 340px; top: 275px;" id="1018A52"><div class="aa"></div><div class="ov01"></div><div class="nameBox">노량진</div></li>
            <li style="left: 386px; top: 267px;" id="1017A10"><div class="aa"></div><div class="ov01"></div><div class="nameBox">팔당댐</div></li>
            <li style="left: 400px; top: 288px;" id="1016A70"><div class="aa"></div><div class="ov01"></div><div class="nameBox">경안천5</div></li>
            <li style="left: 430px; top: 280px;" id="1007A75"><div class="aa"></div><div class="ov01"></div><div class="nameBox">강상</div></li>
            <li style="left: 489px; top: 330px;" id="1006A80"><div class="aa"></div><div class="ov01"></div><div class="nameBox">섬강4-1</div></li>
            <li style="left: 515px; top: 405px;" id="1004A60"><div class="aa"></div><div class="ov01"></div><div class="nameBox">달천4</div></li>
            <li style="left: 525px; top: 388px;" id="1003A74"><div class="aa"></div><div class="ov01"></div><div class="nameBox">충주댐</div></li>
            <li style="left: 622px; top: 353px;" id="1003A05"><div class="aa"></div><div class="ov01"></div><div class="nameBox">영월2</div></li>
            
            
            <!--금강-->
            <li style="left: 360px; top: 392px;" id="1101A25"><div class="aa"></div><div class="ov01"></div><div class="nameBox">안성천3</div></li>
            <li style="left: 337px; top: 433px;" id="3101A60"><div class="aa"></div><div class="ov01"></div><div class="nameBox">곡교천2</div></li>
            <li style="left: 404px; top: 500px;" id="3011A97"><div class="aa"></div><div class="ov01"></div><div class="nameBox">미호천6-1</div></li>
            <li style="left: 416px; top: 507px;" id="3010A20"><div class="aa"></div><div class="ov01"></div><div class="nameBox">청원-1</div></li>
            <li style="left: 376px; top: 522px;" id="3012A20"><div class="aa"></div><div class="ov01"></div><div class="nameBox">공주1</div></li>
            <li style="left: 425px; top: 523px;" id="3009A80"><div class="aa"></div><div class="ov01"></div><div class="nameBox">갑천5-1</div></li>
            <li style="left: 440px; top: 541px;" id="3008A40"><div class="aa"></div><div class="ov01"></div><div class="nameBox">대청댐</div></li>
            <li style="left: 472px; top: 575px;" id="3006A10"><div class="aa"></div><div class="ov01"></div><div class="nameBox">옥천</div></li>
            <li style="left: 330px; top: 565px;" id="3012A60"><div class="aa"></div><div class="ov01"></div><div class="nameBox">부여1</div></li>
            <li style="left: 350px; top: 590px;" id="3013A50"><div class="aa"></div><div class="ov01"></div><div class="nameBox">논산천4</div></li>
            <li style="left: 330px; top: 643px;" id="3301A55"><div class="aa"></div><div class="ov01"></div><div class="nameBox">김제</div></li>
            <li style="left: 310px; top: 690px;" id="3302A40"><div class="aa"></div><div class="ov01"></div><div class="nameBox">동진강3</div></li>
            
            <!--낙동강-->
            <li style="left: 590px; top: 495px;" id="2004A90"><div class="aa"></div><div class="ov01"></div><div class="nameBox">내성천3-1</div></li>
            <li style="left: 653px; top: 494px;" id="2003A30"><div class="aa"></div><div class="ov01"></div><div class="nameBox">안동3</div></li>
            <li style="left: 689px; top: 484px;" id="2001A60"><div class="aa"></div><div class="ov01"></div><div class="nameBox">안동1</div></li>
            <li style="left: 687px; top: 498px;" id="2002A50"><div class="aa"></div><div class="ov01"></div><div class="nameBox">반변천2-1</div></li>
            <li style="left: 587px; top: 540px;" id="2009A10"><div class="aa"></div><div class="ov01"></div><div class="nameBox">상주3</div></li>
            <li style="left: 609px; top: 615px;" id="2011A30"><div class="aa"></div><div class="ov01"></div><div class="nameBox">왜관</div></li>
            <li style="left: 787px; top: 620px;" id="2101A60"><div class="aa"></div><div class="ov01"></div><div class="nameBox">형산강4</div></li>
            <li style="left: 626px; top: 670px;" id="2012A70"><div class="aa"></div><div class="ov01"></div><div class="nameBox">금호강6</div></li>
            <li style="left: 614px; top: 677px;" id="2014A20"><div class="aa"></div><div class="ov01"></div><div class="nameBox">고령</div></li>
            <li style="left: 790px; top: 720px;" id="2201A48"><div class="aa"></div><div class="ov01"></div><div class="nameBox">학성</div></li> 
            <li style="left: 621px; top: 765px;" id="2019A80"><div class="aa"></div><div class="ov01"></div><div class="nameBox">남강4-1</div></li>
            <li style="left: 634px; top: 767px;" id="2020A10"><div class="aa"></div><div class="ov01"></div><div class="nameBox">남지</div></li>
            <li style="left: 727px; top: 785px;" id="2022A10"><div class="aa"></div><div class="ov01"></div><div class="nameBox">물금</div></li>
            <li style="left: 728px; top: 801px;" id="2022A35"><div class="aa"></div><div class="ov01"></div><div class="nameBox">구포</div></li>
            
            <!--영산강-->
            <li style="left: 385px; top: 755px;" id="4004A10"><div class="aa"></div><div class="ov01"></div><div class="nameBox">적성</div></li>
            <li style="left: 350px; top: 777px;" id="5001A10"><div class="aa"></div><div class="ov01"></div><div class="nameBox">담양</div></li>
            <li style="left: 329px; top: 801px;" id="5001A20"><div class="aa"></div><div class="ov01"></div><div class="nameBox">우치</div></li>
            <li style="left: 315px; top: 819px;" id="5001A40"><div class="aa"></div><div class="ov01"></div><div class="nameBox">광주1</div></li>
            <li style="left: 300px; top: 824px;" id="5002A40"><div class="aa"></div><div class="ov01"></div><div class="nameBox">황룡강3-1</div></li>
            <li style="left: 293px; top: 852px;" id="5004A20"><div class="aa"></div><div class="ov01"></div><div class="nameBox">나주</div></li>
            <li style="left: 312px; top: 852px;" id="5003A60"><div class="aa"></div><div class="ov01"></div><div class="nameBox">지석천4</div></li>
            <li style="left: 247px; top: 909px;" id="5008A10"><div class="aa"></div><div class="ov01"></div><div class="nameBox">무안2</div></li>
            <li style="left: 316px; top: 942px;" id="5101A55"><div class="aa"></div><div class="ov01"></div><div class="nameBox">탐진강3</div></li>
            <li style="left: 389px; top: 858px;" id="4007A40"><div class="aa"></div><div class="ov01"></div><div class="nameBox">주암댐</div></li>
            <li style="left: 416px; top: 815px;" id="4008A20"><div class="aa"></div><div class="ov01"></div><div class="nameBox">보성천-1</div></li>
            <li style="left: 456px; top: 816px;" id="4009A30"><div class="aa"></div><div class="ov01"></div><div class="nameBox">구례</div></li>
            <li style="left: 482px; top: 839px;" id="4009A50"><div class="aa"></div><div class="ov01"></div><div class="nameBox">하동</div></li>
        </ul>
        
        <ul class="point2">
        	<li class="rocate2" style="left: 438px; top: 300px;" id="1007A60" ><div class="aa"></div><span style="left: 15px; top: -40px;">이포보</span></li>
            <li class="rocate3" style="left: 451px; top: 315px;" id="1007A27"><div class="aa"></div><span style="left: 28px; top: -21px;">여주보</span></li>
            <li class="rocate3" style="left: 462px; top: 330px;" id="1007A20"><div class="aa"></div><span style="left: -30px; top: 20px;">강천보</span></li>
            <li class="rocate5" style="left: 391px; top: 516px;" id="3012A07"><div class="aa"></div><span style="left: -85px; top: -38px;">세종보</span></li>
            <li class="rocate5" style="left: 354px; top: 525px;" id="3012A32"><div class="aa"></div><span class="st" style="left: -98px; top: -13px;">공주보</span></li>
            <li class="rocate5" style="left: 335px; top: 548px;" id="3012A42"><div class="aa"></div><span style="left: -103px; top: 0px;">백제보</span></li>
            <li class="rocate5" style="left: 302px; top: 838px;" id="5004A10"><div class="aa"></div><span style="left: -97px; top: -13px;">승촌보</span></li>
            <li class="rocate7" style="left: 280px; top: 859px;" id="5004A35"><div class="aa"></div><span class="st" style="left: -95px; top: 2px;">죽산보</span></li>
            <li class="rocate6" style="left: 578px; top: 508px;" id="2007A25"><div class="aa"></div><span style="left: -95px; top: -22px;">상주보</span></li>
            <li class="rocate2" style="left: 578px; top: 528px;" id="2009A05"><div class="aa"></div><span style="left: 32px; top: -13px;">낙단보</span></li>
            <li class="rocate1" style="left: 594px; top: 569px;" id="2009A30"><div class="aa"></div><span style="left: 28px; top: -16px;">구미보</span></li>
            <li class="rocate1" style="left: 602px; top: 606px;" id="2011A25"><div class="aa"></div><span style="left: 30px; top: -16px;">칠곡보</span></li>
            <li class="rocate3 max" style="left: 603px; top: 656px;" id="2011A55"><div class="aa"></div><span class="st" style="left: 28px; top: -20px;">강정고령보</span></li>
            <li class="rocate1" style="left: 610px; top: 694px;" id="2014A25"><div class="aa"></div><span class="st" style="left: 30px; top: -13px;">달성보</span></li>
            <li class="rocate6 max" style="left: 601px; top: 721px;" id="2014A70"><div class="aa"></div><span class="st" style="left: 27px; top: 0px;">합천창녕보</span></li>
            <li class="rocate4 max" style="left: 649px; top: 765px;" id="2020A32"><div class="aa"></div><span class="st" style="left: -57px; top: 28px;">창녕함안보</span></li>
        </ul>
        
    	<img src="./resources/images/map_default.png"  />
    </div>
    <div id="state">
    	<h1>수질현황</h1>
        <div class="Pd20 PdT0">
        <div id='mask' style='position:absolute; z-index:9000; background-color:#000000; left:0; top:0; width:1920px; height:1080px; opacity:0.3;'>
        	<!-- <div id='loadingImg' style='position:absolute; left:50%; top:40%; z-index:10000;'>
				<img src='./resources/images/loading.gif'/>
			</div> -->
        </div>
			<div style="position: absolute; right:20px; top:112px;">
				<img id="preBtn" src="./resources/images/arrow_pre.png" style="cursor: pointer;"/> 
				<img id="nextBtn" src="./resources/images/arrow_next.png" style="cursor: pointer;"/>
			</div>
			<h2 id="spotTitle">이포보</h2>
            <h3 class="MgT0" id="grid01text">수질예보제</h3>
            <table class="tst06" summary="수질예보제">
                <caption>수질예보제</caption>
                <colgroup>
                    <col width="290" />
                    <col width="" />
                    <col width="290" />
                </colgroup>
                <thead>
                    <tr>
                        <th>기준일</th>
                        <th>측정항목</th>
                        <th>측정값</th>
                    </tr>
                </thead>
               <!--  <ul id="test01">
                	<li name="11">01-11</li>
                	<li name="22">01-22</li>
                	<li name="33">01-33</li>
                </ul>
                <ul id="test02">
                	<li name="11">02-11</li>
                	<li name="22">02-22</li>
                	<li name="33">02-33</li>
                </ul> -->
                <tbody id="grid01">
                    <!-- <tr>
                        <th rowspan="9">2017.06.01</th>
                        <td>BOD(mg/L)</td>
                        <td>12</td>
                    </tr>
                    <tr class="st2">
                        <td>COD(mg/L)</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>수온(mg/L)</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr class="st2">
                        <td>총인(mg/L)</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>질소(mg/L)</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr class="st2">
                        <td>총질소(mg/L)</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>클로로필-a(mg/m<sup>3</sup>)</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr class="st2">
                        <td>유해남조류(cell/mL)</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>DO(mg/L)</td>
                        <td>&nbsp;</td>
                    </tr> -->
                </tbody>
            </table>
            
          <h3 id="grid02text">수심별 정밀조사<span>(※클로로필-a는 표층, 1/3, 2/3 수심 측정)</span></h3>
            <table class="tst06" summary="수심별 정밀조사" id="grid02">
                <caption>수질예보제</caption>
                <colgroup>
                    <col width="127" />
                    <col width="127" />
                    <col width="127" />
                    <col width="127" />
                    <col width="127" />
                    <col width="127" />
                    <col width="" />
                </colgroup>
                <thead>
                    <tr>
                        <th>기준일</th>
                        <th>수심<br />(m)</th>
                        <th>수온<br />(℃)</th>
                        <th>pH</th>
                        <th>DO<br />(mg/L)</th>
                        <th>전기전도도<br />(μS/㎝)</th>
                        <th>클로로필-a<br />(mg/m<sup>3</sup>)</th>
                    </tr>
                </thead>
                <tbody id="grid02_detail">
                   
                </tbody>
            </table>
            
          <h3 id="grid03text">수생태 계</h3>
            <table class="tst06" summary="수생태" id="grid03">
                <caption>수생태</caption>
                <colgroup>
                    <col width="160" />
                    <col width="90" />
                    <col width="70" />
                    <col width="140" />
                    <col width="140" />
                    <col width="140" />
                    <col width="" />
                </colgroup>
                <thead>
                    <tr>
                        <th>기준일</th>
                        <th>구분</th>
                        <th colspan="5">측정값</th>
                    </tr>
                </thead>
                <tbody id="grid03_detail">
                    <!-- <tr>
                        <th rowspan="2">1회차<br />(2017.05.25~05.20)</th>
                        <td rowspan="2" style="border-bottom: 1px solid #2a2b34;">어류</td>
                        <td>종수</td>
                        <td>개체수</td>
                        <td>우점종</td>
                        <td>기타</td>
                    </tr>
                    <tr class="st2" style="border-bottom: 1px solid #2a2b34;">
                        <td>17</td>
                        <td>3</td>
                        <td>붕어</td>
                        <td>사슴 멸종위기</td>
                    </tr>
                    <tr>
                        <th rowspan="2">1회차<br />(2017.05.25~05.20)</th>
                        <td rowspan="2">저서동물</td>
                        <td>종수</td>
                        <td>개체밀도(개체/m<sup>2</sup>)</td>
                        <td>우점종</td>
                        <td>기타</td>
                    </tr>
                    <tr class="st2">
                        <td>17</td>
                        <td>3</td>
                        <td>붕어</td>
                        <td>&nbsp;</td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</div>
</body>
</html>