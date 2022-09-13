let listAry=[{NF:"2019",DATA:[{CZID:"1",CZMC:"北京街道",DATA:[{CZID:"1",NF:"2019",DYCYSR:14493,DECYSR:316955,DSCYSR:276547}]},{CZID:"2",CZMC:"南京镇",DATA:[{CZID:"2",NF:"2019",DYCYSR:77712,DECYSR:2187269,DSCYSR:544368}]}]},{NF:"2018",DATA:[{CZID:"2",CZMC:"南京镇",DATA:[{CZID:"2",NF:"2018",DYCYSR:69289,DECYSR:1983189,DSCYSR:559546}]}]}];var emphasisStyle={itemStyle:{shadowBlur:10,shadowColor:"rgba(255,255,255,1)"}};let yAxisData=[],legendList=[{name:"第一产业",color:"#ffc580",leftList:[],rightList:[]},{name:"第二产业",color:"#00bfbf",leftList:[],rightList:[]},{name:"第三产业",color:"#8080ff",leftList:[],rightList:[]}];listAry.map(t=>{yAxisData.push(t.NF),legendList.map((e,s)=>{switch(s){case 0:t.DATA.length==1?t.DATA[0].CZMC=="北京街道"?(e.leftList.push(t.DATA[0].DATA[0].DYCYSR),e.rightList.push(0)):(e.leftList.push(0),e.rightList.push(t.DATA[0].DATA[0].DYCYSR)):(e.leftList.push(t.DATA[0].DATA[0].DYCYSR),e.rightList.push(t.DATA[1].DATA[0].DYCYSR));break;case 1:t.DATA.length==1?t.DATA[0].CZMC=="北京街道"?(e.leftList.push(t.DATA[0].DATA[0].DECYSR),e.rightList.push(0)):(e.leftList.push(0),e.rightList.push(t.DATA[0].DATA[0].DECYSR)):(e.leftList.push(t.DATA[0].DATA[0].DECYSR),e.rightList.push(t.DATA[1].DATA[0].DECYSR));break;case 2:t.DATA.length==1?t.DATA[0].CZMC=="北京街道"?(e.leftList.push(t.DATA[0].DATA[0].DSCYSR),e.rightList.push(0)):(e.leftList.push(0),e.rightList.push(t.DATA[0].DATA[0].DSCYSR)):(e.leftList.push(t.DATA[0].DATA[0].DSCYSR),e.rightList.push(t.DATA[1].DATA[0].DSCYSR));break}})}),console.log("legendList",legendList),console.log("yAxisData",yAxisData);let maxNum=0,sumList=[];listAry.map(t=>{t.DATA.map(e=>{let s=e.DATA[0],l=s.DYCYSR+s.DECYSR+s.DSCYSR;e.total=l,sumList.push(l)})}),console.log("listAry",listAry),console.log("sumList",sumList),maxNum=Math.max(...sumList)+200;let bgLeft=[{name:"进度条背景",type:"bar",stack:"1",data:[],barWidth:25,itemStyle:{color:"#0b2940"}}],bgRight=[{name:"进度条背景",type:"bar",stack:"2",xAxisIndex:2,yAxisIndex:2,data:[],barWidth:25,itemStyle:{color:"#0b2940"}}],totalList=[];yAxisData.map(t=>{let e={leftTotal:0,rightTotal:0};totalList.push(e)}),console.log("totalList",totalList),listAry.map((t,e)=>{t.DATA.length==1?t.DATA[0].CZMC=="北京街道"?(totalList[e].leftTotal=t.DATA[0].total,totalList[e].rightTotal=0):(totalList[e].leftTotal=0,totalList[e].rightTotal=t.DATA[0].total):(totalList[e].leftTotal=t.DATA[0].total,totalList[e].rightTotal=t.DATA[1].total)}),totalList.map(t=>{bgLeft[0].data.push(maxNum-t.leftTotal),bgRight[0].data.push(maxNum-t.rightTotal)}),console.log("bgLeft",bgLeft),console.log("bgRight",bgRight);let legend=[],seriesData=[],seriesDataLeft=[],seriesDataRight=[];legendList.map(t=>{legend.push(t.name);let e={name:t.name,type:"bar",barWidth:25,emphasis:emphasisStyle,stack:"1",itemStyle:{normal:{color:t.color}},label:{normal:{show:!1}},data:t.leftList},s={name:t.name,type:"bar",xAxisIndex:2,yAxisIndex:2,barWidth:25,emphasis:emphasisStyle,stack:"2",z:100,itemStyle:{normal:{color:t.color}},data:t.rightList};seriesDataLeft.push(e),seriesDataRight.push(s)}),console.log("seriesDataLeft",seriesDataLeft),console.log("seriesDataRight",seriesDataRight),seriesData=[...seriesDataLeft,...bgLeft,...seriesDataRight,...bgRight],console.log("seriesData",seriesData);let textColor="#fff",lineColor="rgba(255,255,255,0.2)";var option={baseOption:{backgroundColor:"#080b30",timeline:{show:!1,top:0,data:[]},tooltip:{trigger:"axis",axisPointer:{type:"none"},textStyle:{align:"left"},formatter:t=>{let e="";t[0].axisIndex==0?e="北京":e="南京";let s=`${e} ${t[0].name}<br/>`;return t.map((l,a)=>{l.seriesName!="进度条背景"&&(s+=`${l.marker}${l.seriesName} ${l.value} 万元<br/>`)}),s}},title:{text:"",left:"center",color:"green"},legend:{top:"5%",itemWidth:40,itemHeight:5,itemGap:30,align:"right",icon:"horizontal",textStyle:{color:"#ffffff",fontSize:16},data:legend},grid:[{show:!1,left:"-6%",right:"5%",top:"15%",bottom:"8%",containLabel:!0,width:"52%"},{show:!1,left:"51%",top:"15%",bottom:"8%",width:"0%"},{show:!1,right:"-6%",top:"15%",bottom:"8%",containLabel:!0,width:"52%"}],xAxis:[{type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!1,color:textColor},splitLine:{show:!1,lineStyle:{color:lineColor}}},{type:"value",gridIndex:1,show:!1},{type:"value",gridIndex:2,axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!1,color:textColor},splitLine:{show:!1,lineStyle:{color:lineColor}}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!1,lineStyle:{color:lineColor}},axisTick:{show:!1},axisLabel:{show:!1,textStyle:{color:"#ffffff",fontSize:20}},data:yAxisData},{type:"category",gridIndex:1,inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,padding:[0,0,0,0],textStyle:{color:"#ffffff",fontSize:20},align:"center"},data:yAxisData.map(function(t){return{value:t,textStyle:{align:"center"}}})},{type:"category",gridIndex:2,inverse:!0,position:"left",axisLine:{show:!1,lineStyle:{color:lineColor}},axisTick:{show:!1},axisLabel:{show:!1,textStyle:{color:"#ffffff",fontSize:20}},data:yAxisData}],series:seriesData}};