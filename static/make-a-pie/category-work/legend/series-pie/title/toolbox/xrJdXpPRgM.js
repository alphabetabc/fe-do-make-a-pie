labelTop={normal:{label:{show:!0,position:"center",formatter:"{b}",textStyle:{baseline:"bottom"}},labelLine:{show:!1}}};var labelFromatter={normal:{label:{formatter:function(e){return 100-e.value+"%"},textStyle:{baseline:"top"}}}},labelBottom={normal:{color:"#ccc",label:{show:!0,position:"center"},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}},radius=[40,55];option={legend:{x:"center",y:"center",data:["天涯论坛","新浪微博","爱情","知乎","豆瓣"]},title:{text:"评论主体为“抄袭”在各个平台的占比",textStyle:{fontSize:30},x:"center"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"],option:{funnel:{width:"20%",height:"30%",itemStyle:{normal:{label:{formatter:function(e){return`other
`+e.value+`%
`},textStyle:{baseline:"middle"}}}}}}},restore:{show:!0},saveAsImage:{show:!0}}},series:[{type:"pie",center:["20%","30%"],radius,x:"0%",itemStyle:labelFromatter,data:[{name:"other",value:69,itemStyle:labelBottom},{name:"天涯论坛",value:31,itemStyle:labelTop}]},{type:"pie",center:["40%","30%"],radius,x:"20%",itemStyle:labelFromatter,data:[{name:"other",value:46,itemStyle:labelBottom},{name:"新浪微博",value:54,itemStyle:labelTop}]},{type:"pie",center:["60%","30%"],radius,x:"40%",itemStyle:labelFromatter,data:[{name:"other",value:36.5,itemStyle:labelBottom},{name:"知乎",value:63.5,itemStyle:labelTop}]},{type:"pie",center:["80%","30%"],radius,x:"60%",itemStyle:labelFromatter,data:[{name:"other",value:35.5,itemStyle:labelBottom},{name:"豆瓣",value:64.5,itemStyle:labelTop}]}]};