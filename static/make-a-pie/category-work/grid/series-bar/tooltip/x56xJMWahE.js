var getXY=["副教授","教授","讲师","研究员","工程师"],getRS=[26.43,17.91,12.3,10.7,8.55];function calMax(e){let a=0;return e.forEach(i=>{i.forEach(t=>{t===void 0||t===""||a<t&&(a=t)})}),Math.ceil(a/9.5)*10}var max=Math.ceil(calMax([getRS])/10)*10;option={backgroundColor:"#000000",grid:{left:"150",right:"80",bottom:"30",top:"30"},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return"项目投入<br/>"+e[0].name+": "+e[0].value+"%"}},xAxis:[{type:"value",show:!1,axisLabel:{margin:5,color:"#666666",textStyle:{fontSize:"13"}},min:0,max,interval:max/5,splitNumber:5,splitLine:{show:!0,lineStyle:{color:"#D1D1D1"}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1}}],yAxis:[{type:"category",inverse:!0,axisLabel:{textStyle:{color:"#FFFFFF",fontSize:"13"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#333333"}},data:getXY}],series:[{name:"值",type:"bar",zlevel:1,xAxisIndex:0,label:{show:!0,position:"right",color:"#FFFFFF",fontSize:14,offset:[10,0],formatter:"{c}%"},itemStyle:{normal:{barBorderRadius:[10,10,10,10],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"transparent"},{offset:1,color:"#ED11AC"}],!1)}},barWidth:15,data:getRS}]};
