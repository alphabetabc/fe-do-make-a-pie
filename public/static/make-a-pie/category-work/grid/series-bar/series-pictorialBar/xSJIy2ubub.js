for(var datas=[835,831,690,536,450],max=datas[0],len=datas.length,datastyle=[],normalcolor=new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(117, 203,253, 1)"},{offset:1,color:"rgba(1, 163,255, 1)"}]),maxcolor=new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFFFC2"},{offset:1,color:"#F8F872"}]),i=1;i<datas.length;i++)datas[i]>max&&(max=datas[i]);for(var i=0;i<datas.length;i++)datastyle.push({value:datas[i],itemStyle:{normal:{color:datas[i]===max?maxcolor:normalcolor}}});option={color:["#3398DB"],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",axisLabel:{textStyle:{fontSize:22,color:"#fff"}},axisLine:{lineStyle:{color:"#45BAFE"}},axisTick:{show:!1},splitLine:{show:!1},splitArea:{show:!1},data:["网购","广场","工业园","市场","小区"]},yAxis:{min:0,max:1e3,axisLabel:{textStyle:{fontSize:22,color:"#fff"}},axisTick:{inside:!0},axisLine:{lineStyle:{color:"#45BAFE"}},splitLine:{show:!1},splitArea:{show:!1}},series:[{type:"pictorialBar",symbol:"circle",symbolSize:[50,50],symbolPosition:"end",symbolOffset:[0,"-120%"],z:10,data:datas},{name:"",type:"bar",barWidth:"40%",data:datastyle,label:{normal:{show:!1}}}],label:{normal:{show:!0,offset:[0,-10],textStyle:{color:"#fff",fontSize:22},position:"top",formatter:"{c}"}}};