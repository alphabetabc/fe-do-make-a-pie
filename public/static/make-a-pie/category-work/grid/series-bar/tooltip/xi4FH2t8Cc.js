const dataY=["4月","5月","6月","7月","8月","9月"],data=[7536,13236,18236,5754,15526,14526];let constData=[];const max=Math.max(...data);for(let a=0;a<data.length;a++)constData.push(max);option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:"{b}:  {c}次"},grid:{containLabel:!0,left:0,right:15,bottom:0},xAxis:{axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",axisLabel:{fontSize:32,fontWeight:400,color:"#ccc",margin:22,formatter:(a,t)=>`${a} {rank|${data[t]}} 次`,rich:{rank:{color:"#0FBADE",fontSize:32}}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:dataY},series:[{type:"bar",barWidth:"50%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(64,193,230,0.04)"},{offset:1,color:"#74E2F4"}])}},label:{show:!1,position:"insideRight"},data},{type:"bar",barWidth:"50%",barGap:"-100%",itemStyle:{opacity:.1,color:"#40C1E6"},data:constData}]};