var demoData=[{name:`未来15日
场地预约率`,unit:"%",value:80}];option={backgroundColor:"#010101",series:function(){var a=[];return demoData.forEach(function(e){a.push({name:e.name,type:"gauge",radius:"70.10%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!0,lineStyle:{width:20,shadowBlur:0,color:[[0,"transparent"],[.1,"#194383"],[.108,"transparent"],[.2,"#194383"],[.208,"transparent"],[.3,"#194383"],[.308,"transparent"],[.4,"#194383"],[.408,"transparent"],[.5,"#194383"],[.508,"transparent"],[.6,"#194383"],[.608,"transparent"],[.7,"#194383"],[.708,"transparent"],[.8,"#194383"],[.808,"transparent"],[.9,"#194383"],[.908,"transparent"],[1,"#194383"]]}},axisTick:{show:!1},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!1},detail:{show:!1},data:[{show:!1}]},{name:e.name,type:"gauge",radius:"73.10%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!0,lineStyle:{width:150,color:[[e.value/100,new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(69, 161, 255,0)"},{offset:.3,color:"rgba(69, 161, 255,0)"},{offset:1,color:"rgba(69, 161, 255,0.7)"}])],[1,"rgba(28,128,245,.0)"]]}},axisTick:{show:!1},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!1,length:"100%"},detail:{show:!0,offsetCenter:[1,"1%"],textStyle:{fontSize:10,color:"#0AFCE0"},formatter:["{value}"+(e.unit||"")].join(`
`)},itemStyle:{color:"rgba(28, 128, 245,.3)",borderColor:"rgba(28, 128, 245,1)"},data:[{value:e.value}]},{type:"gauge",radius:"90%",splitNumber:10,splitLine:{show:!1},min:0,max:100,startAngle:225,endAngle:-45,axisLabel:{show:!1},axisLine:{show:!1},pointer:{show:0},axisTick:{show:!1},detail:{show:!0,offsetCenter:[0,"50%"],formatter:`未来15日
场地预约率`,textStyle:{fontSize:10,color:"#ffffff",lineHeight:50,fontWeight:"100"}}},{type:"gauge",radius:"73%",splitNumber:10,splitLine:{show:!1},min:0,max:100,startAngle:225,endAngle:-45,axisLabel:{show:!1},axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[.05,"#3F6BFC"],[.1,"#4072FB"],[.15,"#4077F9"],[.2,"#417BF9"],[.25,"#4282F8"],[.3,"#4385F7"],[.35,"#4389F6"],[.4,"#448FF5"],[.45,"#4594F4"],[.5,"#4599F3"],[.55,"#469EF2"],[.6,"#46A3F1"],[.65,"#46A6F0"],[.7,"#24befe"],[.75,"#12d1ff"],[.8,"#06defe"],[.85,"#05e0ff"],[.9,"#06deff"],[.95,"#06deff"],[1,"#06deff"]]}},pointer:{show:0},axisTick:{show:!1},detail:{show:!1}},{type:"gauge",radius:"82%",splitNumber:10,splitLine:{show:!1},min:0,max:100,startAngle:225,endAngle:-45,axisLabel:{show:!1},axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[.05,"#0A498E"],[.1,"#0C58A7"],[.15,"#254DD3"],[.2,"#355FEC"],[.25,"#4072FB"],[.3,"#355FEC"],[.35,"#254DD3"],[.4,"#06478B"],[.45,"#0A246C"],[.5,"#071848"],[.55,"#071848"],[.6,"#0A246C"],[.65,"#06478B"],[.7,"#254DD3"],[.75,"#355FEC"],[.8,"#355FEC"],[.85,"#254DD3"],[.9,"#0C58A7"],[.95,"#0A498E"],[1,"#0A498E"]]}},pointer:{show:0},axisTick:{show:!1},detail:{show:!1}})}),a}()};