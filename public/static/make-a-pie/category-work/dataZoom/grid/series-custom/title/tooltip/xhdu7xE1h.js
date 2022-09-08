var data=[],dataCount=40,startTime=+new Date,categories=["设备A1","设备A2","设备A3","设备B1","设备B2","设备B3"],types=[{name:"运行",color:"#75d874"},{name:"故障",color:"#bd6d6c"},{name:"等待",color:"#e0bc78"},{name:"备用",color:"#7b9ce1"}];echarts.util.each(categories,function(e,t){for(var r=startTime,o=0;o<dataCount;o++){var d=types[Math.round(Math.random()*(types.length-1))],a=Math.round(Math.random()*1e6);data.push({name:d.name,value:[t,r,r+=a,a],itemStyle:{normal:{color:d.color}}}),r+=Math.round(Math.random()*2e3)}});function renderItem(e,t){var r=t.value(0),o=t.coord([t.value(1),r]),d=t.coord([t.value(2),r]),a=t.size([0,1])[1]*.6,n=echarts.graphic.clipRectByRect({x:o[0],y:o[1]-a/2,width:d[0]-o[0],height:a},{x:e.coordSys.x,y:e.coordSys.y,width:e.coordSys.width,height:e.coordSys.height});return n&&{type:"rect",shape:n,style:t.style()}}option={tooltip:{formatter:function(e){return e.marker+e.name+": "+e.value[3]+" ms"}},title:{text:"甘特图-机器运行状态",left:"center"},legend:{show:!0,data:["运行","故障","等待","备用"],right:80,top:50,left:"center"},dataZoom:[{type:"slider",show:!1,filterMode:"weakFilter",showDataShadow:!1,top:550,height:10,borderColor:"transparent",backgroundColor:"#e2e2e2",handleIcon:"M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",handleSize:20,handleStyle:{shadowBlur:6,shadowOffsetX:1,shadowOffsetY:2,shadowColor:"#aaa"},labelFormatter:"",start:0,end:70},{type:"inside",filterMode:"weakFilter"}],grid:{top:100,height:350},xAxis:{min:startTime,scale:!0,axisLabel:{formatter:function(e){return Math.max(0,e-startTime)+" ms"}}},yAxis:{data:categories},series:[{name:"运行",type:"custom",renderItem,itemStyle:{opacity:.8,color:"#75d874"},encode:{x:[1,2],y:0},data},{name:"故障",type:"custom",renderItem,itemStyle:{opacity:.8,normal:{color:"#bd6d6c",borderWidth:2}},encode:{x:[1,2],y:0},data},{name:"等待",type:"custom",renderItem,itemStyle:{opacity:.8,normal:{color:"#e0bc78",borderWidth:2}},encode:{x:[1,2],y:0},data},{name:"备用",type:"custom",renderItem,itemStyle:{opacity:.8,normal:{color:"#7b9ce1",borderWidth:2}},encode:{x:[1,2],y:0},data}]};
