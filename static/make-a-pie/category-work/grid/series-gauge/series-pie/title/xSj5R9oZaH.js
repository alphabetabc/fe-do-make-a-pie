var percent=63,text="a";option={backgroundColor:"#000",title:{show:!0,text,x:"50%",y:"60%",textAlign:"center",textStyle:{color:" rgb(147,169,205) ",fontSize:40}},xAxis:{show:!1,min:function(e){return e.min-7},max:function(e){return e.max+7},splitLine:{lineStyle:{show:!0,type:"dashed"}},axisLabel:{interval:0,rotate:40,textStyle:{fontSize:12,color:"#000"}},data:["1","2","3","4","5"]},yAxis:{show:!1,name:"",max:200,splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,startAngle:210,color:[{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(73, 239, 105,0.5)"},{offset:1,color:"rgba(73, 239, 105,0)"}]},"transparent"],hoverAnimation:!1,legendHoverLink:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:66,name:"1",itemStyle:{borderWidth:3,borderColor:"rgba(123,123,123,.5)"}},{value:34,name:"2",itemStyle:{borderWidth:0,borderColor:"transparent"}}]},{name:" ",type:"pie",radius:["45%","47%"],avoidLabelOverlap:!1,startAngle:0,hoverAnimation:!1,legendHoverLink:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},itemStyle:{normal:{color:{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(50, 139, 221,0.9)"},{offset:1,color:"rgba(50, 139, 221,0.2)"}],global:!1}}},labelLine:{normal:{show:!1}},data:[{value:50,name:"1",itemStyle:{color:[{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(50, 139, 221,0.9)"},{offset:1,color:"rgba(50, 139, 221,.2)"}]},"transparent"]}},{value:50,name:"2"}]},{name:"",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,startAngle:-30,color:["rgba(34,34,34,.9)","transparent","transparent"],hoverAnimation:!1,legendHoverLink:!1,clockwise:!1,itemStyle:{normal:{borderColor:"transparent",borderWidth:"20"},emphasis:{borderColor:"transparent",borderWidth:"20"}},z:10,label:{normal:{show:!1,position:"center"}},labelLine:{normal:{show:!1}},data:[{value:(100-percent)*240/360,label:{normal:{formatter:percent+"%",position:"center",show:!0,textStyle:{fontSize:"90",fontWeight:"normal",color:"rgba(0,230,179,1)"}}},name:""},{value:1,name:""},{value:100-(100-percent)*270/360,name:""}]},{name:"",type:"pie",radius:["50%","70%"],startAngle:210,endAngle:-30,labelLine:{show:!1},z:15,silent:!0,label:{show:!0,rich:{a:{color:"#fff",fontSize:32,padding:[0,-80,-100,0]},b:{color:"#fff",fontSize:32,padding:[0,0,-100,-80]}},formatter:function(e){if(e.dataIndex===0)return"{a|0}";if(e.dataIndex===2)return"{b|100}"}},data:[{value:3,itemStyle:{color:"rgba(123,123,123,1)"}},{value:482,itemStyle:{color:"transparent"}},{value:3,itemStyle:{color:"rgba(123,123,123,1)"}},{value:245,itemStyle:{color:"transparent"}}]},{name:" ",type:"pie",radius:["25%","35%"],avoidLabelOverlap:!1,startAngle:150,hoverAnimation:!1,legendHoverLink:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!1,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:34,name:"1",itemStyle:{color:[{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(50, 139, 221,0.4)"},{offset:1,color:"rgba(50, 139, 221,.2)"}]},"transparent"]}},{value:66,name:"2"}]},{name:"指针",type:"gauge",pointer:{show:!1},radius:"54%",startAngle:90,endAngle:90,z:4,axisTick:{show:!1},splitLine:{length:16,lineStyle:{width:3,color:"rgba(255,255,255, 0.9)",shadowColor:"rgba(255,255,255,.2)",shadowBlur:5}},axisLabel:{color:"rgba(255,255,255,0)",fontSize:12},axisLine:{lineStyle:{opacity:0}},detail:{show:!1}},{name:"阴影",type:"pie",radius:["10%","50%"],avoidLabelOverlap:!1,startAngle:-22,hoverAnimation:!1,legendHoverLink:!1,clockwise:!1,itemStyle:{normal:{borderColor:"transparent",borderWidth:"20"},emphasis:{borderColor:"transparent",borderWidth:"20"}},z:10,label:{normal:{show:!1,position:"center"}},labelLine:{normal:{show:!1}},data:[{value:(100-percent)*240/360,label:{normal:{formatter:percent+"%",position:"center",show:!0,textStyle:{fontSize:"90",fontWeight:"normal",color:"transparent"}}},itemStyle:{normal:{color:"rgba(255,255,255,0)"}},name:"transparent"},{value:10,name:""},{value:100-(100-percent)*270/360,name:""}]}]};
