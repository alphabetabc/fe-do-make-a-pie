function timeParse(e,i){if(e===""||e===void 0||e===null)return"";var a=new Date(e);a=a.getFullYear()>0?a:new Date(Date.parse(e.replace(/-/g,"/")));var s=function(x){return(x<10?"0":"")+x};return i.replace(/yyyy|MM|dd|HH|mm|ss/g,function(x){switch(x){case"yyyy":return s(a.getFullYear());case"MM":return s(a.getMonth()+1);case"mm":return s(a.getMinutes());case"dd":return s(a.getDate());case"HH":return s(a.getHours());case"ss":return s(a.getSeconds())}})}let markData=[{name:"早餐",xAxis:156997932e4},{name:"午餐",xAxis:156999012e4},{name:"晚餐",xAxis:15700163e5}];option={tooltip:{trigger:"item",axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1},label:{backgroundColor:"rgba(50, 50, 50, 0.8)"}},formatter:function(e){let i=e.value;return e.seriesIndex===0?e.marker+"血糖值："+i[1]+"<br/>时间："+timeParse(i[0],"MM-dd HH:mm:ss"):e.seriesIndex===1?e.marker+"剂量："+i[1]+"<br/>时间："+timeParse(i[0],"MM-dd HH:mm:ss"):e.marker+"饮食记录："+i[1]+"<br/>时间："+timeParse(i[0],"MM-dd HH:mm:ss")}},dataZoom:[{startValue:0,xAxisIndex:[0,1],minValueSpan:3600*24*1e3,maxValueSpan:3600*24*1e3,top:"51%"}],grid:[{left:"8%",right:50,height:"35%"},{left:"8%",right:50,top:"58%",height:"35%"}],xAxis:[{type:"time",boundaryGap:!0,interval:3600*4*1e3,min:15699456e5,max:1570536e6,splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{color:"#333"}},{gridIndex:1,type:"time",boundaryGap:!0,interval:3600*4*1e3,min:15699456e5,max:1570536e6,axisLine:{onZero:!0},splitLine:{show:!1},axisTick:{show:!1},position:"bottom",axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{show:!1,color:"#333"}}],yAxis:[{name:"血糖（mmol/L）",nameGap:40,nameTextStyle:{color:"#333"},axisTick:{show:!1},axisLabel:{show:!0,color:"#333",interval:"auto"},axisLine:{lineStyle:{color:"#ccc"}},splitLine:{lineStyle:{color:"#dedede"}}},{name:"",gridIndex:1,max:20,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},{name:"胰岛素（IU）",nameGap:40,nameTextStyle:{color:"#333"},axisTick:{show:!1},axisLabel:{show:!0,color:"#333",interval:"auto"},axisLine:{lineStyle:{color:"#ccc"}},splitLine:{show:!1}}],series:[{type:"line",yAxisIndex:0,color:["#ED5358"],smooth:!0,symbol:"roundRect",symbolSize:8,data:[[15699456e5,20],[156996e7,31],[15699744e5,21],[15699888e5,3],[15700032e5,1],[15700176e5,5],[1570032e6,6],[15700464e5,2],[15700608e5,2],[15700752e5,8],[15700896e5,1],[1570104e6,6],[15701184e5,8],[15701328e5,5],[15701472e5,12],[15701616e5,12],[1570176e6,0],[15701904e5,9],[15702048e5,10],[15702192e5,5],[15702336e5,0],[1570248e6,9],[15702624e5,22],[15702768e5,1],[15702912e5,3],[15703056e5,9],[157032e7,7],[15703344e5,8],[15703488e5,14],[15703632e5,17],[15703776e5,28],[1570392e6,11],[15704064e5,21],[15704208e5,26],[15704352e5,12],[15704496e5,28],[1570464e6,15],[15704784e5,28],[15704928e5,18],[15705072e5,39],[15705216e5,1],[1570536e6,30]]},{type:"scatter",yAxisIndex:2,color:["#0073cf"],symbol:"image://data:image/png;base64,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",symbolSize:25,data:[[15699456e5,1],[156996e7,5],[15699744e5,4],[15699888e5,8],[15700032e5,8],[15700176e5,7],[1570032e6,2],[15700464e5,8],[15700608e5,6],[15700752e5,4],[15700896e5,1],[1570104e6,4],[15701184e5,6],[15701328e5,1],[15701472e5,7],[15701616e5,3],[1570176e6,8],[15701904e5,0],[15702048e5,5],[15702192e5,7],[15702336e5,7],[1570248e6,4],[15702624e5,0],[15702768e5,3],[15702912e5,8],[15703056e5,7],[157032e7,7],[15703344e5,6],[15703488e5,5],[15703632e5,5],[15703776e5,3],[1570392e6,7],[15704064e5,7],[15704208e5,8],[15704352e5,7],[15704496e5,4],[1570464e6,2],[15704784e5,4],[15704928e5,7],[15705072e5,7],[15705216e5,4],[1570536e6,8]],markLine:{silent:!0,symbol:"diamond",symbolSize:10,label:{color:"#333",formatter:function(e){return`${markData[e.dataIndex].name}
${timeParse(e.value,"HH:mm")}
`}},lineStyle:{normal:{color:"#999",type:"solid"}},data:markData}},{name:"表格饮食记录",type:"scatter",xAxisIndex:1,yAxisIndex:1,animation:!1,symbol:"rect",symbolSize:[150,240],itemStyle:{color:"transparent"},label:{show:!0,position:"insideTop",formatter:function(e){return["{x|x} {a|牛奶牛奶200ml 23:00}","{x|x} {a|油条200ml 12:00}","{x|x} {a|豆浆100ml 13:00}","{x|x} {a|炒粉200k 23:00}","{x|x} {a|炒粉200k 23:00}","{x|x} {a|炒粉200k 23:00}","{x|x} {a|炒粉200k 23:00}","{x|x} {a|豆浆100ml 13:00}"].join(`
`)},rich:{a:{color:"#333",lineHeight:29,verticalAlign:"top"},x:{lineHeight:29,verticalAlign:"top",width:10,height:10,backgroundColor:"#4D9AFE",borderRadius:5}}},markLine:{silent:!0,symbol:"diamond",symbolSize:5,label:{color:"#333",formatter:function(e){return""}},lineStyle:{normal:{color:"#ccc",type:"solid"}},data:[{xAxis:15699456e5},{xAxis:156996e7},{xAxis:15699744e5},{xAxis:15699888e5},{xAxis:15700032e5},{xAxis:15700176e5},{xAxis:1570032e6},{xAxis:15700464e5},{xAxis:15700608e5},{xAxis:15700752e5},{xAxis:15700896e5},{xAxis:1570104e6},{xAxis:15701184e5},{xAxis:15701328e5},{xAxis:15701472e5},{xAxis:15701616e5},{xAxis:1570176e6},{xAxis:15701904e5},{xAxis:15702048e5},{xAxis:15702192e5},{xAxis:15702336e5},{xAxis:1570248e6},{xAxis:15702624e5},{xAxis:15702768e5},{xAxis:15702912e5},{xAxis:15703056e5},{xAxis:157032e7},{xAxis:15703344e5},{xAxis:15703488e5},{xAxis:15703632e5},{xAxis:15703776e5},{xAxis:1570392e6},{xAxis:15704064e5},{xAxis:15704208e5},{xAxis:15704352e5},{xAxis:15704496e5},{xAxis:1570464e6},{xAxis:15704784e5},{xAxis:15704928e5},{xAxis:15705072e5},{xAxis:15705216e5},{xAxis:1570536e6}]},data:[[15699528e5,10],[15699672e5,10],[15699816e5,10],[1569996e6,10],[15700104e5,10],[15700248e5,10],[15700392e5,10],[15700536e5,10],[1570068e6,10],[15700824e5,10],[15700968e5,10],[15701112e5,10],[15701256e5,10],[157014e7,10],[15701544e5,10],[15701688e5,10],[15701832e5,10],[15701976e5,10],[1570212e6,10],[15702264e5,10],[15702408e5,10],[15702552e5,10],[15702696e5,10],[1570284e6,10],[15702984e5,10],[15703128e5,10],[15703272e5,10],[15703416e5,10],[1570356e6,10],[15703704e5,10],[15703848e5,10],[15703992e5,10],[15704136e5,10],[1570428e6,10],[15704424e5,10],[15704568e5,10],[15704712e5,10],[15704856e5,10],[15705e8,10],[15705144e5,10],[15705288e5,10],[15705432e5,10]]}]};