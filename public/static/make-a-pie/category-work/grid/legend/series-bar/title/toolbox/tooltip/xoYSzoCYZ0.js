let echartsData={echartsTitle:"",xData:["2020","2021"],yNameOne:"2020",yNameTwo:"2021",yData:{one:[120,185],two:[15,36]}},colors=["#00adff","#ff9800"],splitNumber=5;function calMax(t){let e=Math.min.apply(null,t),a=Math.max.apply(null,t),o=(a-e)/splitNumber;return a=Math.ceil(a+o),a}function calMin(t){let e=Math.min.apply(null,t),o=(Math.max.apply(null,t)-e)/splitNumber;return e=e>0?e:Math.floor(e-o),e}var option={backgroundColor:"#000a3f",title:{text:echartsData.echartsTitle,top:"0",x:"center",textStyle:{color:"#fff",fontSize:"20",fontWeight:"bold"}},color:colors,grid:{top:"10%",bottom:"5%",left:"80",right:"80"},legend:{top:"2%",textStyle:{color:"#00ffff",margin:"10"}},toolbox:{feature:{saveAsImage:{backgroundColor:"#243a55"}},iconStyle:{borderColor:"#fff",fontSize:"22px"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff",fontSize:14},rotate:0},axisLine:{show:!0,lineStyle:{color:"#fff"}},data:echartsData.xData},yAxis:[{name:echartsData.yNameOne,type:"value",position:"left",min:calMin(echartsData.yData.one)>0?0:calMin(echartsData.yData.one),max:calMax(echartsData.yData.one),splitNumber,interval:(calMax(echartsData.yData.one)-(calMin(echartsData.yData.one)>0?0:calMin(echartsData.yData.one)))/splitNumber,splitLine:{lineStyle:{type:"dashed",color:"#707070"}},axisLabel:{formatter:function(t,e){return(t+"").indexOf(".")!=-1?t.toFixed(1):t},textStyle:{color:colors[0],fontSize:14}},axisLine:{show:!0,lineStyle:{color:colors[0],width:2}},axisTick:{show:!1}},{name:echartsData.yNameTwo,type:"value",position:"right",min:calMin(echartsData.yData.two)<0?calMin(echartsData.yData.two):0,max:calMax(echartsData.yData.two),splitNumber,interval:(calMax(echartsData.yData.two)-(calMin(echartsData.yData.two)<0?calMin(echartsData.yData.two):0))/splitNumber,splitLine:{show:!1},axisLabel:{formatter:function(t,e){return(t+"").indexOf(".")!=-1?t.toFixed(1):t},textStyle:{color:colors[1],fontSize:14}},axisLine:{show:!0,lineStyle:{color:colors[1],width:2}},axisTick:{show:!1}}],series:[{name:echartsData.yNameOne,type:"bar",barWidth:"30%",itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"#00adff",fontSize:12,fontWeight:400}}}},data:echartsData.yData.one},{name:echartsData.yNameTwo,type:"bar",yAxisIndex:1,barWidth:"30%",itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"#fff700",fontSize:12,fontWeight:400}}}},data:echartsData.yData.two}]};