var data=[{type:"钢卷库",value:6.62,name:"钢商品材"},{type:"钢卷库",value:6.07,name:"上工序"},{type:"钢卷库",value:1.04,name:"余材"},{type:"钢卷库",value:0,name:"占位"},{type:"板坯库",value:40,name:"商品材"},{type:"板坯库",value:20,name:"上工序"},{type:"板坯库",value:32,name:"余材"},{type:"板坯库",value:0,name:"占位"}],getchartdata=function(t,a){var r=[];let l=0;for(var e=0;e<t.length;e++)t[e].type==a&&(l+=t[e].value,t[e].name==="占位"&&(t[e].value=l*3,t[e].label={show:!1},t[e].labelLine={show:!1},t[e].itemStyle={show:!1,normal:{color:"rgba(0,0,0,0)",borderWidth:0}}),r.push(t[e]));return r},option={series:[{name:"钢卷库",type:"pie",radius:"60%",top:"20%",left:"-10%",startAngle:180,data:getchartdata(data,"钢卷库"),itemStyle:{normal:{borderColor:"#2b2a38",borderWidth:1}},label:{formatter:`{sm|{b}}
{hr|}
{xm|{c}}`,rich:{sm:{fontSize:16,padding:[0,0,5,0]},xm:{fontSize:14,padding:[5,0,0,0]},hr:{height:0,borderWidth:1,width:"100%",borderColor:"#d3d3d3"}}},labelLine:{normal:{show:!0,length:10,length2:30,smooth:.2,lineStyle:{color:"#d3d3d3"}}}},{name:"板坯库",type:"pie",radius:"60%",top:"20%",startAngle:0,clockwise:!1,left:"10%",data:getchartdata(data,"板坯库"),itemStyle:{normal:{borderColor:"#2b2a38",borderWidth:1}},label:{formatter:`{sm|{b}}
{hr|}
{xm|{c}}`,rich:{sm:{fontSize:16,padding:[0,0,5,0]},xm:{fontSize:14,padding:[5,0,0,0]},hr:{height:0,borderWidth:1,width:"100%",borderColor:"#d3d3d3"}}},labelLine:{normal:{show:!0,length:10,length2:30,smooth:.2,lineStyle:{color:"#d3d3d3"}}}}]};myChart.setOption(option);
