option={grid:{left:"5%",right:"10%",top:"20%",bottom:"8px",containLabel:!0},legend:{show:!0,right:10,icon:"pin",itemWidth:15,itemHeight:6,textStyle:{color:"#fff",fontSize:9},data:["北区","南区","西区"]},xAxis:{type:"category",axisLine:{color:"rgba(10, 62, 99, 1)"},axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff",fontSize:9},margin:6},data:["8.17","8.18","8.19","8.20"]},yAxis:{type:"value",name:"",max:5,min:0,axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{textStyle:{color:function(e){return e==4?"red":"#fff"},fontSize:9}}},series:[{name:"北区",type:"bar",barWidth:16,showBackground:!0,barGap:"50%",backgroundStyle:{color:"rgba(11, 23, 44, 0.55)"},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#52FFFF"},{offset:1,color:"#6A93DB"}])},emphasis:{opacity:1}},data:[2,2.5,4.5,3],markLine:{silent:!0,symbol:"none",lineStyle:{width:2},itemStyle:{normal:{color:"#EE0F0F"}},data:[{yAxis:4}],label:{normal:{color:"#EE0F0F",formatter:"超标线"}},zlevel:99}},{name:"南区",type:"bar",barWidth:16,showBackground:!0,backgroundStyle:{color:"rgba(11, 23, 44, 0.55)"},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(255, 181, 97, 1)"},{offset:1,color:"rgba(167, 99, 9, 1)"}])},emphasis:{opacity:1}},data:[2,2.5,4.5,3]},{name:"西区",type:"bar",barWidth:16,showBackground:!0,backgroundStyle:{color:"rgba(11, 23, 44, 0.55)"},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(3, 225, 49, 1)"},{offset:1,color:"rgba(17, 140, 57, 1)"}])},emphasis:{opacity:1}},data:[2,2.5,4.5,3]},{name:"",type:"pictorialBar",symbolSize:[16,6],symbolOffset:[-24,-4],barWidth:16,z:3,symbolPosition:"end",itemStyle:{normal:{color:"#54F6FB"}},data:[2,2.5,4.5,3]},{name:"",type:"pictorialBar",symbolSize:[16,6],symbolOffset:[0,-4],barWidth:16,z:3,symbolPosition:"end",itemStyle:{normal:{color:"rgba(248, 174, 90, 1)"}},data:[2,2.5,4.5,3]},{name:"",type:"pictorialBar",symbolSize:[16,6],symbolOffset:[24,-4],barWidth:16,z:3,symbolPosition:"end",itemStyle:{normal:{color:"rgba(3, 222, 50, 1)"}},data:[2,2.5,4.5,3]}]};