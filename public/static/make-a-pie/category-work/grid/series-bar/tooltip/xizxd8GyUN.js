var salvProName=["安徽省","河南省","浙江省","湖北省","贵州省","江西省","江苏省","四川省","云南省","湖南省"],salvProValue=[239,181,154,144,135,117,74,72,67,55],salvProMax=[];for(let e=0;e<salvProValue.length;e++)salvProMax.push(salvProValue[0]);option={backgroundColor:"#003366",grid:{left:"2%",right:"2%",bottom:"2%",top:"2%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+" : "+e[0].value}},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#fff"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:salvProName},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"12"}},data:salvProValue}],series:[{name:"值",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:30,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#FFBE3E"},{offset:1,color:"#FFA000"}])}},barWidth:20,data:salvProValue},{name:"背景",type:"bar",barWidth:20,barGap:"-100%",data:salvProMax,itemStyle:{normal:{color:"rgba(24,31,68,0.3)",barBorderRadius:30,borderColor:"#6590C0",barBorderRadius:20,borderWidth:2}}}]};