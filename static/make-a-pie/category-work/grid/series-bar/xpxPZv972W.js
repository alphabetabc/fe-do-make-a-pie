let colors=["#3D7EFF","#4FBBFA","#FEA92D","#37C737","#E3578B"],arr=[120,200,150,80,70],data=[];arr.map((a,e)=>{data.push({value:a,itemStyle:{color:colors[e]}})}),option={backgroundColor:"rgba(51,84,216,0.8)",xAxis:{type:"category",data:["订单总数","已派发","处理中","已处理","未完成"],axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{color:"#E2F2FF"}},yAxis:{type:"value",axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1}},series:[{data,type:"bar",barWidth:"30%",label:{show:!0,position:"top",color:"#fff",fontStyle:"bold",fontSize:16}}]};