option={title:{text:"七十四教案整体质量统计饼状图",subtext:`年级：七年级-九年级     单位：份    学科：语文、英语
`,x:"center"},tooltip:{trigger:"item",formatter:"{a} {b} :{d}%",textStyle:{fontWeight:"bold",fontSize:14}},legend:{orient:"vertical",left:"left",data:["优秀","通过","建议修改"]},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},grid:[{x:"7.5%",y:"65%",width:"88%",height:"30%"}],xAxis:[{gridIndex:0,type:"category",axisTick:{alignWithLabel:!0},data:["全校语文"," ","全校英语"]}],yAxis:[{gridIndex:0,name:"学科",show:!1}],series:[{name:"所有学科",type:"pie",radius:"45%",center:["50%","33%"],data:[{value:35,name:"优秀"},{value:99-35-34,name:"通过"},{value:34,name:"建议修改"}],label:{normal:{position:"outside",formatter:"{a} :{b} {c}份",textStyle:{color:"",fontSize:14}}},itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{name:"全校语文",type:"pie",radius:"22%",center:["22%","81%"],data:[{value:20,name:"优秀"},{value:31-20-9,name:"通过"},{value:9,name:"建议修改"}],label:{normal:{position:"inner",formatter:"{c}份",textStyle:{color:"#ffffff",fontSize:14}}},itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{name:"全校英语",type:"pie",radius:"22%",center:["80%","81%"],data:[{value:15,name:"优秀"},{value:68-15,name:"通过"},{value:25,name:"建议修改"}],label:{normal:{position:"outside",formatter:"{c}份",textStyle:{color:"",fontSize:14}}},itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};
