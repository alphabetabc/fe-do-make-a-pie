var ReportPie1data=[{name:"互联网直接售彩",value:456},{name:"互联网间接售彩",value:231},{name:"社交软件售彩",value:121},{name:"电子投注",value:45},{name:"自助选号",value:154},{name:"网络直播",value:67},{name:"视频信彩",value:67},{name:"即开票集中销售",value:67},{name:"其他",value:67}];option={backgroundColor:"#003366",color:["#d34e58","#f49d13","#f6d748","#45dbf6","#44aff0","#4877f4","#4f46f6","#ad45f4","#f845f1"],grid:{},tooltip:{trigger:"item",formatter:"{b}<br/> {c}亿元  ({d}%)"},legend:{formatter:"item",left:"center",textStyle:{},icon:"roundRect",formatter:function(e){return"{a|"+e+"}"},textStyle:{rich:{a:{width:280,color:"#f2f2f2",fontSize:10}}},data:ReportPie1data},series:[{radius:["40%","70%"],center:["50%","60%"],type:"pie",label:{show:!1},data:ReportPie1data},{radius:["0%","30%"],center:["50%","60%"],type:"pie",labelLine:{normal:{show:!1},emphasis:{show:!1}},label:{normal:{position:"center",formatter:`{top|总销售}
{bottom|99999}`,rich:{top:{fontSize:12,color:"#fff"},bottom:{fontSize:14,color:"#fff",fontWeight:"bold",padding:[0,0,5,0]}}}},animation:!1,tooltip:{show:!1},data:[{value:1,itemStyle:{color:"#1291ff"}}]}]};