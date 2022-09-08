var axis=["ProGrp","NSE","SCC","CYFRA211","CA125","CEA"],scatterData=[],heatmapData=[[0,0,.1],[0,1,.03],[0,2,.04],[0,3,-.03],[0,4,.36],[0,5,1],[1,0,.02],[1,1,.02],[1,2,.02],[1,3,.02],[1,4,1],[1,5,.6],[2,0,.02],[2,1,.02],[2,2,.02],[2,3,1],[2,4,.9],[2,5,.8],[3,0,1],[3,1,1],[3,2,1],[3,3,.2],[3,4,-.2],[3,5,-.8],[4,0,1],[4,1,1],[4,2,-.8],[4,3,.5],[4,4,.2],[4,5,.3],[5,0,1],[5,1,.2],[5,2,.9],[5,3,.6],[5,4,-.5],[5,5,-.2]];heatmapData=heatmapData.map(function(e){return[e[1],e[0],e[2]||"-"]});var axisLength=axis.length-1;for(let e=0;e<heatmapData.length;e++)axisLength-heatmapData[e][0]<=heatmapData[e][1]&&scatterData.push(heatmapData[e]);option={animation:!0,title:{show:!0,text:"",left:"center",top:"5%"},grid:{width:"60%",height:"80%",top:"18%",left:"15%"},xAxis:[{type:"category",show:!1,data:axis},{type:"category",data:axis,inverse:!0,axisTick:{show:!1},splitArea:{show:!0},axisLine:{show:!0},axisLabel:{rotate:-50}}],yAxis:{type:"category",data:axis,axisTick:{show:!1},splitArea:{show:!0}},visualMap:[{type:"piecewise",left:"75%",right:"10",top:"20%",min:0,max:1,calculable:!0,align:"left",inRange:{color:["#FEE090","#FDAE61","#F46D43","#D73027"]},textStyle:{color:"#ABABAB"},seriesIndex:[1]},{type:"piecewise",left:"75%",right:"10",bottom:"2%",min:0,max:-1,calculable:!0,align:"left",inRange:{color:["#4575B4","#74ADD1","#ABD9E9","#E0F3F8"]},textStyle:{color:"#ABABAB"},seriesIndex:[2]},{type:"piecewise",min:-.5,max:-1,show:!1,inRange:{color:["#D73027"]},textStyle:{color:"#ABABAB"},seriesIndex:[3]},{min:0,max:1,calculable:!1,show:!1,precision:.1,inRange:{symbolSize:[20,50]},seriesIndex:[1]},{min:0,max:-1,calculable:!1,show:!1,precision:.1,inRange:{symbolSize:[50,20]},seriesIndex:[2]},{min:-.5,max:-1,calculable:!1,show:!1,precision:.1,inRange:{symbolSize:[50,20]},seriesIndex:[3]}],series:[{name:"heatmap1",type:"heatmap",silent:!0,show:!0,data:heatmapData,label:{normal:{color:"#ABABAB",fontSize:20,show:!0,formatter:function(e){return axisLength-e.value[0]>e.value[1]?e.value[2]:(e.value="",e.value)}}},itemStyle:{normal:{show:!0,color:"#FFFFFF",borderColor:"#ABABAB"},emphasis:{shadowBlur:10,shadowColor:"rgba(255, 255, 255, 0.5)"}},zlevel:1},{name:"scatter1",type:"scatter",data:scatterData,symbolSize:12,zlevel:2},{name:"scatter2",type:"scatter",data:scatterData,symbolSize:12,zlevel:2},{name:"before2",type:"scatter",color:"red",data:scatterData,symbol:"path://M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z",zlevel:3}]};