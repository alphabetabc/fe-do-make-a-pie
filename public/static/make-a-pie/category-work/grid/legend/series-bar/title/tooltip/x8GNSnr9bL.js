var xdata=["南京市","淮安市","常州市","徐州市","南通市","宿迁市","无锡市","扬州市","盐城市","苏州市","泰州市","镇江市","连云港市"],legendData=["线上业务总量","线下业务总量"],dataArr=[20,12,31,34,31,20,12,31,34,31,20,12,31,34,31,20,12,31,34],dataArr2=[10,20,5,9,3,10,20,5,9,3,10,20,5,9,3,10,20,5,9],colorSet=new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00CAE0"},{offset:1,color:"#006EFB"}]),colorSet2=new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#E37552"},{offset:1,color:"#9E5431"}]);option={backgroundColor:"#043065",title:{},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:legendData,align:"right",right:10,textStyle:{color:"#fff"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},calculable:!0,xAxis:[{type:"category",axisLabel:{textStyle:{fontSize:14,color:"#fff"}},axisLine:{lineStyle:{color:"#00A2FF",width:2}},axisTick:{show:!1},data:xdata}],yAxis:[{type:"value",axisLabel:{formatter:"{value}",color:"#65F5FD",fontSize:14},axisLine:{lineStyle:{color:"rgba(255,255,255,0)"}},splitLine:{lineStyle:{type:"dashed",color:"#385B71"}}}],series:[{name:legendData[0],type:"bar",barWidth:10,barGap:1,itemStyle:{normal:{color:colorSet,barBorderRadius:10}},data:dataArr},{name:legendData[1],type:"bar",barWidth:10,barGap:1,itemStyle:{normal:{color:colorSet2}},data:dataArr2}]};
