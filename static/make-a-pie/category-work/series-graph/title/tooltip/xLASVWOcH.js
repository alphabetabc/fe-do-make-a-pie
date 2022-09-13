const source=["数据云","案件",`特种
设备`,`无证
无照`,`抽查
检查`,`价格
监管`,"注册",`进口菲
特监管`,"许可","舆情","信用","列异",`医疗器
械监管`,`办公
数据`,"六个双","年报",`标准化
监管`,`投诉
举报`,`食品日
常监管`,`计量日
常监管`,`国家
市级`,`国家
市级`,"区级",`国家
市级`,"局自建",`国家
市级`,"局自建",`国家
市级`,`社会
第三方`,"区级",`国家
市级`,"局自建","局自建","区级",`国家
市级`,"局自建",`国家
市级`,"局自建","局自建"];let listdata=[];source.map((o,e)=>{e>0&&e<=19?listdata.push({name:o,category:1,symbolSize:80}):e>19?listdata.push({value:o,category:2,symbolSize:60}):listdata.push({name:o,category:0,symbolSize:100,draggable:!0})}),listdata.splice(6,1,{name:"注册",category:1,symbolSize:80,label:{formatter:"{b}",fontSize:16,color:"#d86824"},itemStyle:{color:{type:"radial",r:.9,colorStops:[{offset:0,color:"#0c1746"},{offset:1,color:"#d86824"}]},borderColor:"#d86824",borderWidth:1}}),listdata.splice(25,1,{value:`国家
市级`,category:2,symbolSize:60,label:{formatter:"{c}",fontSize:14,color:"#d86824"},itemStyle:{color:{type:"radial",r:.9,colorStops:[{offset:0,color:"#0c1746"},{offset:1,color:"#d86824"}]},borderColor:"#d86824",borderWidth:1}}),option={backgroundColor:"#0a1247",title:{text:"关系图",x:0,y:"top",textStyle:{fontSize:16,fontFamily:"Microsoft YaHei",color:"#fff"}},tooltip:{show:!1},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"force",circular:{rotateLabel:!0},force:{repulsion:300,gravity:0,edgeLength:[0,0],layoutAnimation:!0},symbol:"circle",symbolSize:70,focusNodeAdjacency:!0,edgeSymbol:["circle","none"],edgeSymbolSize:[0,0],edgeLabel:{show:!1},roam:!0,draggable:!0,label:{normal:{show:!0,position:"inside",textStyle:{fontSize:14,color:"#54f7ff"}}},lineStyle:{normal:{opacity:.7,color:"#54f7ff",width:2,curveness:0}},itemStyle:{opacity:.7,normal:{color:{type:"radial",r:.9,colorStops:[{offset:0,color:"#0c1746"},{offset:1,color:"#54f7ff"}]},borderColor:"#54f7ff",borderWidth:1}},categories:[{name:"root",label:{formatter:"{b}",fontSize:20,color:"#ffec19"},itemStyle:{color:{type:"radial",r:.9,colorStops:[{offset:0,color:"#0c1746"},{offset:1,color:"#ffec19"}]},borderColor:"#ffec19",borderWidth:1}},{name:"child",label:{formatter:"{b}",fontSize:16,color:"#54f7ff"},itemStyle:{color:{type:"radial",r:.9,colorStops:[{offset:0,color:"#0c1746"},{offset:1,color:"#54f7ff"}]},borderColor:"#54f7ff",borderWidth:1}},{name:"grandson",label:{formatter:"{c}",fontSize:12,color:"#69a1ff"},itemStyle:{color:{type:"radial",r:.9,colorStops:[{offset:0,color:"#0c1746"},{offset:1,color:"#69a1ff"}]},borderColor:"#69a1ff",borderWidth:1}}],data:listdata,links:[{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:0,target:4},{source:0,target:5},{source:0,target:6},{source:0,target:7},{source:0,target:8},{source:0,target:9},{source:0,target:10},{source:0,target:11},{source:0,target:12},{source:0,target:13},{source:0,target:14},{source:0,target:15},{source:0,target:16},{source:0,target:17},{source:0,target:18},{source:0,target:19},{source:1,target:20,lineStyle:{normal:{color:"#69a1ff"}}},{source:2,target:21,lineStyle:{normal:{color:"#69a1ff"}}},{source:3,target:22,lineStyle:{normal:{color:"#69a1ff"}}},{source:4,target:23,lineStyle:{normal:{color:"#69a1ff"}}},{source:5,target:24,lineStyle:{normal:{color:"#69a1ff"}}},{source:6,target:25,lineStyle:{normal:{color:"#69a1ff"}}},{source:7,target:26,lineStyle:{normal:{color:"#69a1ff"}}},{source:8,target:27,lineStyle:{normal:{color:"#69a1ff"}}},{source:9,target:28,lineStyle:{normal:{color:"#69a1ff"}}},{source:10,target:29,lineStyle:{normal:{color:"#69a1ff"}}},{source:11,target:30,lineStyle:{normal:{color:"#69a1ff"}}},{source:12,target:31,lineStyle:{normal:{color:"#69a1ff"}}},{source:13,target:32,lineStyle:{normal:{color:"#69a1ff"}}},{source:14,target:33,lineStyle:{normal:{color:"#69a1ff"}}},{source:15,target:34},{source:16,target:35,lineStyle:{normal:{color:"#69a1ff"}}},{source:17,target:36,lineStyle:{normal:{color:"#69a1ff"}}},{source:18,target:37,lineStyle:{normal:{color:"#69a1ff"}}},{source:19,target:38,lineStyle:{normal:{color:"#69a1ff"}}}]}]};
