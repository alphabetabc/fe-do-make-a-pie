let maxDatas=[741,741,741,741,741],datas=[0,305,415,741,405];option={backgroundColor:"#031245",title:{x:"left",text:"aaaaa",y:"top",padding:[0,0,0,26],textStyle:{fontSize:16,fontWeight:400,color:"#70E0FD",lineHeight:30,fontFamily:"PingFang SC",rich:{A:{backgroundColor:{}}}}},color:["#69ABF8","#77E0FB","#03387a","#03387a","#03387a","#6c93ee","#a9abff","#f7a23f","#27bae7","#ff6d9d","#cb79ff","#f95b5a","#ccaf27","#38b99c","#93d0ff","#bd74e0","#fd77da","#dea700"],grid:{containLabel:!0,left:20,right:20,bottom:10,top:40},xAxis:{nameTextStyle:{color:"#c0c3cd",padding:[0,0,-10,0],fontSize:14},axisLabel:{color:"#c0c3cd",fontSize:14,interval:0,margin:12},axisTick:{lineStyle:{color:"#384267",width:1},show:!0},splitLine:{show:!1},axisLine:{lineStyle:{color:"#384267",width:1,type:"dashed"},show:!0},data:["2017年","2018年","2019年","2020年","2021年"],type:"category"},yAxis:{show:!1},series:[{data:datas,type:"bar",barMaxWidth:"auto",barWidth:30,itemStyle:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#77D6F8"},{offset:1,color:"#69ABF8"}]}},label:{show:!0,position:"top",distance:10,color:"#6DD9F5",fontSize:14,fontFamily:"Arial"}},{data:[1,1,1,1,1],type:"pictorialBar",barMaxWidth:"20",symbol:"diamond",symbolOffset:[0,"50%"],symbolSize:[30,15]},{data:datas,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[30,12],zlevel:2},{data:maxDatas,type:"bar",barMaxWidth:"auto",barWidth:30,barGap:"-100%",zlevel:-1},{data:[1,1,1,1,1],type:"pictorialBar",barMaxWidth:"20",symbol:"diamond",symbolOffset:[0,"50%"],symbolSize:[30,15],zlevel:-2},{data:maxDatas,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[30,12],zlevel:-1}]};
