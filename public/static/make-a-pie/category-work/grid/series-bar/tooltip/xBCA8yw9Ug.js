var name1="广西医科大学",name2="其他大学",data1=[{name:"学院",value:3079},{name:"专业",value:100079},{name:"附属医院",value:1879},{name:"ESI前1%学科",value:50000000079},{name:"国家重点学科",value:79},{name:"广西一流学科",value:8879},{name:"第四轮评估A/B/C",value:6079},{name:"总在校人数",value:400079},{name:"本科生",value:300079},{name:"硕士研究生",value:12079},{name:"博士生",value:5079},{name:"留学生",value:20079},{name:"高职生",value:20079},{name:"教工",value:30079},{name:"专任教师",value:10079},{name:"高层次人才",value:1579},{name:"国家实验室含重点",value:3079},{name:"国家重大科研项目",value:2079},{name:"生师比",value:15079}],data2=[{name:"学院",value:4e3},{name:"专业",value:12e3},{name:"附属医院",value:3e3},{name:"ESI前1%学科",value:3500},{name:"国家重点学科",value:5e3},{name:"广西一流学科",value:7e3},{name:"第四轮评估A/B/C",value:5e3},{name:"总在校人数",value:45e4},{name:"本科生",value:35e4},{name:"硕士研究生",value:1e4},{name:"博士生",value:2e3},{name:"留学生",value:4e4},{name:"高职生",value:1e4},{name:"教工",value:80},{name:"专任教师",value:4e4},{name:"高层次人才",value:1e7},{name:"国家实验室含重点",value:5e3},{name:"国家重大科研项目",value:5e4},{name:"生师比",value:2e4}];let data1New=[],data2New=[],largeColorRight={type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(0, 204, 255, 1)"},{offset:1,color:"rgba(101, 105, 255, 1)"}]},largeColorLeft={type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(0, 204, 255, 1)"},{offset:1,color:"rgba(101, 105, 255, 1)"}]},normalColor={type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 204, 255, 0.3)"},{offset:1,color:"rgba(101, 105, 255, 0.3)"}]};data1.map((e,a)=>{let r=data1[a].value>data2[a].value;data1New.push({name:data1[a].name,value:data1[a].value,itemStyle:{normal:{color:r?largeColorRight:normalColor}}}),data2New.push({name:data2[a].name,value:data2[a].value,itemStyle:{normal:{color:r?normalColor:largeColorLeft}}})}),getArrByKey=(e,a)=>{let r=a||"value",l=[];return e&&e.forEach(function(o){l.push(o[r])}),l},option={backgroundColor:"#fff",grid:[{show:!0,left:"2%",top:"0%",bottom:"8%",width:"39%"},{show:!0,left:"50%",top:"0%",bottom:"8%",width:"0%"},{show:!0,right:"2%",top:"0%",bottom:"8%",width:"40%"}],tooltip:{show:!0,formatter:function(e){return e.seriesName+"<br>"+e.name+"："+e.value.toFixed(2)/100}},xAxis:[{type:"log",inverse:!0,axisLine:{show:!0},axisTick:{show:!0},position:"bottom",axisLabel:{formatter:function(e){return e/100}},splitLine:{show:!0}},{gridIndex:1,show:!0},{gridIndex:2,show:!0,type:"log",inverse:!1,axisLine:{show:!0},axisTick:{show:!0},position:"bottom",axisLabel:{formatter:function(e){return e/100}},splitLine:{show:!0}}],yAxis:[{gridIndex:0,triggerEvent:!0,show:!0,inverse:!0,data:data1,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},{gridIndex:1,type:"category",inverse:!0,position:"center",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,interval:0,align:"auto",verticalAlign:"middle",textStyle:{color:"rgba(195, 240, 255, 1)",fontSize:16,align:"center"},formatter:function(e){var a="",r=e.length,l=16,o=Math.ceil(r/l);if(r>l)for(var t=0;t<o;t++){var n="",s=t*l,i=s+l;t===o-1?n=e.substring(s,r):n=e.substring(s,i)+`
`,a+=n}else a=e;return a}},data:getArrByKey(data1,"name")},{gridIndex:2,triggerEvent:!0,show:!0,inverse:!0,data:data1,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],series:[{name:name1,type:"bar",gridIndex:0,showBackground:!1,backgroundStyle:{barBorderRadius:4},xAxisIndex:0,yAxisIndex:0,data:data1New,barWidth:20,itemStyle:{normal:{show:!0,color:"rgba(59, 126, 170, 1)",barBorderRadius:4}},label:{show:!1}},{name:name2,type:"bar",xAxisIndex:2,yAxisIndex:2,gridIndex:2,showBackground:!1,backgroundStyle:{barBorderRadius:4},data:data2New,barWidth:20,itemStyle:{normal:{show:!0,color:"rgba(59, 126, 170, 1)",barBorderRadius:4}},label:{show:!1}}]};