var getGround=function(a,l){for(var o=[],t=Math.random()*30,e=0;e<60;e++)o.push(Math.sin(e/2+t)/a+l);return o},getMountainBottom=function(a,l){for(var o=[],t=0;t<60;t++)o.push([t/(l||1),Math.random()*2+a]);return o};option={grid:{left:"0",right:"0",bottom:"0"},xAxis:[{boundaryGap:!1,data:new Array(60),splitLine:{show:!1}}],yAxis:[{min:0,max:20,type:"value",splitLine:{show:!1}}],backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#d2e6f4"},{offset:1,color:"#a5d9ee"}]},series:[{type:"graph",data:function(){var a=Math.random()*100+80,l=Math.random()*160+20,o=Math.random()*10+5;return[{symbolSize:0,x:0,y:0},{symbolSize:0,x:200,y:100},{symbolSize:a+40,x:l,y:o,itemStyle:{normal:{opacity:.3}}},{symbolSize:a+20,x:l,y:o,itemStyle:{normal:{opacity:.5}}},{symbolSize:a,x:l,y:o}]}(),itemStyle:{normal:{color:"#f4f29a"}},z:-1,animationDelay:2500},{type:"graph",data:function(){for(var a=[{symbolSize:0,x:0,y:0},{symbolSize:0,x:200,y:100}],l=0;l<5;l++){var o=[Math.random()*60+60,60],t=Math.random()*40+40*l,e=Math.random()*5+5;a.push({symbolSize:o,x:t,y:e,symbolOffset:[0,-30]}),a.push({symbolSize:o,x:t,y:e,symbolOffset:[-30,0]}),a.push({symbolSize:o,x:t,y:e,symbolOffset:[30,0]})}return a}(),itemStyle:{normal:{color:"#fff"}},symbolSize:[80,20],z:-1,animationDelay:1800},{type:"line",areaStyle:{normal:{color:"#f3f3f3",opacity:1}},data:getMountainBottom(6,.25),symbolSize:0,lineStyle:{normal:{width:0}},animationDelay:600},{type:"line",areaStyle:{normal:{color:"#f3f3f3",opacity:1}},data:function(){window.r=Math.random()*10|0;var a=new Array(r).fill(0).concat([5,6,7,8,9,10,11,12,13,14,13,10,11,10,9,8,7,6,5]).concat(new Array(40-r).fill(0));return console.log(a),a}(),symbolSize:0,lineStyle:{normal:{width:0}},animationDelay:1400},{type:"line",areaStyle:{normal:{color:"#354967",opacity:1}},data:function(){var a=new Array(r).fill(0).concat([5,6,7,8,9,8,9,8,9,7,6,9,7,8,9,8,7,6,5]).concat(new Array(40-r).fill(0));return console.log(a),a}(),symbolSize:0,lineStyle:{normal:{width:0}},animationDelay:1200},{type:"line",areaStyle:{normal:{color:"#f3f3f3",opacity:1}},data:function(){window.r1=Math.random()*10+20|0;var a=new Array(r1).fill(0).concat([6,7,8,9,10,11,12,13,14,15,16,15,16,17,18,19,18,17,16,15,14,13,12,11,12,11,10,9,8,7]).concat(new Array(30-r1).fill(0));return console.log(a),a}(),symbolSize:0,lineStyle:{normal:{width:0}},animationDelay:1e3},{type:"line",areaStyle:{normal:{color:"#354967",opacity:1}},data:function(){var a=new Array(r1).fill(0).concat([6,7,8,9,10,11,12,11,13,12,11,12,11,13,11,12,11,10.5,12,13,11,12,10.5,10,9,11,10,9,8,7]).concat(new Array(30-r1).fill(0));return console.log(a),a}(),symbolSize:0,lineStyle:{normal:{width:0}},animationDelay:800},{type:"line",areaStyle:{normal:{color:"#354967",opacity:1}},data:getMountainBottom(5),symbolSize:0,lineStyle:{normal:{width:0}},animationDelay:600},{type:"line",areaStyle:{normal:{color:"#479174",opacity:1}},data:getGround(4,2),smooth:!0,symbolSize:0,lineStyle:{normal:{width:0}},animationDelay:400},{type:"line",areaStyle:{normal:{color:"#5daf85",opacity:1}},data:getGround(6,1.5),smooth:!0,symbolSize:0,lineStyle:{normal:{width:0}},animationDelay:200},{type:"line",areaStyle:{normal:{color:"#86c786",opacity:1}},data:getGround(8,1),smooth:!0,symbolSize:0,lineStyle:{normal:{width:0}}}]};