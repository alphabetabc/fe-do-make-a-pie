var option={backgroundColor:"#001C69",title:{text:"武汉分公司全口径折扣分析",x:"center",textStyle:{align:"center",fontSize:"180%",color:"#ffffff"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},grid:{x:"10%",y:"10%"},series:[{name:"全口径折扣",type:"pie",selectedMode:"single",center:["55%","55%"],radius:[0,"30%"],itemStyle:{normal:{}},label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},data:[{value:60,name:"消费折扣",selected:!0},{value:10,name:"储值折扣"},{value:30,name:"挂牌直降折扣"}]},{name:"折扣明细",type:"pie",center:["55%","55%"],radius:["40%","55%"],legendHoverLink:!0,hoverAnimation:!0,hoverOffset:15,selectedMode:"single",selectedOffset:15,animationType:"scale",itemStyle:{normal:{}},label:{normal:{formatter:`{a|{b}}
{hr|}
{c}  {per|{d}%}`,borderColor:"#aaa",borderWidth:1,borderRadius:4,rich:{a:{color:"#999",fontSize:10,lineHeight:20,align:"center"},hr:{borderColor:"#aaa",width:"100%",borderWidth:.5,height:0},b:{fontSize:10,lineHeight:20},per:{color:"#eee",backgroundColor:"#334455",padding:[2,4],borderRadius:2}}}},data:[{value:40,name:"活动卡折扣",itemStyle:{normal:{color:"#FF3300"}}},{value:20,name:"卡消费折扣",itemStyle:{normal:{color:"#FFFF00"}}},{value:20,name:"电子券折扣",itemStyle:{normal:{color:"#00FF00"}}},{value:10,name:"消费返利",itemStyle:{normal:{color:"#1E90FF"}}},{value:10,name:"梯级优惠",itemStyle:{normal:{color:"#ADFF2F"}}}]}]};