var salvProName=["安徽省","河南河南省河南省河南省河南省河南省河南省河南省省","浙江省","湖北省","贵州省","江西省","江苏省","四川省","云南省","湖南省"],salvProValue=[250,181,154,144,135,117,74,72,67,55];option={backgroundColor:"#fff",grid:{left:"3%",right:"5%",bottom:"10%",top:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+" : "+e[0].value}},xAxis:{show:!0,splitLine:{show:!0,textStyle:{color:"#333"},lineStyle:{color:"#8c8c8c",type:"dashed"}},axisLine:{show:!0,textStyle:{color:"#333"},lineStyle:{color:"#8c8c8c",type:"dashed"}},axisTick:{show:!1},axisLabel:{show:!0},type:"value"},yAxis:[{type:"category",inverse:!0,boundaryGap:!0,axisLabel:{show:!0,lineStyle:{color:"#f2f2f2"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:salvProName}],series:[{type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:[0,10,10,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgb(57,89,255,1)"},{offset:1,color:"rgb(46,200,207,1)"}])}},barWidth:20,data:salvProValue}]};
