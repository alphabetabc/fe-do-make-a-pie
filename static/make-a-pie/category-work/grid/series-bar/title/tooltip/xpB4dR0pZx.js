var data={seriesData:[{seriesName:"series1",seriesData:[320,332,301,334,390]},{seriesName:"series2",seriesData:[220,182,191,234,290]}],XData:["2012","2013","2014","2015","2016"],title:"BB01(基础柱形图)"},multiple=document.documentElement.clientWidth/1920,option={backgroundColor:"#0a152a",title:{text:data.title,textStyle:{color:"#FFF",fontSize:28*multiple}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"30%",bottom:"10%"},calculable:!0,xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#91ffff"}},axisTick:{show:!1},axisLabel:{color:"#fff",fontSize:16*multiple},data:data.XData||[]}],yAxis:[{type:"value",name:"单位（万人）",nameTextStyle:{fontSize:16*multiple},axisLine:{show:!0,lineStyle:{color:"#91ffff"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff",fontSize:16*multiple}}],series:[{name:data.seriesData[0].seriesName||"",type:"bar",barWidth:18*multiple,barGap:0,label:{show:!0,position:"top",color:"#00ccff",align:"right",offset:[6*multiple,0],fontSize:16*multiple},data:data.seriesData[0].seriesData||[],itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#01feea"},{offset:1,color:"#3b87f7"}]),barBorderRadius:[30,30,0,0]}},{name:data.seriesData[1].seriesName||"",type:"bar",barWidth:18*multiple,label:{show:!0,position:"top",color:"#00d3c3",align:"left",offset:[-6*multiple,0],fontSize:16*multiple},data:data.seriesData[1].seriesData||[],itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#99feba"},{offset:1,color:"#00cdd4"}]),barBorderRadius:[30,30,0,0]}}]};