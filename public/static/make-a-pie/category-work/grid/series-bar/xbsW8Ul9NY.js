var baifenbi=[.333,.444,.555,.777,.888,.922],zongjine=[2e3,3e3,4e3,5e3,6e3,7e3],xingm=["广州市粤芯12英寸集成电路生产线项目","广州市美华航空电子研发建设项目","欣旺达汇总新能源项目","广州市中国电科华南电子信息产业园项目","东莞欧菲光电影像产业项目"];option={backgroundColor:"#061A42",color:["#61A8FF"],xAxis:[{show:!1},{show:!1}],yAxis:[{type:"category",axisLabel:{show:!1},itemStyle:{},axisTick:{show:!1},axisLine:{show:!1},data:xingm},{show:!0,inverse:!0,data:zongjine,axisLabel:{textStyle:{fontSize:18,color:"#02d9fc"},formatter:"{value} 万元"},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}}],series:[{show:!0,type:"bar",barGap:"-100%",barWidth:"20%",itemStyle:{normal:{color:function(e){return{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#155ce9"},{offset:1,color:"#00eaff"}]}}}},max:1,labelLine:{show:!1},z:2,data:baifenbi},{show:!0,type:"bar",xAxisIndex:1,barGap:"-100%",barWidth:"20%",itemStyle:{normal:{barBorderRadius:200,color:"rgba(22,203,115,0.05)"}},label:{normal:{show:!0,position:[0,"-100%"],rich:{white:{color:"#ffffff"},green:{color:"#70DDA7"},yellow:{color:"#CCB877"},red:{color:"#BC3C47"},gray:{color:"#727CBA"}},formatter:function(e){return"{white|"+xingm[e.dataIndex]+"}"}}},data:zongjine}]};