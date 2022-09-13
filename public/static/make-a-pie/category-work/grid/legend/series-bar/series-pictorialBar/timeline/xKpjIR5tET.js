var myData=["党委办公室","党委办公室1","党委办公室2","党委办公室3","党委办公室4","党委办公室5","党委办公室6","党委办公室7","党委办公室8"],legendData=["举行活动次数","参与部门","部门内参与人数"],leftData=[23,20,62,34,55,65,33,61,50],rightData=[121,138,123,139,166,166,179,148,65],areaColor="rgba(11,45,134,0.5)",areaText={color:"#fff",fontSize:16},leftColors=["#fba61b","#eebb45","rgba(158,254,26,0)"],rightColors=["rgba(12,221,211,0)","#3aefd9","#3aefd9"],lineColor="#2f6392",barWidth=20,barText={color:"#ffffff",fontSize:16},background="#0e2147",legendText={color:"#0bbaca",fontSize:20},option={baseOption:{backgroundColor:background,timeline:{show:!1,top:0,data:[]},legend:{top:"5%",bottom:"5%",itemWidth:12,itemHeight:22,itemGap:90,icon:"none",textStyle:{color:legendText.color,fontSize:legendText.fontSize},data:legendData,selectedMode:!1},grid:[{show:!1,left:"5%",top:"10%",bottom:"8%",containLabel:!0,width:"37%"},{show:!1,left:"50%",top:"10%",bottom:"8%",width:"20%"},{show:!1,right:"5%",top:"10%",bottom:"8%",containLabel:!0,width:"37%"}],xAxis:[{type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},position:"bottom",axisLabel:{show:!1,textStyle:{color:"white"}},splitLine:{show:!1}},{gridIndex:1,show:!1},{gridIndex:2,axisLine:{show:!1},axisTick:{show:!1},position:"bottom",axisLabel:{show:!1},splitLine:{show:!1}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!0,lineStyle:{width:2,color:lineColor}},axisTick:{show:!1},axisLabel:{show:!1},data:myData},{gridIndex:1,type:"category",inverse:!0,inside:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,margin:0,textStyle:{color:areaText.color,fontSize:areaText.fontSize,align:"center"},align:"right",lineHeight:50,width:window.innerWidth*.16,height:window.innerHeight*.8/myData.length},data:myData.map(function(e,o){return{value:e,textStyle:{align:"center",backgroundColor:o%2==0?areaColor:""}}})},{gridIndex:2,type:"category",inverse:!0,position:"left",axisLine:{show:!0,lineStyle:{width:2,color:lineColor}},axisTick:{show:!1},axisLabel:{show:!1},data:myData}],series:[]},options:[]};option.options.push({series:[{name:legendData[1],type:"pictorialBar",data:[],xAxisIndex:1,yAxisIndex:1},{name:legendData[0],type:"bar",xAxisIndex:0,yAxisIndex:0,barWidth,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:leftColors[0]},{offset:.4,color:leftColors[1]},{offset:1,color:leftColors[2]}])}},label:{normal:{show:!0,position:"left",textStyle:{color:barText.color,fontSize:barText.fontSize}}},data:leftData},{name:legendData[2],type:"bar",xAxisIndex:2,yAxisIndex:2,barWidth,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:rightColors[0]},{offset:.6,color:rightColors[1]},{offset:1,color:rightColors[2]}])}},label:{normal:{show:!0,position:"right",textStyle:{color:barText.color,fontSize:barText.fontSize}}},data:rightData}]});