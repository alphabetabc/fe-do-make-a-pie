var totalNum=10;option={backgroundColor:"#fff",color:["#d0e3fe","#639afe"],title:{x:"center",y:"0",text:"{b|总转化率}{a|"+totalNum+"}{b|%}",textStyle:{fontSize:0,rich:{a:{color:"#ff9f0e",fontSize:18,padding:[0,10,0,10]},b:{color:"#999",fontSize:16}}},textAlign:"center",vetextVerticalAlign:"bottom"},legend:{data:["推送量","订购量"],icon:"circle",x:"right"},grid:{left:0,right:10,top:40,bottom:0,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",data:["CBSS","ESS","微信","外呼","短信"],axisTick:{show:!1},axisLine:{lineStyle:{color:"#e0e0e0"}},axisLabel:{textStyle:{color:"#666"}}},series:[{name:"推送量",type:"bar",data:[18203,23489,29034,104970,131744],label:{show:!0,position:"right",textStyle:{color:"#666"}}},{name:"订购量",type:"bar",data:[19325,23438,31e3,121594,134141],label:{show:!0,position:"right",textStyle:{color:"#666"}}}]};