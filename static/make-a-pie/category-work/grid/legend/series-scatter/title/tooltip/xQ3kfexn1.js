var data=[["2019",3.6,1],["2019",2.9,1],["2019",2.7,1],["2019",2.6,1],["2018",2.6,1],["2018",3.6,1],["2018",4.3,1],["2017",3.4,1],["2017",3,1],["2016",3.3,1],["2015",2.6,1],["2015",3.9,1]];option={backgroundColor:"#000",tooltip:{position:"top",formatter:function(t){return t.value[0]+"年 "+t.value[1]+"震级 发生次数："+t.value[2]}},title:{text:"",x:"center"},legend:{left:"right",textStyle:{color:"#fff"}},grid:{top:80,left:10,bottom:0,right:50,containLabel:!0},xAxis:{type:"category",boundaryGap:!0,data:[2015,2016,2017,2018,2019],splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,textStyle:{fontSize:14,color:"#fff"}},axisLine:{show:!0}},yAxis:{name:"震级",nameTextStyle:{color:"#fff"},type:"value",boundaryGap:!1,axisLabel:{interval:0,textStyle:{fontSize:16,color:"#fff"}},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.3)"}},axisLine:{show:!1},axisTick:{show:!1}},series:[{name:"郑州",type:"scatter",label:{normal:{show:!1,formatter:function(t){return t.value[0]+"年"+t.value[1]+"震级 发生次数："+t.value[2]},position:"top",fontSize:20,fontWeight:"bold",color:"#fff"}},itemStyle:{color:{type:"linear",x:1,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#3C9CFF"},{offset:1,color:"#44FFC4"}],global:!1}},symbolSize:function(t){return Math.sqrt(t[2])*30},data}],animationDelay:function(t){return t*5}};
