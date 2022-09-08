let title="总量",colorList=["#ff7f50","#87cefa","#da70d6","#32cd32","#6495ed","#ff69b4","#ba55d3","#cd5c5c","#ffa500","#40e0d0","#1e90ff","#ff6347","#7b68ee","#00fa9a","#ffd700","#6b8e23","#ff00ff","#3cb371","#b8860b","#30e0e0"],echartData=[{name:"商品C",value:2289},{name:"商品P",value:671},{name:"商品D",value:2518},{name:"商品T",value:200},{name:"商品F",value:1952},{name:"商品G",value:926},{name:"商品H",value:4536},{name:"商品I",value:750},{name:"商品A",value:2373},{name:"商品J",value:493},{name:"商品K",value:385},{name:"商品B",value:5449},{name:"商品M",value:869},{name:"商品L",value:4960},{name:"商品Q",value:270},{name:"商品N",value:566},{name:"商品R",value:1077},{name:"商品O",value:339},{name:"商品E",value:4730},{name:"商品S",value:920}],formatNumber=function(e){let n=/(?=(\B)(\d{3})+$)/g;return e.toString().replace(n,",")},total=echartData.reduce((e,n)=>e+n.value*1,0);option={backgroundColor:"#000c31",color:colorList,title:[{text:"{name|"+title+"：}{val|"+formatNumber(total)+"}",top:10,right:20,textStyle:{rich:{name:{fontSize:24,fontWeight:"normal",color:"#ff8800",padding:[10,0]},val:{fontSize:24,fontWeight:"bold",color:"#ff8800"}}}},{top:"center",right:"center"}],series:[{type:"pie",radius:["35%","50%"],center:["50%","50%"],data:echartData,hoverAnimation:!0,itemStyle:{normal:{borderColor:colorList,borderWidth:2}},labelLine:{normal:{lineStyle:{color:"#e6e6e6"}}},label:{normal:{formatter:"{icon|●}{name|{b}}{value|({d}%)}",rich:{icon:{fontSize:24},name:{fontSize:12,padding:[0,10,0,4]},value:{fontSize:12,fontWeight:"bold"}}}}}]},myChart.on("highlight",e=>{let n=echartData[e.dataIndex].name,i=echartData[e.dataIndex].value;option.title[1].text="{name|"+n+`}
{val|`+i+"}",option.title[1].textStyle={rich:{name:{fontSize:16,align:"center",fontWeight:"normal",padding:[10,0],color:colorList[e.dataIndex]},val:{fontSize:32,align:"center",fontWeight:"bold",color:colorList[e.dataIndex]}}},myChart.setOption(option)}),autoHover(myChart,option,echartData.length,3e3);function autoHover(e,n,i,l){var o={time:2e3,num:100};l||(l=o.time),i||(i=o.num);var t=0,a=null;a&&clearInterval(a),a=setInterval(function(){e.dispatchAction({type:"downplay",seriesIndex:0}),e.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t}),e.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t}),t++,t>=i&&(t=0)},l),e.on("mouseover",function(d){clearInterval(a),e.dispatchAction({type:"downplay",seriesIndex:0}),e.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:d.dataIndex}),e.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:d.dataIndex})}),e.on("mouseout",function(){a&&clearInterval(a),a=setInterval(function(){e.dispatchAction({type:"downplay",seriesIndex:0}),e.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t}),e.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t}),t++,t>=o.num&&(t=0)},o.time)})}
