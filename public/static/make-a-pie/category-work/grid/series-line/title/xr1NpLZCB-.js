for(var timeData=["2012-07-28 08","2012-07-28 11","2012-07-28 14","2012-07-28 17","2012-07-28 20","2012-07-28 23","2012-07-29 02","2012-07-29 05","2012-07-29 08","2012-07-29 11","2012-07-29 14","2012-07-29 17","2012-07-29 20","2012-07-29 23","2012-07-30 02","2012-07-30 05","2012-07-30 08","2012-07-30 11","2012-07-30 14","2012-07-30 17","2012-07-30 20","2012-07-30 23","2012-07-31 02","2012-07-31 05","2012-07-31 08","2012-07-31 11","2012-07-31 14","2012-07-31 17","2012-07-31 20","2012-07-31 23","2012-08-01 02","2012-08-01 05","2012-08-01 08","2012-08-01 11","2012-08-01 14","2012-08-01 17","2012-08-01 20","2012-08-01 23","2012-08-02 02","2012-08-02 05","2012-08-02 08","2012-08-02 11","2012-08-02 14","2012-08-02 17","2012-08-02 20","2012-08-02 23","2012-08-03 02","2012-08-03 05","2012-08-03 08","2012-08-03 11","2012-08-03 14","2012-08-03 17","2012-08-03 20","2012-08-03 23","2012-08-04 02","2012-08-04 05","2012-08-04 08","2012-08-04 11","2012-08-04 14","2012-08-04 17","2012-08-04 20","2012-08-04 23","2012-08-05 02","2012-08-05 05","2012-08-05 08","2012-08-05 11","2012-08-05 14","2012-08-05 17","2012-08-05 20","2012-08-05 23","2012-08-06 02","2012-08-06 05","2012-08-06 08","2012-08-06 11","2012-08-06 14","2012-08-06 17","2012-08-06 20","2012-08-06 23","2012-08-07 02","2012-08-07 05","2012-08-07 08","2012-08-07 11","2012-08-07 14","2012-08-07 17","2012-08-07 20","2012-08-07 23","2012-08-08 02","2012-08-08 05","2012-08-08 08","2012-08-08 11","2012-08-08 14","2012-08-08 17","2012-08-08 20","2012-08-08 23","2012-08-09 02","2012-08-09 05","2012-08-09 08","2012-08-09 11","2012-08-09 14","2012-08-09 17","2012-08-09 20","2012-08-09 23","2012-08-10 02","2012-08-10 05","2012-08-10 08","2012-08-10 11","2012-08-10 14","2012-08-10 17","2012-08-10 20","2012-08-10 23","2012-08-11 02","2012-08-11 05","2012-08-11 08","2012-08-11 11","2012-08-11 14","2012-08-11 17","2012-08-11 20","2012-08-11 23","2012-08-12 02","2012-08-12 05","2012-08-12 08"],ydataa=[0,0,0,0,.6,23.7,29.3,44.8,3,.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ydataa2=[0,0,0,0,0,14.9,23.1,41,2.3,.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ydatab=[0,0,0,0,0,0,64,357,1999,2442,2373,2344,2094,1950,1337,927,684,582,407,344,200,199,165,155,146,0,3,8,12,14,16,17,17,17,16,15,14,13,12,11,10,8,7,7,6,5,5,4,4,3,3,3,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ydatab2=[0,0,0,0,0,0,74,344,2114,2842,2673,2144,1594,1150,837,627,484,382,307,244,200,164,65,55,46,0,3,8,12,14,16,17,17,17,16,15,14,13,12,11,10,8,7,7,6,5,5,4,4,3,3,3,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ydatac=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ydatac2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],dataa=[],dataa2=[],datab=[],datab2=[],datac=[],datac2=[],i=0;i<timeData.length;i++)dataa.push([timeData[i],ydataa2[i]]),dataa2.push([timeData[i],ydataa[i]-ydataa2[i]]),datab2.push([timeData[i],ydatab2[i]]),datac2.push([timeData[i],ydatac2[i]]),i<=20&&(datab.push([timeData[i],ydatab[i]]),datac.push([timeData[i],ydatac[i]]));var markLineData={animation:!1,data:[[{symbol:"none",xAxis:timeData[20],yAxis:"0"},{symbol:"none",xAxis:timeData[20],y:50,label:{normal:{position:"end",formatter:"预报分割线"}},lineStyle:{normal:{color:"dodgerblue",type:"dashed",width:2}}}]]},option={title:{text:"雨洪图",subtext:"水资源调度专题组件",x:"center"},legend:{data:["降雨","净雨","实时流量","计算流量","实时水位","计算水位"],x:"left"},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},dataZoom:[{show:!0,realtime:!0,xAxisIndex:[0,1]},{type:"inside",realtime:!0,xAxisIndex:[0,1]}],grid:[{height:"15%"},{top:"21.6%",height:"55%"}],xAxis:[{show:!0,type:"category",boundaryGap:!1,axisLine:{onZero:!0},axisLabel:{show:!1},data:timeData,splitLine:{show:!0}},{gridIndex:1,type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:timeData,splitLine:{show:!0}}],yAxis:[{name:"雨量(mm)",nameLocation:"middle",nameGap:50,type:"value",min:0,max:80,inverse:!0,axisLabel:{formatter:function(a,e){return a>60?"":a}}},{gridIndex:1,name:"流量(m^3/s)",nameLocation:"middle",nameGap:50,type:"value",max:3e3},{gridIndex:1,name:"水位(m)",nameLocation:"middle",nameGap:50,nameRotate:270,type:"value",max:6}],series:[{id:"a",name:"净雨",type:"bar",stack:"雨量",barGap:0,barCategoryGap:0,symbolSize:4,hoverAnimation:!1,data:dataa},{id:"a2",name:"降雨",type:"bar",stack:"雨量",barGap:0,barCategoryGap:0,symbolSize:4,hoverAnimation:!1,data:dataa2},{id:"b",name:"实时流量",type:"line",xAxisIndex:1,yAxisIndex:1,symbol:"circle",symbolSize:8,showAllSymbol:!0,smooth:!1,hoverAnimation:!1,data:datab,markLine:markLineData},{id:"b2",name:"计算流量",type:"line",xAxisIndex:1,yAxisIndex:1,symbol:"circle",symbolSize:8,showAllSymbol:!0,smooth:!1,hoverAnimation:!1,data:datab2},{id:"c",name:"实时水位",type:"line",xAxisIndex:1,yAxisIndex:2,symbol:"circle",symbolSize:8,showAllSymbol:!0,smooth:!1,hoverAnimation:!1,data:datac},{id:"c2",name:"计算水位",type:"line",xAxisIndex:1,yAxisIndex:2,symbol:"circle",symbolSize:8,showAllSymbol:!0,smooth:!1,hoverAnimation:!1,data:datac2}]};