var tianjin=+"../json/wh.json";$.getJSON(tianjin,function(i){echarts.registerMap("wh",i),myChart.setOption({series:[{type:"map",map:"wh"}]});var n={洪山区:[114.341517,30.507558],东西湖区:[114.137997,30.624974],新洲区:[114.79915,30.849455],黄陂区:[114.385211,30.890123]},f=[[{name:"洪山区"},{id:1,name:"东西湖区",value:99}],[{name:"洪山区"},{id:1,name:"新洲区",value:160}],[{name:"洪山区"},{id:1,name:"黄陂区",value:300}]],c=[[{name:"东西湖区"},{id:2,name:"洪山区",value:200}],[{name:"新洲区"},{id:2,name:"洪山区",value:200}]],v="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",u=function(r){for(var o,e,a=0;a<r.length;a++){var l=r[a];if(l[1].id==1)return o=.2,o;if(l[1].id==2)return e=-.2,e}},h=function(r){for(var o=[],e=0;e<r.length;e++){var a=r[e],l=n[a[0].name],t=n[a[1].name];a[1].id==1?l&&t&&o.push([{coord:l},{coord:t,value:a[1].value}]):a[1].id==2&&l&&t&&o.push([{coord:l},{coord:t}])}return o},m=["#fff","#FF1493","#0000FF"],s=[];[["1",f],["2",c]].forEach(function(r,o){s.push({name:r[0],type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:.1,symbol:v,symbolSize:10},lineStyle:{normal:{width:1,opacity:.4,curveness:u(r[1]),color:"#fff"}},data:h(r[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:2,brushType:"stroke",scale:3},label:{normal:{show:!0,color:"#fff",position:"right",formatter:"{b}"}},symbol:"circle",symbolSize:function(e){return e[2]/8},itemStyle:{normal:{show:!0}},data:r[1].map(function(e){return{name:e[1].name,value:n[e[1].name].concat([e[1].value])}})})});var p={backgroundColor:"#404a59",title:{text:"迁徙",subtext:"路线",left:"center",textStyle:{color:"#fff"},x:"center"},tooltip:{trigger:"item",formatter:"{b}"},visualMap:{show:!1,min:0,max:300,color:["#02e817","#e80202","#0233e8"]},geo:{map:"wh",zoom:1,label:{normal:{show:!1,textStyle:{color:"#fff"}},emphasis:{textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(175,238,238, 0)"},{offset:1,color:"rgba(	47,79,79, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}}},series:s}});
