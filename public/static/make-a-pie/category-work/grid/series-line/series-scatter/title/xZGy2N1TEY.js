var bgPatternImg=new Image;bgPatternImg.src="/asset/get/s/data-1623324803979-ugSvPhTCK.png";var data=[25,86,40,123,50,100,50,100],length=data.length-1,r=1/length,colorStopArr=data.map((e,o)=>o%2===0?{offset:o*r,color:"#09a275"}:{offset:o*r,color:"#dc0030"});option={backgroundColor:{image:bgPatternImg,repeat:"repeat"},title:[{text:"Project",x:"20",y:"20",textStyle:{fontSize:"30",fontWeight:"100",color:"#09a275"}},{text:"Infographic",x:"120",y:"20",textStyle:{fontSize:"30",fontWeight:"100",color:"#dc0030"}}],grid:{top:"15%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!0,data:["A","B","C","D","E","F","G","H"],axisLine:{symbol:["none","arrow"],symbolOffset:[0,12],lineStyle:{width:1,color:"rgba(255,255, 255, .6)"}},axisTick:{show:!1},splitArea:{show:!0,interval:0,areaStyle:{color:["rgba(0,255, 255, .03)","rgba(0,255, 255, .06)"]}}},yAxis:{splitLine:{show:!1},type:"value",axisLine:{symbol:["none","arrow"],symbolOffset:[0,12],lineStyle:{width:1,color:"rgba(255,255, 255, .6)"}},axisTick:{show:!1}},series:[{type:"line",data,symbol:"circle",symbolSize:20,lineStyle:{width:6,shadowColor:"rgba(0, 0, 0, .4)",shadowBlur:5,shadowOffsetY:15,shadowOffsetX:5,color:{type:"linear",x:0,x2:1,colorStops:colorStopArr}},itemStyle:{normal:{color:"rgba(0, 0, 0, 0)",borderColor:"#fff",borderWidth:0,borderRadius:25,shadowColor:"rgba(0, 0, 0, 1)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2}}},{type:"line",data,symbol:"circle",symbolSize:20,lineStyle:{width:1,shadowColor:"rgba(0, 0, 0, .4)",shadowBlur:5,shadowOffsetY:15,shadowOffsetX:5,color:"rgba(255, 255, 255, .4)"},itemStyle:{normal:{color:"rgba(0, 0, 0, 0)",borderColor:"#fff",borderWidth:0,borderRadius:25,shadowColor:"rgba(0, 0, 0, 1)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2}}},{type:"scatter",symbolSize:40,z:5,itemStyle:{opacity:"1",shadowColor:"rgba(0, 0, 0, .4)",shadowBlur:5,shadowOffsetY:15,shadowOffsetX:5,color:function(e){var o=[new echarts.graphic.RadialGradient(.3,.3,1,[{offset:0,color:"#fef8a7"},{offset:.5,color:"#09A274"},{offset:1,color:"#03694A"}]),new echarts.graphic.RadialGradient(.3,.3,1,[{offset:0,color:"#feecc2"},{offset:.5,color:"#dc0030"},{offset:1,color:"#8F001F"}]),new echarts.graphic.RadialGradient(.3,.3,1,[{offset:0,color:"#fef8a7"},{offset:.5,color:"#09A274"},{offset:1,color:"#03694A"}]),new echarts.graphic.RadialGradient(.3,.3,1,[{offset:0,color:"#feecc2"},{offset:.5,color:"#dc0030"},{offset:1,color:"#8F001F"}]),new echarts.graphic.RadialGradient(.3,.3,1,[{offset:0,color:"#fef8a7"},{offset:.5,color:"#09A274"},{offset:1,color:"#03694A"}]),new echarts.graphic.RadialGradient(.3,.3,1,[{offset:0,color:"#feecc2"},{offset:.5,color:"#dc0030"},{offset:1,color:"#8F001F"}]),new echarts.graphic.RadialGradient(.3,.3,1,[{offset:0,color:"#fef8a7"},{offset:.5,color:"#09A274"},{offset:1,color:"#03694A"}]),new echarts.graphic.RadialGradient(.3,.3,1,[{offset:0,color:"#feecc2"},{offset:.5,color:"#dc0030"},{offset:1,color:"#8F001F"}])];return o[e.dataIndex]}},data}]};
