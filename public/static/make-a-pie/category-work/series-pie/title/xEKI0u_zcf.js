let color=["#bf8c3d","#f15a25","#83a1c5","#45d7ff","#286fff","#0032ff"],data=[{name:"脑力负荷",value:"18"},{name:"睡意",value:"4"},{name:"脑力疲劳",value:"22"},{name:"思维活动",value:"28"},{name:"视觉疲劳",value:"16"},{name:"情绪波动",value:"12"}];option={backgroundColor:"#031930",title:{text:"时段状态 {time|10:00AM}",textStyle:{rich:{time:{color:"#41ccf2",padding:[5,12],borderWidth:1,borderColor:"#41ccf2",borderRadius:5}},color:"#82a1c4"},left:"center",top:30},series:[{type:"pie",data,silent:!0,label:{show:!0,formatter:function(e){console.log(e)},color:"#82a1c4"},labelLine:{length:40,length2:40,lineStyle:{color:"#82a1c4"}},radius:["46%","50%"]},{type:"pie",data,silent:!0,label:{show:!0,position:"inside",formatter:function(e){return e.value+"%"},color:"#222"},radius:["0%","47%"]},{type:"pie",data:[100],silent:!0,radius:"54%",itemStyle:{color:"#012d52"},z:-1}],color};function vdata(){for(let e=0;e<data.length;e++)data[e].value=Math.floor(Math.random()*20+1);option.series[0].data=data,option.series[1].data=data,myChart.setOption(option,!0)}setInterval(function(){vdata()},2e3);
