data=[{name:"本科及以上",value:13211},{name:"高中",value:42111},{name:"初中及以下",value:81711},{name:"其他",value:121711}],objData=array2obj(data,"name");function array2obj(e,t){for(var l={},a=0;a<e.length;a++)l[e[a][t]]=e[a];return l}console.log(objData),option={backgroundColor:"#fff",color:["#FF8700","#ffc300","#00e473","#009DFF"],grid:{top:"15%",bottom:"54%",left:"30%",containLabel:!1},series:[{name:"学历",type:"pie",clockWise:!1,hoverAnimation:!1,radius:["65%","57%"],center:["30%","50%"],label:{show:!1},data:[{value:13211,name:"本科及以上"},{value:245533,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]},{name:"",type:"pie",silent:!0,z:1,clockWise:!1,hoverAnimation:!1,radius:["65%","57%"],center:["30%","50%"],label:{show:!1},data:[{value:7.5,itemStyle:{color:"#E3F0FF"}},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]},{name:"学历",type:"pie",clockWise:!1,hoverAnimation:!1,radius:["50%","42%"],center:["30%","50%"],label:{show:!1},data:[{value:42111,name:"高中"},{value:216633,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]},{name:"",type:"pie",silent:!0,z:1,clockWise:!1,hoverAnimation:!1,radius:["50%","42%"],center:["30%","50%"],label:{show:!1},data:[{value:7.5,itemStyle:{color:"#E3F0FF"}},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]},{name:"学历",type:"pie",clockWise:!1,hoverAnimation:!1,radius:["35%","27%"],center:["30%","50%"],label:{show:!1},data:[{value:81711,name:"初中及以下"},{value:177033,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]},{name:"",type:"pie",silent:!0,z:1,clockWise:!1,hoverAnimation:!1,radius:["35%","27%"],center:["30%","50%"],label:{show:!1},data:[{value:7.5,itemStyle:{color:"#E3F0FF"}},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]},{name:"学历",type:"pie",clockWise:!1,hoverAnimation:!1,radius:["20%","12%"],center:["30%","50%"],label:{show:!1},data:[{value:121711,name:"其他"},{value:137033,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]},{name:"",type:"pie",silent:!0,z:1,clockWise:!1,hoverAnimation:!1,radius:["20%","12%"],center:["30%","50%"],label:{show:!1},data:[{value:7.5,itemStyle:{color:"#E3F0FF"}},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]}],tooltip:{show:!0,trigger:"item",formatter:"{a}<br>{b}:{c}({d}%)"},legend:{show:!0,top:"center",left:"70%",formatter:function(e){return e+objData[e].value+"人"}}};
