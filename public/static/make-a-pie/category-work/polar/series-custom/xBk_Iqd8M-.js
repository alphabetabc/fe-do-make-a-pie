function renderItem1(r,e){let t=[e.value(0),e.value(1)],o=[e.value(2),e.value(3)];console.log(t,o),t=e.coord(t),o=e.coord(o),console.log(t,o);const l={type:"bezierCurve",shape:{x1:t[0],y1:t[1],x2:o[0],y2:o[1],cpx1:r.coordSys.cx,cpy1:r.coordSys.cy},style:e.style({lineWidth:"1px"})};return console.log(l),l}function renderItem2(r,e){let t=[e.value(0),e.value(1)];t=e.coord(t);const o={type:"ring",shape:{cx:t[0],cy:t[1],r:10,r0:25},style:e.style({lineWidth:"1px"})};return console.log(o),o}option={polar:{},angleAxis:{type:"value"},radiusAxis:{type:"value"},series:[{type:"custom",coordinateSystem:"polar",itemStyle:{normal:{color:"#d14a61"}},renderItem:renderItem1,data:[1].map((r,e)=>({name:"test",value:[2,0,2,Math.PI/2]}))},{type:"custom",coordinateSystem:"polar",itemStyle:{normal:{color:"#d14a61"}},renderItem:renderItem2,data:[[0,0],[2,0],[2,Math.PI/4],[2,2*Math.PI]].map((r,e)=>({name:"test",value:[r[0],r[1]]}))}]},myChart.setOption(option);