option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:10,data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"负面意见分布",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},label:{formatter:`{a|{a}}{abg|}
{hr|}
  {b|{b}：}{c}  {per|{d}%}  `,backgroundColor:"#eee",borderColor:"#aaa",borderWidth:1,borderRadius:4,fontSize:20,rich:{a:{color:"#999",lineHeight:22,align:"center",fontSize:16},hr:{borderColor:"#aaa",width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#334455",padding:[2,4],borderRadius:2,fontSize:20}}},data:[{value:1225,name:"商品体验"},{value:127,name:"购买体验"},{value:332,name:"售后体验"}]}]};