option={title:{text:"title",left:-5,textStyle:{fontWeight:"normal"}},graphic:{elements:[{type:"group",left:"center",top:"center",children:[{type:"text",left:"center",top:"0",style:{text:999,fontSize:30,fill:"#0af"}},{type:"text",left:"center",top:"30",style:{text:"pie title",fontSize:20}}]}]},grid:{left:3,top:45,bottom:0,right:0,containLabel:!0},xAxis:[{data:["x1","x2","x3","x4","x5"],splitLine:{show:!1},axisTick:{show:!1,inside:!0},axisLabel:{}}],yAxis:[{axisLine:{show:!1},splitLine:{lineStyle:{type:["solid","dashed","dotted"][2]}},axisTick:{show:!1,inside:!0},axisLabel:{margin:5,formatter:function(e,n){if(isNaN(e))return e;e=+e;for(var t=0;;t++){var a=e/1e4;if(a<1)break;e=a}return+e.toFixed(1)+Array(t%2+1).join("万")+Array(parseInt(t/2)+1).join("亿")}}}],dataZoom:[{type:"slider",show:!1,start:0,end:100}],tooltip:{trigger:"item"},tooltip:{trigger:["item","axis"][1],position:function(i){return[i[0]-14,"0"]},confine:!0,axisPointer:{},extraCssText:"transition:none;box-shadow:1px 1px 10px #aaa;background:rgba(0,0,0,.5);bottom:auto;top:0;margin-bottom:-30px;pointer-events:none"},color:["#0af","#21D100","#FFD013","#FF6767"],legend:{right:0,icon:"rect",itemGap:16,itemHeight:8,itemWidth:20,data:["A","B","C"],selected:{A:!0}},series:[{name:"A",type:["line","bar","pie"][0],showSymbol:!1,lineStyle:{normal:{width:1}},z:3,data:[1,2,4,4,6,{name:"x",value:9}]},{name:"B",type:["line","bar","pie"][1],barMaxWidth:30,showSymbol:!1,lineStyle:{normal:{width:1}},z:2,data:[5,4,2,1,1]},{name:"C",type:["line","bar","pie"][2],barMaxWidth:30,showSymbol:!1,lineStyle:{normal:{width:1}},radius:["40%","55%"],z:1,label:{align:"left",formatter:`{d}%  {c}
{b}`},data:[{name:"准点人数",value:17},{name:"迟到人数",value:1},{name:"请假人数",value:1},{name:"未打卡人数",value:1}]}]};