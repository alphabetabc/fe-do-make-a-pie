var height=document.querySelector("#chart-panel").offsetHeight,width=document.querySelector("#chart-panel").offsetWidth,radiusMax=width>=height?height:widht;console.log(height);var itemStyle={normal:{color:new echarts.graphic.RadialGradient(width/2,height/2,radiusMax*.3,[{offset:0,color:"rgba(213,13,249,1)"},{offset:1,color:"rgba(213,13,249,0.1)"}],!0),borderWidth:1,borderColor:"#235894"}};option={title:{text:"饼图纹理",textStyle:{color:"#235894"}},tooltip:{},series:[{name:"pie",type:"pie",selectedMode:"single",selectedOffset:10,clockwise:!0,label:{normal:{textStyle:{fontSize:18,color:"#235894"}}},labelLine:{normal:{lineStyle:{color:"#235894"}}},data:[{value:335,name:"虐杀原形",selected:!0},{value:310,name:"穿越火线",selected:!0},{value:234,name:"逆战",selected:!0},{value:135,name:"英雄联盟",selected:!0},{value:1548,name:"绝地求生",selected:!0}],itemStyle}]};var chart=document.getElementById("chart-panel");echarts.init(chart);