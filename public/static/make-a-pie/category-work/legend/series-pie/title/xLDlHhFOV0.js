var scale=1,echartData=[{value:589,name:"未下单"},{value:860,name:"未生产"},{value:1e3,name:"生产中"},{value:2e3,name:"厂内仓储"},{value:1800,name:"现场仓储"},{value:900,name:"已安装"}],rich={yellow:{color:"#ffc72b",fontSize:30*scale,padding:[5,4],align:"center"},total:{color:"#ffc72b",fontSize:50*scale,align:"center"},white:{color:"#fff",align:"center",fontSize:16*scale,padding:[15,0]},blue:{color:"#49dff0",fontSize:18*scale,align:"center"},hr:{borderColor:"#0b5263",width:"110%",borderWidth:1,height:0}};option={backgroundColor:"#030d22",title:{text:"构件总数",subtext:"",left:"center",top:"53%",padding:[20,0],textStyle:{color:"#fff",fontSize:25*scale,align:"center"}},legend:{selectedMode:!0,formatter:function(e){var n=0,l;return echartData.forEach(function(t,a,r){n+=t.value}),"{total|"+n+"}"},data:[echartData[0].name],right:"center",top:"center",icon:"none",align:"center",textStyle:{color:"#fff",fontSize:18*scale,rich}},series:[{type:"pie",radius:["35%","50%"],hoverAnimation:!1,color:["#FBFC01","#0135F7","#2CFE4F","#FF6B00","#12C7FF","#FF3097"],label:{normal:{formatter:function(e,n,l){var t=0,a=0;return echartData.forEach(function(r,o,i){t+=r.value}),a=(e.value/t*100).toFixed(1),"{white|"+e.name+`}
{hr|}
{yellow|`+e.value+`}
{blue|`+a+"%}"},rich}},labelLine:{normal:{length:65*scale,length2:0,lineStyle:{color:"#0b5263"}}},data:echartData}]};
