const data=[{name:"Black, African American",label:"黑人",population:1849077,death:4280},{name:"White",label:"白人",death:4240,population:2694258}],styleList=[{itemStyle:{normal:{color:"#000"}}},{itemStyle:{normal:{color:"#fff"}}},{itemStyle:{normal:{color:"rgba(227,161,96,0.8)"}}},{itemStyle:{normal:{color:"#ccc"}}}];let xData=[],population=[],death=[];for(let t=1;t<=data.length;t++){const e=data.length-t;xData.push(data[e].label);const n=styleList[e].itemStyle;population.push({value:data[e].population,itemStyle:n}),death.push({value:data[e].death,itemStyle:n})}const dataTotal=[{name:"Black",value:1849077,type:"population"},{name:"White",value:2694258,type:"population"},{name:"Black",value:4280,type:"death"},{name:"White",value:4240,type:"death"}];let legendData=[{name:"黑人",icon:"rect",textStyle:{color:"#000"},backgroundColor:"#000"},{name:"白人",icon:"rect",textStyle:{color:"#fff"},backgroundColor:"#fff"},{name:"亚裔",icon:"rect",textStyle:{color:"rgba(227,161,96,0.8)"},backgroundColor:"rgba(227,161,96,0.8)"},{name:"其他",icon:"rect",textStyle:{color:"#ccc"},backgroundColor:"#ccc"}];const cityColorOfCoronavirusData=[{city:"纽约",white:84.3,black:259.9},{city:"康涅狄格",white:125.8,black:171.9},{city:"密歇根",white:39,black:171.6},{city:"新泽西州",white:98,black:168},{city:"马萨诸塞州",white:111.2,black:127.2},{city:"哥伦比亚特区",white:20.8,black:117.8},{city:"路易斯安那州",white:43.4,black:100.2},{city:"伊利诺斯",white:33.9,black:98.2},{city:"宾夕法尼亚",white:41.4,black:85.1},{city:"马里兰",white:39.7,black:65},{city:"罗德岛州",white:74.3,black:64.8},{city:"印第安纳州",white:25.2,black:51.5},{city:"特拉华州",white:41.8,black:50.7},{city:"科罗拉多州",white:25.1,black:47.5},{city:"威斯康星州",white:9.1,black:44.2},{city:"密苏里州",white:9.7,black:41.6}],yAxis=[{type:"category",inverse:!0,position:"right",splitLine:{show:!1},axisLine:{show:!0,lineStyle:{}},axisTick:{show:!1},axisLabel:{show:!1},data:xData},{gridIndex:1,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,padding:[0,0,0,15],textStyle:{color:"#ffffff",fontSize:20},align:"center"},data:xData},{gridIndex:2,type:"category",splitLine:{show:!1},inverse:!0,position:"left",axisLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLabel:{show:!1},data:xData}],xAxis=[{nameTextStyle:{color:"#fff"},type:"value",name:"人口(总)",inverse:!0,axisLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},position:"bottom",axisLabel:{show:!1},splitLine:{show:!1,lineStyle:{}}},{gridIndex:1,show:!1},{nameTextStyle:{color:"#fff"},name:"死亡人数(总)",gridIndex:2,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#fff"}},position:"bottom",axisLabel:{show:!1},splitLine:{show:!1,lineStyle:{}}}],renderCircle=function(t,e){const n=e.getWidth(),o=e.getHeight(),l=Math.min(n,o),a=e.style();return a.fill="rgba(68,81,104,0.1)",{type:"circle",shape:{cx:n/2,cy:o/2,r:l/4},style:a}},circleSeries={name:"圆",type:"custom",silent:!0,itemStyle:{borderColor:"rgb(68,81,104)",borderWidth:1},renderItem:renderCircle,data:[1]},renderCirclePin=function(t,e){const n=e.getWidth(),o=e.getHeight(),l=Math.min(n,o),a=l*.3,s=l*.1,r=l*.005,c=l*.01,i=e.style({fill:e.value(0)%2===0?"#000":"#fff",stroke:e.value(0)%2===0?"#000":"#fff"}),h=e.value(0),f=e.value(1),u=e.value(2),d=e.value(3),g=u/d,y=(h-.5)*2*Math.PI/f-Math.PI/2,m=Math.cos(y)*(l+s+a*g)/4+n/2,x=Math.sin(y)*(l+s+a*g)/4+o/2,b=Math.cos(y)*l/4+n/2,w=Math.sin(y)*l/4+o/2;return{type:"group",children:[{silent:!0,type:"line",shape:{x1:b,y1:w,x2:m,y2:x},style:i},{type:"circle",shape:{cx:m,cy:x,r:r+c*g},style:i}],style:i}};function getRenderData(){const t=[];for(let e=0;e<cityColorOfCoronavirusData.length;e++)t.push([2*e,cityColorOfCoronavirusData.length*2,cityColorOfCoronavirusData[e].black,cityColorOfCoronavirusData[0].black]),t.push([2*e+1,cityColorOfCoronavirusData.length*2,cityColorOfCoronavirusData[e].white,cityColorOfCoronavirusData[0].black]);return t}const circlePinSeries={type:"custom",itemStyle:{borderColor:"#fff",borderWidth:1},renderItem:renderCirclePin,data:getRenderData()},renderCirclePoint=function(t,e){const n=e.getWidth(),o=e.getHeight(),l=Math.min(n,o);let a,s,r,c,i,h,f=50,u=20;e.value(2)==="Black"&&(s="#000"),e.value(2)==="White"&&(s="#fff"),e.value(2)==="Black"&&e.value(3)==="population"&&(a="rgba(0,0,0,0.5)",r=n/2+l*.1,c=o/2+l*.1,i=e.value(1)/e.value(4)*f,h=1),e.value(2)==="Black"&&e.value(3)==="death"&&(a="rgba(0,0,0,1)",r=n/2+l*.11,c=o/2+l*.1,i=e.value(1)/e.value(5)*u,h=3),e.value(2)==="White"&&e.value(3)==="population"&&(a="rgba(255,255,255,0.5)",r=n/2-l*.09,c=o/2-l*.09,i=e.value(1)/e.value(4)*f,h=1),e.value(2)==="White"&&e.value(3)==="death"&&(a="rgba(255,255,255,1)",r=n/2-l*.08,c=o/2-l*.08,i=e.value(1)/e.value(5)*u,h=3);const d=e.style({fill:a,stroke:s});return{type:"circle",shape:{cx:r,cy:c,r:i,z:h},style:d}};function getCirclePointSeriesRenderData(){const t=[];for(let e=0;e<dataTotal.length;e++)t.push([e,dataTotal[e].value,dataTotal[e].name,dataTotal[e].type,2694258,4280]);return t}const circlePointSeries={name:"circlePointSeries",type:"custom",itemStyle:{borderWidth:1},renderItem:renderCirclePoint,data:getCirclePointSeriesRenderData()},renderCircleText=function(t,e){const n=e.getWidth(),o=e.getHeight(),l=Math.min(n,o),a=e.style({textAlign:"center",textVerticalAlign:"middle",text:e.value(2),fontSize:l*.015}),s=e.value(0)*2*Math.PI/e.value(1)-Math.PI/2,r=Math.cos(s)*l/4.2+n/2,c=Math.sin(s)*l/4.2+o/2;let i=-e.value(0)/e.value(1)*2*Math.PI;return Math.cos(i)<0&&(i=i+Math.PI),{type:"text",silent:!0,rotation:i,position:[r,c],style:a}};function getCircleTextSeriesRenderData(){const t=[];for(let e=0;e<cityColorOfCoronavirusData.length;e++)t.push([e,cityColorOfCoronavirusData.length,cityColorOfCoronavirusData[e].city]);return t}const circleTextSeries={type:"custom",itemStyle:{color:"#000"},renderItem:renderCircleText,data:getCircleTextSeriesRenderData()},renderLegend=function(t,e){const n=e.getWidth(),o=e.getHeight(),l=Math.min(n,o);return{type:"group",silent:!0,children:[{type:"group",children:[{type:"circle",shape:{cx:50,cy:50,r:10},style:e.style({fill:"#fff",stroke:"#fff"})},{type:"line",shape:{x1:50,y1:50,x2:50,y2:100},style:e.style({fill:"#fff",stroke:"#fff"})}]},{type:"group",children:[{type:"circle",shape:{cx:80,cy:50,r:10},style:e.style({fill:"#000",stroke:"#000"})},{type:"line",shape:{x1:80,y1:50,x2:80,y2:100},style:e.style({fill:"#000",stroke:"#000"})}]},{type:"text",silent:!0,position:[100,75],style:e.style({textVerticalAlign:"middle",text:"按种族/民族划分的每10万人死亡人数",fontSize:l*.015})}]}},legendSeries={type:"custom",itemStyle:{color:"#000",borderColor:"#fff",borderWidth:1},renderItem:renderLegend,data:[1]};option={title:{text:`  黑与白  
  生与死  
自由与民主`,textStyle:{color:"#fff",textAlign:"center"},left:"center",top:"2%",subtext:"数据来源APM实验室"},backgroundColor:"rgb(59,59,59)",yAxis,xAxis,grid:[{show:!1,left:"39%",top:"40%",bottom:"40%",containLabel:!0,width:"10%"},{show:!1,left:"50%",top:"40%",bottom:"40%",width:"0%"},{show:!1,right:"41%",top:"40%",bottom:"40%",containLabel:!0,width:"10%"}],tooltip:{show:!0,trigger:"item",formatter:function(t){return typeof t.data[2]=="string"?"":t.data[2]}},series:[circleSeries,circleTextSeries,circlePinSeries,legendSeries,{name:"人口",type:"bar",label:{normal:{show:!1}},tooltip:{show:!0,formatter:function(t){return t.data.value}},barWidth:"20%",data:population,animationEasing:"elasticOut"},{name:"死亡率",type:"bar",xAxisIndex:2,yAxisIndex:2,barWidth:"20%",label:{normal:{show:!1}},tooltip:{show:!0,formatter:function(t){return t.data.value}},data:death,animationEasing:"elasticOut"}]};