var chartData=[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}];option={title:{text:"访问来源",textAlign:"left",left:10,top:0,textStyle:{fontSize:18,fontWeight:500},x:"center",y:"center"},legend:{left:"center",bottom:40,data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:["35%","50%"],avoidLabelOverlap:!1,label:{show:!0,formatter:`{b|{b}}
{hr|}
{d|{d}%}`,rich:{b:{fontSize:12,align:"left",padding:4},hr:{width:"100%",borderWidth:2,height:0},d:{fontSize:12,align:"left",padding:4},c:{fontSize:12,align:"center",padding:4}}},labelLine:{show:!0,smooth:0,length:5},animation:!1,data:chartData},{name:"访问来源",type:"pie",radius:["35%","50%"],opacity:1,avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center",formatter:`{b}
 {c}`},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},data:chartData}]};
