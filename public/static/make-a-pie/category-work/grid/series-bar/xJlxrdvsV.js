var colorArr=[{top:"#FF9A22",bottom:"#FFD56E"},{top:"#2750FF",bottom:"#6AB4FF"}];option={backgroundColor:"#fff",grid:{top:"15%",right:"10%",left:"10%",bottom:"12%"},xAxis:[{type:"category",color:"#59588D",data:["2016","2017","2018","2019","2020"],axisLabel:{margin:20,color:"#999",textStyle:{fontSize:18}},axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1}}],yAxis:[{min:0,max:100,axisLabel:{formatter:"{value}%",color:"#999",textStyle:{fontSize:18}},axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(131,101,101,0.2)",type:"dashed"}}}],series:[{type:"bar",data:[40,90,10,20,56],barWidth:"50px",itemStyle:{normal:{color:function(o){let t=colorArr.length;return new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colorArr[o.dataIndex%t].top},{offset:1,color:colorArr[o.dataIndex%t].bottom}],!1)},barBorderRadius:[30,30,0,0]}},label:{normal:{show:!0,fontSize:18,fontWeight:"bold",color:"#333",position:"top"}}}]};