var indicator=[{text:"18~20岁",max:6e3,axisLabel:{show:!0}},{text:"20~30岁",max:5e3},{text:"30~40岁",max:5e3},{text:"40~50岁",max:5e3},{text:"50~60岁",max:5e3}];let nan=[4300,4700,3600,3900,3800,4200],nv=[3200,3e3,3400,2e3,3900,2e3],legendData=["男","女"],dataArr=[{value:nan,name:legendData[0],itemStyle:{normal:{borderWidth:1,color:"#8097EF"}},areaStyle:{normal:{color:"#8097EF"}}},{value:nv,name:legendData[1],itemStyle:{normal:{borderWidth:1,color:"#FAB410"}},areaStyle:{normal:{color:"#FAB410"}}}];var colorArr=["#4A99FF","#4BFFFC"];option={tooltip:{backgroundColor:"#FFFFFF",trigger:"item",confine:!0,position:function([e,t]){return[e+100,t]},formatter:function(e){const t=e.name,n=e.value;return` <div class='tooltips' id='tooltips' style='position: relative;
        display: inline-block;
        background: #FFFFFF;
        box-shadow: 0 -3px 10px 0 rgba(206,211,212,0.45), 2px 10px 13px 0 rgba(0,0,0,0.04);
        padding: 0.1rem 0.2rem;
        border-radius: 0.04rem;'><div><span class='' style='opacity: 0.7;
        font-family: PingFangSC-Medium;
        font-size: 0.14rem;
        color: #222222;
        padding: 0 0 0.05rem 0;'>`+t[0].name+`：</span><span class='' style='color: #2A70F1;
        font-family: PingFangSC-Medium;
        font-size: 0.13rem;'>`+n[0]+`人</span></div><div><span class='' style='opacity: 0.7;
        font-family: PingFangSC-Medium;
        font-size: 0.14rem;
        color: #222222;
        padding: 0 0 0.05rem 0;'>`+t[1].name+`：</span><span class='' style='color: #2A70F1;
        font-family: PingFangSC-Medium;
        font-size: 0.13rem;'>`+n[1]+`人</span></div><div class='' style='width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid #ffffff;
        position: absolute;
        left: -8%;
        top: 50%;'></div></div>`},padding:[11,19,13,13]},color:colorArr,legend:{data:legendData,top:25,right:40,itemWidth:8,itemHeight:8,itemGap:9,textStyle:{fontSize:14,color:"#74767C"}},radar:{name:{textStyle:{color:"#222222",fontSize:16}},indicator,splitArea:{show:!0,areaStyle:{color:["#F8FAFF","#F8FAFF"]}},axisLine:{lineStyle:{color:"#E3E9FB"}},splitLine:{lineStyle:{color:"#E3E9FB",width:1}}},series:[{type:"radar",symbolSize:8,data:dataArr}]};