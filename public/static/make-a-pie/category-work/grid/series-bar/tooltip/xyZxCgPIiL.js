option={color:["#FFDC87","#FF976E"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:0,right:0,bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["基础施工","组塔施工","架线施工","附件安装","隧道施工","电缆敷设","其他"],axisLabel:{show:!0,textStyle:{fontSize:24},interval:0,formatter:function(t){return t.split("").join(`
`)}}}],yAxis:[{axisLine:{show:!1},axisTick:{show:!1},show:!0,axisLabel:{color:"#298EF5",fontSize:18},min:0,max:100}],series:[{name:"三级",type:"bar",barGap:0,data:[26,32,45,44,56,62,52],itemStyle:{normal:{label:{show:!0,position:"top",formatter:"{c}",fontSize:16},shadowBlur:80,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{name:"四级",type:"bar",data:[17,26,37,38,47,56,45],itemStyle:{normal:{label:{show:!0,position:"top",formatter:"{c}"}}}}]};
