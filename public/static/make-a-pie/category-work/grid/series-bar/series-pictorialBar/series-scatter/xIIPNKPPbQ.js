let nameList=["本科生占全日制在校生总数的比例（%）","体质测试达标率（%）","应届本科生就业率（%）","应届本科生学位授予率（%）","应届本科生毕业率（%）"],valueList=[612.5,548.7,300.2,300,400],colorList=["#FFC949","#FB6A66","#867DFF","#06CA70","#008AFF"],total=1e3;console.log(nameList,valueList,colorList,total);let emue=["yellow","red","purple","green","blue"];var category=nameList.map((e,o)=>({value:valueList[o],itemStyle:{color:colorList[o]}})),totalList=[],totalBorderList=[];nameList.map((e,o)=>{totalList.push({value:total,itemStyle:{color:colorList[o]}}),totalBorderList.push({value:total,itemStyle:{borderColor:colorList[o],color:"transparent"}})});var datas=[];category.forEach(e=>{datas.push(e.value)}),console.log(datas),option={backgroundColor:"#020b3f",xAxis:{max:total,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},grid:{left:"5%",top:"15%",right:"15%",bottom:"5%"},yAxis:[{type:"category",inverse:!1,data:nameList,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],series:[{type:"bar",barWidth:16,barGap:"20%",silent:!0,label:{normal:{formatter:e=>(console.log(e),`{${emue[e.dataIndex]}|${e.name}}`),textStyle:{color:"#008AFF",fontSize:14},position:[0,"-25px"],show:!0,rich:{green:{color:"#06CA70"},blue:{color:"#008AFF"},purple:{color:"#867DFF"},red:{color:"#FB6A66"},yellow:{color:"#FFC949"}}}},data:category,z:1,animationEasing:"elasticOut"},{type:"pictorialBar",itemStyle:{normal:{color:"#020b3f"}},symbolRepeat:"fixed",symbolMargin:1,symbol:"rect",symbolClip:!1,symbolSize:[1,17],symbolPosition:"start",symbolOffset:[3,-2],symbolBoundingData:this.total,data:[total,total,total,total,total],z:2,animationEasing:"elasticOut"},{type:"pictorialBar",symbolBoundingData:total,itemStyle:{normal:{color:"none"}},label:{normal:{formatter:e=>{console.log(e);var o;return o=`{${emue[e.dataIndex]}|${(e.data*100/total).toFixed(2)}%}`,o},rich:{green:{color:"#06CA70"},blue:{color:"#008AFF"},purple:{color:"#867DFF"},red:{color:"#FB6A66"},yellow:{color:"#FFC949"}},position:"right",offset:[0,-3],distance:10,show:!0}},data:datas,z:0},{name:"外框",type:"bar",barGap:"-130%",data:totalBorderList,barWidth:26,itemStyle:{normal:{borderWidth:1}},z:0},{type:"scatter",name:"条形",symbol:"roundRect",symbolSize:[4,12],symbolOffset:[3,-3],symbolKeepAspect:!0,data:totalList}]};