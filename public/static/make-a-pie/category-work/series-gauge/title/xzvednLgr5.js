var targetValue=200,realValue=88,data={title:"仪表盘",value:40,color:{pieMini:"#ffca1c",pieMiniMini:"#fff",piePlus:"#5DD1FA",value:"#687284"}},option={title:[{text:"三相不同期",top:"58%",left:"22.5%",textStyle:{color:"#fff",fontSize:18,align:"center"}},{text:"谢波总含量",left:"center",top:"58%",textStyle:{color:"#fff",fontSize:18,align:"center"}},{text:"电压合格率",top:"58%",left:"66.5%",textStyle:{color:"#fff",fontSize:18,align:"center"}}],backgroundColor:"#062a44",series:[{name:"刻度1",type:"gauge",radius:"30%",min:0,max:100,splitNumber:10,startAngle:215,endAngle:-35,axisLine:{show:!0,lineStyle:{width:1,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#173A66"},{offset:1,color:"#36bdfd"}])]]}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},detail:{show:!1},pointer:{show:!1}},{name:"仪表盘1",type:"gauge",radius:"29%",splitNumber:10,startAngle:215,endAngle:-35,axisLine:{lineStyle:{color:[[data.value/100,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#173A66"},{offset:1,color:"#36bdfd"}])]],width:8}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{formatter:function(e){if(e!==0){var t=Math.round(e);return parseInt(t).toFixed(0)+"%"}else return 0},textStyle:{padding:[0,0,80,0],fontSize:28,fontWeight:"700",color:"#36bdfd"}},data:[{value:data.value}],pointer:{show:!1}},{name:"刻度2",type:"gauge",radius:"20%",center:["28%","52%"],min:0,max:100,splitNumber:10,startAngle:215,endAngle:-35,axisLine:{show:!0,lineStyle:{width:1,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#173A66"},{offset:1,color:"#36bdfd"}])]]}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},detail:{show:!1},pointer:{show:!1}},{name:"仪表盘2",type:"gauge",radius:"19%",center:["28%","52%"],splitNumber:10,startAngle:215,endAngle:-35,axisLine:{lineStyle:{color:[[data.value/100,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#173A66"},{offset:1,color:"#36bdfd"}])]],width:8}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{formatter:function(e){if(e!==0){var t=Math.round(e);return parseInt(t).toFixed(0)+"%"}else return 0},textStyle:{padding:[0,0,80,0],fontSize:28,fontWeight:"700",color:"#36bdfd"}},data:[{value:data.value}],pointer:{show:!1}},{name:"刻度3",type:"gauge",radius:"20%",center:["72%","52%"],min:0,max:100,splitNumber:10,startAngle:215,endAngle:-35,axisLine:{show:!0,lineStyle:{width:1,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#173A66"},{offset:1,color:"#36bdfd"}])]]}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},detail:{show:!1},pointer:{show:!1}},{name:"仪表盘3",type:"gauge",radius:"19%",center:["72%","52%"],splitNumber:10,startAngle:215,endAngle:-35,axisLine:{lineStyle:{color:[[data.value/100,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#173A66"},{offset:1,color:"#36bdfd"}])]],width:8}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{formatter:function(e){if(e!==0){var t=Math.round(e);return parseInt(t).toFixed(0)+"%"}else return 0},textStyle:{padding:[0,0,80,0],fontSize:28,fontWeight:"700",color:"#36bdfd"}},data:[{value:data.value}],pointer:{show:!1}}]};
