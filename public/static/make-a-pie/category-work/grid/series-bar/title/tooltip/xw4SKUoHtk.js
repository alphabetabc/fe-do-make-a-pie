option={backgroundColor:"#2a548f",title:{text:"班级考勤质量排行",x:"10",y:"10",padding:0,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#00CAE6"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"1%",right:"10%",top:"10%",bottom:"2%",containLabel:!0},xAxis:{show:!1,type:"value",name:"万人",nameTextStyle:{color:"#fff",fontSize:10,verticalAlign:"bottom"},nameLocation:"end",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,textStyle:{color:"#fff"},formatter:function(e){return parseInt(e)}},splitLine:{show:!1}},yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff",fontSize:12}},series:[{name:"班级应到人数",type:"bar",barGap:"-65%",label:{normal:{show:!0,position:"right",color:"#fff",fontSize:14,formatter:function(e){return e.data[0]}}},barWidth:"32%",itemStyle:{normal:{borderColor:"#00CAE6",borderWidth:2,barBorderRadius:15,color:"rgba(102, 102, 102,0)"}},z:1,data:[[200,"班级1"],[210,"班级2"],[220,"班级3"],[230,"班级4"],[235,"班级5"],[240,"班级6"],[260,"班级7"]]},{name:"班级实到人数",type:"bar",barGap:"-85%",barWidth:"21%",itemStyle:{normal:{barBorderRadius:16,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"RGB(32, 132, 183)"},{offset:1,color:"#00CAE6"}])}},max:1,label:{normal:{show:!1}},labelLine:{show:!0},z:2,data:[[100,"班级1"],[110,"班级2"],[120,"班级3"],[130,"班级4"],[135,"班级5"],[140,"班级6"],[160,"班级7"]]}]};
