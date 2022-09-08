var data=[],dataCount=10,startTime=+new Date,categories=["categoryA","categoryB","categoryC"],types=[{name:"JS Heap",color:"#7b9ce1"},{name:"Documents",color:"#bd6d6c"},{name:"Nodes",color:"#75d874"},{name:"Listeners",color:"#e0bc78"},{name:"GPU Memory",color:"#dc77dc"},{name:"GPU",color:"#72b362"}];echarts.util.each(categories,function(e,t){for(var r=startTime,o=0;o<dataCount;o++){var c=types[Math.round(Math.random()*(types.length-1))],a=Math.round(Math.random()*1e4);data.push({name:c.name,value:[t,r,r+=a,a],itemStyle:{normal:{color:c.color}}}),r+=Math.round(Math.random()*2e3)}});function renderItem(e,t){var r=t.value(0),o=t.coord([t.value(1),r]),c=t.coord([t.value(2),r]),a=t.size([0,1])[1]*.6,n=echarts.graphic.clipRectByRect({x:o[0],y:o[1]-a/2,width:c[0]-o[0],height:a},{x:e.coordSys.x,y:e.coordSys.y,width:e.coordSys.width,height:e.coordSys.height});return n&&{type:"rect",shape:n,style:t.style()}}option={tooltip:{formatter:function(e){return e.marker+e.name+": "+e.value[3]+" ms"}},title:{text:"Profile",left:"center"},dataZoom:[{type:"slider",filterMode:"weakFilter",showDataShadow:!1,top:400,height:10,borderColor:"transparent",backgroundColor:"#e2e2e2",handleIcon:"M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",handleSize:20,handleStyle:{shadowBlur:6,shadowOffsetX:1,shadowOffsetY:2,shadowColor:"#aaa"},labelFormatter:""},{type:"inside",filterMode:"weakFilter"}],grid:{height:300},xAxis:{min:startTime,scale:!0,axisLabel:{formatter:function(e){return Math.max(0,e-startTime)+" ms"}}},yAxis:{data:categories},series:[{type:"custom",renderItem,itemStyle:{opacity:.8},encode:{x:[1,2],y:0},data}]};
