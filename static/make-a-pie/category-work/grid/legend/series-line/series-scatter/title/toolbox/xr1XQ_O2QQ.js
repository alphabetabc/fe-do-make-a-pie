let data={dateTimes:["12-01","12-02","12-03","12-04","12-05","12-06","12-07"],classScoreRates:[.6,.8,.9,.6,.7,.8,.9],personalScoreRates:[.3,.45,.9,1,1,.7,.8],totalScores:[30,45,90,100,100,70,80],fullMarks:[100,100,100,100,100,100,100]};option={title:[{text:` 
班级得分率
我的得分
试卷满分`,bottom:35,left:10,textStyle:{lineHeight:20,fontSize:13,fontWeight:"normal",formatter:function(t){return"{table|"+t+"}"},rich:{table:{align:"center"}}}}],legend:{data:[{name:"班级得分率",icon:"emptyCircle"},{name:"我的得分率",icon:"circle"}],itemWidth:10,itemHeight:10,right:30,top:30,itemGap:20},grid:{top:100,bottom:80,left:100,right:40},toolbox:{show:!0,feature:{saveAsImage:{}}},xAxis:[{type:"category",boundaryGap:!1,data:data.dateTimes,axisLabel:{formatter:function(t,e){return"{table|"+data.classScoreRates[e]+`}
{table|`+data.totalScores[e]+`}
{table|`+data.fullMarks[e]+"}"},rich:{table:{lineHeight:20,align:"center"}}}}],yAxis:[{type:"value",scale:!0,name:"得分率",max:1,min:0,splitLine:{lineStyle:{type:"dashed"}}}],series:[{name:"班级得分率",type:"scatter",label:{show:!1,position:"top",formatter:"{c}"},symbol:"emptyCircle",symbolSize:10,data:data.classScoreRates},{name:"我的得分率",type:"line",label:{show:!0,position:"top",formatter:"{c}"},symbol:"circle",symbolSize:10,data:data.personalScoreRates}]};