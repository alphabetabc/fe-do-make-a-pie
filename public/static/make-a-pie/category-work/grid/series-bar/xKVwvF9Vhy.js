var gain=.9,gap=0,myColor=["#e63810","#ff6b00","#e3b61f","#13b5b1"],myBgColor=["rgba(230,56,16,0.2)","rgba(255,107,0,0.2)","rgba(227,182,31,0.2)","rgba(19,181,177,0.2)"],data=[8,15,10,6],option={backgroundColor:"rgba(0,0,0,0.8)",grid:{left:"3%",top:"10%",right:"2%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(160,160,160,0.3)"}},axisLabel:{textStyle:{color:function(r,a){return myColor[a]},fontSize:13*gain}},data:["01","02","03","04"]}],yAxis:{type:"value",name:"",nameGap:35+gap,nameTextStyle:{color:"#ffffff",fontSize:16*gain},axisTick:{show:!1},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(160,160,160,0.3)"}},axisLabel:{show:!1,textStyle:{color:"rgba(255,255,255,0.8)",fontSize:14*gain}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.0)","rgba(250,250,250,0.05)"]}}},series:[{type:"bar",itemStyle:{normal:{show:!0,color:function(r){var a=myColor.length;return myColor[r.dataIndex%a]},barBorderRadius:50,borderWidth:0,borderColor:"#333"}},label:{normal:{show:!1}},barWidth:"25%",data}]};
