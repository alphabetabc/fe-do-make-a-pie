option={backgroundColor:"#030F35",title:{text:"75%",textStyle:{color:"#fff",fontSize:30},left:"center",top:"center"},angleAxis:{max:100,clockwise:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},radiusAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},polar:{center:["50%","50%"],radius:"100%"},series:[{type:"pie",zlevel:2,silent:!0,radius:["60%","59%"],startAngle:180,hoverAnimation:!1,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#9933FF"},{offset:1,color:"#00CCFF"}],global:!1},label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:_pie3()},{type:"bar",data:[{name:"进度",value:75,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#404764"},{offset:1,color:"#00FDAD"}])}}}],coordinateSystem:"polar",roundCap:!0,barWidth:40,barGap:"-100%",z:2},{type:"bar",data:[{value:100,itemStyle:{color:"rgba(64, 71, 100, 0.1)",shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:5,shadowOffsetY:2}}],coordinateSystem:"polar",roundCap:!0,barWidth:40,barGap:"-100%",z:1}]};function _pie3(){let o=[];for(var e=0;e<2;e++)o.push({value:1,itemStyle:{normal:{color:"rgba(88,142,197,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}},{value:4,itemStyle:{normal:{color:"#25D6F8",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}},{value:40,itemStyle:{normal:{color:"#152F60",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}},{value:4,itemStyle:{normal:{color:"#25D6F8",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}},{value:1,itemStyle:{normal:{color:"rgba(88,142,197,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return o}function _pie2(){let o=[],e={type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#9933FF"},{offset:1,color:"#00CCFF"}],global:!1};for(var r=0;r<16;r++)r%4===0?o.push({name:(r+1).toString(),value:5,itemStyle:{normal:{color:"#25D6F8",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):r%4===1?o.push({name:(r+1).toString(),value:2,itemStyle:{normal:{color:"rgba(88,142,197,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):r%4===2?o.push({name:(r+1).toString(),value:20,itemStyle:{normal:{borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):o.push({name:(r+1).toString(),value:2,itemStyle:{normal:{color:"rgba(88,142,197,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return o}
