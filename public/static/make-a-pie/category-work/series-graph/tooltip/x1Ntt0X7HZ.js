const legend1="image:///asset/get/s/data-1616488906907-TTcSsT2dL.png",legend2="image:///asset/get/s/data-1616488914803-Pen9H3XeG.png",legend3="image:///asset/get/s/data-1616488899626-PSUAyWzyA.png",symbol1="image:///asset/get/s/data-1616487032064-6FOUWYNk3.png",symbol2="image:///asset/get/s/data-1616487535227-ELoLLlCbe.png",symbol3="image:///asset/get/s/data-1616487247546-VOogMaQ_I.png",symbol4="image:///asset/get/s/data-1616487251844-2-ThXQ4Rw.png",tooltip={trigger:"item",textStyle:{fontSize:"100%"},formatter:e=>{if(e.dataType==="edge")return`
                <div>接触： 2021-01-24</div>
            `;switch(e.value.type){case 0:return`
                    <div>
                        <div>检测阳性：2021-02-17</div>
                        <div>出院：2021-03-03</div>
                    </div>
                `;case 1:return`
                    <div>
                        <div>发病：2021-01-31</div>
                        <div>确诊：2021-01-31</div>
                        <div>出院：2021-01-31</div>
                    </div>
                `;default:break}}},legend={show:!0,bottom:"5%",right:"2%",textStyle:{color:"#fff"},itemWidth:20,itemHeight:20,orient:"vertical",data:[{name:"未感染",icon:legend1},{name:"无症状感染",icon:legend2},{name:"确诊病例",icon:legend3}]},series={type:"graph",layout:"none",symbol:symbol1,symbolSize:90,categories:[{name:"未感染"},{name:"无症状感染"},{name:"确诊病例"}],label:{show:!0,align:"center",textStyle:{fontSize:12,color:"#fff"},formatter:e=>`{a${e.value.type}|密接人数：${e.value.num}}






${e.name}`,rich:{a0:{color:"#fff",padding:[4,5],backgroundColor:"rgba(255, 86, 76, .45)"},a1:{color:"#fff",padding:[4,5],backgroundColor:"rgba(255, 86, 76, .35)"},a2:{color:"#fff",padding:[4,5],backgroundColor:"rgba(239, 255, 55, .35)"},a3:{color:"#fff",padding:[4,5],backgroundColor:"rgba(50, 233, 255, .35)"}}},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,8],edgeLabel:{show:!0,textStyle:{fontSize:10},formatter:"{c}"},data:[{name:"张三三",value:{num:55,type:0},draggable:!0,x:20,y:40,symbol:symbol3},{name:"赵五",value:{num:55,type:1},category:1,draggable:!0,x:-20,y:30,symbol:symbol4},{name:"刘六",value:{num:55,type:2},category:1,draggable:!0,x:-10,y:50,symbol:symbol2},{name:"光头强",value:{num:55,type:1},category:1,draggable:!0,x:0,y:30,symbol:symbol4},{name:"熊大",value:{num:55,type:2},category:1,draggable:!0,x:36,y:39,symbol:symbol2},{name:"张芳芳",value:{num:55,type:3},category:1,draggable:!0,x:10,y:50},{name:"李四1",value:{num:55,type:3},category:1,draggable:!0,x:36,y:25},{name:"李四2",value:{num:55,type:3},category:1,draggable:!0,x:45,y:48},{name:"李四3",value:{num:55,type:3},category:1,draggable:!0,x:35,y:52},{name:"李四4",value:{num:55,type:3},category:1,draggable:!0,x:34,y:62},{name:"李四5",value:{num:55,type:3},category:1,draggable:!0,x:18,y:56}],links:[{source:1,target:2,value:"家人1"},{source:2,target:3,value:"家人2"},{source:3,target:0,value:"同事1"},{source:0,target:4,value:"朋友1"},{source:0,target:5,value:"同事2"},{source:0,target:6,value:"朋友2"},{source:0,target:7,value:"家人3"},{source:0,target:8,value:"家人4"},{source:0,target:9,value:"同事4"},{source:0,target:10,value:"同事5"}],lineStyle:{opacity:.9,width:1,curveness:0,color:"#fff"}};option={tooltip,series,legend,backgroundColor:"rgba(0,0,0,0.8)"};
