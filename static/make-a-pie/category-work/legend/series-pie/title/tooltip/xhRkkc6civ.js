var data=genData(5);option={title:{text:"2017年新闻记者学历统计情况",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:data.legendData,selected:data.selected},series:[{name:"姓名",type:"pie",radius:"55%",center:["40%","50%"],data:data.seriesData,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};var data=genData(5);option={title:{text:"新闻记者学历统计情况",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:data.legendData,selected:data.selected},series:[{name:"姓名",type:"pie",radius:"55%",center:["40%","50%"],data:data.seriesData,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};function genData(c){for(var a=["专科","本科","硕士","博士","其他学历"],t=[],r=[],n={},d=[42130,167104,20919,780,631],e=0;e<5;e++)name=a[e],t.push(name),r.push({name,value:d[e]}),n[name]=e<6;return{legendData:t,seriesData:r,selected:n};function h(l,m){for(var i=Math.ceil(Math.random()*l+m),o=[],s=0;s<i;s++)o.push(a[Math.round(Math.random()*a.length-1)]);return o.join("")}}
