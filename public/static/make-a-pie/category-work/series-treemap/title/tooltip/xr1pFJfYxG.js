myChart.setOption({title:{text:"2014年中国耕地质量",left:"center",textStyle:{color:"#1a1b4e",fontStyle:"normal",fontSize:24},subtext:"数据来源：国土资源部"},tooltip:{formatter:"{b}:<br />耕地面积： {c}万公顷"},series:[{name:"耕地等级",type:"treemap",visibleMin:100,itemStyle:{normal:{label:{show:!0,formatter:"{b}"},borderWidth:2},emphasis:{label:{show:!0}}},label:{normal:{fontSize:14}},data:[{value:13509.74,children:[{value:2389.25,id:"someid-1",name:"低等地  17.69%",children:[{value:1125.5,id:"someid-31",name:"13等地"},{value:765.63,id:"someid-32",name:"14等地"},{value:498.12,id:"someid-33",name:"15等地"}],label:{},itemStyle:{}},{value:7138.52,id:"someid-2",name:"中等地  52.84%",children:[{value:1410.69,id:"someid-31",name:"9等地"},{value:1790.55,id:"someid-32",name:"10等地"},{value:2045.43,id:"someid-33",name:"11等地"},{value:1891.85,id:"someid-34",name:"12等地"}]},{value:3584.6,id:"someid-3",name:"高等地  26.53%",children:[{value:366.48,id:"someid-31",name:"5等地"},{value:886.22,id:"someid-32",name:"6等地"},{value:1143.89,id:"someid-33",name:"7等地"},{value:1188.01,id:"someid-34",name:"8等地"}]},{value:397.38,id:"someid-4",name:"优等地  2.94%",children:[{value:48.84,id:"someid-31",name:"1等地"},{value:59.93,id:"someid-32",name:"2等地"},{value:115.85,id:"someid-33",name:"3等地"},{value:172.76,id:"someid-34",name:"4等地"}]}]}],leafDepth:2,color:["#FFA54F","#FF8040","#FFD39B","#FF4500"]}]});