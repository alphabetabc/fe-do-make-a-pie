var data=[{value:200,name:"业务车辆"},{value:110,name:"施工车辆"},{value:150,name:"参观车辆"},{value:180,name:"其他车辆"}];let datum=data.map(e=>e.value),color=["#27D099","#B458F5","#FCD54B","#5684F4"],data1=data[0].value+data[1].value+data[2].value+data[3].value,baseData=[];for(var i=0;i<data.length;i++)baseData.push({value:data[i].value,name:data[i].name,itemStyle:{normal:{borderWidth:30,shadowBlur:20,borderColor:color[i],borderRadius:20}}});option={title:{text:"{a|外来车辆分类统计} {b|2021-12-23}",textStyle:{rich:{a:{fontSize:16,fontWeight:600},b:{fontSize:12,color:"gray"}}},top:"4%",left:"4%"},color,tooltip:{show:!0,trigger:"item",formatter:"{b} <br/>占比：{d}%"},legend:{orient:"vertical",right:"20%",top:"36%",itemGap:50,itemWidth:14,formatter:function(e){for(var t=0;arguments.length;t++)return e=="施工车辆"?t=1:e=="参观车辆"?t=2:e=="其他车辆"&&(t=3),`{a|${e}}  {b${t}|${datum[t]}}  {c|辆}`},textStyle:{rich:function(){return{b0:{fontSize:16,fontWeight:"bold",color:color[0]},b1:{fontSize:16,fontWeight:"bold",color:color[1]},b2:{fontSize:16,fontWeight:"bold",color:color[2]},b3:{fontSize:16,fontWeight:"bold",color:color[3]}}}()}},grid:{top:"bottom",left:10,bottom:10,width:"80%",height:"80%"},series:[{zlevel:1,name:"外来车辆分类统计",type:"pie",selectedMode:"single",radius:[120,160],center:["35%","50%"],startAngle:60,label:{normal:{position:"inside",show:!0,color:"#fff",formatter:function(e){return e.percent.toFixed()+"%"},rich:{b:{fontSize:16,lineHeight:30,color:"#fff"}}}},itemStyle:{normal:{shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:10}},data:baseData},{name:"",type:"pie",selectedMode:"single",radius:[120,160],center:["35%","50%"],startAngle:60,data:[{value:data1,name:"",label:{normal:{show:!0,formatter:`{c|{c}辆} 
 {a|本日外来
车辆总数}`,rich:{c:{color:"#000",fontSize:20,fontWeight:"bold",lineHeight:2,align:"center",padding:[30,0,30,0]},a:{align:"center",color:"rgb(98,137,169)",fontSize:12,padding:[16,0,-10,-10]}},position:"center"}}}]}]};