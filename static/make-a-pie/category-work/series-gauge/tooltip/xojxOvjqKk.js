var colorList=[{x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#7BB2FF"},{offset:1,color:"#4186FF"}]},{x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#FFD18C"},{offset:1,color:"#FEAD5A"}]}];option={tooltip:{show:!0,formatter:"{b}：{c}%",backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderWidth:0,padding:5,textStyle:{color:"#fff"}},series:[{type:"gauge",splitNumber:3,radius:"93%",center:["50%","70%"],startAngle:180,endAngle:0,min:0,max:100,pointer:{show:!1,width:7,length:"60%",itemStyle:{color:"auto",opacity:1,borderWidth:0,borderType:"solid",borderColor:"#000",shadowBlur:10,shadowColor:"#fff"}},axisLine:{show:!0,lineStyle:{width:35,color:[[.3,colorList[1]],[1,colorList[0]]],borderColor:"#000",borderWidth:"10"}},axisLabel:{show:!1,color:"#666",fontSize:16,formatter:function(o){return o.toFixed(0)}},axisTick:{show:!1},splitLine:{show:!1,length:"28%",lineStyle:{color:"#fff",width:2}},detail:{show:!1},title:{show:!1},data:[{value:30,name:"合格值"}]},{type:"gauge",splitNumber:10,radius:"100%",center:["50%","70%"],min:0,max:100,startAngle:180,endAngle:0,pointer:{show:!1,width:7,length:"60%",itemStyle:{color:"auto",opacity:1,borderWidth:0,borderType:"solid",borderColor:"#000",shadowBlur:10,shadowColor:"#fff"}},axisLine:{show:!0,lineStyle:{width:35,color:[[.3,colorList[1]],[1,colorList[0]]],opacity:.15,borderColor:"#000",borderWidth:"10"}},axisLabel:{show:!1},axisTick:{show:!1,splitNumber:5,lineStyle:{color:"#fff",width:2}},splitLine:{show:!1,length:"28%",lineStyle:{color:"#fff",width:2}},title:{show:!0,offsetCenter:["0%","30%"],fontSize:30,color:"#1569F8"},detail:{fontSize:40,offsetCenter:["0%","20%"],valueAnimation:!0,formatter:function(o){if(o<30&&o>=0)return"{a|"+o+"%}";if(o>=30&&o<=100)return"{b|"+o+"%}"},rich:{a:{fontSize:26,fontWeight:800,fontFamily:"Arial",color:"#FEAD5A",align:"center",padding:[0,5,0,0]},b:{fontSize:26,fontWeight:800,fontFamily:"Arial",color:"#4A8DFF",align:"center",padding:[0,5,0,0]}}},data:[{value:20.22,name:"研究生学位教师占专任教师比例"}]}]};
