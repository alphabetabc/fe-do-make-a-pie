function contains(e,t){for(var o=e.length;o-=1;)if(e[o]==t)return o;return!1}var attackSourcesData=[70,34,60,70,34,70,34,34],attackSourcesName=["绕过攻击","网络爬虫","其他有害程序事件","远程代码执行","信息泄露","HTTP请求攻击","其他注入攻击","后门攻击"],attackSourcesColor=["#f36c6c","#e6cf4e","#20d180","#0093ff","#1089E7","#F57474","#56D0E3","#1089E7","#F57474","#1089E7","#F57474","#F57474"];function attackSourcesDataFmt(e){var t=[];return e.forEach(function(o,a){itemStyle={color:a>3?attackSourcesColor[3]:attackSourcesColor[a]},t.push({value:o})}),console.log(t),t}option={tooltip:{show:!0,backgroundColor:"rgba(21,52,93,1)",textStyle:{fontSize:16}},legend:{show:!1},grid:{left:180},dataZoom:[{type:"slider",yAxisIndex:[0,1],zoomLock:!0,width:10,handleSize:0,showDetail:!1,start:0,end:50,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"100%",handleStyle:{color:"#d3dee5"},borderColor:"#90979c"},{type:"inside",id:"insideY",yAxisIndex:0,start:0,end:50,zoomOnMouseWheel:!1,moveOnMouseMove:!0,moveOnMouseWheel:!0}],xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:[{type:"category",inverse:!0,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisPointer:{label:{show:!0,margin:30}},data:attackSourcesName,axisLabel:{margin:140,fontSize:14,align:"left",color:"#333",rich:{nt1:{color:"#fff",backgroundColor:attackSourcesColor[0],width:20,height:20,align:"center",borderRadius:100},nt2:{color:"#fff",backgroundColor:attackSourcesColor[1],width:20,height:20,align:"center",borderRadius:100},nt3:{color:"#fff",backgroundColor:attackSourcesColor[2],width:20,height:20,align:"center",borderRadius:100},nt:{color:"#fff",backgroundColor:attackSourcesColor[3],width:20,height:20,align:"center",borderRadius:100},title1:{color:"#fff",width:90,align:"left",borderRadius:5,padding:5},title2:{color:"#fff",width:90,align:"left",borderRadius:5,padding:5},title3:{color:"#fff",width:90,align:"left",borderRadius:5,padding:5},title:{color:"#fff",width:90,align:"left",borderRadius:5,padding:5}},formatter:function(e,t){return t=contains(attackSourcesName,e)+1,t-1<3?["{nt"+t+"|"+t+"}  {title"+t+"|"+e+"}"].join(`
`):["{nt|"+t+"}  {title|"+e+"}"].join(`
`)}}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"12"},formatter:function(e){return console.log(e,"123"),e.toLocaleString()+"%"}},data:attackSourcesData}],series:[{z:3,type:"bar",barWidth:"10",animationDuration:1500,data:attackSourcesDataFmt(attackSourcesData),itemStyle:{normal:{color:function(e){return attackSourcesColor[e.dataIndex>3?3:e.dataIndex]},barBorderRadius:5}},label:{show:!1,position:"right",color:"#fff",fontSize:14,offset:[10,0]}},{name:"背景",type:"bar",barWidth:10,barGap:"-100%",z:1,animationDuration:1500,data:[100,100,100,100,100,100,100,100,100,1],itemStyle:{normal:{color:"#15345D",barBorderRadius:30}}}]};