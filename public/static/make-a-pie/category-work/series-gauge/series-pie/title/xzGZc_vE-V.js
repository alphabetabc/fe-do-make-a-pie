var aData=[1e3,648],value=aData[1],toatl=aData[0],value1=value/toatl*100,value2=(value/toatl+.05)*100,endAngle="",splitNumber="";value===toatl?(endAngle=-269.9,splitNumber=12):(endAngle=-270+359.9*((toatl-value)/toatl),splitNumber=Math.floor((90-endAngle)/30)),option={backgroundColor:"#000",title:[{text:"{a|"+toatl+"}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:64,color:"#FFFFFF"}}}}],series:[{type:"pie",radius:["88%","65%"],silent:!0,clockwise:!0,startAngle:90,z:0,zlevel:0,label:{normal:{position:"center"}},data:[{value:value1,name:"",itemStyle:{normal:{color:{colorStops:[{offset:0,color:"#514CB1"},{offset:1,color:"#895CC6"}]}}}},{value:100-value1,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"transparent"}}}]},{type:"pie",radius:["100%","65%"],silent:!0,clockwise:!0,startAngle:90,z:-1,zlevel:-1,label:{normal:{position:"center"}},data:[{value:value2,name:"",itemStyle:{normal:{color:"rgba(137,92,198,0.2)"}}},{value:100-value2,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"transparent"}}}]},{name:"",type:"gauge",radius:"100%",center:["50%","50%"],startAngle:"90",endAngle,splitNumber,hoverAnimation:!0,axisTick:{show:!1},splitLine:{length:"35%",lineStyle:{width:4,color:"#000"}},axisLabel:{show:!1},pointer:{show:!1},axisLine:{lineStyle:{opacity:0}},detail:{show:!1},data:[{value:0,name:""}]}]};