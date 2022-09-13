var colorList=["#f6d54a","#f69846","#44aff0","#45dbf7","#f845f1","#ad46f3","#5045f6","#4777f5"],colorListSub=["rgba(35,143,56,.5)","rgba(26,87,178,.5)","rgba(176,75,7,.5)","rgba(175,129,8,.5)"],waybillPrefix=["国航1","国航2","国航3","国航4","国航5"],sumweight=[12,23,34,45,56],sumFlightNumber=[110,112,112,114,111];option={backgroundColor:"#113A71",legend:{orient:"vertical",textStyle:{color:"#fff"},right:"10%",top:"25%",data:["1小时","4小时","12小时","24小时","48小时"]},series:[{type:"pie",radius:[0,"35%"],roseType:"radius",clockwise:!1,z:10,itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]},shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.3)"}},label:{normal:{rich:{b:{fontSize:12,color:"#fff",align:"left",padding:4},hr:{borderColor:"#12EABE",width:"100%",borderWidth:2,height:0},d:{fontSize:12,color:"#fff",align:"left",padding:4},c:{fontSize:12,color:"#fff",align:"center",padding:4}}}},labelLine:{normal:{length:50,length2:50,lineStyle:{width:2}}},data:[{value:sumweight[0],name:""+waybillPrefix[0]+` 
货量：`+sumweight[0]+`吨 
 架次：`+sumFlightNumber[0]+"架"},{value:sumweight[1],name:""+waybillPrefix[1]+` 
货量：`+sumweight[1]+`吨 
 架次：`+sumFlightNumber[1]+"架"},{value:sumweight[2],name:""+waybillPrefix[2]+` 
货量：`+sumweight[2]+`吨 
 架次：`+sumFlightNumber[2]+"架"},{value:sumweight[3],name:""+waybillPrefix[3]+` 
货量：`+sumweight[3]+`吨 
 架次：`+sumFlightNumber[3]+"架"},{value:sumweight[4],name:""+waybillPrefix[4]+` 
货量：`+sumweight[4]+`吨 
 架次：`+sumFlightNumber[4]+"架"}]}]};
