var name4=["1号","2号","3号","4号","5号","6号","7号","8号","9号","10号"],data4_1=[10,8,30,8,30,8,30,8,30,8],data4_2=[],data4_3=[],max4=Math.max.apply(null,data4_1)*1.5,color=["#51D9A2","#FAD700","#FE8F3B","#F7A899","#60DAFD","#D2DF1D","#797AFF","#FFC371","#FAD700","#FE8F3B"];for(i=0;i<data4_1.length;i++)data4_2.push(max4),data4_3.push(data4_1[i]+1);option={backgroundColor:"#051F54",grid:{top:"20%",left:"20%",right:"20%",bottom:"20%",gridIndex:1},tooltip:[{show:!1}],yAxis:{type:"value",min:0,axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,1)"}},axisLabel:{show:!1},axisTick:{show:!1},max:"dataMax"},xAxis:{type:"category",splitLine:{show:!1},axisLine:{show:!1,onZero:!1},axisLabel:{show:!0,interval:0,align:"center",textStyle:{color:"#fff",fontSize:14}},axisTick:{show:!1},data:name4},series:[{name:"真实值",type:"pictorialBar",barWidth:"10%",symbol:"roundRect",symbolRepeat:"true",symbolMargin:"80%",symbolSize:[15,5],symbolRepeat:!0,barMinHeight:1,barMinWidth:1,itemStyle:{normal:{color:"#155CFA"}},label:{normal:{show:!1}},z:10,data:data4_1},{name:"背景条",type:"pictorialBar",barWidth:"10%",symbol:"roundRect",symbolRepeat:"true",symbolMargin:"80%",symbolSize:[15,5],symbolRepeat:!0,barMinHeight:1,barMinWidth:1,itemStyle:{normal:{color:"rgba(21,92,250,0.1)"}},label:{normal:{show:!0,position:"top",color:"#fff",fontSize:16,formatter:function(a){return data4_1[a.dataIndex]}}},z:0,data:data4_2},{name:"辅助值",type:"pictorialBar",barWidth:"10%",symbol:"roundRect",symbolRepeat:"true",symbolMargin:"80%",symbolSize:[15,5],symbolRepeat:!0,barMinHeight:1,barMinWidth:1,itemStyle:{normal:{color:function(a){return color[a.dataIndex]}}},label:{normal:{show:!1}},z:5,data:data4_3}]};
