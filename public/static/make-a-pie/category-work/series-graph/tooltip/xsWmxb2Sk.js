var chartdata=[{name:"污水",sum:208,size:50},{name:"碳排放",sum:80,size:60},{name:"钢铁1",sum:108,size:70},{name:"碳排放1",sum:80,size:80},{name:"钢铁2",sum:108,size:90}],color=["#6DFFA1","#56C7F6","#F9F08A","#6DFFA1","#56C7F6","#F9F08A"],data=[];chartdata.map((e,o)=>{data.push({name:e.name+`

`+e.sum,value:111,symbolSize:e.size,draggable:!0,label:{normal:{textStyle:{fontSize:12,color:"#fff"}}},itemStyle:{normal:{color:new echarts.graphic.RadialGradient(.5,.5,1,[{offset:.2,color:"rgba(27, 54, 72, 0.2)"},{offset:.8,color:color[o]}]),opacity:1,borderWidth:1,borderColor:color[o],shadowBlur:7,symbolOffset:.6,shadowColor:color[o]}}})}),option={backgroundColor:"#16222E",animationDurationUpdate:function(e){return e*100},tooltip:{trigger:"item",formatter:function(e,o,a){return e.data.tips||e.name}},animationEasingUpdate:"bounceIn",itemStyle:{},cursor:"pointer",series:[{type:"graph",layout:"force",cursor:"pointer",force:{repulsion:200,edgeLength:100},roam:!0,label:{normal:{show:!0}},data}]};