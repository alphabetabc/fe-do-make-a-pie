var legendData=["lzstring","lzma"],indicator=[{text:"消耗内存(M)",max:300},{text:"压缩耗时(ms)",max:9e3},{text:"解压耗时(ms)",max:600},{text:"压缩比",max:1}],dataArr=[{value:[9,991,144,.93],name:legendData[0],itemStyle:{normal:{lineStyle:{color:"#396f00"},shadowColor:"#396f00",shadowBlur:10}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#25a927"},{offset:.5,color:"rgba(255,255,255,0.1)"},{offset:1,color:"#25a927"}],globalCoord:!1},opacity:1}}},{value:[233,8918,526,.89],name:legendData[1],itemStyle:{normal:{lineStyle:{color:"#e43c59"},shadowColor:"#e43c59",shadowBlur:10}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#e43c59"},{offset:.5,color:"rgba(255,255,255,0.1)"},{offset:1,color:"#e43c59"}],globalCoord:!1},opacity:1}}}],colorArr=["#396f00","#e43c59"];option={backgroundColor:"#efefef",color:colorArr,legend:{orient:"vertical",icon:"circle",data:legendData,bottom:35,right:40,itemWidth:14,itemHeight:14,itemGap:21,textStyle:{fontSize:34,color:"#333"}},radar:{name:{textStyle:{color:"#333",fontSize:26}},indicator,splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0)","rgba(255,255,255,0)"]}},axisLine:{lineStyle:{color:"#153269"}},splitLine:{lineStyle:{color:"#113865",width:1}}},series:[{type:"radar",symbolSize:8,data:dataArr}]};