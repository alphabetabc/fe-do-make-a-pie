var peoples=[50,93,139,5],maxNumber=Math.max.apply(null,peoples)+10,maxData=[maxNumber,maxNumber,maxNumber,maxNumber,1],option={backgroundColor:"#200069",grid:{left:"5%",right:"5%",bottom:"5%",top:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+"<br/>"+e[0].seriesName+" : "+e[0].value+" 人<br/>"}},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#fff"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:["研究生","本科","大专","大专以下"]},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"12"},formatter:"{value}人"},data:peoples}],series:[{name:"人数",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:30,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#6002D9"},{offset:1,color:"#0094FF"}])}},barWidth:20,data:peoples},{name:"背景",type:"bar",barWidth:20,barGap:"-100%",data:maxData,itemStyle:{normal:{color:"rgba(255, 255, 255, 0.1)",barBorderRadius:30}}}]};