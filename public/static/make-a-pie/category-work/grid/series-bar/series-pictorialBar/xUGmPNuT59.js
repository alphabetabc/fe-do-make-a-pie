var data=[80,75,78],colorList=[];colorList[0]=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0275f2"},{offset:1,color:"#24dcfe"}]),colorList[1]=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#7b6d00"},{offset:1,color:"#f5cf00"}]),colorList[2]=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#008491"},{offset:1,color:"#00dabf"}]),option={backgroundColor:"#100c29",grid:{top:"4%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",splitLine:{show:!1},offset:10,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{inside:!0},data:["标题一","标题二","标题三"]},series:[{name:"2011年",type:"bar",barWidth:"30px",itemStyle:{normal:{color:function(e){return console.log(e),colorList[e.dataIndex]}}},label:{show:!0,position:"right",offset:[0,28],fontSize:14,color:"#fff",formatter:"{c}%"},z:9999,data},{name:"2011年",type:"bar",barWidth:"30px",barGap:"-100%",z:99,itemStyle:{normal:{color:"#30373f"}},label:{show:!0,position:"insideBottomLeft",offset:[-6,-30],fontSize:18,color:"#caced1",formatter:"{b}"},data:[100,100,100]},{type:"pictorialBar",itemStyle:{normal:{color:"#100c29"}},symbolRepeat:"fixed",symbolMargin:2,symbol:"rect",symbolClip:!0,symbolSize:[4,30],symbolPosition:"start",symbolOffset:[-4,0],data:[100,100,100],width:25,z:0,zlevel:1}]};
