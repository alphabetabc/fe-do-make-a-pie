var category=[{name:"1",value:2},{name:"2",value:7},{name:"3",value:8}],total=30,datas=[];category.forEach(a=>{datas.push(a.value)}),option={backgroundColor:"trasparent",xAxis:{max:total,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},grid:{left:100,top:100,right:150,bottom:100},yAxis:[{type:"category",inverse:!1,data:["三级防线","二级防线","一级防线"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{verticalAlign:"bottom",align:"left",padding:[10,10,30,10],textStyle:{fontSize:14,color:"white"},formatter(a,t){return a}}}],series:[{type:"pictorialBar",itemStyle:{normal:{color:"#07314a"}},symbolRepeat:"fixed",symbolMargin:2,symbol:"roundRect",symbolClip:!0,symbolSize:[5,18],symbolPosition:"start",symbolOffset:[3,-4],symbolBoundingData:this.total,data:[total,total,total],z:2,animationEasing:"elasticOut"},{type:"pictorialBar",itemStyle:{normal:{color:"#70faf2"}},symbolRepeat:"fixed",symbolMargin:2,symbol:"roundRect",symbolClip:!0,symbolSize:[5,18],symbolPosition:"start",symbolOffset:[3,-4],symbolBoundingData:this.total,data:datas,z:2,animationEasing:"elasticOut"},{type:"pictorialBar",symbolBoundingData:total,itemStyle:{normal:{color:"none"}},label:{normal:{formatter:a=>{var t;return t="{f| "+a.data+"个}",t},rich:{f:{color:"#ffffff"}},position:"right",distance:10,show:!0}},data:datas,z:0},{name:"外框",type:"bar",barGap:"-130%",data:[total,total,total],barWidth:45,itemStyle:{normal:{barBorderRadius:[5,5,5],color:"transparent",barBorderColor:"#1588D1",barBorderWidth:0}},z:0}]};