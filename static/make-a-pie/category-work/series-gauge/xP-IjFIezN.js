var colorLeft="#00FCF7",colorRight="#5098ed",colorLeftAlpha=["#00FCF788","#00FCF70c"],colorRightAlpha=["#5098ed88","#5098ed08"],value=88,data={value,percent:(value/100).toFixed(2)},option={backgroundColor:"#040d2e",series:[{type:"gauge",radius:"98%",center:["50%","70%"],min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:4,color:[[1,"rgba(229,229,229,0.3)"]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},detail:{show:!1}},{type:"gauge",radius:"85%",center:["50%","70%"],min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:120,color:[[data.percent,new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colorLeftAlpha[0]},{offset:1,color:colorLeftAlpha[1]}])],[1,new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colorRightAlpha[0]},{offset:1,color:colorRightAlpha[1]}])]]}},axisTick:{show:!0,splitNumber:2,length:10},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},detail:{show:!1}},{type:"gauge",radius:"40%",center:["50%","70%"],min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:120,color:[[1,new echarts.graphic.RadialGradient(.5,1,1,[{offset:1,color:"rgba(229, 229, 229,0.15)"},{offset:.72,color:"rgba(229, 229, 229,0.05)"},{offset:.7,color:"rgba(229, 229, 229,0.4)"},{offset:.401,color:"rgba(229, 229, 229,0.05)"},{offset:.4,color:"rgba(229, 229, 229,0.8)"},{offset:0,color:"rgba(229, 229, 229,0.8)"}])]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},detail:{show:!1}},{type:"gauge",radius:"90%",center:["50%","70%"],min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:20,color:[[data.percent,colorLeft],[1,colorRight]]}},pointer:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1}},{type:"gauge",radius:"80%",center:["50%","70%"],min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!1},data:[{value:data.value,name:"项目数"}],pointer:{show:!0},itemStyle:{color:"rgba(255,255,255,0)",borderColor:"#f3f5f6",borderWidth:"4",borderType:"solid"},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!0,formatter:function(e){return e+"%"},offsetCenter:["0%","30%"],fontSize:"18px",color:"#08b5d6"},title:{show:!0,offsetCenter:[0,"50%"],color:"#08b5d6"}}]};