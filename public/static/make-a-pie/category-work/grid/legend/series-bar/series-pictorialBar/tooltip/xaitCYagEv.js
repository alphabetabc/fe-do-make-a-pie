var option={backgroundColor:"#091126",tooltip:{trigger:"axis",formatter:"{b}<br />{a2}: {c2}<br />{a1}: {c1}<br />{a5}: {c5}",axisPointer:{type:"shadow",label:{backgroundColor:"rgba(17, 27, 54, 1)"}},textStyle:{color:"#fff",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:14}},grid:{left:"10%",right:"10%",bottom:"10%",top:"58%",containLabel:!0},legend:{right:"10%",top:"52%",itemGap:16,itemWidth:18,itemHeight:10,selectedMode:!1,data:["当前寿命≤100","100<当前寿命≤200","200<当前寿命≤300","当前寿命>300"],textStyle:{color:"#08f1f8",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},xAxis:[{type:"category",data:["8#","9#","10#","11#","12#","13#","14#","15#","16#","17#"],axisLabel:{textStyle:{color:"#078ceb",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:14},rotate:0},axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(255,255,255,0.4)"}}}],yAxis:[{type:"value",splitNumber:5,axisLabel:{textStyle:{color:"#078ceb",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:14}},axisLine:{lineStyle:{color:"rgba(255,255,255,0.4)"}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:["#fff"],opacity:.06}}}],series:[{name:"",type:"pictorialBar",symbolSize:[24,10],symbolOffset:[-36,-5],symbolPosition:"end",z:12,label:{normal:{show:!0,offset:[-36,0],position:"top",textAlign:"left",formatter:function(o){return o.value===0?"":o.value+"%"},fontSize:14,color:"rgba(51,135,255, 1)"}},color:"rgba(51,135,255, 1)",data:[15,51,8,46,15,51,8,46,15,51]},{name:"当前寿命≤100",type:"bar",data:[15,51,8,46,15,51,8,46,15,51],barWidth:24,barGap:20,itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(51,135,255, 1)"},{offset:1,color:"rgba(51,135,255, .2)"}]),opacity:.8}}},{name:"",type:"pictorialBar",symbolSize:[24,10],symbolOffset:[-12,-5],z:12,symbolPosition:"end",label:{normal:{offset:[-12,0],show:!0,position:"top",fontSize:14,color:"#4acf6f",formatter:function(o){return o.value===0?"":o.value+"%"}}},color:"#4acf6f",data:[65,45,24,48,65,45,24,48,65,45]},{name:"100<当前寿命≤200",type:"bar",barWidth:24,barGap:"20",z:0,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(52, 209, 135, 1)"},{offset:1,color:"rgba(52, 209, 135, 0)"}]),opacity:.8}},data:[65,45,24,48,65,45,24,48,65,45]},{name:"",type:"pictorialBar",symbolSize:[24,10],symbolOffset:[12,-5],symbolPosition:"end",z:12,label:{normal:{offset:[12,0],show:!0,position:"top",fontSize:14,color:"#f09f38",formatter:function(o){return o.value===0?"":o.value+"%"}}},color:"#f09f38",data:[18,4,60,6,18,4,60,6,18,4]},{name:"200<当前寿命≤300",type:"bar",data:[18,4,60,6,18,4,60,6,18,4],barWidth:24,barGap:"0",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(228, 131, 38, 1)"},{offset:1,color:"rgba(228, 131, 38, 0)"}]),opacity:.8}}},{name:"",type:"pictorialBar",symbolSize:[24,10],symbolOffset:[36,-5],symbolPosition:"end",z:12,label:{normal:{offset:[36,0],show:!0,position:"top",formatter:function(o){return o.value===0?"":o.value+"%"},fontSize:14,color:"#d9302e"}},color:"#d9302e",data:[2,0,8,0,2,0,8,0,2,0]},{name:"当前寿命>300",type:"bar",data:[2,0,8,0,2,0,8,0,2,0],barWidth:24,barGap:"0",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(196, 46, 45, 1)"},{offset:1,color:"rgba(196, 46, 45, 0)"}]),opacity:.8}}}]};
