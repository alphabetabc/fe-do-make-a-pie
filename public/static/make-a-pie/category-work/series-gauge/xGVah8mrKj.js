var demoData=[{name:"CNC-1",value:220,unit:"",pos:["16.6%","25%"]},{name:"CNC-2",value:32,unit:"",pos:["49.8%","25%"]},{name:"CNC-3",value:.9,pos:["83%","25%"]},{name:"CNC-4",value:6.34,unit:"",pos:["16.6%","75%"]},{name:"CNC-5",value:6.28,unit:"",pos:["49.8%","75%"]},{name:"CNC-6",value:50,unit:"",pos:["83%","75%"]}];option={backgroundColor:"#222939",series:function(){var a=[];return demoData.forEach(function(e){a.push({name:e.name,type:"gauge",center:e.pos,radius:"42%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!0,lineStyle:{width:4,shadowBlur:10,color:[[0,"transparent"],[.1,"#0894f6"],[.11,"transparent"],[.2,"#0894f6"],[.21,"transparent"],[.3,"#0894f6"],[.31,"transparent"],[.4,"#0894f6"],[.41,"transparent"],[.5,"#0894f6"],[.51,"transparent"],[.6,"#0894f6"],[.61,"transparent"],[.7,"#0894f6"],[.71,"transparent"],[.8,"#fd0001"],[.81,"transparent"],[.9,"#fd0001"],[.91,"transparent"],[1,"#fd0001"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!1},detail:{show:!1},data:[{show:!1}]},{name:e.name,center:e.pos,type:"gauge",radius:"31%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!0,lineStyle:{width:50,color:[[e.value/100,new echarts.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"rgba(255, 36, 74,0)"},{offset:.3,color:"rgba(255, 36, 74,0)"},{offset:1,color:"rgba(255, 36, 74,1)"}])],[1,"rgba(255,255,255,.0)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"100%"},detail:{show:!0,offsetCenter:[0,"70%"],textStyle:{fontSize:24,color:"#ff244a"},formatter:["{value}"+(e.unit||""),"{name|"+e.name+"}"].join(`
`),rich:{name:{fontSize:20,lineHeight:60,color:"#fff",fontWeight:"100"}}},itemStyle:{color:"rgba(255, 36, 74,.3)",borderColor:"rgba(255, 36, 74,1)"},data:[{value:e.value}]},{type:"gauge",radius:"40%",center:e.pos,splitNumber:10,min:0,max:100,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:3,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#747474"},{offset:1,color:"#747474"}])]]}},axisLabel:{distance:6,textStyle:{color:"#fff",fontSize:"14"}},splitLine:{show:!0,length:16,lineStyle:{color:"#fff"}},pointer:{show:0},detail:{show:0}})}),a}()};