var data={antity:[{name:"B省站1",des:"B省站1",category:2},{name:"B省站2",des:"B省站2",category:2},{name:"A省站2",des:"A省站2",category:2},{name:"A省站1",des:"A省站1",category:2},{name:"部平台",des:"部平台",category:2},{name:"B省中心",des:"B省中心",category:2}],relation:[{source:"B省站1",target:"B省中心",label:{fontSize:12},name:"站省同步",des:"B省站1-->B省中心：站省同步"},{source:"B省站2",target:"B省中心",label:{fontSize:12},name:"站省同步",des:"B省站2-->B省中心：站省同步"},{source:"A省站2",target:"部平台",label:{fontSize:12},name:"站部同步",des:"A省站2-->部平台：站部同步"},{source:"A省站1",target:"部平台",label:{fontSize:12},name:"站部同步",des:"A省站1-->部平台：站部同步"},{source:"部平台",target:"B省中心",label:{fontSize:12},name:"省部同步",des:"部平台2-->B省中心：省部同步"}]},versionArr={m9003:"0",as9003:"0",bs9003:"0",m9002:"0",cp9002:"0",cs19002:"0",cs29002:"0"};function monitorRelease(){$.ajax({type:"post",url:"http://localhost:8080/cn-cpc-manage-business-api/actions/allotOrder/getReleaseVer",data:"test=1",async:!1,success:function(e){var t=e.data;t.m9003=="update"&&(data.antity[2].category=1,data.antity[3].category=1,data.antity[4].category=0),t.m9003=="done"&&(data.antity[4].category=2,t.as9003=="update"&&(data.antity[2].category=0),t.as9003=="done"&&(data.antity[2].category=2),t.bs9003=="update"&&(data.antity[3].category=0),t.bs9003=="done"&&(data.antity[3].category=2)),t.m9002=="update"&&(data.antity[0].category=1,data.antity[1].category=1,data.antity[5].category=1,data.antity[4].category=0),t.m9002=="done"&&(data.antity[4].category=2,t.cp9002=="update"&&(data.antity[5].category=0,data.antity[0].category=1,data.antity[1].category=1),t.cp9002=="done"&&(data.antity[5].category=2,t.cs19002=="update"&&(data.antity[0].category=0),t.cs19002=="done"&&(data.antity[0].category=2),t.cs29002=="update"&&(data.antity[1].category=0),t.cs29002=="done"&&(data.antity[1].category=2)))}})}window.setInterval(monitorRelease,4e3),option={color:["red","blue","green"],tooltip:{formatter(e){return e.data.des}},legend:{x:"left",icon:"circle",data:["发布中","等待发布","发布完成"]},series:[{type:"graph",layout:"circular",symbolSize:[150,60],symbol:"rect",roam:!0,focusNodeAdjacency:!0,categories:[{name:"发布中"},{name:"等待发布"},{name:"发布完成"}],edgeSymbol:["","arrow"],edgeLabel:{normal:{textStyle:{fontSize:50},show:!0,formatter(e){return e.data.name}}},force:{repulsion:2e3,edgeLength:120},lineStyle:{normal:{width:1,color:"#333",textStyle:{fontSize:50}}},label:{normal:{show:!0,width:100,height:40,textStyle:{fontSize:35},formatter:function(e){return echarts.format.truncateText(e.name,100,"Microsoft Yahei","…")}}},data:data.antity,links:data.relation}]};