var size=60,size1=30,yy=200,yy1=250,listdata=[],links=[],med="medicine",dieases=["die1","die2","die3"];function setData(t,a){for(var e=0;e<t.length;e++)listdata.push({x:size+e*50,y:size+e*10,name:t[e],symbolSize:size,category:a,draggable:"true"})}function setData2(t,a){for(var e=0;e<t.length;e++)listdata.push({x:0,y:0,name:t[e],symbolSize:size,category:a,draggable:"true"})}function setLinkData(t,a){for(var e=0;e<t.length;e++)links.push({source:t[e],target:a,lineStyle:{normal:{color:"source"}}})}var texts=[];texts.push({name:med});for(var i=0;i<dieases.length;i++)texts.push({name:dieases[i]});var cat4=[];cat4.push(med),setData2(cat4,0),setData(dieases,1),setLinkData(dieases,cat4[0]),option={title:{text:"疾病知识图谱",top:"top",left:"left",textStyle:{color:"#f7f7f7"}},tooltip:{formatter:"{b}"},toolbox:{show:!0,feature:{restore:{show:!0},saveAsImage:{show:!0}}},backgroundColor:"#00000",animationDuration:1e3,animationEasingUpdate:"quinticInOut",series:[{name:"知识图谱",type:"graph",layout:"force",force:{repulsion:60,gravity:.1,edgeLength:15,layoutAnimation:!0},data:listdata,links,categories:texts,roam:!1,label:{normal:{show:!0,position:"inside",formatter:"{b}",fontSize:16,fontStyle:"600"}},lineStyle:{normal:{opacity:.9,width:1.5,curveness:0}}}]};