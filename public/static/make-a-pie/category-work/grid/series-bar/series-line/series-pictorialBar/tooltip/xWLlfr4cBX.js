var xData2=["南越天辰弃土场","重庆东站弃土场","五星村弃土场"],data1=[250,100,130],data2=[400,400,400],barWidth=30;option={backgroundColor:"#fff",tooltip:{show:!0,trigger:"axis"},grid:{left:100,bottom:100},xAxis:{type:"category",data:xData2,axisLine:{show:!0,lineStyle:{color:"#dddddd"}},offset:20,axisTick:{show:!1,alignWithLabel:!0,lineStyle:{color:"#dddddd"}},axisLabel:{fontSize:10}},yAxis:{min:0,name:"块",type:"value",axisLine:{show:!0,lineStyle:{color:"#dddddd"}},splitLine:{show:!0,lineStyle:{type:"dotted",color:"#dddddd"}},axisTick:{show:!0},axisLabel:{fontSize:16},boundaryGap:["20%","20%"]},series:[{name:"2019",type:"bar",barWidth,barGap:"-100%",z:0,itemStyle:{color:"#eaf3fc",opacity:.7},tooltip:{show:!1},data:data2},{name:"2020",type:"bar",barWidth,barGap:"-100%",itemStyle:{opacity:.7,color:function(o){return new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2787c9"},{offset:1,color:"#1ebaeb"}],!1)}},data:data1},{name:"",type:"pictorialBar",symbolSize:[barWidth,15],symbolOffset:[0,-5],z:12,symbolPosition:"end",itemStyle:{color:"#eaf3fc",opacity:1},tooltip:{show:!1},label:{show:!1},data:data2},{name:"",type:"pictorialBar",symbolSize:[barWidth,15],symbolOffset:[0,-10],z:12,itemStyle:{opacity:1,color:"#15b7ed"},label:{show:!1},tooltip:{show:!1},symbolPosition:"end",data:data1},{name:"",type:"pictorialBar",symbolSize:[barWidth,5],symbolOffset:[0,0],z:12,itemStyle:{opacity:1,color:"#1c7de2"},tooltip:{show:!1},data:[1,1,1,1,1]},{type:"line",smooth:"true",symbol:"none",tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(10,219,250,.3)"},{offset:1,color:"rgba(10,219,250, 0)"}],!1),shadowColor:"rgba(10,219,250, 0.5)",shadowBlur:20}},data:data1}]};