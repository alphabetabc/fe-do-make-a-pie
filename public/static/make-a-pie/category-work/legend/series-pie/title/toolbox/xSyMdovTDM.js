myChart.on("click",function(e){console.log(e),alert(e.name)}),labelTop={normal:{label:{show:!0,position:"center",formatter:"{b}",textStyle:{baseline:"bottom"}},labelLine:{show:!1}}};var labelFromatter={normal:{label:{formatter:function(e){return 100-e.value+"%"},textStyle:{baseline:"top"}}}},labelBottom={normal:{color:"#ccc",label:{show:!0,position:"center"},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}},radius=[40,55];option={legend:{x:"center",y:"center",data:["剧情","奇幻","爱情","惊悚","冒险","动作","喜剧","科幻","悬疑","犯罪"]},title:{text:"各类型电影中“好片”所占比重",subtext:"原始数据来自豆瓣",x:"center"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"],option:{funnel:{width:"20%",height:"30%",itemStyle:{normal:{label:{formatter:function(e){return`other
`+e.value+`%
`},textStyle:{baseline:"middle"}}}}}}},restore:{show:!0},saveAsImage:{show:!0}}},series:[{type:"pie",center:["10%","30%"],radius,x:"0%",itemStyle:labelFromatter,data:[{name:"other",value:75,itemStyle:labelBottom},{name:"剧情",value:25,itemStyle:labelTop}]},{type:"pie",center:["30%","30%"],radius,x:"20%",itemStyle:labelFromatter,data:[{name:"other",value:76,itemStyle:labelBottom},{name:"奇幻",value:24,itemStyle:labelTop}]},{type:"pie",center:["50%","30%"],radius,x:"40%",itemStyle:labelFromatter,data:[{name:"other",value:86,itemStyle:labelBottom},{name:"爱情",value:14,itemStyle:labelTop}]},{type:"pie",center:["70%","30%"],radius,x:"60%",itemStyle:labelFromatter,data:[{name:"other",value:89,itemStyle:labelBottom},{name:"惊悚",value:11,itemStyle:labelTop}]},{type:"pie",center:["90%","30%"],radius,x:"80%",itemStyle:labelFromatter,data:[{name:"other",value:73,itemStyle:labelBottom},{name:"冒险",value:27,itemStyle:labelTop}]},{type:"pie",center:["10%","70%"],radius,y:"55%",x:"0%",itemStyle:labelFromatter,data:[{name:"other",value:85,itemStyle:labelBottom},{name:"动作",value:15,itemStyle:labelTop}]},{type:"pie",center:["30%","70%"],radius,y:"55%",x:"20%",itemStyle:labelFromatter,data:[{name:"other",value:46,itemStyle:labelBottom},{name:"喜剧",value:54,itemStyle:labelTop}]},{type:"pie",center:["50%","70%"],radius,y:"55%",x:"40%",itemStyle:labelFromatter,data:[{name:"other",value:74,itemStyle:labelBottom},{name:"科幻",value:26,itemStyle:labelTop}]},{type:"pie",center:["70%","70%"],radius,y:"55%",x:"60%",itemStyle:labelFromatter,data:[{name:"other",value:75,itemStyle:labelBottom},{name:"悬疑",value:25,itemStyle:labelTop}]},{type:"pie",center:["90%","70%"],radius,y:"55%",x:"80%",itemStyle:labelFromatter,data:[{name:"other",value:72,itemStyle:labelBottom},{name:"犯罪",value:28,itemStyle:labelTop}]}]};
