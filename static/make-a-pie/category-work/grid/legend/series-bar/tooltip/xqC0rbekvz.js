let data=[],typs=[],sourceData=[{source:0,source_name:"无",count:4,percent:null},{source:1,source_name:"一体机邀约",count:6,percent:null},{source:2,source_name:"速检通邀约",count:9,percent:null},{source:3,source_name:"问卷邀约",count:8,percent:null},{source:7,source_name:"手动添加",count:4,percent:null},{source:8,source_name:"抖音客户来源",count:0,percent:null},{source:9,source_name:"服务卡邀约",count:13,percent:null},{source:10,source_name:"心电邀约",count:0,percent:null},{source:-10,source_name:"散客",count:0,percent:null}];sourceData.forEach(e=>{e.count>0&&(data.push(e.count),typs.push(e.source_name))});let count=data.reduce(function(e,t,r,o){return e+t}),rich={b:{fontSize:16,padding:[20,0,-20,0]},d:{fontSize:14,fontWeight:100,padding:[2,0,0,0]}},label={normal:{show:!0}},itemStyle={barBorderRadius:10},formatSeries=()=>{let e=[];return typs.forEach((t,r)=>{e.push({name:t,type:"bar",stack:"income",barWidth:10,label,labelLine:{normal:{show:!0,length:90,length2:45,smooth:!0}},itemStyle,data:[{value:data[r],label:{normal:{offset:[0,0],position:"center",formatter:["{b|"+t+"}","{d|新客:"+data[r]+"}","{d|占比:"+(data[r]/count*100).toFixed(1)+"%}"].join(`
`),rich}}}]})}),e};option={tooltip:{trigger:"item",formatter:function(e){return e.seriesName+"</br>新客："+e.value+"</br>占比："+(e.value/count*100).toFixed(1)+"%"}},xAxis:[{type:"value",show:!1,max:count}],yAxis:[{type:"category",show:!1}],legend:{show:!0,top:"top",textStyle:{fontSize:12,color:"#c8c8c8"}},color:["#618cff","#ffa57c","#fb7636","#24b314","#8452e7","#00d3e2"],series:formatSeries()};
