var rawData=[[2002,14,21,25,21,26,32,27,20,10,11,5,5],[2003,18,24,28,24,33,37,30,25,13,14,6,6],[2004,22,31,36,28,37,43,35,30,13,13,7,7],[2005,25,32,38,34,39,48,38,29,14,14,8,8],[2006,29,38,47,33,44,57,41,39,16,16,9,8],[2007,29,35,49,34,43,57,41,37,20,17,9,10],[2008,22,32,37,30,35,44,38,31,16,17,8,7],[2009,25,34,41,33,39,47,44,32,17,17,9,8],[2010,26,35,46,40,47,61,47,41,20,18,9,10],[2011,29,39,55,38,55,67,53,41,19,20,11,11],[2012,38,48,60,49,57,79,62,54,26,26,13,11]];const yearCount=rawData.length;function renderTrendItem(u,t){var e=t.value(0),l=t.size([0,0])[0]/(yearCount-1),s=echarts.util.map(rawData,function(a,n){var r=rawData[n][e+1],c=t.coord([e,r]);return c[0]+=l*(n-yearCount/2),c});const o=[],i=0,p=[],v=[],y=[];if(e!==0){var d=rawData[rawData.length-1][e],h=t.coord([e-1,d]);h[0]+=l*4.5,o.push(h)}for(let a=0;a<s.length;a++){const n=s[a],r=s[a+1];o.push(n),r&&o.push([r[0],n[1]])}return console.log(o),{type:"group",children:[{type:"polyline",shape:{points:o},style:t.style({fill:null,stroke:t.visual("color")})}]}}option={dataZoom:[{type:"slider",showDataShadow:!1,bottom:10,height:20,borderColor:"transparent",backgroundColor:"#e2e2e2",handleIcon:"M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",handleSize:20,handleStyle:{shadowBlur:6,shadowOffsetX:1,shadowOffsetY:2,shadowColor:"#aaa"},labelFormatter:""},{type:"inside"}],tooltip:{},xAxis:{data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yAxis:{max:80},series:[{type:"custom",renderItem:renderTrendItem,encode:{x:0,y:0},data:[[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11]]}]};