let index=0;var colorList=["#02F2F3","#68B5FB","#D45A49","#F3E58D"],data1=[{name:"重点单位",value:4419},{name:"一般单位",value:118},{name:"九小场所",value:50},{name:"其他",value:97}];function fun(){var e=setInterval(function(){myChart.dispatchAction({type:"hideTip",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:index==0?5:index-1}),myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:index}),index++,index>5&&(index=0)},3e3)}fun(),setTimeout(function(){fun()},5e3),option={backgroundColor:"#101736",title:{text:"检查单位类型分布",x:"4%",width:173,height:163,fontSize:22,textStyle:{color:"#05F0EE",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"item"},series:[{type:"pie",center:["50%","50%"],radius:["24%","45%"],clockwise:!0,avoidLabelOverlap:!0,hoverOffset:15,itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},label:{show:!0,position:"outside",formatter:function(e){for(var n=0,a=0,t=0;t<data1.length;t++)a+=data1[t].value;return n=(e.value/a*100).toFixed(0),e.name!==""?e.name+`

占百分比：`+n+"%":""}},labelLine:{normal:{length:20,length2:30,lineStyle:{width:1}}},data:data1}]};