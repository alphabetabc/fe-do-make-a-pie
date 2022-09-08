var struct_colors=["#c73437","#2e4553","#6e7073","#5ba0a7","#8cc8af","#f59731","#bfa29b","#709f84","#d88268"];RICH={name:{color:"#fdfa3e",fontSize:30,lineHeight:30},basic:{color:"#fff",fontSize:18,lineHeight:18}};var info2={children:[{asset_num:5e4,name:"20~25岁",manage:"平均价格",itemStyle:{normal:{color:"#c73437"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",asset_num:20,manage:"liang-02"}]},{asset_num:4e4,name:"25~30岁",manage:"平均价格",itemStyle:{normal:{color:"#2e4553"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",manage:"liang-02",children:[{name:"三级-1",asset_num:10,manage:"liang-01"},{name:"三级-2",asset_num:20,manage:"liang-01"}]}]},{asset_num:25e3,name:"30~35岁",manage:"平均价格",itemStyle:{normal:{color:"#6e7073"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",manage:"liang-02",children:[{name:"三级-1",asset_num:10,manage:"liang-01"},{name:"三级-2",asset_num:20,manage:"liang-01"}]}]},{asset_num:25e3,name:"35~40岁",manage:"平均价格",itemStyle:{normal:{color:"#5ba0a7"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",manage:"liang-02",children:[{name:"三级-1",asset_num:10,manage:"liang-01"},{name:"三级-2",asset_num:20,manage:"liang-01"}]}]},{asset_num:25e3,name:"40~45岁",manage:"平均价格",itemStyle:{normal:{color:"#8cc8af"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",manage:"liang-02",children:[{name:"三级-1",asset_num:10,manage:"liang-01"},{name:"三级-2",asset_num:20,manage:"liang-01"}]}]},{asset_num:35e3,name:"45~50岁",manage:"平均价格",itemStyle:{normal:{color:"#f59731"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",manage:"liang-02",children:[{name:"三级-1",asset_num:10,manage:"liang-01"},{name:"三级-2",asset_num:20,manage:"liang-01"}]}]},{asset_num:35e3,name:"50~55岁",manage:"平均价格",itemStyle:{normal:{color:"#bfa29b"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",manage:"liang-02",children:[{name:"三级-1",asset_num:10,manage:"liang-01"},{name:"三级-2",asset_num:20,manage:"liang-01"}]}]},{asset_num:35e3,name:"55~60岁",manage:"平均价格",itemStyle:{normal:{color:"#709f84"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",manage:"liang-02",children:[{name:"三级-1",asset_num:10,manage:"liang-01"},{name:"三级-2",asset_num:20,manage:"liang-01"}]}]},{asset_num:25e3,name:"60岁以上",manage:"平均价格",itemStyle:{normal:{color:"#d88268"}},children:[{name:"二级组织结构-1",asset_num:20,manage:"liang-01"},{name:"二级组织结构-2",asset_num:20,manage:"liang-01"},{name:"二级-03",manage:"liang-02",children:[{name:"三级-1",asset_num:10,manage:"liang-01"},{name:"三级-2",asset_num:20,manage:"liang-01"}]}]}]},structs_datas=[],formatUtil=echarts.format;function format_struct_data(a,n){for(var e in a){var t=Math.floor(Math.random()*20),l=1;a[e].asset_num!==0&&(l=a[e].asset_num);var m={name:a[e].name,manage:a[e].manage,children:[],asset_num:a[e].asset_num,value:l};format_struct_data(a[e].children,m.children),m.children.length===0&&delete m.children,n.push(m)}}function showMenu(a){console.log("showMenu==============",a);var n=a.event,e=n.offsetX,t=n.offsetY;console.log("showMenu========",e,t)}format_struct_data(info2.children,structs_datas),myChart.setOption(option={title:{text:"",subtext:"",left:"leafDepth"},grid:{left:"0%",top:"0%",right:"0%",bottom:"0%",containLabel:!0},tooltip:{formatter:function(a){console.log("tool------",a);var n=a.data.asset_num,e=a.name;return["<h4>"+e+"</h4>","<div>资产数量："+n+"</div>"].join(`
`)}},series:[{name:"客户特征",type:"treemap",visibleMin:300,data:structs_datas,leafDepth:1,label:{normal:{show:!0,position:"insideTopLeft",formatter:function(a){return console.log("formatter==label=======",a),"{name|"+a.name+`}

{basic|平均价格 : `+a.data.asset_num+"㎡/元}"},textStyle:{fontSize:"18",fontWeight:"bold"},rich:RICH}},levels:[{itemStyle:{normal:{borderWidth:0,gapWidth:3,borderColor:"#111"}}},{itemStyle:{normal:{gapWidth:1,borderColor:"#fff"}}}],breadcrumb:{show:!0,left:"5%",top:"0%",emptyItemWidth:25,itemStyle:{normal:{color:"#fff",borderColor:"rgba(13,25,33,0)",borderWidth:1,shadowColor:"rgba(150,150,150,0)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#000",fontWeight:"bold"}},emphasis:{textStyle:{}}}}}]}),document.oncontextmenu=function(){return!1},myChart.on("contextmenu",showMenu);
