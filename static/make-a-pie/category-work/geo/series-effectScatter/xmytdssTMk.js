var mapJson=echarts.getMap("shandong").geoJson.features,convertData=function(){var o=[];for(let e in mapJson)o.push({name:mapJson[e].properties.name,value:mapJson[e].properties.center});return console.log(JSON.stringify(o)),o};option={backgroundColor:"rgba(0, 10, 52, 1)",geo:[{show:!0,map:"shandong",label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{borderColor:"rgba(147, 235, 248, 0.6)",borderWidth:0,areaColor:{type:"linear-gradient",x:0,y:30,x2:7,y2:0,colorStops:[{offset:0,color:"#009DA1"},{offset:1,color:"#005B9E"}],global:!0},shadowBlur:10,shadowOffsetX:1,shadowOffsetY:2,shadowColor:"#000",opacity:.5},emphasis:{itemStyle:{borderColor:"rgba(147, 235, 248, 0.6)",borderWidth:0,areaColor:{type:"linear-gradient",x:0,y:30,x2:7,y2:0,colorStops:[{offset:0,color:"#009DA1"},{offset:1,color:"#005B9E"}],global:!0},opacity:.5}},silent:!1,zlevel:5},{show:!0,map:"shandong",label:{normal:{show:!1},emphasis:{show:!1}},top:"8%",left:"8%",itemStyle:{borderColor:"rgba(147, 235, 248, 0.6)",borderWidth:.8,areaColor:{type:"linear-gradient",x:0,y:30,x2:7,y2:0,colorStops:[{offset:0,color:"#009DA1"},{offset:1,color:"#005B9E"}],global:!0},shadowBlur:10,shadowOffsetX:1,shadowOffsetY:2,shadowColor:"#000",opacity:1},zlevel:10}],series:[{name:"涟漪散点",type:"effectScatter",coordinateSystem:"geo",geoIndex:1,data:convertData(),itemStyle:{color:"#fff"},label:{normal:{show:!0,formatter:"{b}",position:"right",color:"#fff"}},zlevel:15}]};