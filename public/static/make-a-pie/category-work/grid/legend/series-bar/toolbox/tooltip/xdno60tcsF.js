var index=0,color="#0093ff";option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},grid:{left:100},toolbox:{show:!0,feature:{saveAsImage:{}}},xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{label:{show:!0,margin:30}},data:Array(10).fill(0).map((e,a)=>a),axisLabel:{margin:60,fontSize:14,align:"left",color:"#fff",backgroundColor:color,width:30,height:30,align:"center",borderRadius:2}},series:[{z:2,name:"value",type:"bar",data:[3.66,2.86,1.82,1.8,1.53,1.47,1.3,1.25,1.1,1.02,1].map((e,a)=>(itemStyle={color},{value:e,itemStyle})),label:{show:!0,position:"right",color:"#333333",fontSize:14,offset:[10,0]}}]};
