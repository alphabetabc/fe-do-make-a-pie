var women=null,men=null;$(function(){$.getJSON("/asset/get/s/data-1636100695450-E5ofSUIRY.json",function(i){console.log(i.woman);var l=i.woman,s=i.man,o=["#DC143C","#696969"],m=[{name:"女生",type:"scatter",markPoint:{symbol:"rect",symbolRotate:45,symbolSize:30,data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{label:{color:o[0],formatter:function(e){return`女生的平均身高值
`+e.value}},lineStyle:{type:"solid"},data:[{type:"average",name:"AVG"},{xAxis:160.87}]},markArea:{silent:!0,itemStyle:{color:"transparent",borderWidth:1,borderType:"dashed"},data:[[{name:"",xAxis:"min",yAxis:"min"},{xAxis:"max",yAxis:"max"}]]},symbolSize:function(e){var t=e[0]/100,a=e[1],r=a/(t*t);return r>25?30:r>=20&&r<=25?15:10},itemStyle:{color:function(e){var t=e.seriesName;return t=="女生"?"#DC143C":"#8B0000"}},data:l},{name:"男生",type:"scatter",markPoint:{symbol:"rect",symbolRotate:45,symbolSize:30,data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{label:{formatter:function(e){return`男生的平均身高值
`+e.value}},lineStyle:{type:"solid"},data:[{type:"average",name:"AVG"},{xAxis:177.75}]},markArea:{silent:!0,itemStyle:{color:"transparent",borderWidth:1,borderType:"dashed"},data:[[{name:"",xAxis:"min",yAxis:"min"},{xAxis:"max",yAxis:"max"}]]},symbolSize:function(e){var t=e[0]/100,a=e[1],r=a/(t*t);return r>25?30:r>=20&&r<=25?15:10},itemStyle:{color:function(e){var t=e.seriesName;return t=="男生"?"#696969":"#2E2E2E"}},data:s}],u={color:o,title:{text:"某地区男性女性身高体重分布图",left:"center",top:"0%"},legend:{top:20,left:"70%",itemWidth:20,itemHeight:20,data:["女生","男生"]},tooltip:{show:!0,formatter:function(e){if(console.log(e),e.componentSubType=="scatter"){var t=e.value[0]/100,a=e.value[1],r=a/(t*t);r=Math.floor(r*100)/100;var n="";return n+="身高:"+e.value[0]+"cm</br>",n+="体重:"+e.value[1]+"kg</br>",n+="BMI:"+r,n}else return e.value}},grid:{top:"10%"},xAxis:{axisLine:{show:!1,lineStyle:{color:"#26D9FF"}},axisTick:{show:!1},axisLabel:{formatter:"{value}cm ",textStyle:{color:"#333",fontSize:12}},splitLine:{show:!0},min:130,max:210,interval:10},yAxis:{nameTextStyle:{color:"#8998AC",padding:[0,25,0,0]},axisLine:{lineStyle:{color:"#ccc"}},axisTick:{show:!1},axisLabel:{formatter:"{value}kg ",textStyle:{color:"#333",fontSize:12}},splitLine:{lineStyle:{color:"#E9E9E9"}},min:40,max:120,interval:10},series:m};myChart.setOption(u),window.addEventListener("resize",function(){myChart.resize()})})});
