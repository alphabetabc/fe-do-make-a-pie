var highlight="#03b7c9",demoData=[{name:"警情总量",value:60,unit:".00",pos:["16.6%","25%"],range:[0,80]}];option={backgroundColor:"#222939",series:function(){var t=[];return demoData.forEach(function(e){t.push({type:"gauge",radius:"63.33%",splitNumber:8,min:0,max:80,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{color:[[1,highlight]]}},axisLabel:{distance:6,textStyle:{color:"#fff",fontSize:"16"}},pointer:{show:0},detail:{show:0}},{name:e.name,type:"gauge",radius:"53.10%",startAngle:225,endAngle:-45,min:0,max:80,axisLine:{show:!0,lineStyle:{width:26,color:[[e.value/80,new echarts.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"rgba(255,255,255,0)"},{offset:1,color:"#ff9f13 "}])],[1,"rgba(255,255,255,0)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"105%"},detail:{show:!0,offsetCenter:[0,"93%"],textStyle:{fontSize:60,color:"#04A4CE"},formatter:["{value}"+(e.unit||""),"{name|"+e.name+"}"].join(`
`),rich:{name:{fontSize:35,lineHeight:30,color:"#ffc300",fontWeight:"bold"}}},itemStyle:{normal:{color:highlight}},data:[{value:e.value}]})}),t}()};
