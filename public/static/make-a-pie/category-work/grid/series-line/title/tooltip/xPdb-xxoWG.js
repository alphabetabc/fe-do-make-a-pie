option={backgroundColor:"#0c2b52",title:{show:!1,text:"一周API调用",textStyle:{align:"center",color:"#fff",fontSize:20},top:"5%",left:"center"},tooltip:{formatter:`
        <div style="overflow:hidden;">
            <div style="clear:both;width:100%;>
                <div style="width: '100%'; height: '24px';">
                    <span style="line-height: 24px; font-size: 18px ;color: #ffffff">总数</span>
                    <span style="line-height: 24px; font-size: 24px ;color: #f6d74e">{c0}</span>
                    <span style="line-height: 24px; font-size: 18px ;color: #ffffff">个</span>
                </div>
                <div style="width: '100%'; height: '24px';">
                    <span style="line-height: 24px; font-size: 18px ;color: #ffffff">数据API</span>
                    <span style="line-height: 24px; font-size: 24px ;color: #f6d74e">{c1}</span>
                    <span style="line-height: 24px; font-size: 18px ;color: #ffffff">个</span>
                </div>
            </div>
        </div>`,trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(43,225,236,0.5)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(30,237,164,0.5)"}],global:!1}}},backgroundColor:"rgba(43, 225, 236, 0.2)",borderWidth:0},grid:{top:"5%",left:"5%",right:"5%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",axisLine:{show:!1},splitArea:{color:"#f00",lineStyle:{color:"#f00"}},axisLabel:{color:"#2be1ec",fontSize:"16"},splitLine:{show:!1},boundaryGap:!1,data:[1,2,3,4,5,6,7]}],yAxis:[{type:"value",min:0,splitNumber:4,splitLine:{show:!1,lineStyle:{color:["#fff"],opacity:.06}},axisLine:{show:!1},axisLabel:{show:!0,margin:20,textStyle:{fontSize:16,color:"#2be1ec"}},axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:["#0c2b65","rgba(250,250,250,0)"]}}}],series:[{name:"总数",type:"line",smooth:!1,showAllSymbol:!0,symbol:"circle",symbolSize:15,lineStyle:{normal:{color:"#2be1ec",shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0,shadowOffsetY:5,shadowOffsetX:5}},label:{show:!1,position:"top",textStyle:{color:"#2be1ec",fontSize:16}},itemStyle:{color:"#2be1ec",borderColor:"rgba(43,225,236,0.5)",borderWidth:10,shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},tooltip:{show:!0},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,188,13, 0)"},{offset:1,color:"rgba(255,188,13, 0)"}],global:!1}},data:[210,205,130,175,222,214,227]},{name:"数据API",type:"line",smooth:!1,showAllSymbol:!0,symbol:"circle",symbolSize:15,lineStyle:{normal:{color:"#1eeda4",shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0,shadowOffsetY:5,shadowOffsetX:5}},label:{show:!1,position:"top",textStyle:{color:"#1eeda4",fontSize:16}},itemStyle:{color:"#1eeda4",borderColor:"rgba(30,237,164,0.5)",borderWidth:10,shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},tooltip:{show:!0},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,188,13, 0)"},{offset:1,color:"rgba(255,188,13, 0)"}],global:!1}},data:[60,110,40,60,65,170,180]}]};
