const MAX=[17,17,17,17,17];var VALUE=[7,8,8,7,8];const text=[7,1,2,1,8];var colorList=["#A3B1CE","#F8B834","#00C2A8","#F8B834","#A3B1CE"];VALUE=VALUE.map(function(r,t){return{value:r,itemStyle:{color:colorList[t]}}}),option={xAxis:{type:"category",data:["沪A0731","沪A0732","沪A0733","沪A0734","沪A0735"],axisLine:{show:!0,lineStyle:{color:"#586473"}},offset:10,axisTick:{show:!1}},yAxis:{type:"value",splitLine:{lineStyle:{color:"#586473"}},axisTick:{show:!1}},series:[{type:"bar",barWidth:20,itemStyle:{color:"rgba(226, 248, 245,1)",borderRadius:8},data:MAX,silent:!0,z:1},{type:"custom",renderItem:function(t,e){var o=e.coord([e.value(0),e.value(1)]),s=e.size([1,text[t.dataIndex]]),i=8,a=e.style();return{type:"group",children:[{type:"rect",x:o[0],y:o[1],shape:{x:-10,width:20,height:s[1],r:i},style:a,textContent:{style:{text:text[t.dataIndex],fontSize:12}},textConfig:{position:"top"},silent:!0,z:10}]}},data:VALUE}]};