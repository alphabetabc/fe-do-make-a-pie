var textColorList=["#E1FF00","#0AFFB3","#09E3FF","#1BB8FF","#00FFFF"],colorList=[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(225,255,0,.8)"},{offset:.2,color:"rgba(225,255,0,.5)"},{offset:.5,color:"rgba(225,255,0,.3)"},{offset:.8,color:"rgba(225,255,0,.5)"},{offset:1,color:"rgba(225,255,0,.8)"}]},{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(10,255,179,.8)"},{offset:.2,color:"rgba(10,255,179,.5)"},{offset:.5,color:"rgba(10,255,179,.3)"},{offset:.8,color:"rgba(10,255,179,.5)"},{offset:1,color:"rgba(10,255,179,.8)"}]},{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(9,227,255,.8)"},{offset:.2,color:"rgba(9,227,255,.5)"},{offset:.5,color:"rgba(9,227,255,.3)"},{offset:.8,color:"rgba(9,227,255,.5)"},{offset:1,color:"rgba(9,227,255,.8)"}]},{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(27,184,255,.8)"},{offset:.2,color:"rgba(27,184,255,.5)"},{offset:.5,color:"rgba(27,184,255,.3)"},{offset:.8,color:"rgba(27,184,255,.5)"},{offset:1,color:"rgba(27,184,255,.8)"}]},{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0,255,255,.8)"},{offset:.2,color:"rgba(0,255,255,.5)"},{offset:.5,color:"rgba(0,255,255,.3)"},{offset:.8,color:"rgba(0,255,255,.5)"},{offset:1,color:"rgba(0,255,255,.8)"}]}],option={backgroundColor:"#0E1F55",color:textColorList,calculable:!0,tooltip:{formatter:function(o){return o.name+":"+o.percent+"%"}},series:[{name:"漏斗图",type:"funnel",left:"10%",right:"10%",top:"10%",bottom:"10%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"ascending",gap:5,label:{normal:{show:!1},emphasis:{show:!1,formatter:function(o){return console.log(o),o.percent+"%"},color:function(o){return textColorList[o.dataIndex]}}},labelLine:{normal:{show:!1},emphasis:{show:!1,color:function(o){return textColorList[o.dataIndex]},opacity:1}},itemStyle:{normal:{borderColor:"transparent",color:function(o){return colorList[o.dataIndex]}}},data:[{value:60,name:"系统C"},{value:40,name:"系统D"},{value:20,name:"系统E"},{value:80,name:"系统B"},{value:100,name:"系统A"}]}]};
