var bae;setInterval(function(){bae=parseInt(Math.random()*29+1),console.log(bae);var n="2017-11-"+bae,r=n.split("-"),l=c(r[0],r[1]);budget(l,r[2],n),console.log(n);function c(e,p){var s=new Date(e,p,0);return s.getDate()}},1e3);function budget(n,r,l){console.log(l);var c=r??15;names=["硝酸","硝酸2","硝酸3","硝酸4","硝酸5","硝酸6","硝酸7","硝酸8","硝酸9","硝酸10"];for(var e=[220,182,191,234,290,220,182,191,234,350],p=100,s=[0],a=0;a<e.length;a++)s.push(parseInt(e[a]/p*30));console.log(s);for(var v=[120,112,111,134,120,130,122,141,134,150],i=e[0],i=900,a=0;a<e.length;a++)i<e[a]&&(i=e[a]);var y={data:[{name:"Y 轴值为 100 的水平线",yAxis:i/n*c}],symbol:"arrow"};option={color:["#3398DB"],tooltip:{trigger:"axis",formatter:function(o,u,d){var m=o[0].axisValue,t=o[0].data,b=s[o[0].dataIndex],h="销售完成率",x="<div><p>"+m+":"+t+"</p><p>"+h+":"+b+"%</p><p>"+l+"</p></div>";return x}},legend:{show:!0,icon:"bar",itemWidth:15,data:names},xAxis:{data:names},grid:{top:"13%",left:"3%",right:"2%",bottom:"5%",containLabel:!0},yAxis:[{type:"value",scale:!0,name:"价格",max:100,min:0,axisLabel:{formatter:"{value}  %"}},{type:"value",scale:!0,name:"预购量",max:900,min:0,splitLine:{show:!1}}],series:[{type:"bar",markLine:y,barWidth:"10%",data:e,yAxisIndex:1,itemStyle:{normal:{color:"#3398DB"}}},{type:"bar",barWidth:"10%",barWidth:5,data:v,yAxisIndex:1,itemStyle:{normal:{color:"#62c0d0",borderType:"dashed"}}},{type:"scatter",name:"硝酸"},{type:"scatter",name:"硝酸2"},{type:"scatter",name:"硝酸3"},{type:"scatter",name:"硝酸4"},{type:"scatter",name:"硝酸5"},{type:"scatter",name:"硝酸6"},{type:"scatter",name:"硝酸7"},{type:"scatter",name:"硝酸8"},{type:"scatter",name:"硝酸9"},{type:"scatter",name:"硝酸10"}]},myChart.on("legendselectchanged",function(o){for(var u={},d=[],m=[],t=0;t<names.length;t++)o.selected[names[t]]==!0&&(d.push(names[t]),m.push(e[t]));myChartbudget.setOption({xAxis:{data:d},yAxis:{},series:[{type:"bar",data:m}]})}),myChart.setOption(option)}
