var data=[50,60,70,20,30],className=["职工医保","居民医保","职工养老","居民养老","机关养老"],colorArray=[{top:"#f2f59e",bottom:"#f4b979"},{top:"#56c8ff",bottom:"#08c1f8"},{top:"#96f4d5",bottom:"#5ff1a7"},{top:"#9592ff",bottom:"#625ff1"},{top:"#fe9699",bottom:"#eb5155"}],defaultData=[100,100,100,100,100];option={grid:{left:"3%",right:"2%",bottom:"0%",top:"6%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(o){return'<span style="font-weight:bolder;">'+o[0].name+'</span><br/><span style="display:inline-block; width:10px; height:10px; border-radius:100px; margin-right:5px; background:'+o[0].color.colorStops[o[0].dataIndex].color+'"></span>'+o[0].seriesName+" : "+o[0].value}},backgroundColor:"rgb(20,28,52)",xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#d9e7fa",fontSize:"14",fontWeight:"bolder"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:className},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"14"},formatter:function(o){return o+" 个"}},data}],series:[{name:"疑点个数",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:100,color:function(o){let t=colorArray.length;return{type:"linear",colorStops:[{offset:0,color:colorArray[o.dataIndex%t].bottom},{offset:1,color:colorArray[o.dataIndex%t].top},{offset:0,color:colorArray[o.dataIndex%t].bottom},{offset:1,color:colorArray[o.dataIndex%t].top},{offset:0,color:colorArray[o.dataIndex%t].bottom},{offset:1,color:colorArray[o.dataIndex%t].top},{offset:0,color:colorArray[o.dataIndex%t].bottom},{offset:1,color:colorArray[o.dataIndex%t].top},{offset:0,color:colorArray[o.dataIndex%t].bottom},{offset:1,color:colorArray[o.dataIndex%t].top},{offset:0,color:colorArray[o.dataIndex%t].bottom}]}}}},barWidth:12,data},{name:"背景",type:"bar",barWidth:12,barGap:"-100%",data:defaultData,itemStyle:{normal:{color:"#11294d",barBorderRadius:100}}}]};
