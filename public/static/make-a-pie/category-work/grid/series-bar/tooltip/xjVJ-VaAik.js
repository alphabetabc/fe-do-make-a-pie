var data={title:"城管事件大类",xaxisData:["宣传,广告","街面,秩序","道路,交通","市容,环境","公用,设施","其他"],gdpzz:[{value:8},{value:12},{value:16},{value:26},{value:32},{value:38}]},gdpzzData=data.gdpzz,xaxisData=data.xaxisData,option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"1%",right:"1%",bottom:"7%",top:"18%",containLabel:!0},xAxis:{show:!0,type:"category",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#fff",width:2}},splitLine:{show:!1},axisLabel:{margin:4,interval:0,textStyle:{fontSize:40,color:"#c8e2f3"},formatter:function(e){var t="";return e.length>=3?t=e.slice(0,e.indexOf(","))+`
`+e.slice(e.indexOf(",")+1,e.length):t=e,t}},data:xaxisData},yAxis:[{type:"value",splitNumber:5,nameTextStyle:{color:"#c8e2f3",fontSize:40},nameGap:50,name:"（个）   ",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!0,margin:15,textStyle:{fontSize:40,color:"#c8e2f3"}}}],series:[{type:"bar",barWidth:20,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#50a7de"},{offset:1,color:"#197bb8"}]),barBorderRadius:10}},label:{show:!1},data:gdpzzData}]};