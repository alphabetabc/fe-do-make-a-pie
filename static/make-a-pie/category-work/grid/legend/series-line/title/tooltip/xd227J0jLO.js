option={title:{text:"用电量"},tooltip:{trigger:"axis"},legend:{data:["2018","2019"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["12201","12202","12203","12204","12301","12302","12303","12304","12401","12402","12403","12404"],axisLabel:{interval:0,textStyle:{color:"#1B253A",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12},formatter:function(e){var t="",r=e.length,a=4,n=Math.ceil(r/a);if(r>a)for(var l=0;l<n;l++){var o="",i=l*a,y=i+a;l==n-1?o=e.substring(i,r):o=e.substring(i,y)+`
`,t+=o}else t=e;return t}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#E5E9ED"}},splitLine:{show:!0,lineStyle:{color:"#E5E9ED"}}},yAxis:[{type:"value",splitNumber:5,axisLabel:{textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#E5E9ED"}}}],series:[{name:"2018",type:"line",itemStyle:{normal:{color:"rgba(58,132,255,1)",lineStyle:{color:"rgba(58,132,255,1)",width:1},areaStyle:"rgba(58,132,255,1)"}},data:[1,2,3,3,5,6,5,3,6,5,5,4]},{name:"2018",type:"line",itemStyle:{normal:{color:"rgba(58,132,255,1)",lineStyle:{color:"rgba(58,132,255,1)",width:1},areaStyle:"rgba(58,132,255,1)"}},data:[-1,-2,-3,-3,-5,-6,-5,-3,-6,-5,-5,-4]},{name:"2019",type:"line",itemStyle:{normal:{color:"rgba(58,132,255,1)",lineStyle:{color:"rgba(58,132,255,1)",width:1},areaStyle:"rgba(58,132,255,1)"}},data:[9,5,7,8,6,7,8,7,7,6,8,6]},{name:"2019",type:"line",itemStyle:{normal:{color:"rgba(58,132,255,1)",lineStyle:{color:"rgba(58,132,255,1)",width:1},areaStyle:"rgba(58,132,255,1)"}},data:[-9,-5,-7,-8,-6,-7,-8,-7,-7,-6,-8,-6]}]};
