var max=1e4,data=[{name:"value",value:0,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#C96DD8"},{offset:1,color:"#3023AE"}])}}}];function renderItem(t,e){console.log(t);var r=e.coord([e.value(0),0]);console.log(r);var l=e.coord([e.value(1),0]),o=e.size([0,e.value(1)])[1];console.log(e.size([0,e.value(1)])[1]);var a=e.size([0,1e3])[1];return o-=a,{type:"rect",shape:{x:t.coordSys.x,y:l[1],width:t.coordSys.width,height:-o},style:e.style()}}option={grid:{left:"middle",width:70},tooltip:{},xAxis:{show:!1,data:[[["test1"]]]},yAxis:{min:0,max},series:[{type:"custom",renderItem,encode:{y:0},data:[{name:"max",value:max,itemStyle:{normal:{color:"#000",opacity:.5}}}],silent:!0},{type:"custom",renderItem,encode:{y:0},data}]};var i=0;