var equipment=["男","女","未知"],project=["男","女","未知"],colorList=["#F8BA4F","#2DB4FF","#2F4056","#2DB4FF","#F8BA4F","#2F4056"];option={backgroundColor:"#fff",tooltip:{formatter:function(e){return e.data.type==null?e.data.name+":"+e.value+"%":e.data.type+":"+e.value+"%"}},series:[{name:"整体分类",type:"pie",radius:[0,"30%"],label:{position:"inner"},itemStyle:{normal:{borderColor:"#fff",borderWidth:2,color:function(e){return colorList[e.dataIndex]}}},selectedMode:"single",data:[{value:70,name:"美团"},{value:30,name:"饿了么"}]},{name:"招标方式",type:"pie",radius:["40%","55%"],itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},label:{normal:{formatter:function(e){return e.value!=0?e.data.type+":"+e.value+"%":""},show:!0}},data:[{value:35,name:"美团",type:equipment[0]},{value:25,name:"美团",type:equipment[1]},{value:10,name:"美团",type:equipment[2]},{value:20,name:"饿了么",type:project[0]},{value:5,name:"饿了么",type:project[1]},{value:5,name:"饿了么",type:project[2]}]}]};