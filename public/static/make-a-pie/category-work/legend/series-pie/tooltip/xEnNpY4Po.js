var data=[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}],center=["50%","50%"],radius={内:["54%","60%"],pie:["60%","70%"],中:["70%","76%"],外:["70%","85%"]},legenddata=data.map(e=>e.name);option={backgroundColor:"#242E55",tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:"right",top:"center",align:"left",itemHeight:20,itemWidth:20,textStyle:{color:"#fff"},data:legenddata},series:[{name:"访问来源",type:"pie",radius:radius.pie,center,avoidLabelOverlap:!1,color:["#86D560","#AF89D6","#59ADF3","#FF999A","#FFCC67"],label:{normal:{show:!1,position:"center",formatter:`{b}

{c}`},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data},{name:"背景外圆环",type:"pie",radius:radius.外,center,color:"rgba(0,0,0,.2)",silent:!0,label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:[{name:"",value:100}]},{name:"背景中圆环",type:"pie",radius:radius.中,center,color:"rgba(0,0,0,.3)",silent:!0,label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:[{name:"",value:100}]},{name:"背景内圆环",type:"pie",radius:radius.内,center,color:"rgba(0,0,0,.1)",silent:!0,label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:[{name:"",value:100}]}]};var index=-1;setInterval(function(){myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:index}),index=(index+1)%legenddata.length,myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:index})},2e3);
