var nodes=[{name:"节点信息看看看看1",code:"node1000000001",x:64,y:-80,width:138,height:40,status:2,ext:{finishTime:"2019-01-01"}},{name:"节点信息看看看看2",code:"node1000000002",x:292,y:-128,width:138,height:40,status:0,ext:{}},{name:"节点信息看看看看3",code:"node1000000003",x:292,y:-20,width:138,height:40,status:1,ext:{}},{name:"节点信息看看看看4",code:"node1000000004",x:556,y:-68,width:138,height:40,status:0,ext:{}}],links=[{source:"node1000000001",target:"node1000000002",status:0},{source:"node1000000001",target:"node1000000003",status:1},{source:"node1000000003",target:"node1000000004",status:0}];function getScatterData(){for(var i=[],o=0;o<nodes.length;o++)i.push({name:nodes[o].name,value:[nodes[o].x,nodes[o].y],type:"title",w:30,h:30,ext:nodes[o].ext,node_status:nodes[o].status,label:{normal:{textStyle:{color:"#000",fontSize:14}}}});return i}function getLinesData(){for(var i=[],o={},n=0;n<nodes.length;n++)o[nodes[n].code]=nodes[n];for(var n=0;n<links.length;n++){var t=o[links[n].source],e=o[links[n].target];t.top={x:t.x,y:t.y+1/2*30},t.right={x:t.x+1/2*30,y:t.y},t.bottom={x:t.x,y:t.y-1/2*30},t.left={x:t.x-1/2*30,y:t.y},e.top={x:e.x,y:e.y+1/2*30},e.right={x:e.x+1/2*30,y:e.y},e.bottom={x:e.x,y:e.y-1/2*30},e.left={x:e.x-1/2*30,y:e.y},t.right.x<e.left.x?i.push(getLine([[t.right.x,t.right.y],[e.left.x,e.left.y]],links[n].status)):t.left.x>e.right.x?i.push(getLine([[t.left.x,t.left.y],[e.right.x,e.right.y]],links[n].status)):t.bottom.y>e.top.y?i.push(getLine([[t.bottom.x,t.bottom.y],[e.top.x,e.top.y]],links[n].status)):t.top.y<e.bottom.y&&i.push(getLine([[t.top.x,t.top.y],[e.bottom.x,e.bottom.y]],links[n].status))}return i}function getLine(i,o){var n="#e1e1e1",t="none";return o==2?n="#41a51e":o==1&&(t="arrow",n="#ff9f1d"),{name:"",type:"lines",coordinateSystem:"cartesian2d",symbol:["none","arrow"],symbolSize:10,zlevel:4,lineStyle:{normal:{type:"solid",color:n,width:2,curveness:0}},data:[{coords:i}]}}function getSeries(){var i=[];return i.push({type:"scatter",symbol:"circle",zlevel:333,silent:!0,symbolSize:function(o,n){return[30,30]},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(120, 36, 50, 0.5)",shadowOffsetY:5,color:function(o){if(o.data.type=="title")return o.data.node_status==2?"#41a51e":o.data.node_status==1?"#ff9f1d":"#e1e1e1"}}},label:{normal:{show:!0,position:"bottom",formatter:function(o){var n=o.data.ext,t="";if(typeof n<"u"&&typeof n.finishTime<"u"&&(t=n.finishTime),o.data.type=="title")return o.data.name+`

`+t},textStyle:{color:"#000"}}},data:getScatterData()}),i}var option={backgroundColor:"#fff",title:[{x:"5%",y:0,textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:14}}],tooltip:{},grid:{left:0,right:0,top:0,bottom:0},xAxis:{type:"value",show:!1,splitLine:{show:!1},axisLabel:{show:!1},max:900,min:0},yAxis:{type:"value",show:!1,splitLine:{show:!1},axisLabel:{show:!1},max:0,min:-900},series:getSeries()};myChart.setOption(option),myChart.on("click",function(i){console.log(i),alert()});
