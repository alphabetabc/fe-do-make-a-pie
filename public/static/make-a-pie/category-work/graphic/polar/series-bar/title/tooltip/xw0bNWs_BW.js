var data={name:"贷款",value:[88],nAmount:156655714e-2};option={backgroundColor:"#03060F",title:{text:data.value[0]+"%",textStyle:{color:"#2A95F9",fontSize:70},itemGap:20,left:"center",top:"47%"},graphic:[{type:"text",z:100,left:"center",top:"80%",style:{fill:"#fff",text:data.name+"总额"+data.nAmount+"万",font:"18px Microsoft YaHei"}}],tooltip:{formatter:function(e){return'<span style="color: #fff;">占比：'+e.value+"%</span>"}},angleAxis:{max:100,clockwise:!1,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},polar:[{center:["50%","50%"],radius:"100%"}],series:[{type:"bar",data:data.value,showBackground:!0,polarIndex:0,backgroundStyle:{color:"#022546",borderWidth:10},coordinateSystem:"polar",roundCap:!0,barWidth:30,itemStyle:{normal:{opacity:1,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#008BFF"},{offset:1,color:"#0071FF"}]),shadowBlur:5,shadowColor:"#2A95F9"}}}]};