app.title="嵌套环形图",option={title:{text:"25",subtext:`                   天

距 离 出 科`,x:"center",y:"center",itemGap:-50,textStyle:{color:"#84CCC9",fontSize:100,fontWeight:"bold"},subtextStyle:{color:"#000000",fontSize:30}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#80C26A","#84CCC9"],series:[{name:"轮转情况",type:"pie",radius:["50%","60%"],itemStyle:{normal:{label:{show:!1},labelLine:{show:!1}},emphasis:{label:{show:!1},labelLine:{show:!1}}},data:[{value:75,name:"已出科天数"},{value:25,name:"剩余出科天数"}]}]};
