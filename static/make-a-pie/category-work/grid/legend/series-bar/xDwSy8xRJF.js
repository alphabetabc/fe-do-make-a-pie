let yData=["总数","EI","SCI","CSCD","北大中文核心期刊","CSSCI","其他期刊"],xData=[3050,1200,300,200,900,300,150],color=["#EA6D6C","#FE9379","#FFCC85","#02DEF9","#849EF2","#25CF9A","#499FF9"],seriesData=xData.map((t,e)=>{let l=new Array(xData.length).fill("");return l[e]=xData[e],{type:"bar",barGap:"-100%",name:yData[e],barWidth:18,data:l,itemStyle:{color:color[e]}}});console.log(seriesData),option={legend:{icon:"circle"},xAxis:{position:"top",axisLine:{show:!0,lineStyle:{color:"#31C2FF"}},axisLabel:{color:"#CAEEFF"},splitLine:{show:!1}},yAxis:{type:"category",data:yData,axisTick:{show:!1},axisLine:{lineStyle:{color:"#31C2FF"}},axisLabel:{color:"#CAEEFF",formatter:t=>{let e=t.length,l=Math.ceil(e/5),o="";for(let a=0;a<l;a++)o+=t.substring(a*5,(a+1)*5),o+=`
`;return console.log("1",t),console.log("2",l),console.log("3",o),o}}},series:seriesData};
