var Ellipse=echarts.graphic.extendShape({shape:{cx:0,cy:0,rx:0,ry:0},buildPath:function(v,r){var o=.5522848,e=r.cx,a=r.cy,l=r.rx,s=r.ry,t=l*o,y=s*o;v.moveTo(e-l,a),v.bezierCurveTo(e-l,a-y,e-t,a-s,e,a-s),v.bezierCurveTo(e+t,a-s,e+l,a-y,e+l,a),v.bezierCurveTo(e+l,a+y,e+t,a+s,e,a+s),v.bezierCurveTo(e-t,a+s,e-l,a+y,e-l,a),v.closePath()}});echarts.graphic.registerShape("ellipse",Ellipse),option={title:{text:"绘制椭圆"},xAxis:{max:100},graphic:[{type:"ellipse",shape:{cx:50,cy:100,rx:10,ry:60},style:{fill:"green"}}],yAxis:{max:100},series:[{type:"custom",data:[[15,15,1,1,"#ff0000"],[50,70,3,2,"#00ff00"]],encode:{x:[0,2],y:[1,3],seriesName:[4]},renderItem:function(v,r){var o=r.coord([r.value(0),r.value(1)]),e=r.coord([r.value(2)+r.value(0),r.value(3)+r.value(1)]);return{type:"ellipse",shape:{cx:o[0],cy:o[1],rx:e[0]-o[0],ry:o[1]-e[1]},style:{fill:r.value(4),opacity:.8},styleEmphasis:{opacity:1}}}}]};
