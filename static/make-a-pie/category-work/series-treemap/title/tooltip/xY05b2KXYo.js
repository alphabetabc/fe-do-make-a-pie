document.getElementById("chart-panel").style.backgroundColor="rgba(13, 17, 29)";var data=[{name:"1920*1080",value:100,percent:4.5},{name:"其他",value:40,percent:4.5},{name:"1366x768",value:30,percent:4.5},{name:"1440x900",value:25,percent:4.5},{name:"1600x900",value:15,percent:4.5},{name:"1536x864",value:10,percent:4.5},{name:"768x1024",value:12,percent:4.5},{name:"1024x768",value:14,percent:4.5}],option=option={title:{show:!1},tooltip:{formatter:function(e){return e.name+" : <span style='color:rgba(25, 181, 165)'>"+e.data.percent+"%</span>"},backgroundColor:"rgba(29, 38, 71)",extraCssText:"box-shadow: 0 0 3px rgba(10, 88, 82, 0.8);"},series:[{type:"treemap",left:"center",breadcrumb:{show:!1},itemStyle:{normal:{label:{show:!0,formatter:"{b}"},borderWidth:1,borderColor:"rgba(57, 111, 255)",strokeWidth:2,strokeColor:"rgba(57, 111, 255)"},emphasis:{label:{show:!0,color:"rgba(22, 90, 90)"},color:"rgba(92, 117, 212)"}},label:{normal:{fontSize:14}},data}],color:["rgba(35, 89, 232)"]};
