option={title:{text:"检查覆盖与违规情况",x:"center"},backgroundColor:"#ffffff",tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#33CC99","#e47070","#55b4e3","#eab2f6","#ccc","#FF9966","#8af298","#8a9df2","#669999"],legend:{x:"center",width:"55%",bottom:"30%",data:["食品批发商","商场超市","便利店","食杂店","食品贸易商","网络食品销售商","食品自动售货销售商","冷冻（藏）仓库食品销售商","其他食品销售经营者"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!1,series:[{name:"覆盖占比",type:"pie",radius:[30,110],center:["30%","50%"],roseType:"radius",label:{normal:{show:!1},emphasis:{show:!0}},lableLine:{normal:{show:!1},emphasis:{show:!0}},data:[{value:2400,name:"食品批发商"},{value:1e3,name:"商场超市"},{value:889,name:"便利店"},{value:700,name:"食杂店"},{value:1100,name:"食品贸易商"},{value:600,name:"食品自动售货销售商"},{value:1250,name:"网络食品销售商"},{value:1e3,name:"冷冻（藏）仓库食品销售商"},{value:900,name:"其他食品销售经营者"}]},{name:"违规占比",type:"pie",radius:[30,110],center:["55%","50%"],roseType:"area",label:{normal:{show:!1},emphasis:{show:!0}},lableLine:{normal:{show:!1},emphasis:{show:!0}},data:[{value:2400,name:"食品批发商"},{value:1e3,name:"商场超市"},{value:889,name:"便利店"},{value:700,name:"食杂店"},{value:1100,name:"食品贸易商"},{value:600,name:"食品自动售货销售商"},{value:1250,name:"网络食品销售商"},{value:1e3,name:"冷冻（藏）仓库食品销售商"},{value:900,name:"其他食品销售经营者"}]}]};