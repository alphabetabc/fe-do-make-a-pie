var xdata=["周一","周二","周三","周四","周五","周六","周日"];option={title:{text:"弹窗内容"},color:["orange","#5793f3","black","purple"],tooltip:{trigger:"axis"},legend:{top:"20",data:["测压管1","测压管2","测压管3"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,nameLocation:"middle",nameGap:"30",data:xdata,axisLabel:{show:!0,formatter:function(t,a){var e="";return a==0||a==xdata.length-1?e=t:e="",e}}}],yAxis:[{type:"value",name:"测量值(m)",nameLocation:"middle",nameGap:"40",interval:230/3,axisTick:{show:!1}},{type:"value",name:"温度(℃)",min:0,max:"dataMax",splitNumber:4,nameLocation:"middle",nameGap:"30",nameRotate:"-90"}],series:[{name:"测压管1",type:"line",smooth:!0,symbolSize:10,data:[120,132,101,134,20,220,120]},{name:"测压管2",type:"line",smooth:!0,symbolSize:20,data:[130,112,51,34,90,220,210]},{name:"测压管3",type:"line",smooth:!0,data:[140,32,61,154,90,229,10]},{name:"温度",type:"line",tooltip:{trigger:"axis"},yAxisIndex:1,smooth:!0,itemStyle:{normal:{color:"rgba(2, 197, 233, 0.2)",lineStyle:{color:"rgba(2, 197, 233, 0.2)"},areaStyle:{color:"rgba(2, 197, 233, 0.2)"}}},data:[30,32,61,24,20,90,20]}]};