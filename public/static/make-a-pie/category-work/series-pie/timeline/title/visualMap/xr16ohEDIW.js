var visibleCount;function getData(o){var t=360;visibleCount=t*o;var r=[],e;for(e=0;e<visibleCount;e++)r.push([1,e]);for(e=visibleCount;e<t;e++)r.push([1,0]);return r}var percent=[.25,.5,.75,1];function getOptions(o){for(var t=[],r,e,a=0;a<o.length;a++)e=getData(o[a]),r={title:{text:Math.ceil(o[a]*100)+"%"},series:[{type:"pie",radius:["54%","55%"],center:["50%","50%"],silent:!0,itemStyle:{normal:{color:"RGB(0,0,0,0.1)",shadowBlur:10,shadowColor:"#1b1e25"}},labelLine:{normal:{show:!1}},data:e},{type:"pie",radius:["75%","76%"],center:["50%","50%"],silent:!0,itemStyle:{normal:{color:"RGB(0,0,0,0.1)",shadowBlur:10,shadowColor:"#1b1e25"}},labelLine:{normal:{show:!1}},data:e},{type:"pie",radius:["55%","75%"],center:["50%","50%"],silent:!0,labelLine:{normal:{show:!1}},data:e}]},t.push(r);return t}var option={baseOption:{timeline:{data:[0,1,2,3],label:{formatter:function(o){var t=["下发指令","接收指令","执行指令","完成"];return t[o]}},left:30,right:30,bottom:20,symbol:"circle",symbolSize:15,symbolRotate:"30",playInterval:"2000",loop:!0,axisType:"category",itemStyle:{normal:{color:"#fff",borderColor:"#00cc00"},emphasis:{color:"#fff"}},lineStyle:{color:"#49a9ee",width:5},checkpointStyle:{color:"#00cc00",symbolSize:18,borderColor:"rgba(0, 204, 0, 0.5)",animationDuration:"1000"},controlStyle:{show:!1},autoPlay:!0},color:["#00cc00"],title:{textStyle:{color:"#333",fontSize:50,fontWeight:"normal",fontFamily:"华文细黑"},x:"center",y:"center"},visualMap:[{show:!1,dimension:1,seriesIndex:2,inRange:{colorAlpha:[0,1]}}]},options:getOptions(percent)};