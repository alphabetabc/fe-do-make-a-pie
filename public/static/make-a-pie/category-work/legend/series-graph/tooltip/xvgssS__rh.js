const legend1="image:///asset/get/s/data-1616488906907-TTcSsT2dL.png",legend2="image:///asset/get/s/data-1616488914803-Pen9H3XeG.png",legend3="image:///asset/get/s/data-1616488899626-PSUAyWzyA.png",symbol1="image:///asset/get/s/data-1616487032064-6FOUWYNk3.png",symbol2="image:///asset/get/s/data-1616487535227-ELoLLlCbe.png",symbol3="image:///asset/get/s/data-1616487247546-VOogMaQ_I.png",symbol4="image:///asset/get/s/data-1616487251844-2-ThXQ4Rw.png";e:;const tooltip={trigger:"item",textStyle:{fontSize:"100%"},formatter:e=>{if(e.dataType==="edge")return`
                <div>接触： 2021-07-14</div>
            `;switch(e.value.type){case 0:return`
                    <div>
                        <div>检测阳性：2021-7-14</div>
                        <div>出院：</div>
                    </div>
                `;case 1:return`
                    <div>
                        <div>发病：2021-07-14</div>
                        <div>确诊：2021-07-14</div>
                        <div>出院：</div>
                    </div>
                `;default:break}}},legend={show:!0,bottom:"5%",right:"2%",textStyle:{color:"#fff"},itemWidth:20,itemHeight:20,data:[{name:"确诊病例",icon:legend3},{name:"密接",icon:legend1}]},series={type:"graph",layout:"none",symbol:symbol1,symbolSize:90,categories:[{name:"密接"},{name:"无症状感染"},{name:"确诊病例"}],label:{show:!1,position:"bottom",textStyle:{fontSize:14,color:"#FF8F59"}},edgeSymbol:["circle","circle"],edgeSymbolSize:[4,4],edgeLabel:{show:!0,textStyle:{fontSize:10},formatter:"{c}"},data:[{name:"咩盛",value:{num:55,type:0},draggable:!0,x:40,y:40,symbol:symbol2},{name:"雷勒",value:{num:55,type:1},category:1,draggable:!0,x:-20,y:30,symbol:symbol2},{name:"小闷",value:{num:55,type:2},category:1,draggable:!0,x:-10,y:50,symbol:symbol3},{name:"排麻糯",value:{num:55,type:1},category:1,draggable:!0,x:0,y:30.4,symbol:symbol2},{name:"雷雨杰",value:{num:55,type:3},category:1,draggable:!0,x:60,y:39.4,symbol:symbol2},{value:{num:55,type:3},category:1,draggable:!0,x:-40,y:20},{value:{num:55,type:3},category:1,draggable:!0,x:-10,y:70},{value:{num:55,type:3},category:1,draggable:!0,x:15,y:20},{value:{num:55,type:3},category:1,draggable:!0,x:30,y:60},{value:{num:55,type:3},category:1,draggable:!0,x:70,y:60}],links:[{source:1,target:2,value:"同事"},{source:2,target:3,value:"同事"},{source:1,target:3,value:"同事"},{source:0,target:4,value:"邻居"},{source:1,target:5,value:"密接"},{source:7,target:3,value:"密接"},{source:6,target:2,value:"密接"},{source:0,target:8,value:"密接"},{source:4,target:9,value:"密接"}],lineStyle:{opacity:.9,width:1,curveness:0,color:"#FFFFFF",cap:"round"}};option={tooltip,series,legend,backgroundColor:"black"};
