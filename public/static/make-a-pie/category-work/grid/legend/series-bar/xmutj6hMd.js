var yData=["河南","福建","浙江","广东","江苏"],data=[211,264,310,376,391],color=["#6BF1BF","#C7F895","#E6D349","#F8A065","#FF6B5F"],seriesData=[];data.map((a,e)=>{seriesData.push({name:"",value:a,itemStyle:{normal:{color:color[e],barBorderRadius:12}}})}),option={backgroundColor:"#001a2b",legend:{show:!1},grid:{left:"8%",right:"12%",bottom:"8%",top:"3%",containLabel:!0},xAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},yAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#363e83"}},axisLabel:{inside:!1,textStyle:{color:"#00FFEC",fontWeight:"normal",fontSize:30}},data:yData},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:yData},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:yData}],series:[{name:"",type:"bar",stack:"1",yAxisIndex:0,data:seriesData,color:["#6BF1BF","#C7F895","#E6D349","#F8A065","#FF6B5F"],barWidth:20,z:3},{name:"",type:"bar",yAxisIndex:2,data:[400,400,400,400,400],barWidth:20,itemStyle:{color:"#001a2b",barBorderRadius:12},label:{normal:{show:!0,color:"#00FFEC",fontSize:30,padding:[0,0,0,20],position:"right",formatter:function(a){return data[a.dataIndex]}}},z:0}]};