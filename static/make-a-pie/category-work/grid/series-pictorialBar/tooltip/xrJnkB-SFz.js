var lightBlue={type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 192, 255, 1)"},{offset:1,color:"rgba(0, 192, 255, 0.1)"}],globalCoord:!1},darkBlue={type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(41, 121, 255, 1)"},{offset:1,color:"rgba(41, 121, 255, 0.1)"}],globalCoord:!1};function randomData(){return value=Math.random()*50,{value:Math.round(value)}}function checkTime(a){return a<10&&(a="0"+a),a}function timeSet(){var a=new Date,o=a.getMinutes(),e=a.getSeconds();return o=checkTime(o),e=checkTime(e),[o,e].join(":")}for(var data=[],timeData=[],i=0;i<9;i++)timeData.unshift(timeSet()),data.unshift(randomData());var option={tooltip:{show:!1},xAxis:{type:"category",boundaryGap:!1,min:-1,max:9,axisLine:{lineStyle:{color:"#4bbbf8",shadowColor:"rgba(75, 211, 255, 0.5)",shadowBlur:5}},axisTick:{interval:a=>!(a===-1||a===9)},axisLabel:{color:"#fff",fontSize:12},splitLine:{show:!1},data:timeData},yAxis:[{max:50,min:0,axisLine:{lineStyle:{color:"#4bbbf8",shadowColor:"rgba(75, 211, 255, 0.5)",shadowBlur:5}},axisLabel:{color:"#fff",fontSize:12},splitLine:{lineStyle:{color:"rgba(75, 211, 255, 0.2)",type:"dashed"}}}],series:[{name:"数量",type:"pictorialBar",barCategoryGap:"-60%",symbol:'path://d="M150 0 L75 200 L225 200 Z"',label:{show:!0,position:"top",color:"#1798ff",fontSize:14},itemStyle:{color:function(a){return a.dataIndex%2?darkBlue:lightBlue}},data}],backgroundColor:"#190c12"};myChart.setOption(option);var key=0;setInterval(function(){timeData.shift(),timeData.push(timeSet()),data.shift(),data.push(randomData()),key=key===1?0:1,myChart.setOption({xAxis:{data:timeData},series:[{itemStyle:{normal:{color:function(a){return(a.dataIndex+key)%2?darkBlue:lightBlue}}},data}]})},1e3);
