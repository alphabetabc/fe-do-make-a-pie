var data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];function series(e){var n=[{name:"Line 1",type:"pie",clockWise:!1,radius:["22%","23%"],center:["50%","10%"],itemStyle:{normal:{label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,label:{show:!1},data:[{value:300,name:"01"}]},{type:"pie",radius:["20%","22%"],center:["50%","10%"],label:{normal:{position:"center",textStyle:{color:"#c23531"},formatter:"{b}"}},data:[{name:"占有率",value:.8,itemStyle:{normal:{color:"#d4d0c7"}}},{name:20+"%",value:.2,itemStyle:{normal:{}}}]}],a=80/(e.length%2==1?e.length+1:e.length),t=[];t.push(a*2-3+"%"),t.push(a*2+"%");for(var l=0;l<e.length;l++){var o=[],s,i;s=25+50*(l%2),i=parseInt(l/2)*a*2+a+20,o.push(s+"%"),o.push(i+"%");var r;do r=parseInt(16777515*Math.random());while(r<13947179);var h="#"+r.toString(16);console.log(h);var m={type:"pie",radius:t,center:o,label:{normal:{position:"center",textStyle:{color:"#c23531"},formatter:"{b}"}},data:[{name:"占有率",value:1-e[l]/20,itemStyle:{normal:{color:"#d4d0c7"}}},{name:e[l]/20*100+"%",value:e[l]/20,itemStyle:{normal:{}}}]};n.push(m)}return n}option={title:{text:"测试"},tooltip:{show:!1},toolbox:{show:!1},legend:{show:!1},series:series(data)};