option={title:{show:!0,text:"渐变圆角及数据按时分秒显示",textStyle:{fontSize:30,color:"#78789a",fontWeight:400},left:30},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},show:!1},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#78789a",width:2}},axisLabel:{fontSize:18}}],yAxis:[{type:"value",show:!1,axisLine:{show:!1},axisLabel:{fontSize:18}}],series:[{name:"当日数据",type:"bar",barWidth:"20%",data:[200,200,20,300,100,50,200],itemStyle:{normal:{barBorderRadius:[50,50,50,50],color:new echarts.graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#e22548"},{offset:1,color:"#f8467f"}])}},label:{normal:{show:!0,position:"top",formatter:function(o){var e,t,i,a,r;if(o.value>60)e=parseInt(o.value/3600),a=o.value%3600,t=parseInt(a/60),i=a%60;else return"00:00:"+o.value;return e<10&&(e="0"+e),t<10&&(t="0"+t),i<10&&(i="0"+i),e+":"+t+":"+i},fontSize:18,color:"#78789a"}}}]};