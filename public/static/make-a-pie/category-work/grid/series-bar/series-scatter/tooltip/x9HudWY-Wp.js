var totalCost=[100,100,100,100,100],visits=[82.32,73.56,22.9,48.34,56],grade=["分流发展微信分流发展微信分流发展微信分流发展微信量","分流发展微信分流发展微信分流发展微信分流发展微信量","分流发展微信分流发展微信分流发展微信分流发展微信量","分流发展微信分流发展微信分流发展微信分流发展微信量","分流发展微信分流发展微信分流发展微信分流发展微信量"],data={grade,totalCost,visits},maxminmyVal=[20,80,60];option={backgroundColor:"#08245E",grid:{top:0,left:20,right:10,bottom:0,containLabel:!0},tooltip:{show:!0,formatter:function(t,r,a){return t.name=="N"?"未查询到数据":t.name+":"+t.value}},xAxis:{show:!1},yAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:100,textStyle:{align:"right",fontSize:14,color:"#fff"},formatter:function(t){for(var r=t.split(""),a="",o=0,e;e=r[o++];)a+=e,o%7||(a+=`
`);return a}},data:data.grade},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,textStyle:{fontSize:14,color:"#54AFEE"}},splitArea:{show:!1},splitLine:{show:!1},data:data.visits}],series:[{name:"100%",type:"bar",yAxisIndex:1,itemStyle:{normal:{show:!0,color:"#284168",barBorderRadius:50,borderWidth:0,borderColor:"#333"}},z:1,barGap:"-100%",barWidth:"20",data:data.totalCost},{type:"bar",nmae:"不良率",itemStyle:{normal:{show:!0,color:function(t){var r=[["#fc8cbd","#e9458c"],["#f9cc87","#f9a626"],["#b6f57c","#87d142"],["#75ebd3","#05ca90"],["#0fa8f8","#75d2f9"]];return new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:r[t.dataIndex][0]},{offset:1,color:r[t.dataIndex][1]}])},barBorderRadius:50,borderWidth:0,borderColor:"#333",opacity:.8}},barCategoryGap:"30%",data:data.visits},{type:"scatter",barWidth:40,z:10,itemStyle:{normal:{show:!0,color:"rgba(0,0,0, 0)",barBorderRadius:50,borderWidth:0,borderColor:"#333",opacity:1}},label:{normal:{show:!0,position:"insideRight",formatter:function(t){return maxminmyVal[0]},textStyle:{color:"#fff",fontSize:"10"}}},barWidth:"1",data:[5,5,5,5,5]},{type:"scatter",barWidth:40,z:10,itemStyle:{normal:{show:!0,color:"rgba(0,0,0, 0)",barBorderRadius:50,borderWidth:0,borderColor:"#333",opacity:1}},label:{normal:{show:!0,position:"inside",formatter:function(t){return maxminmyVal[1]},textStyle:{color:"#fff",fontSize:"10"}}},barWidth:"1",data:[50,50,50,50,50]},{type:"scatter",barWidth:40,z:10,itemStyle:{normal:{show:!0,color:"rgba(0,0,0, 0)",barBorderRadius:50,borderWidth:0,borderColor:"#333",opacity:1}},label:{normal:{show:!0,position:"insideLeft",formatter:function(t){return maxminmyVal[2]},textStyle:{color:"#fff",fontSize:"10"}}},barWidth:"1",data:[90,90,90,90,90]}]};
