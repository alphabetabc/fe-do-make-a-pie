for(var innerPieRadius=80,polarRadius=innerPieRadius*1.2,outerPieRadius=innerPieRadius*3,names=[],data=[],i=0;i<28;i++){var name="name"+i,value=Math.round(Math.random()*30);names.push("name"+i);var group=0,showLine=0;i>13&&(group=1),Math.round(Math.random()*20)%2==0&&(showLine=1),data.push([1,name,value,group,showLine])}function renderItem(a,s){var o=a.coordSys,n=[s.value(0),s.value(1)],e=s.coord(n),h=s.size([1,1],n),r=e[0],l=e[1],f=h[0]/20,y=["#f7ab3a","#2cade9"],t=40;r=Math.cos(e[3])*t+r,l=-Math.sin(e[3])*t+l,tx=Math.cos(e[3])*t/3+r,ty=-Math.sin(e[3])*t/3+l;var u=e[3]/Math.PI*180,p=u-t,d=p/180*Math.PI,x=Math.cos(d)*t*-1.5+e[0],m=-Math.sin(d)*t*-1.5+e[1],v=y[data[a.dataIndex][3]],c={type:"group",children:[{type:"circle",shape:{cx:r,cy:l,r:f},style:{fill:v},zlevel:5,z:5},{type:"text",position:[tx,ty],rotation:e[3],style:{text:data[a.dataIndex][1],textVerticalAlign:"middle",fill:"#939494"},zlevel:5,z:5}]};if(data[a.dataIndex][4]==1){var z={type:"bezierCurve",shape:{x1:o.cx,y1:o.cy,x2:r,y2:l,cpx1:x,cpy1:m},style:{fill:"rgba(0,0,0,0)",stroke:v,lineWidth:1.5},zlevel:3,z:3};c.children.unshift(z)}return c}var option={color:["#f7ab3a","#2cade9"],tooltip:{formatter:function(a){return"Pie <br>"+a.data[1]+": "+a.data[2]}},angleAxis:{type:"category",data:names,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#ddd",type:"dashed"}},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},radiusAxis:{type:"value",data:[1],z:100,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},polar:{radius:polarRadius},series:[{name:"outerPie",type:"pie",radius:[outerPieRadius,outerPieRadius+30],avoidLabelOverlap:!1,label:{normal:{show:!1}},data:[1,1],silent:!0,zlevel:2,animation:!1},{name:"innerPie",type:"pie",radius:[0,innerPieRadius],avoidLabelOverlap:!1,label:{normal:{show:!1}},data:[1],silent:!0,zlevel:3,animation:!1,itemStyle:{normal:{color:"#dfe3e5"}}},{name:"circle-line-text",type:"custom",coordinateSystem:"polar",itemStyle:{normal:{color:"#d14a61"}},renderItem,data,zlevel:4}]};