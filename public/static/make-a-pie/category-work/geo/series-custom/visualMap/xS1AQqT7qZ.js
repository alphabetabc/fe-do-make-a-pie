$.getJSON("/asset/get/s/data-1505118307697-S1nD_67qb.json",function(r){for(var a=0,t=0,o=1/0,n=[],l=0;l<r.ny;l++)for(var s=0;s<r.nx;s++,a++){var f=r.data[a][0],d=r.data[a][1],m=Math.sqrt(f*f+d*d);n.push([s/r.nx*360-180,l/r.ny*180-90,f,d,m]),t=Math.max(m,t),o=Math.min(m,o)}n.reverse(),myChart.setOption(option={backgroundColor:"#333",visualMap:{left:"center",min:o,max:t,dimension:4,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},realtime:!1,calculable:!0,textStyle:{color:"#fff"},orient:"horizontal"},geo:{map:"world",left:0,right:0,top:0,zoom:1,silent:!0,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"}}},series:{type:"custom",coordinateSystem:"geo",data:n,encode:{x:0,y:0},renderItem:function(x,e){var v=e.value(0),c=e.value(1),i=e.value(2),u=e.value(3),h=e.coord([Math.max(v-i/5,-180),Math.max(c-u/5,-90)]),y=e.coord([Math.min(v+i/5,180),Math.min(c+u/5,90)]);return{type:"line",shape:{x1:h[0],y1:h[1],x2:y[0],y2:y[1]},style:{lineWidth:.5,stroke:e.visual("color")}}},progressive:2e3}})});
