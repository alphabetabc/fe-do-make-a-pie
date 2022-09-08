data={info:{title:"单位燃料及动力成本对比及趋势分析",subtitle:"组织分布（N-1级组织分布情况）",yAxis:{yAxisCount:2,yAxisName:["单位生产成本 （单位：元）","单位燃料及动力成本变化率"],isPercent:[!1,!0]},series:{seriesCount:4,stack:["0","1","",""],type:["bar","bar","line","line"],yAxisIndex:[0,0,1,1],color:["#7494d4","#bcdcfc","#7494d4","#bcdcfc"],isPercent:[!1,!1,!0,!0]}},results:[["工业园","单位动力成本","单位燃料成本","单位动力成本","单位燃料成本"],["5月",280,269,.9,.85],["6月",275,269,.92,.9],["7月",270,273,1.1,.97],["8月",265,265,.98,.95],["9月",260,265,.9,.88]]};const{info:{title,subtitle,yAxis:{yAxisCount,yAxisName,isPercent},series:{seriesCount,stack,type,yAxisIndex,color}},results}=data;option={title:{text:title,subtext:subtitle,textStyle:{color:"black",fontWeight:"bolder",fontSize:20},subtextStyle:{color:"black",fontWeight:"bolder",fontSize:15},left:"3%",top:"3%"},xAxis:{type:"category"},dataset:{source:results},grid:{left:"10%",right:"10%",top:"20%",bottom:"10%"},legend:{right:"10%",top:"10%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:e=>{console.log(e);let i="";return i+=`${e[0].axisValueLabel} <br>`,e.forEach((o,n)=>{let t=o.value[o.encode.y[0]];const{marker:l,seriesName:r,seriesType:s}=o;s==="line"&&(t=`${(t*100).toFixed(2)}%`),s==="bar"&&(t=t.toLocaleString("zh",{maximumFractionDigits:2})),i+=`${l} ${r}: ${t} <br>`}),i}}};let series=[];for(let e=0;e<seriesCount;e+=1)series.push({stack:stack[e],type:type[e],yAxisIndex:yAxisIndex[e],itemStyle:{color:color[e]}});let yAxis=[];for(let e=0;e<yAxisCount;e+=1)yAxis.push({type:"value",name:yAxisName[e],nameRotate:90,nameLocation:"center",nameGap:40,nameTextStyle:{color:"black",fontWeight:"bolder",fontSize:15},scale:!0,splitLine:{lineStyle:{color:"white"}}});option.series=series,option.yAxis=yAxis;
