var echartData=[{name:"电解锌",data:[36]},{name:"硅锰合金",data:[19]},{name:"磷酸氢钙",data:[11]},{name:"硫酸",data:[9]}],option={backgroundColor:"#fff",grid:{containLabel:!0,left:20,right:-20,top:0,bottom:40},tooltip:{show:!1},legend:{show:!1},xAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},yAxis:{data:["sss"],axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},color:["#5292FD","#3DBB33 ","#FCAD2C","#EF6B6E","#7F6AAD","#585247"],series:[]};echartData.forEach((a,e)=>{if(option.series.push({type:"bar",name:a.name,stack:"1",label:{normal:{show:!0,position:[5,5],formatter:`{value|${a.data}}

{name|${a.name}}`,align:"left",textStyle:{color:"#fff",rich:{name:{fontSize:"12",fontWeight:500,color:"gray"},value:{fontSize:"18",fontWeight:500,color:"#fff"}}}}},barWidth:30,data:a.data,itemStyle:{normal:{barBorderRadius:[0]}}}),e===0)option.series[e].itemStyle.normal.barBorderRadius=[5,0,0,5];else if(e===echartData.length-1)option.series[e].itemStyle.normal.barBorderRadius=[0,5,5,0];else return});