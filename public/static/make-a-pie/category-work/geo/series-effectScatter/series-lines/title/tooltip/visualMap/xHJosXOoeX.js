var tianjin="/asset/get/s/data-1482909892121-BJ3auk-Se.json";$.get(tianjin,function(i){echarts.registerMap("shandong",i),myChart.setOption({series:[{type:"map",map:"shandong"}]});var n={济南市:[117.121225,36.66466],潍坊市:[119.1,36.62],青岛市:[120.3,36.62],烟台市:[120.9,37.32]},f=[[{name:"济南市"},{id:1,name:"潍坊市",value:99}],[{name:"济南市"},{id:1,name:"青岛市",value:160}],[{name:"济南市"},{id:1,name:"烟台市",value:300}]],c=[[{name:"潍坊市"},{id:2,name:"济南市",value:200}],[{name:"青岛市"},{id:2,name:"济南市",value:200}]],u="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",v=function(a){for(var o,e,r=0;r<a.length;r++){var l=a[r];if(l[1].id==1)return o=.2,o;if(l[1].id==2)return e=-.2,e}},h=function(a){for(var o=[],e=0;e<a.length;e++){var r=a[e],l=n[r[0].name],t=n[r[1].name];r[1].id==1?l&&t&&o.push([{coord:l},{coord:t,value:r[1].value}]):r[1].id==2&&l&&t&&o.push([{coord:l},{coord:t}])}return o},p=["#fff","#FF1493","#0000FF"],s=[];[["1",f],["2",c]].forEach(function(a,o){s.push({name:a[0],type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:.1,symbol:u,symbolSize:10},lineStyle:{normal:{width:1,opacity:.4,curveness:v(a[1]),color:"#fff"}},data:h(a[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:2,brushType:"stroke",scale:3},label:{normal:{show:!0,color:"#fff",position:"right",formatter:"{b}"}},symbol:"circle",symbolSize:function(e){return e[2]/8},itemStyle:{normal:{show:!0}},data:a[1].map(function(e){return{name:e[1].name,value:n[e[1].name].concat([e[1].value])}})})}),option={backgroundColor:"#404a59",title:{text:"迁徙",subtext:"路线",left:"center",textStyle:{color:"#fff"},x:"center"},tooltip:{trigger:"item",formatter:"{b}"},visualMap:{show:!1,min:0,max:300,color:["#02e817","#e80202","#0233e8"]},geo:{map:"shandong",zoom:1,label:{normal:{show:!1,textStyle:{color:"#fff"}},emphasis:{textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(175,238,238, 0)"},{offset:1,color:"rgba(	47,79,79, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}}},series:s},myChart.setOption(option)});