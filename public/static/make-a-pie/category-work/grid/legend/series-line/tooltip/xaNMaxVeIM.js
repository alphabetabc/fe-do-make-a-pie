option={legend:{show:!0,icon:"roundRect",itemWidth:12,itemHeight:2,itemGap:16,top:5,left:20,textStyle:{fontSize:12,color:"#7270A6",fontFamily:"OPPOSans-M"}},tooltip:{show:!0,trigger:"axis",axisPointer:{lineStyle:{color:"#C9CDD4",type:"solid",width:1}},backgroundColor:"rgba(255, 255, 255, 0.96)",borderColor:"#EBEBF2",borderWidth:1,textStyle:{width:160,height:220,lineHeight:24,color:"#7270A6",fontSize:"16",fontFamily:"OPPOSans-M"},formatter:o=>{let t=`<div><p style="font-size: 16px;
font-family: OPPOSans-M;
font-weight: 500;
color: #353280;
line-height: 20px;margin:0 5px 5px;">
    
        ${o[0].name}年
   
    
      </p></div>`;return o.forEach(e=>{t+=`<div>
          <div style="margin: 0 8px;">

            <span style="display:inline-block;width: 12px;
            margin-bottom:3px;
height: 2px;background-color:${e.color};"></span>
            <span style="font-size: 12px;
font-family: OPPOSans-M;

color: #7270A6;
line-height: 14px;">${e.seriesName}</span>
        
            <span style="font-size: 14px;
font-family: Roboto-R;
font-weight: 400;
color: #49478D;
line-height: 16px;margin-left:20px;">${e.data}%</span>
          </div>
        </div>`}),t}},xAxis:{type:"category",boundaryGap:!1,data:["2017","2017","2017","2017","2018","2018","2018","2018","2019","2019","2019","2019","2020","2020","2020","2020","2021"],axisTick:{show:!1},axisLabel:{interval:3,inside:!1,textStyle:{color:"#49478D",fontSize:"13",fontFamily:"OPPOSans-M"}},axisLine:{lineStyle:{width:1,color:"#E5E6EB"}},splitLine:{show:!0,lineStyle:{color:"#F7F8FA",type:"solid",width:"1"}}},yAxis:[{min:0,max:40,type:"value",nameTextStyle:{fontSize:22,color:"rgba(243, 246, 252, 0.8)",verticalAlign:"top",padding:[-30,60,0,0]},interval:10,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#F7F8FA",width:1,type:"dashed"}},axisLabel:{inside:!1,formatter:"{value} %",textStyle:{color:"#C9CDD4",fontSize:"10"}}}],series:[{name:"公司空置率",smooth:!1,symbol:"circle",symbolSize:1,data:[9,9.5,10,10.5,12,13.5,15,14,13,12,11,12,13,14,15,15.6,16.2],type:"line",yAxisIndex:0,itemStyle:{normal:{color:"#FF5722",borderColor:"#FF5722",borderWidth:1}},lineStyle:{color:"#FF5722",width:2},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 221, 211, 0.6)"},{offset:1,color:"rgba(255, 221, 211, 0)"}],global:!1}}},{name:"集团空置率",smooth:!1,symbol:"circle",symbolSize:1,data:[10.5,10.3,10.1,9.9,12,15,18,17,16,15,14,15,16,17,17.3,17.6,17.9],type:"line",yAxisIndex:0,itemStyle:{normal:{color:"#7270A6",borderColor:"#7270A6",borderWidth:1}}}]};
