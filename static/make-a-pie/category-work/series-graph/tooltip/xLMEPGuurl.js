var title=[{label:"队长张某某",warn:5,error:8,value:2},{label:"grpc",warn:5,error:8,value:5},{label:"cache",warn:5,error:8,value:7},{label:"reco_rpc",warn:5,error:8,value:7},{label:"kafka",warn:5,error:8,value:7},{label:"grpc2",warn:5,error:8,value:2},{label:"cache2",warn:5,error:8,value:2},{label:"leaf2",warn:5,error:8,value:2},{label:"kafka2",warn:5,error:8,value:2},{label:"ad2",warn:5,error:8,value:2},{label:"grpc3",warn:5,error:8,value:2},{label:"cache3",warn:5,error:8,value:2},{label:"kafka3",warn:5,error:8,value:2}],colorMap={normal:"#18a849",warn:"#FFC125",error:"#FF0000"};colorFunction=function(e){if(e.value<e.warn)return colorMap.normal;if(e.warn<=e.value&&e.value<e.error)return colorMap.warn;if(e.error<=e.value)return colorMap.error},option={tooltip:{trigger:"item",formatter:function(e){return e.name!="x"||e.name!="y"?e.name:""}},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",textStyle:{color:"#000"},series:[{type:"graph",tooltip:{backgroundColor:"skyblue"},layout:"none",symbolSize:10,roam:!1,label:{normal:{show:!0,position:"inside",textStyle:{fontSize:12,color:"#fff",fontWeight:"BOLD"}}},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{normal:{textStyle:{fontSize:18}}},data:[{name:title[0].label,x:300,y:0,value:title[0],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[0])}}},{name:title[1].label,x:0,y:200,value:title[1],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[1])}}},{name:title[2].label,x:150,y:200,value:title[2],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[2])}}},{name:title[3].label,x:350,y:200,value:title[3],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[3])}}},{name:title[4].label,x:600,y:200,value:title[4],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[4])}}},{name:title[5].label,x:0,y:400,value:title[5],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[5])}}},{name:title[6].label,x:150,y:400,value:title[6],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[6])}}},{name:title[7].label,x:300,y:400,value:title[7],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[7])}}},{name:title[8].label,x:450,y:400,value:title[8],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[8])}}},{name:title[9].label,x:600,y:400,value:title[9],symbolSize:50,itemStyle:{normal:{color:colorFunction(title[9])}}},{name:"1",x:300,y:100,symbolSize:0},{name:"2",x:150,y:100,symbolSize:0},{name:"3",x:0,y:100,symbolSize:0},{name:"4",x:350,y:100,symbolSize:0},{name:"5",x:600,y:100,symbolSize:0},{name:"21",x:0,y:300,symbolSize:0},{name:"22",x:150,y:300,symbolSize:0},{name:"23",x:300,y:300,symbolSize:0},{name:"24",x:350,y:300,symbolSize:0},{name:"25",x:450,y:300,symbolSize:0},{name:"26",x:600,y:300,symbolSize:0}],links:[{source:title[0].label,target:"1"},{source:"3",target:title[1].label},{source:"2",target:title[2].label},{source:"4",target:title[3].label},{source:"5",target:title[4].label},{source:title[3].label,target:"24"},{source:"21",target:title[5].label},{source:"22",target:title[6].label},{source:"23",target:title[7].label},{source:"25",target:title[8].label},{source:"26",target:title[9].label},{source:title[7].label,target:"33"},{source:"31",target:title[10].label},{source:"32",target:title[11].label},{source:"34",target:title[12].label},{source:"1",target:"2",symbol:"none"},{source:"2",target:"3",symbol:"none"},{source:"1",target:"4",symbol:"none"},{source:"4",target:"5",symbol:"none"},{source:"21",target:"22",symbol:"none"},{source:"22",target:"23",symbol:"none"},{source:"23",target:"24",symbol:"none"},{source:"24",target:"25",symbol:"none"},{source:"25",target:"26",symbol:"none"},{source:"31",target:"32",symbol:"none"},{source:"32",target:"33",symbol:"none"},{source:"33",target:"34",symbol:"none"}],lineStyle:{normal:{opacity:.9,color:"#53B5EA",type:"dashed",width:1}}}]};
