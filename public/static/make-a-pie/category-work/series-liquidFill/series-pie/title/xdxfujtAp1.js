var value=.65,data=[value,value,value];function Pie(){let t=[];for(var e=0;e<150;e++)e%2===0?t.push({name:(e+1).toString(),value:25,itemStyle:{normal:{color:"#fff",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):t.push({name:(e+1).toString(),value:10,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return t}var option={backgroundColor:"#462f9b",title:[{text:"MARGINAL COST✍",x:"50%",y:30,textAlign:"center",textStyle:{fontSize:"30",fontWeight:"100",color:"#fff",textAlign:"center"}},{text:(value*100).toFixed(0)+"%",left:"50%",top:"30%",textAlign:"center",textStyle:{fontSize:"40",fontWeight:"400",color:"#fff",textAlign:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#000",textShadowBlur:"0",textShadowOffsetX:0,textShadowOffsetY:1}}],series:[{type:"liquidFill",radius:"70%",z:6,center:["50%","50%"],amplitude:20,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"rgba(250, 111, 202, 1)"},{offset:.5,color:"rgba(252, 140, 199, .5)"},{offset:0,color:"rgba(255, 197, 196, 1)"}],globalCoord:!1},data:[.6,{value:.5,direction:"left"},.4,.3],backgroundStyle:{borderWidth:1,color:"transparent"},label:{normal:{formatter:""}},outline:{show:!0,itemStyle:{borderWidth:0},borderDistance:0}},{name:"4",type:"pie",z:1,radius:"70.5%",center:["50%","50%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[{value:100,itemStyle:{normal:{color:"#ac9ed1"}}}]},{name:"5",type:"pie",z:1,radius:"70%",center:["50%","50%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[{value:100,itemStyle:{normal:{color:"#462f9b"}}}]},{type:"pie",zlevel:0,silent:!0,radius:["60%","61%"],z:10,itemStyle:{normal:{areaColor:"rgba(137, 137, 137, .3)",borderColor:"#888"},emphasis:{label:{show:!1},areaColor:"rgba(255, 255, 255, .1)"}},label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:Pie()}]};