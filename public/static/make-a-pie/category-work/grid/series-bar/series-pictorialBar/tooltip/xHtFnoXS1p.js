let list=[{name:"钢筋工",value:12},{name:"木工",value:11},{name:"瓦工",value:8},{name:"电工",value:18},{name:"架子工",value:9},{name:"混凝土工",value:14},{name:"防水工",value:6},{name:"土方工",value:8},{name:"防降水工",value:4},{name:"打桩工",value:8}],xData=[],yData=[];list.forEach(function(e){console.log(e),xData.push(e.name),console.log(xData),yData.push(e.value)}),option={grid:{top:"5%",left:"5%",bottom:"5%",right:"5%",containLabel:!0},tooltip:{show:!0},animation:!1,xAxis:[{name:"日期",type:"category",data:xData,axisTick:{show:!1,alignWithLabel:!0},nameTextStyle:{color:"#8F8F8F"},axisLine:{show:!0,lineStyle:{color:"#8F8F8F"}},axisLabel:{textStyle:{color:"#8F8F8F"},margin:10}}],dataZoom:[{type:"slider",xAxisIndex:0,maxValueSpan:6,textStyle:{color:"transparent"},filterMode:"filter",start:0,end:100,backgroundColor:"#fff"}],yAxis:[{name:"单位/次",show:!0,type:"value",axisLabel:{show:!0,textStyle:{color:"#8F8F8F"}},splitLine:{lineStyle:{color:"#CDD4D9"}},axisLine:{show:!0,lineStyle:{color:"#8F8F8F"}}}],series:[{name:"日期",type:"pictorialBar",symbolSize:[40,10],symbolOffset:[0,-6],symbolPosition:"end",z:12,barWidth:"0",label:{normal:{show:!1,position:"top",fontSize:15,fontWeight:"bold",color:"#7099E0"}},color:"#7099E0",data:yData},{type:"bar",barWidth:"40",barGap:"10%",barCateGoryGap:"10%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,.7,[{offset:0,color:"#79A9EC"},{offset:1,color:"#2765D1"}])}},data:yData}]};