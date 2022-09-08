var scale=1,echartData=[{name:"国家一等奖",value:7},{name:"国家二等奖",value:50},{name:"省一等奖",value:85},{name:"省二等奖",value:56},{name:"省三等奖",value:41}],echartData2=[{name:"提名奖",value:1},{name:"一等奖",value:11},{name:"二等奖",value:39}],rich={yellow:{color:"#659F83",fontSize:18*scale,padding:[5,4],align:"center"},total:{color:"#659F83",fontSize:18*scale,align:"center"},white:{color:"#333333",align:"center",fontSize:14*scale,padding:[5,0]},blue:{color:"#222222",fontSize:14*scale,align:"left"}};option={title:[{text:"全国大学生数学建模竞赛",left:"19%",top:"10%",padding:[24,0],textStyle:{fontSize:18*scale,align:"center"}},{text:"美国大学生数学建模竞赛",left:"57%",top:"10%",padding:[24,0],textStyle:{fontSize:18*scale,align:"center"}}],legend:[{selectedMode:!1,formatter:function(e){var a=0,r;return echartData.forEach(function(t,n,l){a+=t.value}),"{total|"+a+"人}"},data:[echartData[0].name],left:"23%",top:"center",icon:"none",align:"center",textStyle:{fontSize:16*scale,rich}},{formatter:function(e){var a=0,r;return echartData2.forEach(function(t,n,l){a+=t.value}),"{total|"+a+"人}"},data:[echartData[1].name],left:"63%",top:"center",icon:"none",align:"center",textStyle:{fontSize:16*scale,rich}}],series:[{name:"课程满意度",type:"pie",center:["25%","50%"],radius:["20%","30%"],hoverAnimation:!1,color:["#c487ee","#deb140","#49dff0","#034079","#6f81da","#00ffb4","#659F83","#08C7AE"],label:{normal:{formatter:function(e,a,r){var t=0,n=0;return echartData.forEach(function(l,o,i){t+=l.value}),n=(e.value/t*100).toFixed(1),"{white|"+e.name+`}
{white|`+e.value+"人}：{blue|"+n+"%}"},rich}},labelLine:{normal:{length:25*scale,length2:0,lineStyle:{color:"#0b5263"}}},data:echartData},{name:"课程满意度",type:"pie",center:["65%","50%"],radius:["20%","30%"],hoverAnimation:!1,color:["#c487ee","#deb140","#49dff0","#034079","#6f81da","#00ffb4","#659F83","#08C7AE"],label:{normal:{formatter:function(e,a,r){var t=0,n=0;return echartData2.forEach(function(l,o,i){t+=l.value}),n=(e.value/t*100).toFixed(1),"{white|"+e.name+"}：{yellow|"+e.value+`人}
{blue|（`+n+"%）}"},rich}},labelLine:{normal:{length:25*scale,length2:0,lineStyle:{color:"#0b5263"}}},data:echartData2}]};