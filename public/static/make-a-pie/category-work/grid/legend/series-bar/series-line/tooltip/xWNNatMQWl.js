option={tooltip:{trigger:"axis",formatter:function(t){var a=""+t[0].name+"<br/>",r="";return t.forEach(e=>{r=e.seriesType==="bar"?"%":"<br/>",a+=e.seriesName+" : "+e.value+r}),a}},legend:{data:["工单数","满意度"],right:"10%",top:20,textStyle:{color:"#606683"}},color:["#4F7FFF","#349A99"],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!0,data:["11/24","11/25","11/26","11/27","11/28","11/29","11/30"]},yAxis:[{type:"value",name:"工单数",position:"left"},{type:"value",name:"满意度",position:"right",axisLabel:{formatter:"{value}%"},max:100,splitLine:{show:!0},boundaryGap:[.2,.2]}],series:[{name:"工单数",type:"line",lineStyle:{color:"#4F7FFF"},stack:"总量",label:{normal:{show:!0}},data:[120,132,101,134,90,230,210]},{name:"满意度",type:"bar",yAxisIndex:1,barMaxWidth:"20%",label:{show:!0,position:"top",formatter:"{c}%"},stack:"总量",lineStyle:{color:"#349A99"},data:[.6*100,.75*100,.51*100,.64*100,.75*100,.8*100,70]}]};