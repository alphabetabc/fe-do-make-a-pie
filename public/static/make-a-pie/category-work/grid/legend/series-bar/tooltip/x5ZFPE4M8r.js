var data={area:["喷淋头","烟感","消防栓","灭火器","指示牌","应急照明灯"],legend:["设备正常","设备异常"],data:[[320,302,301,334,300,300],[14,50,0,45,20,40]]},colors=["48,156,237","213,50,80"];let seriesData=[],Max=0,MaxData=[];function jia(e,t){let a=[];return t.length==0?e:(e.map(function(r,o){a[o]=t[o]+r}),a)}Max=Math.ceil(Math.max(...jia(data.data[0],data.data[1]))/100)*100+100;for(var i=0;i<data.area.length;i++)MaxData.push(Max);for(var i=0;i<data.legend.length;i++)seriesData.push({name:data.legend[i],type:"bar",stack:"总量",barWidth:10,label:{show:!1,position:"insideTop"},itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba("+colors[i]+",0.8)"},{offset:.5,color:"rgba("+colors[i]+",0.5)"},{offset:.8,color:"rgba("+colors[i]+",0.2)"},{offset:1,color:"transparent"}],!1)},data:data.data[i]});seriesData.push({name:"总数",type:"bar",barGap:"-100%",data:MaxData,barWidth:10,label:{show:!1,position:"top",textStyle:{color:"#74fafd",fontSize:12,align:"center",rich:{red:{color:"#d53250",textShadowColor:"#d53250",textShadowBlur:5,lineHeight:15}}},padding:[8,4,4,4],borderRadius:5,backgroundColor:"#053853",formatter:function(e){return console.log(e.dataIndex),data.data[1][e.dataIndex]==0?"正常":"异常: {red|"+data.data[1][e.dataIndex]+"}"}},tooltip:{},itemStyle:{normal:{color:"#053853",barBorderRadius:2}},z:1});var option={backgroundColor:"#010e17",title:{text:"单位/个",textStyle:{color:"#d1d1d1",fontSize:12},left:"0px",top:"0px"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){return e[0].axisValue+"<br/>"+e[0].seriesName+":"+e[0].data+"<br/>"+e[1].seriesName+":"+e[1].data}},legend:{z:1,top:0,right:0,itemWidth:10,itemHeight:10,textStyle:{fontSize:12,color:"#d1d1d1",padding:[3,0,0,0]},data:data.legend},grid:{top:"30px",left:"10px",right:"10px",bottom:"10px",containLabel:!0},xAxis:{type:"category",inverse:!1,axisLabel:{color:"#d1d1d1"},axisLine:{lineStyle:{color:"#11505a"},width:5},axisTick:{show:!1},data:data.area},yAxis:{type:"value",axisLabel:{color:"#d1d1d1"},axisLine:{lineStyle:{color:"transparent"},width:1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#02272d"}}},animationEasing:"circularOut",series:seriesData};myChart.setOption(option),setTimeout(function(){let e=myChart.getOption();console.log(e),e.series[2].label.show=!0,myChart.setOption(e)},2e3);
