var highlight="#03b7c9",demoData=[{name:"设备1",value:220,unit:"",pos:["16.6%","25%"],range:[0,400]},{name:"设备2",value:32,unit:"",pos:["49.8%","25%"],range:[0,60]},{name:"设备3",value:.9,pos:["83%","25%"],range:[.1,1],splitNum:9},{name:"设备4",value:6.34,unit:"",pos:["16.6%","75%"],range:[0,50]},{name:"设备5",value:6.28,unit:"",pos:["49.8%","75%"],range:[0,50]},{name:"设备6",value:50,unit:"",pos:["83%","75%"],range:[0,100]}];option={backgroundColor:"#222939",series:function(){var n=[];return demoData.forEach(function(e){n.push({type:"gauge",center:e.pos,radius:"33.33%",splitNumber:e.splitNum||10,min:e.range[0],max:e.range[1],startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[1,highlight]]}},axisTick:{show:!0,lineStyle:{color:highlight,width:1},length:-5,splitNumber:10},splitLine:{show:!0,length:-14,lineStyle:{color:highlight}},axisLabel:{distance:-20,textStyle:{color:highlight,fontSize:"14",fontWeight:"bold"}},pointer:{show:0},detail:{show:0}},{name:e.name,type:"gauge",center:e.pos,radius:"30.33%",startAngle:225,endAngle:-45,min:e.range[0],max:e.range[1],axisLine:{show:!0,lineStyle:{width:16,color:[[1,"rgba(255,255,255,.1)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"105%"},detail:{show:!0,offsetCenter:[0,"100%"],textStyle:{fontSize:20,color:"#fff"},formatter:["{value} "+(e.unit||""),"{name|"+e.name+"}"].join(`
`),rich:{name:{fontSize:14,lineHeight:30,color:"#ddd"}}},itemStyle:{normal:{color:highlight}},data:[{value:e.value}]})}),n}()};
