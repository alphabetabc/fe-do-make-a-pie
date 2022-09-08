app.title="情感分析图",option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["正向","中立","负向","微博正向","微博中立","微博负向","部落正向","部落中立","部落负向","百度贴吧正向","百度贴吧中立","百度贴吧负向"]},series:[{name:"情感倾向",type:"pie",selectedMode:"single",radius:[0,"30%"],label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},data:[{value:209,name:"正向",selected:!0},{value:41,name:"中立"},{value:58,name:"负向"}]},{name:"情感倾向",type:"pie",radius:["40%","55%"],label:{normal:{formatter:`{a|{a}}{abg|}
{hr|}
  {b|{b}：}{c}  {per|{d}%}  `,backgroundColor:"#eee",borderColor:"#aaa",borderWidth:1,borderRadius:4,rich:{a:{color:"#999",lineHeight:22,align:"center"},hr:{borderColor:"#aaa",width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#334455",padding:[2,4],borderRadius:2}}}},data:[{value:50,name:"微博正向"},{value:22,name:"微博中立"},{value:29,name:"微博负向"},{value:88,name:"部落正向"},{value:7,name:"部落中立"},{value:5,name:"部落负向"},{value:71,name:"百度贴吧正向"},{value:12,name:"百度贴吧中立"},{value:16,name:"百度贴吧负向"}]}]};
