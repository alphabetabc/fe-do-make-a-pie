var xData=["东城","西城","朝阳","丰台","石景山","海淀","门头沟","通州","大兴","昌平","顺义","房山","怀柔","平谷","延庆","密云","经开"],data0=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],data1=[0,30,23,15,13,32,20,10,10,20,32,35,30,20,25,30,20],data4=[67,56,55,49,47,25,20,15,15,10,20,26,20,20,21,22,23],data3=[],data5=[];for(let t=0;t<data1.length;t++)data3.push(data1[t]+data4[t]);for(let t=0;t<data1.length;t++)data5.push(data1[t]);dom=350,barWidth=dom/20,option={backgroundColor:"#000E1A",tooltip:{trigger:"axis",borderColor:"rgba(255,255,255,.3)",backgroundColor:"rgba(13,5,30,.6)",textStyle:{color:"white",fontSize:12},borderWidth:1,padding:5,formatter:function(t){var a="区域："+t[0].axisValue+"</br>"+t[0].marker+"农业："+t[0].value+"</br>"+t[1].marker+"非农业："+t[1].value;return a}},textStyle:{color:"#C9C9C9"},legend:{type:"scroll",orient:"vertical",selectedMode:!1,right:"5",top:"5",itemWidth:10,itemHeight:6,textStyle:{color:"#ffffff",fontSize:12}},grid:{containLabel:!0,left:"5",top:"5",bottom:"5",right:"5"},xAxis:{type:"category",data:xData,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:10,interval:0,textStyle:{fontFamily:"Microsoft YaHei",color:"#FFF"},fontSize:12,formatter:function(t){return t.split("").join(`
`)}}},yAxis:[{type:"value",max:120,axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},{show:!1}],series:[{type:"bar",name:"农业",type:"bar",data:data1,stack:"zs",barWidth,itemStyle:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(251,217,31,0.5)"},{offset:1,color:"#fbd91f"}]}}},{name:"非农业",type:"bar",data:data4,stack:"zs",type:"bar",barWidth,itemStyle:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(0,158,255,0.5)"},{offset:1,color:"#009BFF"}]}}},{data:data0,type:"pictorialBar",barWidth,symbol:"diamond",symbolOffset:[0,"50%"],symbolSize:[barWidth,barWidth*.5],zlevel:2,itemStyle:{normal:{color:"#fbd91f"}}},{data:data1,type:"pictorialBar",barWidth,symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[barWidth,barWidth*.5],zlevel:2},{data:data1,type:"pictorialBar",barWidth,symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[barWidth,barWidth*.5],zlevel:2},{data:data5,type:"pictorialBar",barWidth,symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[0,barWidth*.5],zlevel:2},{data:data5,type:"pictorialBar",barWidth,symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[barWidth,barWidth*.5],zlevel:2,itemStyle:{normal:{color:"#fbd91f"}}},{data:data3,type:"pictorialBar",barWidth,symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[barWidth,barWidth*.5],zlevel:2,itemStyle:{normal:{color:"#009BFF"}}}]};
