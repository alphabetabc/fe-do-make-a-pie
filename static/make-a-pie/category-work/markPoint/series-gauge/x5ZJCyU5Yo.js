var value=70,colorArr=["#6394F8","#FFD380"],title="清客/救援事故率",colorJB={x:0,y:1,x2:0,y2:0,type:"linear",global:!1,colorStops:[{offset:0,color:colorArr[0]},{offset:.6,color:colorArr[0]},{offset:1,color:colorArr[1]}]};option={series:[{type:"gauge",startAngle:225,endAngle:-45,min:0,max:100,splitNumber:5,radius:"70%",axisLine:{show:!0,lineStyle:{color:"#999"}},detail:{show:!0,fontFamily:"PingFang",fontWeight:"500",color:"#4B525E",fontSize:12,offsetCenter:[0,"70%"],formatter:function(e){return e}},axisTick:{show:!0,lineStyle:{color:colorArr[0],width:1}},splitLine:{show:!0,length:20,lineStyle:{color:colorArr[0],width:1}},axisLabel:{color:"#4B525E",fontSize:12,distance:20},pointer:{show:!0,width:8,length:"70%"},itemStyle:{color:colorArr[0]},markPoint:{animation:!1,silent:!0,data:[{x:"50%",y:"50%",symbol:"circle",symbolSize:40,itemStyle:{color:colorArr[0]}}]},data:[{value}]},{type:"gauge",radius:"75%",startAngle:225,endAngle:-45,min:0,max:100,title:{show:!1},detail:{show:!0,offsetCenter:[0,"85%"],textStyle:{fontSize:12,color:"#4B525E"},formatter:function(){return title}},axisLine:{show:!0,lineStyle:{width:18,color:[[value/100,colorJB],[1,"#E0F0FF"]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1}}]};