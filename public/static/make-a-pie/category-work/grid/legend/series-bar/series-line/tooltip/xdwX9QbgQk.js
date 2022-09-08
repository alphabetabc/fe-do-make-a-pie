option={backgroundColor:"#000",tooltip:{show:!0,trigger:"axis",axisPointer:{type:"line",shadowStyle:{color:"rgba(255, 255, 255, 0.15)"},lineStyle:{dashOffset:10},label:{show:!1}},borderWidth:2,borderRadius:"4px",borderColor:"rgb(41,112,114)",backgroundColor:"rgba(53, 76, 101, 0.4)",textStyle:{color:"#fff"},formatter:function(o){const e=o[1].color.colorStops[0].color;return`<div>
										<div>${o[1].name}:</div>
										<div style="display: flex;align-items: center">
											<div style="width:14px;height:6px;margin: 0 10px;background-color: ${e} "></div>
											<div>${o[1].seriesName}：${o[1].value}吨</div>
										</div>
									</div>`}},grid:{left:"55px",top:"105px",bottom:"50px",right:"100px"},xAxis:[{name:"",nameGap:8,type:"category",nameTextStyle:{width:52,height:17,fontSize:18,padding:[17,0,0,0],align:"left",verticalAlign:"top",fontWeight:400,color:"#FFFFFF",lineHeight:18},axisLine:{show:!0,color:"#536365",onZero:!0,lineStyle:{color:"#DAFFF8",type:"solid",opacity:.3,width:2}},axisLabel:{show:!0,color:"#fff",interval:0,fontWeight:"normal",fontSize:21,height:19,padding:[0,0,0,10],lineHeight:40,opacity:.7},splitLine:{show:!1},axisTick:{show:!1},data:["3月1日","3月2日","3月3日","3月4日","3月5日","3月6日","3月7日"]}],yAxis:[{name:"（吨）",type:"value",min:0,nameTextStyle:{width:52,height:17,fontSize:18,padding:[0,8,23,0],align:"right",fontWeight:400,color:"#FFFFFF",lineHeight:18},splitNumber:5,splitLine:{show:!0,lineStyle:{color:"#DAFFF8",type:"dotted",opacity:.2,width:2}},axisLine:{show:!1},axisLabel:{show:!0,color:"#CFCFCF",margin:17,fontWeight:"normal",fontSize:21,height:16,lineHeight:40},axisTick:{show:!0,length:7,lineStyle:{color:"#DAFFF8",opacity:.83,width:3}}}],series:[{name:"",data:[30,50,70,50,50,60,30],type:"bar",barWidth:60,barGap:"-84%",itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(113, 194, 255, 0)"},{offset:.85,color:"rgba(82, 252, 247, 0)"},{offset:1,color:"rgba(82, 252, 247, 0)"}]}},emphasis:{itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(113, 194, 255, 0)"},{offset:.85,color:"rgba(82, 252, 247, 0.1)"},{offset:1,color:"rgba(82, 252, 247, 0.2)"}]}}}},{name:"垃圾倾倒数",data:[30,50,70,50,50,60,30],type:"bar",smooth:!1,cursor:"pointer",yAxisIndex:0,barWidth:40,showSymbol:!1,symbolSize:50,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(113, 194, 255, 1)"},{offset:.05,color:"rgba(82, 252, 247, 1)"},{offset:1,color:"rgba(82, 252, 247, 0)"}]}}},{name:"",data:[30,50,70,50,50,60,30],type:"line",showSymbol:!1,symbolSize:30,symbol:"circle",symbolOffset:[3,0],lineStyle:{width:4,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(255, 196, 53, 0)"},{offset:1,color:"rgba(255, 67, 2, 0)"}]}}}],legend:{show:!0,right:100,top:35,itemGap:27,itemHeight:7,itemWidth:22,icon:"rect",textStyle:{color:"#fff",fontSize:20,fontWeight:"normal",lineHeight:20}}};
