let dataPie=[{value:252,name:"特级"},{value:168,name:"一级"},{value:134,name:"二级"},{value:118,name:"三级"},{value:101,name:"自带"}],colorPie=["#173852","#0b2036","#002e49"],colorWrap=["#3087d6","#4be1ff","#b6e9ff","#18edc9","#6ac5fa","#f6ce54"],baseDataPie=[],baseDataWrap=[],total=0,legenddata1=[],legenddata2=[];dataPie.forEach(function(e,t,o){total+=e.value,t<3?legenddata1.push(dataPie[t].name):legenddata2.push(dataPie[t].name)});for(let e=0;e<dataPie.length;e++)baseDataWrap.push({value:dataPie[e].value,name:dataPie[e].name,itemStyle:{normal:{color:colorWrap[e],borderWidth:5,borderColor:colorWrap[e],shadowBlur:50,shadowColor:"rgba(7, 132, 250, 0.8)"}}},{value:5,name:"",itemStyle:{normal:{color:"transparent",borderWidth:5,borderColor:"transparent"}},tooltip:{show:!1}}),e<3&&baseDataPie.push({value:33,name:"",itemStyle:{normal:{borderWidth:20,borderColor:colorPie[e]}}});option={backgroundColor:"#031223",title:[{text:"人员总数",subtext:"842",textAlign:"center",textStyle:{color:"#00b5f3",fontSize:12,lineHeight:12},subtextStyle:{color:"#fff",fontSize:16,fontWeight:800},x:"25%",y:"center"}],grid:{left:"1%",right:"1%",top:"1%",bottom:"1%"},tooltip:{show:!0,trigger:"item",formatter:"{a}：{b} <br/>数量：{c}"},legend:[{data:legenddata1,icon:"vertical",right:"100px",top:"center",orient:"vertical",itemGap:20,itemWidth:15,itemHeight:8,formatter:function(e){let t,o;for(let l=0;l<dataPie.length;l++)dataPie[l].name===e&&(t=dataPie[l].value,o=(t/total*100).toFixed(1));return[o+"%  {yellow|"+t+"}"," {white|"+e+"}"].join(`
`)},textStyle:{lineHeight:20,color:"#f0f4f6",align:"right",rich:{yellow:{color:"#00b5f3",fontWeight:"bold"},white:{color:"#cdcdcd",align:"right"}}}},{data:legenddata2,icon:"vertical",right:"5px",top:"center",orient:"vertical",itemGap:20,itemWidth:15,itemHeight:8,formatter:function(e){let t,o;for(let l=0;l<dataPie.length;l++)dataPie[l].name===e&&(t=dataPie[l].value,o=(t/total*100).toFixed(1));return[o+"%  {yellow|"+t+"}"," {white|"+e+"}"].join(`
`)},textStyle:{lineHeight:20,color:"#f0f4f6",align:"right",rich:{yellow:{color:"#00b5f3",fontWeight:"bold"},white:{color:"#cdcdcd",align:"right"}}}}],series:[{name:"人员总数",type:"pie",clockWise:!1,hoverAnimation:!1,center:["30%","50%"],radius:["80%","81%"],label:{normal:{show:!1}},data:baseDataWrap},{name:"",type:"pie",color:colorPie,selectedMode:"single",radius:["55%","58%"],center:["30%","50%"],hoverAnimation:!1,label:{normal:{show:!1}},tooltip:{show:!1},data:baseDataPie}]};