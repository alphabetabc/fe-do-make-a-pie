var xData2=["1月","2月","3月","4月","5月"],data1=[2.8,4.8,2.8,4,2.4],data2=[4.8,3.5,3.5,3,3],data3=[3.5,3.5,4,3,3],newchartName=["国道201","国道252","国道322"],newchartValue1=["91","51","29"],newchartValue2=["83","81","20"],path="path://M1390,595h79l-39,22Z",barWidth=40,color1={x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#1C98CD"},{offset:1,color:"rgba(61,187,255,.16)"}]},color2={x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#E7AB47"},{offset:1,color:"rgba(255,164,41,.16)"}]};option={backgroundColor:"#000E1A",tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){var a="<div style='background:rgba(13,5,30,.3);border:1px solid rgba(255,255,255,.2);padding:5px 10px;border-radius:4px;'><div style='text-align:center;'>"+e[0].name+"</div><div style='padding-top:5px;'><span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(61,187,255,.3);border: 2px solid #3eb6f5;'></span><span style=''> "+e[0].seriesName+": </span><span style=''>"+e[0].value+"</span><span>%</span></div><div style='padding-top:5px;'><span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.3);border: 2px solid #ffc241;'></span><span style=''> "+e[1].seriesName+": </span><span style=''>"+e[1].value+"</span><span>%</span></div><div style='padding-top:5px;'><span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(61,187,255,.16);'></span><span style=''> 已开工未完成: </span><span style=''>"+(100-e[0].value)+"</span><span>%</span></div><div style='padding-top:5px;'><span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.16);'></span><span style=''> 已完成未合格: </span><span style=''>"+(100-e[1].value)+"</span><span>%</span></div></div>";return a}},grid:{top:"25%",left:"5%",bottom:"10%",right:"5%",containLabel:!0},animation:!1,xAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"rgba(0,228,255,1)"}},axisLabel:{inside:!1,textStyle:{color:"#fff",fontWeight:"normal",fontSize:12},margin:20},data:newchartName},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:newchartName}],yAxis:[{show:!1,type:"value",axisLabel:{textStyle:{color:"#fff"}},splitLine:{lineStyle:{color:"rgba(0,228,255,1)"}},axisLine:{show:!1}}],series:[{name:"已开工已完成",type:"pictorialBar",symbolSize:[barWidth,10],symbolOffset:["-81%",-5],symbolPosition:"end",z:15,color:"#3eb6f5",zlevel:2,data:newchartValue1},{name:"已完成已合格",type:"pictorialBar",symbolSize:[barWidth,10],symbolOffset:["81%",-5],symbolPosition:"end",z:15,color:"#ffc241",zlevel:2,data:newchartValue2},{name:"已开工已完成",type:"bar",barGap:"60%",barWidth,itemStyle:{color:color1,borderColor:color1,borderWidth:1,borderType:"solid"},label:{show:!0,formatter:"{c}%",position:"left",color:"rgba(119,167,255,1)",fontSize:12,textAlign:"center"},zlevel:2,data:newchartValue1},{name:"已完成已合格",type:"bar",barGap:"60%",barWidth,itemStyle:{color:color2,borderColor:color2,borderWidth:1,borderType:"solid"},label:{show:!0,formatter:"{c}%",position:"right",color:"rgba(255,228,59,1)",fontSize:12,textAlign:"center"},zlevel:2,data:newchartValue2},{name:"工程量",type:"bar",xAxisIndex:1,barGap:"60%",data:[100,100,100],zlevel:1,barWidth,itemStyle:{normal:{color:"rgba(61,187,255,.16)"}}},{name:"合格量",type:"bar",xAxisIndex:1,barGap:"60%",data:[100,100,100],zlevel:1,barWidth,itemStyle:{normal:{color:"rgba(255,164,41,.16)"}}},{name:"已开工已完成",type:"pictorialBar",symbolSize:[barWidth,10],symbolOffset:["-81%",5],z:12,color:"#3eb6f5",data:[{name:"",value:"100"},{name:"",value:"100"},{name:"",value:"100"}]},{name:"已完成已合格",type:"pictorialBar",symbolSize:[barWidth,10],symbolOffset:["81%",5],z:12,color:"#ffc241",data:[{name:"",value:"100"},{name:"",value:"100"},{name:"",value:"100"}]},{name:"已开工未完成",type:"effectScatter",rippleEffect:{period:1,scale:5,brushType:"fill"},z:20,zlevel:3,symbolPosition:"end",symbolSize:[10,4],symbolOffset:[-32,0],itemStyle:{normal:{shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:5,shadowOffsetY:3,shadowOffsetX:0,color:"rgba(119,167,255,1)"}},data:[{name:"",value:100,symbolPosition:"end"},{name:"",value:100,symbolPosition:"end"},{name:"",value:100,symbolPosition:"end"}]},{name:"已开工未完成",type:"effectScatter",rippleEffect:{period:1,scale:5,brushType:"fill"},z:20,zlevel:2,symbolPosition:"end",symbolSize:[10,4],symbolOffset:["310%",0],itemStyle:{normal:{shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:5,shadowOffsetY:3,shadowOffsetX:0,color:"rgba(255,164,41,0.5)"}},data:[{name:"",value:100,symbolPosition:"end"},{name:"",value:100,symbolPosition:"end"},{name:"",value:100,symbolPosition:"end"}]}]};
