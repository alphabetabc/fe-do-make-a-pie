const colorGroup=["#f38181","#ff6473","#5cc1b3","#757882","#6ef7c8"],obj=setLabel(colorGroup);option={color:colorGroup,legend:{orient:"vertical",left:10,data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center",formatter:e=>`{${obj.label[e.color]}|${e.data.value}}`,rich:obj.rich},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]};function setLabel(e=[]){const o=e.map((a,l)=>({index:a})),t=e.map((a,l)=>({item:l}));return{rich:o,label:t}}
