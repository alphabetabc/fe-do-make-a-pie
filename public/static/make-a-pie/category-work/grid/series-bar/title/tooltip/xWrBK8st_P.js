const{xdata,ydata,questionList}={questionList:[{name:"简答题",value:[93,55]},{name:"判断题",value:[32767,29654]},{name:"单选题 ",value:[57464,42125]},{name:"多选题",value:[30019,26680]},{name:"填空题",value:[401,368]}],xdata:["民警线上课程学习演示课程","理想信念与警察职业素养","移民管理工作（边境管理)","移民管理工作（边防检查)","管理员基础数据添加操作"],ydata:[59,90,73,89,91]};let ydatamax=[];for(var i=0;i<ydata.length;i++)ydatamax.push(100);option={backgroundColor:"blurScope",title:{show:!1},tooltip:{trigger:"item",formatter:function(e){return e.name}},grid:{borderWidth:0,top:"5",left:"100",right:"8%",bottom:"3%"},yAxis:[{inverse:!0,type:"category",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,inside:!1,formatter:function(e,o){return`{${"img"+(o+1)}|}`}},data:xdata}],xAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},series:[{name:"",type:"bar",zlevel:2,barWidth:8,itemStyle:{normal:{barBorderRadius:2,color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#16C8FB"},{offset:1,color:"#0958D2"}])}},data:ydata,label:{normal:{color:"#555",show:!0,position:[0,-26],textStyle:{fontSize:16,color:"#fff"},rich:{a:{color:"#0084FF",fontSize:16},b:{color:"#FFCF29",fontSize:16}},formatter:function(e,o){let t="";return xdata.forEach((r,a)=>{r==e.name&&(t=`${questionList[a].name} {a|${questionList[a].value[0]}} 道  未做题数量 {b|${questionList[a].value[1]}} 道`)}),t}}}},{type:"bar",barGap:"-100%",barWidth:8,top:-8,itemStyle:{normal:{color:"#fff"}},label:{normal:{color:"#555",show:!0,position:"right",textStyle:{fontSize:16,color:"#fff"},formatter:function(e){return ydata[e.dataIndex]+"%"}}},data:ydatamax}]};