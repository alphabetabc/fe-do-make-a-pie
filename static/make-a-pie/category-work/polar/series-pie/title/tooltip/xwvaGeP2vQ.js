let center="50.2,63.5".split(","),startAngle="207",radius="95,100".split(","),endRadius="84,109".split(",");var gaugeValue=[],gaugeColor=[],max=100,gaugeList=[15,40],zIndex=[10,9],colorList=[],gaugeSize=650,gaugeMeasure="元",max=100,value=80,pointerName=["使用率"],gaugeName="大型设备总量",rate=(value/max*100).toFixed(2),endValue=value*.65,pieSeriesData=[{value:endValue,itemStyle:{color:"#FFF4DD",shadowColor:"rgb(0, 90, 160, 0.52)",shadowBlur:20,shadowOffsetY:6}},{value:max-endValue,itemStyle:{color:"rgba(255, 206, 143, 0)",shadowColor:"rgba(0, 90, 160, 0)",shadowBlur:20,shadowOffsetY:6}}],endSeriesData=[{value:endValue-.2,itemStyle:{color:"rgba(255, 206, 143, 0)",shadowColor:"rgba(0, 90, 160, 0)",shadowBlur:20,shadowOffsetY:6}},{value:.2,itemStyle:{color:"#FFF4DD",shadowColor:"rgb(0, 90, 160, 0.52)",shadowBlur:20,shadowOffsetY:6}},{value:max-endValue,itemStyle:{color:"rgba(255, 206, 143, 0)",shadowColor:"rgba(0, 90, 160, 0)",shadowBlur:20,shadowOffsetY:6}}];const seriesData=[];var data=[];pointerName.map((e,a)=>{data.push({name:pointerName[a],value:rate,itemStyle:{color:gaugeColor[a]}})});for(let e=0;e<gaugeList.length;e++)seriesData.push({type:"bar",data:[{value:gaugeList[e],itemStyle:{color:colorList[e]}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:zIndex[e]});var barList=[""],option={backgroundColor:"#333",center:["50%","70%"],title:[{show:!1,text:gaugeName,subtext:"89%",bottom:"30%",x:"center",borderRadius:15,padding:[7,14],textStyle:{fontSize:26,fontFamily:"DIN",fontWeight:400,color:"#FDFFDD",lineHeight:26,textShadow:"0px 6px 10px rgba(0, 160, 136, 0.52)",WebkitTextStroke:"1px #FFCD8F",textStroke:"1px #FFCD8F"},subtextStyle:{fontSize:15,fontFamily:"Source Han Sans CN",fontWeight:400,color:"#DDFEFF",lineHeight:26,textShadow:"0px 0px 5px #00DEFF"},formatter:e=>(console.log(e),"name")}],angleAxis:{show:!1,max:100*360/270,type:"value",startAngle:225,splitLine:{show:!1}},barMaxWidth:14,radiusAxis:{show:!1,type:"category"},polar:{center:["50%","70%"],radius:"60%"},tooltip:{show:!0},series:[{type:"pie",radius:[radius[0]+"%",radius[1]+"%"],center:["50%","70%"],silent:!0,max,startAngle,data:pieSeriesData,label:{show:!1},coordinateSystem:"polar",z:1},{type:"pie",radius:[endRadius[0]+"%",endRadius[1]+"%"],center:["50%","70%"],silent:!0,startAngle,max,data:endSeriesData,label:{show:!1},barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:1}]};