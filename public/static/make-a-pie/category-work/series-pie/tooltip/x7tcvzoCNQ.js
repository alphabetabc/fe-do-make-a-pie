function hexToRgba(e,t){return"rgba("+parseInt("0x"+e.slice(1,3))+","+parseInt("0x"+e.slice(3,5))+","+parseInt("0x"+e.slice(5,7))+","+t+")"}backgroundColor="rgba(0,0,0,1)",chartdata=[{name:"竞争性谈判",value:30},{name:"公开招标",value:50}],radius=["30%","34%"],color=["#16d6cd","#027aff"],labelshow=!0,centerimg=!0,lineshow=!1;let color1=[],color2=[];color.forEach(e=>{color1.push(hexToRgba(e,.4),"transparent"),color2.push(hexToRgba(e,.7),"transparent")});let data1=[],sum=0;chartdata.forEach(e=>{sum+=Number(e.value)}),chartdata.forEach(e=>{data1.push(e,{name:"",value:sum/50,labelLine:{show:!1,lineStyle:{color:"transparent"}},itemStyle:{color:"transparent"}})});let radius2=[Number(radius[1].split("%")[0])+0+"%",Number(radius[1].split("%")[0])+4+"%"],radius3=[Number(radius[1].split("%")[0])+4+"%",Number(radius[1].split("%")[0])+8+"%"];option={backgroundColor,grid:{top:0,bottom:0,left:0,right:0,containLabel:!0},tooltip:{formatter:e=>{if(e.name!="")return e.name+" : "+e.value+`
(`+e.percent+"%)"}},series:[{type:"pie",radius:radius3,center:["50%","50%"],color,hoverAnimation:!1,startAngle:90,selectedMode:"single",selectedOffset:0,itemStyle:{normal:{}},label:{show:!0,position:"outside",formatter:e=>{let t=0;if(data1.forEach((a,r)=>{r<=e.dataIndex&&a.name!=""&&(r==e.dataIndex?t+=Number(a.value)/2:t+=Number(a.value))}),e.name!="")return t/sum>.5?"{txt|"+(e.value*100/sum).toFixed(0)+`%}
{san|▶}`:"{txt|"+(e.value*100/sum).toFixed(0)+`%}
{san|◀}`},align:"left",padding:[0,-50,10,-60],rich:{txt:{color:"#fff",width:10,height:10,padding:[10,10,0,24]},san:{padding:[12,-3,-20,10]}}},labelLine:{show:!0,length:15,length2:60,lineStyle:{color:"#fff",width:2}},data:data1,z:666},{type:"pie",radius:radius2,center:["50%","50%"],hoverAnimation:!1,startAngle:90,selectedMode:"single",selectedOffset:0,itemStyle:{normal:{color:e=>color2[e.dataIndex]}},label:{show:!1,formatter:"{b} {c}"},data:data1,z:666},{type:"pie",radius,center:["50%","50%"],color:color1,hoverAnimation:!1,startAngle:90,selectedMode:"single",selectedOffset:0,itemStyle:{normal:{color:e=>color1[e.dataIndex]}},label:{show:!1,formatter:"{b} {c}"},data:data1,z:666}]};
