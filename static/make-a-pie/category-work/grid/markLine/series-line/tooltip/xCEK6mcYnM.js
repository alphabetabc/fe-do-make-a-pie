var getname=[1,2,11],getvalue=[4,5,6];function calMax(t){let o=0;return t.forEach(l=>{l.forEach(e=>{e===void 0||e===""||o<e&&(o=e)})}),Math.ceil(o/9.5)*10}var max=Math.ceil(calMax([getvalue])/100)*100,option={grid:{top:40,bottom:40,left:60,right:20},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:"{b0}年: {c0}千瓦时/亩"},xAxis:[{data:getname,axisLabel:{margin:10,color:"#656565",textStyle:{fontSize:13}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1}}],yAxis:[{type:"value",min:0,max,interval:max/5,splitNumber:5,name:"用电量（千瓦时/亩）",nameTextStyle:{color:"#666666",fontSize:13,padding:[0,0,0,110]},axisLabel:{formatter:function(t){if(num=t,num&&num!="undefined"&&num!="null"){let o=num;return o=o.toString(),o=o.replace(/,/gi,""),o}else return num},color:"#656565",textStyle:{fontSize:13}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(209,209,209,0.5)"}}}],series:[{type:"line",data:getvalue,symbol:"circle",symbolSize:10,lineStyle:{normal:{width:4,color:{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#FFCA59"},{offset:1,color:"#FF9500"}]},shadowColor:"rgba(255, 158, 16, 0.38)",shadowBlur:6,shadowOffsetY:8}},itemStyle:{normal:{color:"#FFF",borderColor:{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#FFCA59"},{offset:1,color:"#FF9500"}]},borderWidth:4}},markLine:{symbol:"none",data:[{silent:!1,lineStyle:{type:"solid",color:"#FEC67C"},label:{position:"end",formatter:"标准(10500)",padding:[-30,0,0,-60],color:"#666",fontSize:12},yAxis:10500}]},areaStyle:{normal:{color:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(254, 198, 124, .3)"},{offset:1,color:"rgba(254, 198, 124, 0)"}]}}}}]};
