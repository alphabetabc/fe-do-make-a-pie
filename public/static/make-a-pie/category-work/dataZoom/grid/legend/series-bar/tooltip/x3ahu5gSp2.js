function contains(e,o){for(var t=e.length;t-=1;)if(e[t]==o)return t;return!1}var attackSourcesData=[70,34,60,70,34,70,34,34],attackSourcesName=["绕过攻击","网络爬虫","其他有害程序事件","远程代码执行","信息泄露","HTTP请求攻击","其他注入攻击","后门攻击"],attackSourcesColor=["#f36c6c","#e6cf4e","#20d180","#0093ff","#1089E7","#F57474","#56D0E3","#1089E7","#F57474","#1089E7","#F57474","#F57474"];function attackSourcesDataFmt(e){var o=[];return e.forEach(function(t,r){itemStyle={color:r>3?attackSourcesColor[3]:attackSourcesColor[r]},o.push({value:t,itemStyle})}),o}option={tooltip:{show:!0,textStyle:{fontSize:16}},legend:{show:!1},grid:{left:140},dataZoom:[{type:"slider",yAxisIndex:0,zoomLock:!0,width:10,handleSize:0,showDetail:!1,start:0,end:50,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},borderColor:"#90979c"},{type:"inside",id:"insideY",yAxisIndex:0,start:0,end:50,zoomOnMouseWheel:!1,moveOnMouseMove:!0,moveOnMouseWheel:!0}],xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{label:{show:!0,margin:30}},data:attackSourcesName,axisLabel:{margin:140,fontSize:14,align:"left",color:"#333",rich:{nt1:{color:"#fff",backgroundColor:attackSourcesColor[0],width:25,height:25,align:"center",borderRadius:100},nt2:{color:"#fff",backgroundColor:attackSourcesColor[1],width:25,height:25,align:"center",borderRadius:100},nt3:{color:"#fff",backgroundColor:attackSourcesColor[2],width:25,height:25,align:"center",borderRadius:100},nt:{color:"#fff",backgroundColor:attackSourcesColor[3],width:25,height:25,align:"center",borderRadius:100},title1:{backgroundColor:attackSourcesColor[0],color:"#fff",width:90,align:"left",borderRadius:5,padding:5},title2:{backgroundColor:attackSourcesColor[1],color:"#fff",width:90,align:"left",borderRadius:5,padding:5},title3:{backgroundColor:attackSourcesColor[2],color:"#fff",width:90,align:"left",borderRadius:5,padding:5},title:{backgroundColor:attackSourcesColor[3],color:"#fff",width:90,align:"left",borderRadius:5,padding:5}},formatter:function(e,o){return o=contains(attackSourcesName,e)+1,o-1<3?["{nt"+o+"|"+o+"}  {title"+o+"|"+e+"}"].join(`
`):["{nt|"+o+"}  {title|"+e+"}"].join(`
`)}}},series:[{z:2,type:"bar",barWidth:"25px",animationDuration:1500,data:attackSourcesDataFmt(attackSourcesData),itemStyle:{normal:{color:function(e){return attackSourcesColor[e.dataIndex>3?3:e.dataIndex]},barBorderRadius:5}},label:{show:!0,position:"right",color:"#333333",fontSize:14,offset:[10,0]}}]};