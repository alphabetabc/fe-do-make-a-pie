let DATA=[{name:"1",value:[1,300]},{name:"2",value:[2,300]},{name:"3",value:[2,225]},{name:"4",value:[2,150]},{name:"5",value:[4,300]},{name:"6",value:[7,300],end:!0},{name:"6.8",value:[7,275],label:{show:!1},itemStyle:{color:"rgb(255, 255, 255,0)",borderColor:"rgb(255, 255, 255,0)"}},{name:"6.2",value:[6,275],label:{show:!1},itemStyle:{color:"rgb(255, 255, 255,0)",borderColor:"rgb(255, 255, 255,0)"}},{name:"7",value:[6,250]},{name:"8",value:[8,250],end:!0},{name:"18",value:[5,225],end:!0},{name:"19",value:[4,150],end:!0},{name:"19.2",value:[3,125],label:{show:!1},itemStyle:{color:"rgb(255, 255, 255,0)",borderColor:"rgb(255, 255, 255,0)"}},{name:"19.8",value:[4,125],label:{show:!1},itemStyle:{color:"rgb(255, 255, 255,0)",borderColor:"rgb(255, 255, 255,0)"}},{name:"20",value:[3,100]},{name:"21",value:[5,100],end:!0},{name:"29",value:[5.8,57.5]},{name:"30",value:[6,65],symbol:"none"},{name:"31",value:[6,50],symbol:"none"},{name:"32",value:[8,65],symbol:"none"},{name:"33",value:[8,50],symbol:"none"},{name:"34",value:[8.2,57.5],end:!0},{name:"29-solid",value:[6.3,57.5],symbol:"none"},{name:"34-solid",value:[7.9,57.5],symbol:"none"},{name:"34.8",value:[8.2,40],label:{show:!1},itemStyle:{color:"rgb(255, 255, 255,0)",borderColor:"rgb(255, 255, 255,0)"}},{name:"34.2",value:[6.8,40],label:{show:!1},itemStyle:{color:"rgb(255, 255, 255,0)",borderColor:"rgb(255, 255, 255,0)"}},{name:"35",value:[6.8,22.5]},{name:"36",value:[7,30],symbolSize:15},{name:"37",value:[7,15],symbolSize:15},{name:"38",value:[9,30],symbolSize:15},{name:"39",value:[9,15],symbolSize:15},{name:"40",value:[9.2,22.5],end:!0}],LINKS=[{source:"1",target:"2"},{source:"2",target:"3"},{source:"2",target:"5"},{source:"5",target:"6",value:"6#基础底板",label:{show:!0,position:"middle",formatter:"{c}"}},{source:"6",target:"6.8",lineStyle:{type:"dashed"},symbol:"none"},{source:"6.8",target:"6.2",lineStyle:{type:"dashed"},symbol:"none"},{source:"6.2",target:"7",lineStyle:{type:"dashed"}},{source:"7",target:"8"},{source:"3",target:"4"},{source:"3",target:"18",value:"南区西侧底板",label:{show:!0,position:"middle",formatter:"{c}"}},{source:"4",target:"19",value:"南区东侧底板",label:{show:!0,position:"middle",formatter:"{c}"}},{source:"19",target:"19.8",lineStyle:{type:"dashed"},symbol:"none"},{source:"19.8",target:"19.2",lineStyle:{type:"dashed"},symbol:"none"},{source:"19.2",target:"20",lineStyle:{type:"dashed"}},{source:"20",target:"21",value:"南区结构-地下3层（车库2层）",label:{show:!0,position:"middle",formatter:"{c}"}},{source:"30",target:"31",symbol:"none"},{source:"30",target:"32",symbol:"none"},{source:"31",target:"33",symbol:"none"},{source:"32",target:"33",symbol:"none"},{source:"29-solid",target:"34-solid",symbol:"none",lineStyle:{width:10}},{source:"34",target:"34.8",lineStyle:{type:"dashed"},symbol:"none"},{source:"34.8",target:"34.2",lineStyle:{type:"dashed"},symbol:"none"},{source:"34.2",target:"35",lineStyle:{type:"dashed"}},{source:"36",target:"37",symbol:"none"},{source:"36",target:"38",symbol:"none"},{source:"37",target:"39",symbol:"none"},{source:"38",target:"39",symbol:"none"}];const generatorLineNodes=(t,n)=>{let l=[];for(let e=1;e<=n;e++)l.push({name:`timeLine-${e}`,value:[t,e],label:{show:!1},itemStyle:{color:"rgb(255, 255, 255,0)",borderColor:"rgb(255, 255, 255,0)"}});let a=[];for(let e=0;e<l.length&&!(e+5>=l.length);e++){let o=DATA.filter(r=>r.value[1]===l[e+5].value[1]&&r.value[0]<l[e+5].value[0]);o.length>0&&o.sort((r,s)=>s.value[0]-r.value[0]),o[0]?.name&&e+5<l.length&&e-5>=0&&!o[0]?.name.includes(".")&&!o[0]?.end?(a.push({source:l[e].name,target:o[0].name,lineStyle:{type:"solid",color:"red",width:2},symbol:"none"}),e+=9,a.push({source:o[0].name,target:l[e+1].name,lineStyle:{type:"solid",color:"red",width:2},symbol:"none"})):a.push({source:l[e].name,target:l[e+1].name,lineStyle:{type:"solid",color:"red",width:2},symbol:"none"})}return{nodes:l,linkNodes:a}};let LineNodes=generatorLineNodes(3,320);const generatorOpt=t=>({title:{text:"Graph图-节点连接"},tooltip:{show:!1},xAxis:[{type:"value",boundaryGap:!1,splitLine:{show:!1},data:[0,1,2,3,4,5,6,7,8,9,10]}],yAxis:{type:"value",splitLine:{show:!1}},series:[{type:"graph",layout:"none",coordinateSystem:"cartesian2d",symbolSize:20,edgeSymbol:["circle","arrow"],edgeSymbolSize:[0,10],itemStyle:{color:"#fff",borderColor:"#000"},label:{show:!0,color:"#000"},data:DATA.concat(t.nodes),links:LINKS.concat(t.linkNodes),lineStyle:{normal:{color:"#2f4554"}}}]});option=generatorOpt(LineNodes);
