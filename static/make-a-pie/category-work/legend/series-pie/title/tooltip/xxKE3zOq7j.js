let index=0;var colorList=["#DF3AB9","#18C79C","#8555F9","#F09228"],data=[{name:"持续加固（加固改造）",value:41,number:502.4},{name:"新建",value:92,number:302.1},{name:"改建",value:20,number:502.9},{name:"扩建",value:2,number:666}];function autoPlay(){var e=setInterval(function(){console.log(index),myChart.dispatchAction({type:"hideTip",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:index===0?5:index-1}),myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:index}),index++,index>5&&(index=0)},3e3)}autoPlay();for(var newData=[],i=0;i<data.length;i++)newData.push({value:data[i].value,name:data[i].name,itemStyle:{normal:{shadowBlur:15,shadowColor:colorList[i]}}});option={title:{text:"建设性质",left:"24%",top:"center",textStyle:{fontSize:24}},tooltip:{trigger:"item"},legend:{type:"scroll",orient:"vertical",right:"15%",top:"center",selectedMode:!0,icon:"pin",textStyle:{rich:{a:{color:"#666666",fontSize:14,fontWeight:500,width:30,padding:[0,0,25,2]},b0:{color:"#666666",fontSize:14,fontWeight:500,height:20,padding:[0,30,8,4]},b1:{fontSize:20,padding:[0,30,0,40]},b2:{fontSize:20,padding:[0,30,0,40]},b3:{fontSize:20,padding:[0,30,0,40]}}},formatter:function(e){let r="";for(var d=0,a,o,n,t=0,l=data.length;t<l;t++)data[t].name==e&&(a=data[t].value,n=data[t].number,r=data[t].label,o=t<6?t:5);return`{a| ${e}
}{b0| ${a}个   (${n}亿元)}`}},series:[{type:"pie",center:["30%","50%"],radius:["50%","70%"],clockwise:!0,avoidLabelOverlap:!0,hoverOffset:2,tooltip:{trigger:"item",formatter:function(e){return e.name+"："+e.value+"个<br>占比："+e.percent.toFixed(1)+"%"},backgroundColor:"#f3f3f3",textStyle:{color:"#666666",fontSize:14,fontWeight:500},padding:[10,20],extraCssText:"box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);"},emphasis:{itemStyle:{borderColor:"#f3f3f3",borderWidth:5}},itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},label:{show:!1,position:"outside",formatter:`{a|{b}：{d}%}
{hr|}`,rich:{hr:{backgroundColor:"t",borderRadius:1,width:1,height:1,padding:[1,1,0,-4]},a:{padding:[-15,7,-10,7]}}},labelLine:{normal:{length:10,length2:15,lineStyle:{width:1}}},data:newData}]};