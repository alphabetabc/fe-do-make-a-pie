var data={out:679,in:335,detail:[{name:"秀英区",value:10},{name:"龙华区",value:20},{name:"琼山区",value:20},{name:"美兰区",value:27}]},inData=[{value:data.out,name:"省外流动"},{value:data.in,name:"省内流动"}],color={start:["#EE4D47","#E5C905","#00f","#AE9AFE"],end:["#FE868E","#EED932","#5AB2F6","#855CFE"]},seriesData=data.detail.map((e,a)=>({name:e.name,value:e.value,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:color.start[a]},{offset:1,color:color.end[a]}])}}}));option={backgroundColor:"#121E48",tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{name:"访问来源",type:"pie",selectedMode:"single",radius:[0,"30%"],color:["#8266F7","#5BD69F"],label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},data:inData},{name:"访问来源",type:"pie",radius:["40%","55%"],itemStyle:{normal:{label:{show:!0,formatter:function(e){return console.log(e),e.name+`
`+e.value},color:"#fff",lineHeight:20}}},labelLine:{length:20,length2:30},data:seriesData}]};