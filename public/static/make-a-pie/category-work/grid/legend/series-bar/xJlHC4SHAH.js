var arr1=[],data1=["辽宁卫视","山东卫视","吉林卫视","北京TV","天津卫视","内蒙古卫视","山西卫视","广东卫视","芒果台","江苏卫视"],arr2=[],data2=["栏目1","栏目2","栏目3","栏目4","栏目5","栏目6","栏目7","栏目8","栏目9","top10"],val2=[],val1=[],value1=[482,378,446,518,238,358,312,378,220,452],value2=[245,123,643,123,333,123,56,378,220,452];arr1=data1,arr2=data2,val1=value1,val2=value2,console.log(arr2),console.log(val2),option={backgroundColor:"#03060f",legend:{position:"bottom",bottom:"32",data:[{name:"频道"},{name:"栏目"}],itemGap:32,textStyle:{color:"#fff",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}},grid:[{top:16,height:400,width:"80%"},{top:36,height:400,width:"80%"},{top:16,height:420,width:"80%"},{top:16,height:420,width:"80%"}],xAxis:[{gridIndex:0,max:500,splitNumber:8,show:!1,axisLine:{lineStyle:{color:"#10899A"}},axisTick:{show:!1,inside:!0,lineStyle:{color:"#10899A",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}},splitLine:{show:!1},axisLabel:{formatter:i=>"{marginTop|"+i+"}",rich:{marginTop:{padding:[0,0,0,0],color:"#06D3CD",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}}}},{max:500,show:!1,gridIndex:1,splitNumber:8,inverse:!0,axisLine:{lineStyle:{color:"#10899A"}},axisTick:{show:!1,inside:!0,lineStyle:{color:"#10899A",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}},splitLine:{show:!1},axisLabel:{formatter:i=>"{marginTop|"+i+"}",rich:{marginTop:{padding:[0,0,0,0],color:"#06D3CD",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}}}},{max:500,show:!1,gridIndex:2,splitNumber:8,axisLine:{lineStyle:{color:"#10899A"}},axisTick:{show:!1,inside:!0,lineStyle:{color:"#10899A",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}},splitLine:{show:!1},axisLabel:{formatter:i=>"{marginTop|"+i+"}",rich:{marginTop:{padding:[0,0,0,0],color:"#06D3CD",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}}}},{max:500,show:!1,gridIndex:3,splitNumber:8,axisLine:{lineStyle:{color:"#10899A"}},axisTick:{show:!1,inside:!0,lineStyle:{color:"#10899A",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}},splitLine:{show:!1},axisLabel:{formatter:i=>"{marginTop|"+i+"}",rich:{marginTop:{padding:[0,0,0,0],color:"#06D3CD",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}}}}],yAxis:[{gridIndex:0,position:"left",data:arr1,nameTextStyle:{color:"#32353C",padding:[0,0,0,8],fontSize:14,fontFamily:"PingFangSC",fontWeight:300},axisLabel:{formatter:i=>"{marginTop|"+i+"}",margin:10,rich:{marginTop:{padding:[0,0,0,0],color:"#fff",fontSize:12,fontFamily:"PingFangSC",fontWeight:300}}},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#10899A"}},splitLine:{show:!1}},{gridIndex:1,data:arr2,position:"right",nameTextStyle:{color:"#32353C",padding:[0,0,0,8],fontSize:14,fontFamily:"PingFangSC",fontWeight:300},top:12,axisLabel:{formatter:i=>"{marginTop|"+i+"}",rich:{marginTop:{padding:[0,0,0,0],color:"#fff",fontSize:12,fontFamily:"PingFangSC",fontWeight:300}}},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#10899A"}},splitLine:{show:!1}},{gridIndex:2,axisLabel:{formatter:i=>"{marginTop|"+i+"}",rich:{marginTop:{padding:[0,0,0,0],color:"#06D3CD",fontSize:14,fontFamily:"PingFangSC",fontWeight:300}}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#32353C"}},splitLine:{show:!1}},{gridIndex:2,position:"right",axisLabel:{formatter:i=>"{marginTop|"+i+"}",rich:{marginTop:{padding:[0,0,0,0],color:"#06D3CD",fontSize:12,fontFamily:"PingFangSC",fontWeight:300}}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#32353C"}},splitLine:{show:!1}}],series:[{name:"频道",type:"bar",label:{normal:{show:!0,baseline:"middle",fontSize:12,fontWeight:"400",position:"insideLeft",color:"#fff",lineHeight:14,padding:[0,12,0,12]}},itemStyle:{barBorderRadius:10,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(8,117,255)"},{offset:1,color:"#6DE667"}])},barWidth:14,data:val1},{name:"栏目",type:"bar",xAxisIndex:1,yAxisIndex:1,label:{normal:{show:!0,baseline:"middle",fontSize:12,fontWeight:"400",position:"insideRight",color:"#fff",lineHeight:14,padding:[0,12,0,12]}},itemStyle:{barBorderRadius:10,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#FCB344"},{offset:1,color:"#F64744"}])},barWidth:14,data:val2}]};
