var data=[],datas=[{name:"1000名以上员工",value:56},{name:"60-100名员工",value:30},{name:"20-60名员工",value:157},{name:"20名一下员工",value:75}];for(let e=0;e<datas.length;e++)data[e]=datas[e].value;option={backgroundColor:"rgba(0, 0, 0, 0)",title:{show:!1},tooltip:{trigger:"item"},grid:{borderWidth:0,top:"5%",left:"5%",right:"20%",bottom:"0%"},yAxis:{type:"category",position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,inside:!1,textStyle:{color:"#b3ccf8",fontSize:"14",fontFamily:"PingFangSC-Regular"},formatter:function(e){return`${e}家`}},splitArea:{show:!1},splitLine:{show:!1},data},xAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},series:[{name:"",type:"bar",zlevel:2,barWidth:"10px",data:datas,animationDuration:1500,itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#4734f8"},{offset:1,color:"#54fcf1"}],!1),barBorderRadius:10}},label:{normal:{color:"#b3ccf8",show:!0,position:[0,"-24px"],textStyle:{fontSize:16},formatter:function(e,a){return e.name}}}}],animationEasing:"cubicOut"};