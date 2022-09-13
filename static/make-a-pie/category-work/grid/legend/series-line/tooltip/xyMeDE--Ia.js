option={color:["#285DF3","#00FFFF","#F35D28"],tooltip:{trigger:"none",axisPointer:{type:"cross"}},legend:{data:[{name:"进口总量",textStyle:{color:"#FFFF"}},{name:"排放总量",textStyle:{color:"#FFFF"}},{name:"减排总量",textStyle:{color:"#FFFF"}}]},grid:{top:30,bottom:50,borderWidth:0},xAxis:[{type:"category",axisTick:{show:!1,alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#fff",fontSize:"0.14rem"}},lineWidth:0,axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:["#015FAF"],width:1,type:"solid"}},axisPointer:{label:{formatter:function(e){return"降水量  "+e.value+(e.seriesData.length?"："+e.seriesData[0].data:"")}}},data:["1","2","3","4","5","6","7","8","9","10","11","12"]},{type:"category",axisTick:{alignWithLabel:!1},axisLine:{show:!1},axisPointer:{label:{formatter:function(e){return"降水量  "+e.value+(e.seriesData.length?"："+e.seriesData[0].data:"")}}}}],yAxis:[{type:"value",lineWidth:0,axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"#fff",fontSize:"0.14rem"}},splitLine:{show:!1},axisTick:{show:!1}}],series:[{name:"进口总量",type:"line",smooth:!0,symbol:"none",itemStyle:{normal:{areaStyle:{type:"default",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#285DF3"},{offset:.8,color:"#285DF3"},{offset:1,color:"#0000"}])},lineStyle:{color:"#0000"},label:{show:!1,position:"top",textStyle:{color:"white"}}}},areaStyle:{},data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{name:"排放总量",type:"line",smooth:!0,symbol:"none",itemStyle:{normal:{areaStyle:{type:"default",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00FFFF"},{offset:.5,color:"#00FFFF"},{offset:1,color:"#0000"}])},lineStyle:{color:"#0000"},label:{show:!1,position:"top",textStyle:{color:"white"}}}},areaStyle:{},data:[3.9,5.9,11.1,18.7,48.3,69.2,231.6,46.6,55.4,18.4,10.3,.7]},{name:"减排总量",type:"line",smooth:!0,symbol:"none",itemStyle:{normal:{areaStyle:{type:"default",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#F35D28"},{offset:.5,color:"#F35D28"},{offset:1,color:"#0000"}])},lineStyle:{color:"#0000"},label:{show:!1,position:"top",textStyle:{color:"white"}}}},areaStyle:{},data:[23,122.9,231.1,132.7,334.3,131.2,232.6,78.6,67.4,59.4,59.3,98.7]}]};