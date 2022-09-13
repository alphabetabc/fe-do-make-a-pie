option={color:["#00c6c4","#ff9c00","#1b85FF","#ff1b1b","#7a32ff"],backgroundColor:"#313033",title:{text:""},tooltip:{backgroundColor:"rgba(73, 84, 123, .9)",borderColor:"rgba(73, 84, 123, .9)",padding:10,textStyle:{color:"#fff"},formatter:function(e,i,o){if(!Array.isArray(e)){const{data:t,name:a,marker:l,percent:n,dimensionNames:s}=e;let c=e.encode.value[0];return a+"<br />"+l+" "+s[c]+":"+t[c]+`(${n}%)`}let r="";for(let t=0;t<e.length;t++){const{data:a,marker:l,seriesName:n}=e[t];let s=a[e[t].encode.y[0]];r+=l+" "+n+":"+s+"<br>"}return r=e[0].axisValue+"<br>"+r,r}},legend:{x:"center",bottom:"25",right:"200",itemGap:20,itemWidth:8,itemHeight:8,icon:"circle",textStyle:{color:"#fff"},tooltip:{show:!0}},grid:[{left:"40",top:"50",bottom:"10",height:210,width:"90%",containLabel:!0,tooltip:{trigger:"axis"}},{top:"300",bottom:"10",height:210,width:"90%",containLabel:!0,tooltip:{trigger:"item",formatter:"hello"}}],xAxis:{type:"category",boundaryGap:!1,axisLabel:{textStyle:{color:"#ABB0CC"}},axisLine:{show:!0,lineStyle:{color:"rgba(230, 230, 230, 0.18)"}},axisTick:{show:!1}},yAxis:{type:"value",axisLabel:{textStyle:{color:"#ABB0CC"},formatter:"{value}"},nameTextStyle:{color:"#93A6BB"},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(230, 230, 230, 0.18)"}},axisLine:{show:!1,lineStyle:{color:"#ABB0CC"}},axisTick:{show:!1}},dataset:{sourceHeader:!0,source:[["metrics","00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00"],["交调数据",56,123,34,68,130,45,67,190,31,80,211,234,78],["Link数据",156,223,134,38,30,34,68,130,45,67,190,256,300],["交通数据流",96,63,134,168,400,230,223,134,38,30,34,68,341],["气象",456,223,234,268,30,63,134,168,400,230,223,134,38]]},series:[{name:"交调数据",type:"line",smooth:!0,seriesLayoutBy:"row"},{name:"Link数据",type:"line",smooth:!0,seriesLayoutBy:"row"},{name:"交通数据流",type:"line",smooth:!0,seriesLayoutBy:"row"},{name:"气象",type:"line",smooth:!0,seriesLayoutBy:"row"},{type:"pie",id:"pie-chart",radius:["20%","40%"],center:["50%","65%"],label:{show:!0,formatter:`{b}
 {@00:00} ({d})`},labelLine:{show:!0},encode:{itemName:"metrics",value:"00:00"}}]},myChart.on("updateAxisPointer",function(e){var i=e.axesInfo[0];if(i){var o=i.value+1;myChart.setOption({series:{id:"pie-chart",encode:{value:o,tooltip:o},label:{formatter:"{b}: {@["+o+"]} ({d}%)"}}})}});