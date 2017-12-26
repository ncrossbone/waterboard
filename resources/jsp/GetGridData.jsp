<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR"%>
<%@ include file="dbConn.jsp"%>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{

	sql="SELECT NO,                                        ";
	sql+="GUBUN,                                             ";
	sql+="PT_NO,                                              ";
	sql+="WMYMD,                                           ";
	sql+="ITEM_NM,                                          ";
	sql+="PAGE,                                          ";
	sql+="NVL(ITEM_VALUE_1,' ') AS ITEM_VALUE_1, ";
	sql+="NVL(ITEM_VALUE_2,' ') AS ITEM_VALUE_2, ";
	sql+="NVL(ITEM_VALUE_3,' ') AS ITEM_VALUE_3, ";
	sql+="NVL(ITEM_VALUE_4,' ') AS ITEM_VALUE_4, ";
	sql+="NVL(ITEM_VALUE_5,' ') AS ITEM_VALUE_5  ";	
	sql+="FROM KRF_WATER_BOARD_V                ";
	stmt = con.createStatement();   
	rs = stmt.executeQuery(sql);

	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		
		jsonRecord.put("NO"	, rs.getString("NO"));
		jsonRecord.put("GUBUN"	, rs.getString("GUBUN"));
		jsonRecord.put("PT_NO"	, rs.getString("PT_NO"));
		jsonRecord.put("WMYMD"	, rs.getString("WMYMD"));
		jsonRecord.put("ITEM_NM"	, rs.getString("ITEM_NM"));
		jsonRecord.put("ITEM_VALUE_1"	, rs.getString("ITEM_VALUE_1"));
		jsonRecord.put("ITEM_VALUE_2"	, rs.getString("ITEM_VALUE_2"));
		jsonRecord.put("ITEM_VALUE_3"	, rs.getString("ITEM_VALUE_3"));
		jsonRecord.put("ITEM_VALUE_4"	, rs.getString("ITEM_VALUE_4"));
		jsonRecord.put("ITEM_VALUE_5"	, rs.getString("ITEM_VALUE_5"));
		jsonRecord.put("PAGE"	, rs.getString("PAGE"));
		
		jsonArr.add(jsonRecord);
	}

	rs.close();
	jsonObj.put("data", jsonArr);
	out.print(jsonObj);

}
catch(Exception ex){
	out.print(ex);
}
%>
<%@ include file="dbClose.jsp"%>