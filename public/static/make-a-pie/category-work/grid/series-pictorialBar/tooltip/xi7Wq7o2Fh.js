var lightBlue={type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 192, 255, 1)"},{offset:1,color:"rgba(0, 192, 255, 0.1)"}],globalCoord:!1},darkBlue={type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(41, 121, 255, 1)"},{offset:1,color:"rgba(41, 121, 255, 0.1)"}],globalCoord:!1};function randomData(){return value=Math.random()*50,{value:Math.round(value)}}function checkTime(o){return o<10&&(o="0"+o),o}function timeSet(){var o=new Date,a=o.getMinutes(),e=o.getSeconds();return a=checkTime(a),e=checkTime(e),[a,e].join(":")}for(var data=[],timeData=[],i=0;i<9;i++)timeData.unshift(timeSet()),data.unshift(randomData());var option={tooltip:{axisPointer:{type:"none"},trigger:"item",position:"top",backgroundColor:"#9DCEFF",formatter:"{c0}",textStyle:{color:"#000C1D"}},xAxis:{type:"category",boundaryGap:!1,min:-1,max:9,axisLine:{show:!1},axisLabel:{color:"#8F95A7"},splitLine:{show:!0,lineStyle:{type:"solid",color:"#707070",opacity:.2}},axisTick:{show:!1},data:timeData},yAxis:[{max:50,min:0,axisLine:{show:!1},axisLabel:{color:"#8F95A7"},splitLine:{lineStyle:{type:"solid",color:"#707070",opacity:.1}},axisTick:{show:!1}}],series:[{name:"数量",type:"pictorialBar",barCategoryGap:"-80%",symbol:'path://d="M150 0 L75 200 L225 200 Z"',label:{normal:{show:!0,position:"top",color:"#888"},emphasis:{color:"red"}},itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(28, 112, 227, 1)"},{offset:1,color:"rgba(28, 112, 227, 0.1)"}],globalCoord:!1}},emphasis:{color:"#9DCEFF"}},data}],backgroundColor:"#000C1D"};myChart.setOption(option);
