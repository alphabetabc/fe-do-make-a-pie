text=["35","36","37","38","39","40","41"];var value=37.5,mercuryColor="#fd4d49",borderColor="#fd4d49";function getAxisMax(a){var e={};return e.maxAxis0=a.length*20,e.maxAxis1=a.length*2-1,e.lenOuterBar=[a.length*20],e.lenInnerBar=[a.length*20*.99],e}max=getAxisMax(text);function getData(a){return[a*20+-684.5]}var data=getData(value);function getScale(a){scale=[{value:0,label:{normal:{formatter:""}}}];for(var e in a){if(scale.push({value:10,label:{normal:{formatter:a[e]}}}),e==a.length-1)break;scale.push({value:5,label:{normal:{formatter:""}}})}return scale}scale=getScale(text),option={title:{text:"温度计 x professional edition",show:!1},xAxis:[{show:!1,min:0,max:max.maxAxis0},{show:!1,data:[],min:0,max:max.maxAxis1}],yAxis:[{show:!1,data:[]},{show:!1,data:[]},{show:!1,data:[]},{show:!1,min:-110,max:93}],series:[{name:"条",type:"bar",yAxisIndex:0,data,barWidth:18,itemStyle:{normal:{color:mercuryColor,barBorderRadius:40}},z:2},{name:"白框",type:"bar",yAxisIndex:1,barGap:"-100%",data:max.lenInnerBar,barWidth:28,itemStyle:{normal:{color:"#ffffff",barBorderRadius:40}},z:1},{name:"外框",type:"bar",yAxisIndex:2,barGap:"-100%",data:max.lenOuterBar,barWidth:38,itemStyle:{normal:{color:borderColor,barBorderRadius:40}},z:0},{name:"圆",type:"scatter",hoverAnimation:!1,data:[0],yAxisIndex:0,symbolSize:48,itemStyle:{normal:{color:mercuryColor,opacity:1}},z:2},{name:"白圆",type:"scatter",hoverAnimation:!1,data:[0],yAxisIndex:1,symbolSize:60,itemStyle:{normal:{color:"#ffffff",opacity:1}},z:1},{name:"外圆",type:"scatter",hoverAnimation:!1,data:[0],yAxisIndex:2,symbolSize:70,itemStyle:{normal:{color:borderColor,opacity:1}},z:0},{name:"刻度",type:"bar",xAxisIndex:1,yAxisIndex:3,label:{normal:{show:!0,position:"top",distance:12,color:"#525252",fontSize:20}},barGap:"-100%",data:scale,barWidth:5,itemStyle:{normal:{color:borderColor,barBorderRadius:10}},z:0}]};