const color=["rgb(79,173,175)","rgb(78,170,248)","rgb(238,143,83)","rgb(237,113,75)"],color1=[{type:"linear",x:1,y:0,x2:0,y2:.8,colorStops:[{offset:0,color:"rgba(79,173,175, 0.2)"},{offset:1,color:"rgba(79,173,175, 0.01)"}],global:!1},{type:"linear",x:1,y:0,x2:0,y2:.8,colorStops:[{offset:0,color:"rgba(78,170,248, 0.2)"},{offset:1,color:"rgba(78,170,248, 0.01)"}],global:!1},{type:"linear",x:1,y:0,x2:0,y2:.8,colorStops:[{offset:0,color:"rgba(238,143,83, 0.2)"},{offset:1,color:"rgba(238,143,83, 0.01)"}],global:!1},{type:"linear",x:1,y:0,x2:0,y2:.8,colorStops:[{offset:0,color:"rgba(237,113,75, 0.2)"},{offset:1,color:"rgba(237,113,75, 0.01)"}],global:!1}],datas=[{name:"111",value:30},{name:"222",value:50},{name:"333",value:70},{name:"444",value:100}];option={backgroundColor:"#ffffff",tooltip:{show:!0},legend:{right:"0",top:"center",orient:"vertical",itemWidth:20,itemHeight:20,icon:"rect",data:datas},series:[{type:"pie",radius:["40%","45%"],center:["30%","50%"],hoverAnimation:!0,z:9,itemStyle:{color:function(o){return color[o.dataIndex]}},label:{show:!1},data:datas,labelLine:{show:!1}},{type:"pie",radius:["0%","45%"],center:["30%","50%"],hoverAnimation:!0,z:10,itemStyle:{normal:{borderWidth:5,borderColor:"#ffffff",color:function(o){return color1[o.dataIndex]}}},label:{show:!1},data:datas,labelLine:{show:!1}}]};