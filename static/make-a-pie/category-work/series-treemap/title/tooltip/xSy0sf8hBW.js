var struct_colors=["#ed6f6d","#f3765d","#f77a57","#f98866","#f99579","#ff9f3b","#f0a732","#e6a840","#e9b253","#ebbb66","#78b7e8","#59b1f3","#66bbf5","#6ec3f2","#75cae2","#70cccc","#5dc4c4","#4dbebd","#4cc1a7","#4fca96","#4cc686"],info2={children:[{value:2,name:"一级结构",manage:"liang-01"},{value:42,name:"fds-------test--------------------------yy----",manage:"liang-01"},{children:[{name:"二级组织结构-1",value:20,manage:"liang-01"},{name:"二级组织结构-2",value:20,manage:"liang-01"},{children:[{name:"三级-1",value:10,manage:"liang-01"},{name:"三级-2",value:20,manage:"liang-01"}],name:"二级-03",manage:"liang-02"}],name:"has children",manage:"liang-01"},{name:"fds no children",value:100,manage:"liang-01"}]},structs_datas=[],formatUtil=echarts.format;function format_struct_data(e,t){for(var a in e){var l=Math.floor(Math.random()*20),n={itemStyle:{normal:{color:struct_colors[l]}},name:e[a].name,manage:e[a].manage,value:e[a].value,children:[]};format_struct_data(e[a].children,n.children),n.children.length===0&&delete n.children,t.push(n)}}function showMenu(e){console.log("showMenu==============",e);var t=e.event,a=t.offsetX,l=t.offsetY;console.log("showMenu========",a,l)}format_struct_data(info2.children,structs_datas),myChart.setOption(option={title:{text:"树图构建组织结构",subtext:"2017/07 by liang",left:"leafDepth"},tooltip:{formatter:function(e){var t=e.value,a=e.name;return["<h4>"+a+"</h4>","<p> 资产数量："+t+"</p>"].join("")}},series:[{name:"org",type:"treemap",visibleMin:300,data:structs_datas,leafDepth:1,label:{normal:{show:!0,position:"insideTopLeft",formatter:function(e){return console.log("formatter==label=======",e),e.name+`

资产数量 : `+e.data.value+`
管理员 ： `+e.data.manage},textStyle:{fontSize:"14",fontWeight:"bold"}}},levels:[{itemStyle:{normal:{borderWidth:0,gapWidth:2}}},{itemStyle:{normal:{gapWidth:2}}},{itemStyle:{normal:{gapWidth:2}}}],breadcrumb:{show:!0,left:"10%",top:"93%",emptyItemWidth:25,itemStyle:{normal:{color:"#fff",borderColor:"rgba(255,255,255,0.7)",borderWidth:1,shadowColor:"rgba(150,150,150,1)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#000",fontWeight:"bold"}},emphasis:{textStyle:{}}}}}]}),document.oncontextmenu=function(){return!1},myChart.on("contextmenu",showMenu);