var MyShape=echarts.graphic.extendShape({shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){t.moveTo(e.x,e.y),t.lineTo(e.x+e.width,e.y),t.lineTo(e.x,e.y+e.height),t.lineTo(e.x+e.width,e.y+e.height),t.closePath()}});echarts.graphic.registerShape("myCustomShape",MyShape),option={series:{type:"custom",coordinateSystem:"none",renderItem:function(t,e){return{type:"myCustomShape",shape:{x:e.value(0),y:e.value(1),width:e.value(2),height:e.value(3)},style:{fill:"red"}}},data:[[10,20,30,40],[40,20,30,40],[80,20,30,40]]}};