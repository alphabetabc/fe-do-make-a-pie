var data=[{ny:"1月",bl:50},{ny:"2月",bl:40},{ny:"3月",bl:20},{ny:"4月",bl:10},{ny:"5月",bl:0},{ny:"6月",bl:11},{ny:"7月",bl:100},{ny:"8月",bl:33}],xData=[],yData=[],seriesdata_bj=[];data.map(function(e,a){xData.push(e.ny),e.bl===0?yData.push({name:e.ny,value:e.bl}):yData.push({name:e.ny,value:e.bl}),seriesdata_bj.push(100)}),option={tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{opacity:0}}},dataZoom:[{startValue:0,endValue:11,type:"slider",show:!0,orient:"horizontal",xAxisIndex:[0],handleSize:0,height:12,left:50,right:40,bottom:0,handleColor:"#99ADC7",handleStyle:{borderColor:"#99ADC7",borderWidth:"0",shadowBlur:0,background:"#FFF",shadowColor:"#ddd"},fillerColor:"#99ADC7",borderColor:"#DBDBDB",backgroundColor:"#FFF",showDataShadow:!1,showDetail:!1,handleIcon:"M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",filterMode:"filter"}],legend:{data:["使用率","总比"],show:!1},grid:{left:"5%",right:"5%",bottom:"5%",top:"7%",height:"85%",containLabel:!0,z:22},xAxis:[{type:"category",gridIndex:0,data:xData,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{show:!0,color:"black",rotate:60}}],yAxis:[{type:"value",name:"",nameTextStyle:{color:"rgb(170,170,170)"},max:100,min:0,gridIndex:0,splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{color:"black",formatter:"{value}%"}},{type:"value",gridIndex:0,min:0,max:100,splitNumber:12,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.0)","rgba(250,250,250,0.05)"]}}}],series:[{name:"使用率",type:"bar",barWidth:"30px",xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{barBorderRadius:30,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00feff"},{offset:.5,color:"#027eff"},{offset:1,color:"#0286ff"}])}},data:yData,zlevel:11},{name:"总比",type:"bar",barWidth:"30px",xAxisIndex:0,yAxisIndex:1,barGap:"-100%",data:seriesdata_bj,itemStyle:{normal:{color:"#C8C8C8",barBorderRadius:30}},zlevel:9}]};
