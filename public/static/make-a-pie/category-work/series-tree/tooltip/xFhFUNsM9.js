var data={name:"信息化业务",symbolSize:100,value:"",itemStyle:{normal:{color:{type:"radial",r:.9,colorStops:[{offset:0,color:"#0c1746"},{offset:1,color:"#54f7ff"}]},borderColor:"none"}},label:{normal:{show:!0,position:"inside",color:"black",formatter:function(e){return e.data.name+`
 `+e.data.value}}},children:[{name:"精细化管理",value:"",symbolSize:60,lineStyle:{},itemStyle:{normal:{color:"#F099B7",borderColor:"#F099B7"}},children:[{name:"EMP2.0",children:[{name:"生产经营管理子系统"},{name:"采购管理子系统"},{name:"项目管理子系统"}]}]},{name:"数字化转型",value:"",symbolSize:60,lineStyle:{},itemStyle:{normal:{color:"#59B1F3",borderColor:"#59B1F3"}},children:[{name:"理论体系",children:[{name:"数据生态与应用生态理论"},{name:"数字化交付理论"},{name:"数据资产管理理论"},{name:"数字孪生体构建理论"}]},{name:"标准体系",children:[{name:"油气田地面工程数字化交付标准"},{name:"油气田地面工程数字化交付技术规定"},{name:"数据资产管理与运营数据标准"}]},{name:"工具体系",children:[{name:"三维轻量化引擎"},{name:"标准数仓"},{name:"数据交付中台"},{name:"数据管理平台"},{name:"数据采集"}]},{name:"工程实践",children:[{name:"四线数字化压气站"},{name:"长宁50亿数字化气田"},{name:"浙江油田太阳——大寨数字化气田"},{name:"萧山-义务数字化管道"}]}]},{name:"全球业务协同",value:"",symbolSize:60,lineStyle:{},orient:{symbolSize:100,symbol:"circle"},label:{normal:{show:!0,position:"center",verticalAlign:"large",align:"center",color:"red"}},children:[{name:"资源云发布",children:[{name:"软件云"},{name:"知识云"},{name:"数据云"}]},{name:"协同设计",children:[{name:"PDCS"},{name:"文档协同"}]},{name:"协同EPC",children:[{name:"协同建造平台"},{name:"数据资产管理平台"}]}]}]};function formatterHover(e){return e.data.name+`
 `}myChart.setOption(option={tooltip:{trigger:"item",triggerOn:"mousemove",enterable:!0,formatter:formatterHover},series:[{type:"tree",initialTreeDepth:0,layout:"radial",data:[data],draggable:!1,top:"10%",left:"10%",bottom:"10%",right:"10%",symbolSize:40,symbol:"circle",label:{normal:{position:"bottom",verticalAlign:"middle",align:"center",textStyle:{color:"black",fontStyle:"normal",fontWeight:"400",fontFamily:"sans-serif",fontSize:12},formatter:function(e){}}},lineStyle:{curveness:0},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(25, 100, 150, 0.8)",shadowOffsetY:10,color:{type:"radial",r:.9,colorStops:[{offset:0,color:"#0c1746"},{offset:1,color:"#54f7ff"}]},borderColor:"none",opacity:1}},leaves:{label:{normal:{position:"bottom",verticalAlign:"middle",align:"center",formatter:function(e){}}}}}]});
