var _x=$("#chart-panel")[0].offsetWidth,_y=$("#chart-panel")[0].offsetHeight,angle=0,r=_y/2-105;option={series:[{radius:["79%","80%"],hoverAnimation:!1,center:[_x/2,_y/2],type:"pie",label:{normal:{show:!0}},labelLine:{normal:{show:!1}},data:[220,182,191]}],graphic:[{type:"circle",shape:{r:10,cx:_x/2+r*Math.cos(angle*Math.PI/180),cy:_y/2+r*Math.sin(angle*Math.PI/180)},style:{fill:"red",stroke:"red",lineWidth:3},z:13}]};
