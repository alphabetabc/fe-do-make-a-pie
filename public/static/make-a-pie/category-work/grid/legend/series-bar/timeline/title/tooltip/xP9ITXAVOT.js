option={baseOption:{backgroundColor:"#0e2147",timeline:{show:!1},color:["#f14f75","#2c7efa"],title:{textStyle:{color:"#fff",fontSize:16}},legend:{data:["女","男"],bottom:8,left:"center",itemHeight:5,textStyle:{color:"#fff",fontSize:16}},tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow"}},grid:[{show:!1,left:"2%",top:60,bottom:60,containLabel:!0,width:"45%"},{show:!1,left:"50.5%",top:60,bottom:60,width:"0"},{show:!1,right:"2%",top:60,bottom:60,containLabel:!0,width:"45%"}],xAxis:[{max:function(e){return e.max*2-20},type:"value",triggerEvent:!0,inverse:!0,axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!1},splitLine:{show:!1}},{gridIndex:1,show:!1},{max:function(e){return e.max*2-20},gridIndex:2,type:"value",axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!1},splitLine:{show:!1}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,margin:8,textStyle:{color:"#fff",fontSize:12}},data:["80岁+","70-80岁","60-70岁","45-60岁","30-45岁","18-30岁","0-18岁"]},{gridIndex:1,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,textStyle:{color:"#ffffff",fontSize:12}},data:["80岁+","70-80岁","60-70岁","45-60岁","30-45岁","18-30岁","0-18岁"].map(function(e){return{value:e,textStyle:{align:"center"}}})},{gridIndex:2,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:["80岁+","70-80岁","60-70岁","45-60岁","30-45岁","18-30岁","0-18岁"]}],series:[{name:"女",type:"bar",stack:"one",barGap:15,barWidth:30,label:{normal:{show:!0,position:"left",textStyle:{color:"#fff",fontSize:12}},emphasis:{show:!0,position:"left",offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:"#f14f75",opacity:1},emphasis:{opacity:1}},data:[389,259,262,324,232,176,196]},{name:"男",stack:"right",type:"bar",barGap:15,barWidth:30,xAxisIndex:2,yAxisIndex:2,label:{normal:{show:!0,position:"right",textStyle:{color:"#fff",fontSize:12}},emphasis:{show:!0,position:"right",offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:"#2c7efa",opacity:1},emphasis:{opacity:1}},data:[389,259,262,324,232,176,196]}]}};
