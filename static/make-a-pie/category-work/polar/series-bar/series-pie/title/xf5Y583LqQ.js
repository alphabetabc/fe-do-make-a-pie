var chartData={value:92,total:100};let max=chartData.total,value=chartData.value;option={backgroundColor:"#313131",title:{text:(value||"-")+"%",x:"center",y:"center",textStyle:{color:"#fff",fontSize:"20",fontWeight:"normal"}},angleAxis:{axisLine:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisTick:{show:!1},min:0,max:100,startAngle:90},radiusAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0},data:[]},polar:{radius:"100%",center:["50%","50%"]},series:[{type:"bar",data:[value],z:1,coordinateSystem:"polar",barMaxWidth:15,name:"出租率",roundCap:1,color:"rgba(97,93,228,1)"},{type:"bar",data:[max],z:0,silent:!0,coordinateSystem:"polar",barMaxWidth:15,roundCap:!0,color:"rgba(40,68,115,1)",barGap:"-100%"},{type:"pie",radius:"98%",center:["50%","50%"],hoverAnimation:!1,startAngle:180,endAngle:0,silent:1,z:10,data:[{name:"",value:value>75?(25-(100-value))/max:(25+value)/100,label:{show:!1},labelLine:{show:!1},itemStyle:{color:"transparent"}},{value:0,label:{position:"inside",backgroundColor:"rgba(170, 87, 254, 1)",borderRadius:8,padding:8,borderWidth:20,borderColor:"rgba(155, 133, 241, 0.24)"}},{value:value>75?1-(25-(100-value))/max:1-(25+value)/100,label:{show:!1},labelLine:{show:!1},itemStyle:{color:"transparent"}}]}]};
