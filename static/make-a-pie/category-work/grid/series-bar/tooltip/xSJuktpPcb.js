option={tooltip:{trigger:"item",axisPointer:{type:"none"},formatter:function(a,t){if(a.seriesName!="辅助")return a.seriesName+":<br/>"+a.data+"%"}},xAxis:{type:"category",splitLine:{show:!1},show:!1,data:function(){for(var a=[],t=1;t<=6;t++)a.push("11月"+t+"日");return a}()},yAxis:{type:"value",min:1,axisLine:{lineStyle:{color:"#072543",width:1}},axisTick:{length:1},axisLabel:{textStyle:{color:"#00A5FF"}},splitLine:{show:!0,lineStyle:{color:"#072543"}},minInterval:1,splitNumber:4},series:[{name:"辅助",type:"bar",stack:"总量",itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[30,20,30,10,30,10]},{name:"化学原料及化学制品制造业",type:"bar",stack:"总量",label:{normal:{show:!1,position:"top"}},data:[25.8,"-","-","-","-","-"]},{name:"非金属矿物制品业",type:"bar",stack:"总量",label:{normal:{show:!1,position:"bottom"}},data:["-",12.6,"-","-","-","-"]},{name:"黑色金属冶炼及压延加工业",type:"bar",stack:"总量",label:{normal:{show:!1,position:"bottom"}},data:["-","-",18.9,"-","-","-"]},{name:"有色金属冶炼及压延加工业",type:"bar",stack:"总量",label:{normal:{show:!1,position:"bottom"}},data:["-","-","-",5.7,"-","-"]},{name:"有色金属冶炼及压延加工业",type:"bar",stack:"总量",label:{normal:{show:!1,position:"bottom"}},data:["-","-","-","-",11.6,"-"]},{name:"电力热力的生产和供应业",type:"bar",stack:"总量",label:{normal:{show:!1,position:"bottom"}},data:["-","-","-","-","-",8.9]}]};