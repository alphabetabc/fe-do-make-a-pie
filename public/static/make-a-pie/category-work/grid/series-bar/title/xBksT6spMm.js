option={title:{text:"top5排行榜",textStyle:{color:"#fff"},subtext:"top5排行榜",subtextStyle:{color:"#fff"}},backgroundColor:"rgba(128, 128, 128, 0.5)",grid:[{x:"10%",y:"10%",width:"300",height:"200"}],xAxis:{type:"value",boundaryGap:[0,.01],splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{type:"category",data:["张三","李四","王五","赵六","王雅俊"],splitLine:{show:!1},axisLabel:{show:!0,color:"#fff"},axisTick:{show:!1},axisLine:{show:!1}},series:[{type:"bar",itemStyle:{normal:{color:function(t){var e=["#B1F5F6","#85FBFD","#4EFBFF","#00CCFF","#7FFE00"];return e[t.dataIndex]},label:{show:!0,position:"right",color:"#fff",formatter:"{c}"}}},barWidth:10,data:[10,20,30,40,90]}]};