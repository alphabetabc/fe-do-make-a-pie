var data=[{city:"地区一",so2:12,o3:21,num:33},{city:"地区二",so2:10,o3:25,num:35},{city:"地区三",so2:20,o3:25,num:45},{city:"地区四",so2:30,o3:25,num:55}],aNum=[],aSO2=[],aO3=[],aIndicator=[],i,nLen=data.length,oItem;for(i=0;i<nLen;i++)oItem=data[i],aNum.push(oItem.num),aSO2.push(oItem.so2),aO3.push(oItem.o3),aIndicator.push(oItem.city);function replaceWords(t){return t.replace("SO2","SO{sub|2}").replace("O3","O{sub|3}")}option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){return data[t[0].dataIndex].city+'<br/><span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#FFD237;"></span>SO2:'+data[t[0].dataIndex].so2+'<br/><span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#F39927;"></span>O3:'+data[t[0].dataIndex].o3}},legend:{show:!0,right:20,data:[{name:"SO2",icon:"rect"},{name:"O3",icon:"rect"}],formatter:function(t){return replaceWords(t)},textStyle:{lineHeight:12,verticalAlign:"middle",fontSize:12,rich:{sub:{verticalAlign:"bottom",fontSize:8}}}},grid:{top:"10%",left:"10%",right:"10%",bottom:"10%",containLabel:!0},xAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#686868"}},axisLabel:{show:!0,color:"#686868",fontSize:16},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#D5D5D6"}}},yAxis:{type:"category",data:aIndicator,inverse:!0,axisLine:{show:!1},axisLabel:{show:!0,color:"#686868",fontSize:16},axisTick:{show:!1},splitLine:{show:!1}},series:[{name:"SO2",type:"bar",barWidth:20,stack:"因子",data:aSO2,itemStyle:{color:"#FFD237",shadowColor:"rgba(0, 0, 0, 0.16)",shadowOffsetX:0,shadowOffsetY:3,shadowBlur:6}},{name:"O3",type:"bar",barWidth:20,stack:"因子",data:aO3,itemStyle:{color:"#F39927",shadowColor:"rgba(0, 0, 0, 0.16)",shadowOffsetX:0,shadowOffsetY:3,shadowBlur:6}},{name:"总计",type:"bar",barWidth:20,barGap:"-100%",label:{show:!0,offset:[10,0],position:"right",textStyle:{color:"#686868",fontSize:16}},itemStyle:{normal:{color:"transparent"}},data:aNum}]};