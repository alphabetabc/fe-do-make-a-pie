var data=[70,34,60,78,69],titlename=["太原市民政局","太原市运输局","太原市残联","太原市报社","太原市司法局"],valdata=[683,234,234,523,345],myColor=["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"];option={backgroundColor:"#0e2147",xAxis:{show:!1},yAxis:[{show:!0,data:titlename,inverse:!0,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff",formatter:function(e,a){return["{lg|"+(a+1)+"}{title|"+e+"} "].join(`
`)},rich:{lg:{backgroundColor:"#339911",color:"#fff",borderRadius:15,align:"center",width:15,height:15}}}},{show:!0,inverse:!0,data:valdata,axisLabel:{textStyle:{fontSize:12,color:"#fff"}},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}}],series:[{name:"条",type:"bar",yAxisIndex:0,data,barWidth:30,itemStyle:{normal:{barBorderRadius:30,color:function(e){var a=myColor.length;return myColor[e.dataIndex%a]}}},label:{normal:{show:!0,position:"inside",formatter:"{c}%"}}},{name:"框",type:"bar",yAxisIndex:1,barGap:"-100%",data:[100,100,100,100,100],barWidth:40,itemStyle:{normal:{color:"none",borderColor:"#00c1de",borderWidth:3,barBorderRadius:15}}}]};
