var currvalue=450,maxValue=4e3,title="收入比重",percent=(currvalue/maxValue*100).toFixed(2),bl=maxValue/100;option={backgroundColor:"#010e28",series:[{name:"刻度",type:"gauge",radius:"80%",center:["50%","70%"],min:0,max:100,splitNumber:8,startAngle:190,endAngle:-10,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!0,color:"#4c647c",distance:30,formatter:function(e){switch(e+""){case"0":return"0";case"12.5":return 12.5*bl;case"25":return 25*bl;case"37.5":return 37.5*bl;case"50":return 50*bl;case"62.5":return 62.5*bl;case"75":return 75*bl;case"87.5":return 87.5*bl;case"100":return 100*bl}}},axisTick:{show:!0,splitNumber:10,lineStyle:{color:"#4c647c",width:1},length:-8},splitLine:{show:!0,length:-20,lineStyle:{color:"#4c647c"}},detail:{show:!1},pointer:{show:!1}},{name:"税收比重",type:"gauge",radius:"98%",center:["50%","70%"],splitNumber:0,startAngle:190,endAngle:-10,axisLine:{show:!0,lineStyle:{width:5,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#4e6be3"},{offset:1,color:"#23b4f9"}])]]}},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},pointer:{show:!1},title:{show:!0,offsetCenter:[0,"40%"],textStyle:{color:"#73f3f5",fontSize:32}},detail:{show:!0,offsetCenter:[0,0],color:"#d5b16f",formatter:function(e){return e+"%"},textStyle:{fontSize:48}},data:[{name:title,value:percent}]},{type:"pie",radius:["79%","91%"],center:["50%","70%"],animation:!1,label:{show:!1},startAngle:190-percent/100*200+1.5,color:["#d5b16f","rgba(0,0,0,0)"],itemStyle:{shadowColor:"#d5b16f",shadowBlur:15},data:[{value:3,name:"指针"},{value:357,name:"空白"}]},{type:"pie",radius:["50%","51%"],center:["50%","70%"],animation:!1,label:{show:!1},startAngle:200,itemStyle:{shadowColor:"#73f3f5",shadowBlur:30},data:[{value:220,name:"指针",itemStyle:{color:"#010e28"}},{value:140,name:"空白",itemStyle:{color:"rgba(0,0,0,0)"}}]}]};
