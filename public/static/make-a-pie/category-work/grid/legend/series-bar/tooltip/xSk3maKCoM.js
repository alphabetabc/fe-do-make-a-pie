app.title="堆叠条形图",option={legend:{orient:"horizontal",top:"55%",data:["高中及高中以下","本科及本科以上","大专"]},tooltip:{trigger:"item",axisPointer:{type:"shadow"},backgroundColor:"rgba(255,255,255,0.7)",borderColor:"#cee5ff",borderWidth:1,padding:[5,10],textStyle:{color:"#444"},formatter:function(e){return console.log(e),'<div style="height:30px;line-height: 30px;">'+e.name+'</div><div style="height: 40px;line-height: 40px;">'+e.seriesName+': <span style="color: '+e.color+';">'+e.value+"%</span></div>"}},color:["#3a8eff","#e34c4c","#fcac4d"],xAxis:[{type:"value",show:!1}],yAxis:[{type:"category",show:!1,data:["学历分布"]}],series:[{name:"高中及高中以下",type:"bar",stack:"学历分布",barWidth:10,label:{normal:{show:!0,position:[0,"-25"]}},data:[{value:"64.94",label:{normal:{color:"#333333",formatter:["{c}%"].join(`
`)}}}]},{name:"本科及本科以上",type:"bar",stack:"学历分布",barWidth:10,label:{normal:{show:!0,position:[0,"-25"]}},data:[{value:"7.22",label:{normal:{color:"#333333",formatter:["{c}%"].join(`
`)}}}]},{name:"大专",type:"bar",stack:"学历分布",barWidth:10,label:{normal:{show:!0,position:[0,"-25"]}},data:[{value:"27.84",label:{normal:{color:"#333333",formatter:["{c}%"].join(`
`)}}}]}]},myChart.setOption(option,!0),window.addEventListener("resize",function(){myChart.resize()});
