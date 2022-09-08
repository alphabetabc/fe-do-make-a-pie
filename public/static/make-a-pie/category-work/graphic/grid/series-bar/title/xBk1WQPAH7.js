var data={xjm:[500,300,490,333,346],zjm:[300,400,500,300,400],djm:[60,80,90,60,70]};function getTableLine(e){for(var t=[],a=250,r=20,o=0;o<e;o++)t.push({type:"line",bottom:a-o*r,right:10,style:{fill:"#333"},shape:{x1:0,y1:0,x2:3200,y2:0}});return t}var lineList=getTableLine(4);option={color:["#3e6591","#eb7d22","#d73f45"],title:[{text:` 
小截面
中截面
大截面`,bottom:215,left:10,textStyle:{lineHeight:20,fontSize:13,fontWeight:"bold",formatter:function(e){return"{table|"+e+"}"},rich:{table:{align:"center"}}}}],grid:{bottom:300,left:60,right:10},yAxis:{type:"value"},xAxis:[{type:"category",boundaryGap:!0,offset:20,axisTick:{length:110},data:["35KV","110KV","220KV","500KV","800KV"],axisLabel:{formatter:function(e,t){return"{table|"+e+`}
{table|`+data.xjm[t]+`}
{table|`+data.zjm[t]+`}
{table|`+data.djm[t]+"}"},rich:{table:{lineHeight:20,fontWeight:"bold",align:"center"}}}}],series:[{type:"bar",data:[220,182,191,234,290],label:{normal:{show:!0,position:"bottom",textStyle:{color:"#000"},formatter:"小截面"}}},{type:"bar",data:[210,132,91,204,220],label:{normal:{show:!0,position:"bottom",textStyle:{color:"#000"},formatter:"中截面"}}},{type:"bar",data:[120,132,131,254,278],label:{normal:{show:!0,position:"bottom",textStyle:{color:"#000"},formatter:"大截面"}}}],graphic:lineList};
