option={baseOption:{backgroundColor:"#000",title:{text:"Log View",textStyle:{color:"#fff",fontSize:16}},legend:{data:["GR","Resistivity"],top:4,right:"20%",textStyle:{color:"#fff"}},tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{right:20,feature:{saveAsImage:{},restore:{},dataView:{},dataZoom:{},magicType:{type:["line","bar"]}}},grid:[{show:!1,left:"4%",top:60,bottom:60,containLabel:!0,width:"46%"},{show:!1,left:"50.5%",top:80,bottom:60,width:"0%"},{show:!1,right:"4%",top:60,bottom:60,containLabel:!0,width:"46%"}],xAxis:[{type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!0,textStyle:{color:"#B2B2B2",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#1F2022",width:1,type:"solid"}}},{gridIndex:1,show:!1},{gridIndex:2,type:"value",axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!0,textStyle:{color:"#B2B2B2",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#1F2022",width:1,type:"solid"}}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,margin:8,textStyle:{color:"#9D9EA0",fontSize:12}},data:depth},{gridIndex:1,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,textStyle:{color:"#9D9EA0",fontSize:12}},data:depth.map(function(e){return{value:e,textStyle:{align:"center"}}})},{gridIndex:2,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,textStyle:{color:"#9D9EA0",fontSize:12}},data:depth}],dataZoom:[{type:"inside",yAxisIndex:[0,1,2]},{id:"dataZoomX1",type:"slider",xAxisIndex:[0]},{id:"dataZoomX2",type:"slider",xAxisIndex:[2]},{id:"dataZoomY",type:"slider",yAxisIndex:[0,1,2]}],series:[{name:"GR",type:"line",barGap:20,barWidth:20,label:{normal:{show:!1},emphasis:{show:!0,position:"left",offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:"#659F83"},emphasis:{color:"#08C7AE"}},data:GR},{name:"Resistivity",type:"line",barGap:20,barWidth:20,xAxisIndex:2,yAxisIndex:2,label:{normal:{show:!1},emphasis:{show:!0,position:"right",offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:"#F68989"},emphasis:{color:"#F94646"}},data:Resistivity}]},options:[]};
