var fontSize=10,echartData=[{value:2154,name:"水路"},{value:3854,name:"铁路"},{value:3515,name:"公路"}],rich={yellow:{color:"#ffc72b",fontSize:fontSize*2,padding:[15,4],align:"center"},total:{color:"#ffc72b",fontSize:fontSize*4,align:"center"},white:{color:"#fff",align:"center",fontSize:fontSize*1.4},blue:{color:"#49dff0",fontSize:fontSize*1.4,align:"center"},hr:{borderColor:"#0b5263",width:"100%",borderWidth:1,height:0}};option={backgroundColor:"#001C69",title:{text:"0.10%",left:"center",top:"47%",textStyle:{color:"#fff",fontSize:fontSize*2.5,align:"center"}},tooltip:{trigger:"item",formatter:"{b}<br/>{c} ({d}%)",textStyle:{fontSize:fontSize*1.6}},series:[{name:"pie",type:"pie",radius:["42%","50%"],hoverAnimation:!1,color:["#c487ee","#deb140","#49dff0","#034079","#6f81da","#00ffb4"],label:{normal:{formatter:function(e,a,l){var t=0,o=0;return echartData.forEach(function(r,n,i){t+=r.value}),o=(e.value/t*100).toFixed(1),"{white|"+e.name+`}
{yellow|`+e.value+"}{blue|"+o+"%}"},rich}},data:echartData}]};
