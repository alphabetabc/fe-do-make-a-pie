option={backgroundColor:"#0c1e55",title:{text:"测温",x:"center",top:"20",textStyle:{color:"#ffff",fontStyle:"normal",fontWeight:"bold",fontFamily:"sans-serif",fontSize:18}},color:["#00feff","#4693EC"],legend:{data:["累计热量","环比"],top:"10%",icon:"circle",textStyle:{color:[]},color:["#00feff","#4693EC"]},tooltip:{trigger:"item",formatter:function(e){var t=e.seriesName+"</br>"+e.marker+e.data.name+"</br>当前温度："+e.data.value+"</br>目标温度："+e.data.value1+"</br>";return t}},grid:{left:"3%",right:"4%",bottom:"10%",height:"70%",containLabel:!0},xAxis:[{type:"category",axisTick:{show:!1,color:"#707070"},axisLabel:{textStyle:{fontSize:14,color:"#FFFF"}},axisLine:{lineStyle:{color:"#00FF00"}},data:["测温1","测温2","测温3"]}],yAxis:[{type:"value",name:"测温",nameTextStyle:{fontSize:14,color:"#ebf8ac"},axisLine:{lineStyle:{color:"#FFFF",width:1.5}},axisLabel:{show:!0,textStyle:{color:"#00FF00"}},splitLine:{show:!0,lineStyle:{color:"#FFC125"}}}],series:[{name:"累计热量",type:"bar",barWidth:"20%",data:[{name:"测温1",value:"70",value1:"20",itemStyle:{normal:{color:"#1F78B4",barBorderRadius:[50,50,0,0]}},label:{show:!0,position:"top",distance:15,fontWeight:"bolder",fontSize:20}},{name:"测温2",value:"60",value1:"40",itemStyle:{color:"#A6CEE3"},label:{show:!0}},{name:"测温3",value:"20",value1:"70",itemStyle:{color:"#B2DF8A"},label:{show:!0,position:"top",distance:15,fontWeight:"bolder",fontSize:20}}]},{name:"环比",type:"bar",barWidth:"20%",data:[{name:"测温1",value:"50",value1:"10",itemStyle:{normal:{color:"#1F78B4",barBorderRadius:[50,50,0,0]}},label:{show:!0,position:"top",distance:15,fontWeight:"bolder",fontSize:20}},{name:"测温2",value:"80",value1:"60",itemStyle:{color:"#A6CEE3"},label:{show:!0,distance:15,fontWeight:"bolder",fontSize:20}},{name:"测温3",value:"30",value1:"50",itemStyle:{color:"#B2DF8A"},label:{show:!0,position:"top",distance:15,fontWeight:"bolder",fontSize:20}}]}]};
