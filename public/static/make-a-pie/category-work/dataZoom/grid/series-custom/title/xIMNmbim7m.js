const _colorList=["rgba(193,46,52,0.7)","rgba(230,182,0,0.7)","rgba(0,152,217,0.7)","rgba(43,130,29,0.7)","rgba(0,94,170,0.7)","rgba(51,156,168,0.7)","rgba(205,168,25,0.7)","rgba(50,164,135,0.7)","rgba(79,129,189,0.7)","rgba(192,80,77,0.7)","rgba(155,187,89,0.7)","rgba(96,74,123,0.7)","rgba(148,138,84,0.7)","rgba(228,108,11,0.7)"];var data=[],oneDay=864e5,fiveMinutes=1800*1e3,count=oneDay/fiveMinutes,timestr="2019/6/1 00:00:00",startTime=+new Date(timestr)-fiveMinutes;function randomData(e){var t=Math.floor(Math.random()*10);return{name:e.toString(),value:[e.toLocaleDateString()+" "+e.getHours()+e.toLocaleTimeString().substr(-6,6),t]}}for(var i=0;i<=count;i++)startTime=new Date(+startTime+fiveMinutes),data.push(randomData(startTime));option={title:{text:"动态数据 + 时间坐标轴"},grid:[{top:80,left:50,bottom:30,right:50},{top:80,left:50,right:50,height:150}],dataZoom:[{top:230,left:50,type:"slider",xAxisIndex:0,start:0,minSpan:8,dataBackground:{lineStyle:{color:"#95BC2F"},areaStyle:{color:"#95BC2F",opacity:1}},fillerColor:"rgba(255,255,255,.6)"},{type:"inside",xAxisIndex:0}],xAxis:{type:"time",position:"top",gridIndex:1,splitLine:{show:!1}},yAxis:{type:"value",gridIndex:1,inverse:!0,show:!1,min:0,max:10},series:[{name:"模拟数据",type:"custom",renderItem:(e,t)=>{var n=_colorList[t.value(1)],a=t.value(0),r=t.value(0);e.dataIndex+1!==data.length&&(r=new Date(data[e.dataIndex+1].value[0]).getTime());var o=t.coord([a,0]),l=t.size([r-a,10]);return{type:"rect",shape:{x:o[0],y:o[1],width:l[0],height:l[1]},style:t.style({fill:n})}},data}]};