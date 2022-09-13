var $timeList=[{name:"O/N",value:2},{name:"TN",value:8},{name:"1D",value:8},{name:"SN",value:16},{name:"1W",value:8},{name:"2W",value:14},{name:"3W",value:20},{name:"1M",value:26},{name:"2M",value:32},{name:"3M",value:38},{name:"4M",value:44},{name:"5M",value:50},{name:"6M",value:56},{name:"9M",value:66},{name:"1Y",value:76},{name:"18M",value:86},{name:"2Y",value:96},{name:"3Y",value:116},{name:"4Y",value:136},{name:"5Y",value:156},{name:"7Y",value:186},{name:"10Y",value:226}],$tenorList=[{tenor:"O/N",point:4.56},{tenor:"1W",point:100.56},{tenor:"2W",point:200.56},{tenor:"3W",point:300.56},{tenor:"1M",point:400},{tenor:"2M",point:600},{tenor:"3M",point:700},{tenor:"4M",point:810},{tenor:"5M",point:820},{tenor:"6M",point:840},{tenor:"9M",point:850},{tenor:"1Y",point:860},{tenor:"18M",point:900},{tenor:"2Y",point:920},{tenor:"3Y",point:940},{tenor:"4Y",point:960},{tenor:"5Y",point:1020}];let $seriesData=[];var $filterList=[];$tenorList.forEach(e=>{let o=[],t=$timeList.find(a=>a.name===e.tenor);$filterList.push(t),o.push(t.value),o.push(e.point),$seriesData.push(o)}),console.log($filterList),console.log($seriesData),option={backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{show:!0,backgroundColor:"#dce4e9",color:"#445566",borderColor:"rgba(0,0,0,0)",shadowColor:"rgba(0,0,0,0)",shadowOffsetY:0,formatter:e=>e.axisDimension==="y"?e.value.toFixed(2):$filterList.find(t=>t.value===e.value).name},textStyle:{color:"#fff"}},formatter:e=>{let o=$filterList.find(t=>t.value===e[0].data[0]);return o&&`${o.name}：${e[0].data[1]}`},lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:0,colorStops:[{offet:0,color:"red"},{offet:.5,color:"blue"},{offet:1,color:"white"}]}},padding:[5,10],extraCssText:"box-shadow: 1px 0 2px 0 rgba(163, 163, 163, .5)"},xAxis:{type:"value",interval:2,axisLabel:{color:"#212121",fontSize:10,formatter:e=>{let o=$filterList.find(t=>t.value==e);return o&&o.name}},max:e=>e.max+2,axisLine:{show:!0},splitLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#212121"}},axisLabel:{textStyle:{color:"#212121"}},splitLine:{show:!1}},series:[{name:"S",type:"line",data:$seriesData,symbolSize:4,symbol:"circle",smooth:!0,lineStyle:{color:"#fe9a8b"},itemStyle:{normal:{color:"#fe9a8b",borderColor:"#fe9a8b"}},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fe9a8bb3"},{offset:1,color:"#fe9a8b03"}])},emphasis:{itemStyle:{color:{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"#fe9a8b"},{offset:.4,color:"#fe9a8b"},{offset:.5,color:"#fff"},{offset:.7,color:"#fff"},{offset:.8,color:"#fff"},{offset:1,color:"#fff"}]},borderColor:"#fe9a8b",borderWidth:4}}}]};