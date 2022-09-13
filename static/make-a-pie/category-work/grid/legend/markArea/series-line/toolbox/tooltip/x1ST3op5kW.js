let colorCost=["#13b5b1","#00b7ee","#9887ef","#8f82bc","#f29b76","#b93ef9","#00a0e9","#448aca","#5c63e7","#f39800","#2090ef","#fff100","#05ffff","#008ce3","#72c4f9","#5935ff"];var stepDataArr=[{NO:"0",wetTemperature:"37.00",dryTemperature:"38",hoursLabel:"6.00",hoursY:"29.00",wetTemperature_set:"36",dryTemperature_set:"36",hoursY_set:"24",hoursLabel_set:"0.00",Cur_Start_No:0,Cur_End_No:1},{NO:"1",wetTemperature:"37.00",dryTemperature:"38",hoursLabel:"16.00",hoursY:"29.00",wetTemperature_set:"36",dryTemperature_set:"36",hoursY_set:"24",hoursLabel_set:"6.00"},{NO:"2",wetTemperature:"37.00",dryTemperature:"40",hoursLabel:"4.00",hoursY:"29.00",wetTemperature_set:"37",dryTemperature_set:"38",hoursY_set:"25",hoursLabel_set:"4.00"},{NO:"3",wetTemperature:"37.00",dryTemperature:"40",hoursLabel:"18.00",hoursY:"29.00",wetTemperature_set:"37",dryTemperature_set:"38",hoursY_set:"25",hoursLabel_set:"18.00"},{NO:"4",wetTemperature:"36.00",dryTemperature:"42",hoursLabel:"4.00",hoursY:"28.00",wetTemperature_set:"38",dryTemperature_set:"40",hoursY_set:"26",hoursLabel_set:"6.00"},{NO:"5",wetTemperature:"36.00",dryTemperature:"42",hoursLabel:"22.00",hoursY:"28.00",wetTemperature_set:"38",dryTemperature_set:"40",hoursY_set:"26",hoursLabel_set:"38.00"}],xData=[],dryData=[],wetData=[],hourData=[],drySetData=[],wetSetData=[],hourSetData=[];stepDataArr.map((e,r)=>{xData.push(e.NO),dryData.push(e.dryTemperature),wetData.push(e.wetTemperature),hourData.push({value:e.hoursY,label:e.hoursLabel}),drySetData.push(e.dryTemperature_set),wetSetData.push(e.wetTemperature_set),hourSetData.push({value:e.hoursY_set,label:e.hoursLabel_set})});var allLineData=[];allLineData.push(dryData,wetData,hourData,drySetData,wetSetData,hourSetData),console.log(allLineData);var lendName=["温度1","温度2","时间","标准温度1","标准温度2","标准时长"],minStep=stepDataArr[0].Cur_Start_No,maxStep=stepDataArr[0].Cur_End_No,allData=[];allLineData.map((e,r)=>{r===0||r===1?allData.push({name:lendName[r],type:"line",symbol:"circle",symbolSize:4,sampling:"average",itemStyle:{normal:{color:colorCost[r]}},label:{normal:{show:!0,position:[-30,10]}},markArea:{data:[[{name:"当前阶段",xAxis:minStep},{xAxis:maxStep}]]},zlevel:1,data:e}):r==2?allData.push({name:lendName[r],type:"line",symbol:"circle",symbolSize:4,sampling:"average",itemStyle:{normal:{color:colorCost[r]}},label:{normal:{show:!0,position:[-30,-20],formatter:function(a){return"{color1|"+a.data.label+"}{color2| h }"},rich:{color1:{color:"#fff",backgroundColor:"#108eff",borderColor:"#796aee",border:1,lineHeight:18,height:18,padding:[0,3,0,3],borderWidth:1,borderRadius:[3,0,0,3]},color2:{color:"#fff",backgroundColor:"#796aee",borderColor:"#796aee",lineHeight:18,height:18,borderWidth:1,borderRadius:[0,3,3,0],padding:[0,2,0,1]}}}},zlevel:1,data:e}):r==5?allData.push({name:lendName[r],type:"line",symbol:"circle",symbolSize:4,sampling:"average",itemStyle:{normal:{color:colorCost[r]}},lineStyle:{width:3,type:"dotted"},label:{normal:{show:!0,position:[10,10],formatter:function(a){return a.data.label+"h"}}},zlevel:1,data:e}):allData.push({name:lendName[r],type:"line",symbol:"circle",symbolSize:4,sampling:"average",itemStyle:{normal:{color:colorCost[r]}},lineStyle:{width:1,type:"dashed"},label:{normal:{show:!0,position:[-30,10]}},zlevel:1,data:e})}),option={backgroundColor:"#fff",legend:{textStyle:{color:"#666"},itemGap:5,x:"right",y:"top",data:lendName},animation:!1,tooltip:{trigger:"axis",formatter:function(e){let r=`<div>gm温度情况gm[${e[0].axisValue}]</div>`;return e.map((a,t)=>{r+=`<div>
          <span class="showIcon" style="width:10px;height:10px;border-radius:10px;background:${a.color}"></span>
          ${a.data.label?a.seriesName+": "+a.data.label+"h":a.seriesName+": "+a.value+"℃"}
        </div>`}),r}},toolbox:{left:"center",itemSize:10,top:55},xAxis:{data:xData,axisPointer:{snap:!0,lineStyle:{color:"#004E52",opacity:.5,width:2}},axisLabel:{show:!0,textStyle:{fontSize:"10",color:"#666"}},axisLine:{lineStyle:{color:"#d3d3d3"}}},yAxis:{type:"value",min:19,splitLine:{show:!0,lineStyle:{color:["#e9e9e9"],width:1,type:"dashed"}},axisLabel:{show:!0,textStyle:{fontSize:"10",color:"#666"},formatter:`{value}
`},axisLine:{lineStyle:{color:"#d3d3d3"}}},grid:{top:60,left:35,right:10},series:allData};
