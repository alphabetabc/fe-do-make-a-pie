var uploadedDataURL="/asset/get/s/data-1641348469450-lnHzw8_eG.png",uploadedDataURL1="/asset/get/s/data-1641347891384-dznNRXRza.png",uploadedDataURL2="/asset/get/s/data-1641347883453-EYUAHtC5O.png";let erArr=[{name:"计生办1",times:2,type:2},{name:"计生办2",times:2,type:2},{name:"计生办3",times:2,type:2},{name:"计生办4",times:2,type:2},{name:"计生办5",times:2,type:2},{name:"计生办6",times:2,type:2},{name:"计生办7",times:2,type:2},{name:"计生办8",times:2,type:2},{name:"计生办9",times:2,type:2}],sumTimes=0;sumTimes=erArr.reduce(function(e,t){return e+t.times},0);let color=["#ffffff","#36fff6","rgba(91, 84, 255, 1)","#67f95f"],oneArr=[{name:"数据中心",times:sumTimes,symbol:"image://"+uploadedDataURL2,symbolSize:198,color:"#ffffff",itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#ffe93a"},{offset:1,color:"#36fff6"}],global:!1}}}],allArr=[...oneArr,...erArr],dataArr=[];allArr.forEach((e,t)=>{var r="image://"+uploadedDataURL1,o=122,a=!0;e.symbol&&(r=e.symbol,o=e.symbolSize,a=!1),e.symbolSize=o,e.symbol=r,e.itemStyle={},e.label={normal:{show:a,textStyle:{fontSize:25,fontFamily:"FZLanTingHei-B-GBK",fontWeight:400,color:"#FFFFFF"}}}});function group(e,t){const r=[],{length:o}=e;return e.forEach((a,i)=>{const s=90-(360/o).toFixed(2)*(i+1),l=Math.cos(s*Math.PI/180).toFixed(2)*t,n=Math.sin(s*Math.PI/180).toFixed(2)*t,f=Math.cos(s*Math.PI/180).toFixed(2)*(t-5),m=Math.sin(s*Math.PI/180).toFixed(2)*(t-5),d=Math.cos(s*Math.PI/180).toFixed(2)*(t-30),c=Math.sin(s*Math.PI/180).toFixed(2)*(t-30);a.value=[l.toFixed(2),n.toFixed(2)],a.twoPoint=[[f.toFixed(2),m.toFixed(2)],[d.toFixed(2),c.toFixed(2)]],r.push(a)}),r}function linesConfig(e){const[t,r]=[[],[0,0]];return e.forEach(o=>{function a(i,s){return[{coord:o.twoPoint[i]},{coord:o.twoPoint[s],lineStyle:{color:color[o.type],curveness:o.type===3?.1:0},effect:{color:color[o.type],symbol:"image://"+uploadedDataURL,symbolSize:[12.6,23.799999999999997]}}]}switch(o.type){case 0:break;case 1:t.push(a(0,1));break;case 2:t.push(a(1,0));break;case 3:t.push(a(0,1)),t.push(a(1,0));break}}),t}oneArr=group(oneArr,0),erArr=group(erArr,40),allArr=[...oneArr,...erArr],dataArr=linesConfig(allArr);function generateData(e,t,r,o,a){let i=[];for(var s=0;s<e;s++)s%2===0?i.push({name:(s+1).toString(),value:t,itemStyle:{normal:{color:o,borderWidth:a,borderRadius:20}}}):i.push({name:(s+1).toString(),value:r,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderRadius:20}}});return i}let dolitData=generateData(100,25,20,"rgb(126,190,255)",5),threeData=generateData(6,30,10,"rgba(28, 211, 230, 1)",5),fourData=generateData(12,80,10,"rgba(91, 84, 255, 1)",1),radius1=["41%","38%"],radius2=["40%","39%"],height=document.body.clientHeight;height<1e3&&(radius1=["43%","40%"],radius2=["42%","41%"]);function getOption(e,t,r){return{backgroundColor:"rgba(0,0,0,1)",tooltip:{formatter:function(a){var i=a.name+" : "+a.data.times+"次";return i},textStyle:{fontSize:20},backgroundColor:"rgba(0,0,0,0.7)",textStyle:{color:"#ffffff"},borderWidth:0},title:{text:"数据中心",left:"center",top:"center",textStyle:{color:"#fff",fontSize:50}},xAxis:{show:!1,type:"value",max:50,min:-51},grid:{top:10,bottom:10,left:10,right:10},yAxis:{show:!1,type:"value",max:50,min:-50},series:[{name:"节点",type:"graph",silent:!1,hoverAnimation:!1,cursor:"default",coordinateSystem:"cartesian2d",z:3,itemStyle:{normal:{shadowColor:"none"}},emphasis:{scale:!1},data:allArr},{name:"线图",type:"lines",hoverAnimation:!1,silent:!1,cursor:"default",coordinateSystem:"cartesian2d",polyline:!1,z:1,lineStyle:{width:2,type:"dashed",curveness:0},effect:{show:!0,period:8,trailLength:0,symbol:"arrow",symbolSize:6},emphasis:{lineStyle:{type:"dashed"}},data:dataArr,tooltip:{show:!1}},{type:"pie",name:"旋转圆",zlevel:20,silent:!0,radius:radius1,hoverAnimation:!1,startAngle:e,data:threeData,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},tooltip:{show:!1}},{type:"pie",name:"旋转圆",zlevel:19,silent:!0,radius:radius2,hoverAnimation:!1,startAngle:r,data:fourData,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},tooltip:{show:!1}}]}}getOption();let startAngle=50,startAngle2=50,[minradius,radius,maxradius]=[24,24,28],isBig=!0;function draw(){startAngle=startAngle-5,startAngle2=startAngle2+5,isBig?(radius=radius+.5,radius>maxradius&&(isBig=!1)):(radius=radius-.5,radius<minradius&&(isBig=!0));let e=getOption(startAngle,radius,startAngle2);myChart.setOption(e,!0)}timer=setInterval(draw,200);