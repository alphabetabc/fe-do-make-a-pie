var setLabel=function(l){for(var r=[],o=0;o<l.length;o++){var e={};e.name=l[o].name,e.value=l[o].value,e.itemStyle={color:l[o].color},e.label={formatter:["{d|"+e.value+"}","{e|.} {b|"+e.name+"}"].join(`
`),rich:{d:{fontWeight:"bold",color:"#666",fontSize:14},e:{width:8,height:8,borderRadius:8,backgroundColor:l[o].color,verticalAlign:"middle"},b:{color:"#777",padding:[0,0,3,2]}}},r.push(e)}return r};option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"姓名",type:"pie",startAngle:0,radius:"55%",center:["40%","50%"],label:{lineHeight:20,align:"left"},labelLine:{show:!1},data:setLabel([{value:234,name:"联盟广告",color:"#ef4764"},{value:135,name:"视频广告",color:"#facc27"},{value:148,name:"搜索引擎",color:"#3196fa"}]),itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};
