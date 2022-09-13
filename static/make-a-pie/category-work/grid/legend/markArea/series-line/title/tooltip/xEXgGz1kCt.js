var startTime="90000",endTime="100000",HighYdata=[141,150,150,151,147,151,150,151,152,151,150,151,152,147,151,150,151,152,150,151,152,152,150,150,152],xData=["0","10000","20000","30000","40000","50000","60000","70000","80000","90000","100000"],LowYdata=[83,71,86,74,83,71,84,73,87,72,84,73,85,73,71,84,83,77,77,72,74,72,74,72,84],standardata=[],standardata2=[],h=135,l=120;xData.map((e,a)=>{e==startTime||e==endTime?(standardata.push("120"),standardata2.push("70")):(standardata.push("135"),standardata2.push("85"))});var seriesArr=[{name:"高压",type:"line",symbolSize:0,silent:!0,color:"#f38a8c",lineStyle:{color:"#f38a8c"},smooth:!1,data:HighYdata,markArea:{animation:!0,itemStyle:{normal:{color:"#bdd3eb"}},data:[[{xAxis:startTime||""},{xAxis:endTime||""}]]}},{name:"低压",type:"line",symbolSize:0,silent:!0,color:"#c3ceea",lineStyle:{color:"#c3ceea"},smooth:!1,data:LowYdata},{name:"收缩压临界值",type:"line",smooth:!0,step:"start",symbol:"none",symbolSize:8,itemStyle:{normal:{lineStyle:{},color:"#7e9ef1"}},smooth:!1,data:standardata},{name:"舒张压临界值",type:"line",smooth:!0,step:"start",symbol:"none",itemStyle:{normal:{lineStyle:{},color:"#f5c99a"}},smooth:!1,data:standardata2}];option={backgroundColor:"#fff",tooltip:{trigger:"axis",textStyle:{fontSize:18},formatter:function(e){}},grid:{left:"5%",right:"3%",top:"10%",bottom:"10%"},legend:{show:!0,itemWidth:25,itemHeight:12,textStyle:{fontSize:16,color:"#333"},data:["高压","低压","收缩压临界值","舒张压临界值"],x:"center",selectedMode:!1},xAxis:[{name:"",type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#333"}},axisTick:{show:!1},data:xData}],yAxis:[{name:"血压（mmHg）",type:"value",scale:!0,nameLocation:"middle",nameRotate:90,nameGap:40,min:10,axisLine:{lineStyle:{color:"#333"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"#eee"}}}],series:seriesArr};
