app.title="嵌套环形图",option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["应届","往届"]},series:[{name:"访问来源",type:"pie",selectedMode:"single",radius:[0,"30%"],label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},data:[{value:4015,name:"应届",selected:!0},{value:390,name:"往届"}]},{name:"访问来源",type:"pie",radius:["40%","55%"],label:{normal:{formatter:`{a|{a}}{abg|}
{hr|}
  {b|{b}：}{c}  {per|{d}%}  `,backgroundColor:"#eee",borderColor:"#aaa",borderWidth:1,borderRadius:4,rich:{a:{color:"#999",lineHeight:22,align:"center"},hr:{borderColor:"#aaa",width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#334455",padding:[2,4],borderRadius:2}}}},data:[{value:1710,name:"农村应届"},{value:80,name:"城市应届"},{value:2225,name:"城镇应届"},{value:200,name:"农村往届"},{value:4,name:"城市往届"},{value:186,name:"城镇往届"}]}]};