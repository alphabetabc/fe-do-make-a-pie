var myData={name:["语文","数学","英语","化学","物理","生物","地理","政治","历史"],value:[500,250,400,550,560,200,250,190,220],value2:[9e4,65e3,81e3,11e4,92e3,5e4,56e3,63e3,63e3]},max=Math.max(...myData.value)||1,max2=Math.max(...myData.value2)||1,multiple=max2/max;for(var i in myData.value2)myData.value2[i]=myData.value2[i]/multiple;option={backgroundColor:"#000",grid:{top:"15%",right:"11%",left:"11%",bottom:"22%"},tooltip:{show:!0,trigger:"axis",formatter:function(e,a,t){return e[0].name+"<br/>"+e[0].seriesName+"："+e[0].value+"个<br/>"+e[1].seriesName+"："+e[1].value*multiple+"元"}},legend:{show:!0,top:11,right:15,icon:"circle",itemWidth:8,itemHeight:8,itemGap:20,textStyle:{color:"#fff",fontSize:12}},xAxis:[{type:"category",data:myData.name,axisLine:{lineStyle:{color:"#1E467E"}},axisLabel:{margin:20,color:"#979797",align:"center",verticalAlign:"top",textStyle:{fontSize:12}},axisTick:{show:!1}}],yAxis:[{type:"value",name:"单位:个",nameLocation:"end",nameTextStyle:{fontSize:12,align:"right",padding:[10,5]},min:0,max,splitNumber:5,interval:max/5,axisLabel:{formatter:"{value}",color:"#979797"},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(30,70,126,0.40)"}}},{type:"value",name:"单位:元",nameLocation:"end",nameTextStyle:{fontSize:12,align:"left",padding:[10,5]},min:0,max:max2,splitNumber:5,interval:max2/5,axisLabel:{formatter:"{value}",color:"#979797"},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"设备数量",type:"bar",data:myData.value,barWidth:8,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#064CC4"},{offset:1,color:"rgba(6,76,196,0.05)"}],!1)}},label:{normal:{show:!1}}},{name:"设备总价",type:"bar",data:myData.value2,barWidth:8,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#4FB8F9"},{offset:1,color:"rgba(79,184,249,0.1)"}],!1)}},label:{normal:{show:!1}}}]};