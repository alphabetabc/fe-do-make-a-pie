var demoData=[{name:"CNC-1",unit:"%",value:68}];option={backgroundColor:"#010101",series:function(){var t=[];return demoData.forEach(function(e){t.push({name:e.name,type:"gauge",radius:"47.10%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!0,lineStyle:{width:50,color:[[e.value/100,new echarts.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"rgba(255, 36, 74,0)"},{offset:.3,color:"rgba(255, 36, 74,0)"},{offset:1,color:"rgba(255, 36, 74,1)"}])],[1,"rgba(255,255,255,.0)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"100%"},detail:{show:!0,offsetCenter:[0,"70%"],textStyle:{fontSize:24,color:"#ff244a"},formatter:["{value}"+(e.unit||""),"{name|"+e.name+"}"].join(`
`),rich:{name:{fontSize:20,lineHeight:60,color:"#fff",fontWeight:"100"}}},itemStyle:{color:"rgba(255, 36, 74,.3)",borderColor:"rgba(255, 36, 74,1)"},data:[{value:e.value}]},{name:e.name,type:"gauge",radius:"47.10%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!1},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,width:1,length:"100%"},detail:{show:!1},itemStyle:{color:"rgba(255, 36, 74,1)"},data:[{value:e.value}]},{type:"gauge",radius:"63.33%",splitNumber:10,min:0,max:100,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:3,shadowBlur:10,color:[[0,"transparent"],[.1,"#0894f6"],[.11,"transparent"],[.2,"#0894f6"],[.21,"transparent"],[.3,"#0894f6"],[.31,"transparent"],[.4,"#0894f6"],[.41,"transparent"],[.5,"#0894f6"],[.51,"transparent"],[.6,"#0894f6"],[.61,"transparent"],[.7,"#0894f6"],[.71,"transparent"],[.8,"#fd0001"],[.81,"transparent"],[.9,"#fd0001"],[.91,"transparent"],[1,"#fd0001"]]}},axisLabel:{formatter:function(a){switch(a+""){case"20":return"较小";case"80":return"较大";default:return a}},textStyle:{fontSize:12,fontWeight:""}},splitLine:{length:20,lineStyle:{color:"auto"}},axisTick:{length:10,lineStyle:{color:"auto"}},pointer:{show:0},detail:{show:0}})}),t}()};
