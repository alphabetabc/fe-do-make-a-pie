data=[{name:"公路工程",value:754,num:12,percentage:20},{name:"高速公路",value:611,num:13,percentage:40},{name:"综合交通枢纽及一体化设施",value:400,num:14,percentage:10},{name:"普通公路",value:200,num:15,percentage:30}],arrName=getArrayValue(data,"name"),objData=array2obj(data,"name"),console.log(objData);function getArrayValue(e,t){var t=t||"value",a=[];return e&&e.forEach(function(r){a.push(r[t])}),a}function array2obj(e,o){for(var t={},a=0;a<e.length;a++)t[e[a][o]]=e[a];return t}var option={backgroundColor:"#03060F",legend:{show:!0,icon:"circle",top:"center",right:"20%",data:["公路工程","高速公路","综合交通枢纽及一体化设施","普通公路"],width:50,padding:[0,5],itemGap:25,formatter:function(e){var o=e;e.length>7&&e.length<=16&&(o=`${e.slice(0,7)}
${e.slice(7)}`);var t="{title|"+o+" "+objData[e].percentage+"%}";return t},textStyle:{rich:{title:{fontSize:14,lineHeight:15,color:"#ffffff"}}}},tooltip:{show:!0,trigger:"item",formatter:function(e){console.log(objData[e.name].num);var o=e.name+"<br>";return o='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+e.color.colorStops[0].color+'"></span>'+o,o+=`
投资额(万元)：`+objData[e.name].value,o+="<br>项目数(件)："+objData[e.name].num,o}},title:{text:"普通公路",subtext:"30%",textStyle:{fontSize:14,color:"#ffffff"},subtextStyle:{color:"#ffffff",fontSize:32},x:"22%",y:"46%"},series:[{type:"pie",center:["25%","50%"],color:[{type:"radial",x:.1,r:1,colorStops:[{offset:0,color:"#007aff"},{offset:1,color:"#133ffd"}],global:!1},{type:"radial",x:.1,r:1,colorStops:[{offset:0,color:"#6a47ff"},{offset:1,color:"#637fea"}],global:!1},{type:"radial",x:.1,r:1,colorStops:[{offset:0,color:"#e4ad37"},{offset:1,color:"#d5ffac"}],global:!1},{type:"radial",x:.1,r:1,colorStops:[{offset:0,color:"#29c5ff"},{offset:1,color:"#20ddff"}],global:!1}],radius:[60,90],label:{show:!1},data}]};