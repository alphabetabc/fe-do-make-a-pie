for(var datas={company:"%",xdata:[2016,2017,2018,2019],dataArr:[39.1,21.3,80,61.5]},ydata=[],scale=1,maxYdata=[],i=0;i<datas.dataArr.length;i++){var item=scale;ydata.push(item),maxYdata.push(100)}var normalColor="#94a1a9";option={title:{textStyle:{fontSize:14}},tooltip:{trigger:"axis",show:!0,axisPointer:{type:"shadow"},formatter:function(a){return a[0].name+"年"+a[0].data+datas.company}},grid:{left:"3%",right:"10%",bottom:"10%",top:"15%",containLabel:!0,show:!1},xAxis:[{type:"category",boundaryGap:!0,axisLabel:{color:normalColor,fontSize:16},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:normalColor}},splitLine:{show:!0,lineStyle:{type:"dashed",color:normalColor}},data:datas.xdata},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:datas.xdata}],yAxis:[{name:"",type:"value",axisLine:{show:!0,lineStyle:{color:normalColor}},axisTick:{show:!1},axisLabel:{color:normalColor,fontSize:16,margin:25,formatter:"{value}"+datas.company},splitLine:{show:!0,lineStyle:{type:"dashed",color:normalColor}}}],series:[{name:"",type:"bar",stack:"杆塔号",zlevel:2,barGap:"50%",barWidth:"40%",barCategoryGap:"50%",color:normalColor,markLine:{label:{color:"#77d8ff",fontSize:14,formatter:"{b}"},lineStyle:{type:"solid"},data:[{name:"2020目标",yAxis:100}]},markArea:{silent:!0,itemStyle:{color:"rgba(61, 69, 79,0.1)",borderWidth:1,borderType:"dashed",borderColor:normalColor},label:{color:normalColor,fontSize:14,formatter:"{b}",position:"right"},data:[[{name:"世界一流区间",yAxis:"20"},{yAxis:"80"}]]},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3bbeff"},{offset:1,color:"#2de6f8"}]),label:{show:!0,textStyle:{color:"#fff",fontSize:30},formatter:function(a){return a.value+datas.company},position:"top",padding:20}}},data:datas.dataArr},{name:"杆塔号",type:"bar",stack:"杆塔号",zlevel:2,barGap:"50%",barWidth:"40%",itemStyle:{normal:{color:"#c3e9ff"}},data:ydata},{name:"",type:"bar",xAxisIndex:1,zlevel:1,itemStyle:{normal:{color:"rgba(61, 69, 79,0.5)",borderWidth:0,shadowBlur:{shadowColor:"rgba(61, 69, 79,0.31)",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:2}}},barWidth:"40%",data:maxYdata}]};