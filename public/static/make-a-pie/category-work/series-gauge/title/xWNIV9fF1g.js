var center1=["15%","70%"],center2=["50%","70%"],center3=["85%","70%"],startAngle=180,endAngle=0,min=0,max=100,radius="40%",pointer={show:!1},axisLine={lineStyle:{width:30,color:[[1,"#f4f4f4"]]}},axisTick={show:!1},splitLine={show:!1},axisLabel={distance:5,color:"#666",fontSize:14,formatter:function(e){if(e===0||e===100)return e+"%"}},anchor={show:!1,showAbove:!1,size:25,itemStyle:{borderWidth:60}},title={show:!0,offsetCenter:[0,"30%"],fontSize:18},detail={valueAnimation:!0,fontSize:24,lineHeight:30,color:"#106ae7",fontWeight:"bold",offsetCenter:[0,"-20%"],formatter:function(e){return`{a|占比} 
`+e+"{a|%}"},rich:{a:{color:"#333",fontSize:16,lineHeight:30}}};option={title:[{text:"总数{a|65256}人",left:0,top:20,textStyle:{fontWeight:"bold",fontSize:"16",color:"#333",rich:{a:{color:"#319fff",fontSize:24,lineHeight:30,padding:[0,10]}}}}],grid:{top:0},series:[{type:"gauge",startAngle,center:center1,endAngle,min,max,radius,progress:{show:!0,width:30,itemStyle:{color:"#ff42a4"}},pointer,axisLine,axisTick,splitLine,axisLabel,anchor,title,detail,data:[{value:27.8,name:"女性18165人"}]},{type:"gauge",startAngle,center:center2,radius,endAngle,min,max,progress:{show:!0,width:30,itemStyle:{color:"#1ac9f6"}},pointer,axisLine,axisTick,splitLine,axisLabel,anchor,title,detail,data:[{value:53.4,name:"大专及以上学历34820人"}]},{type:"gauge",startAngle,center:center3,radius,endAngle,min,max,progress:{show:!0,width:30,itemStyle:{color:"#12d891"}},pointer,axisLine,axisTick,splitLine,axisLabel,anchor,title,detail,data:[{value:28.3,name:"35岁及以下18435人"}]}]};
