app.title="环形图",option={polar:{},angleAxis:{show:!0,max:360},radiusAxis:{max:100,show:!0},graphic:[{type:"circle",shape:{cx:200,cy:100,r:15},style:{fill:"yellow"}}],series:[{type:"custom",coordinateSystem:"polar",renderItem(r,e){const o=e.coord([30,120]),t=e.coord([60,e.value(0)]),c=e.coord([60,e.value(1)]);return{type:"group",children:[{type:"sector",shape:{cx:r.coordSys.cx,cy:r.coordSys.cy,r0:60,r:90,startAngle:t[3],endAngle:c[3]},style:{fill:"blue"}},{type:"circle",shape:{cx:o[0],cy:o[1],r:20},style:{fill:"red"}}]}},data:[[0,180]]}]};
