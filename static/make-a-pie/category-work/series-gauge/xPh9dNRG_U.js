var shiji=30,name=["实际","目标","标准","预算"],value=[30,50,60,80],min=-100,max=100,colorArr=["rgba(255,174,69,1)","rgba(0,168,255,.5)","rgba(54,255,104,.5)","rgba(0,255,250,.5)"],seriesData=[];name.forEach((t,e)=>{seriesData.push({name:name[e],value:value[e],itemStyle:{color:colorArr[e]}})}),option={backgroundColor:"#272935",tooltip:{show:!0,trigger:"item",axisPointer:{type:"line"},formatter:"{b} : {c}",textStyle:{fontSize:14},borderWidth:0},series:[{name:"刻度",type:"gauge",center:["50%","50%"],radius:"72%",min:-100,max:100,splitNumber:10,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!0,color:"#f5f7f9",fontSize:12,distance:10},axisTick:{show:!0,splitNumber:5,lineStyle:{color:"#f5f7f9",width:1},length:10},splitLine:{show:!0,length:16,lineStyle:{color:"#f5f7f9",width:1}}},{type:"gauge",radius:"78%",center:["50%","50%"],min:-100,max:100,splitNumber:0,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:8,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#33AEEE"},{offset:1,color:"#33AEEE"}])]]}},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},pointer:{show:!0,length:"80%",width:"1%"},title:{show:!1},detail:{show:!0,offsetCenter:[0,20],color:"#33AEEE",formatter:function(t){return"实际："+shiji},textStyle:{fontSize:14,fontFamily:"PingFangSC"}},data:seriesData}]};