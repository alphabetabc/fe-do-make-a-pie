option={backgroundColor:"#0e2354",legend:{show:!0,align:"left",right:"2%",textStyle:{color:"white",fontSize:12,padding:[5,15,5,15],backgroundColor:"rgba(0,0,0,.2)",borderRadius:30}},tooltip:{trigger:"axis",confine:!0,padding:[10,25,10,25],backgroundColor:"rgba(0,0,0,.7)",axisPointer:{type:"none"},formatter:function(e){return`
                ${e[0].seriesName} / ${e[0].name}
                <br/>
                数量：${e[0].value}
                <br/>
                指标：${e[2].value}
                <br/>
                --------
                <br/>
                ${e[1].seriesName} / ${e[1].name}
                <br/>
                数量：${e[1].value}
                <br/>
                指标：${e[3].value}
            `}},grid:{left:"8%",right:"2%",top:60,bottom:60},xAxis:{splitLine:{show:!1},axisLabel:{color:"white"},axisLine:{lineStyle:{color:"rgba(255,255,255,.3)"}},data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:[{name:"数量",nameTextStyle:{color:"white"},splitLine:{show:!1},axisLabel:{color:"white"},axisLine:{lineStyle:{color:"rgba(255,255,255,.3)"}}}],series:[{type:"bar",name:"2020",barWidth:"30%",itemStyle:{barBorderRadius:[3,3,0,0],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#01A3DD"},{offset:1,color:"#13B7E5"}])},data:[233,312,135,312,451,120,282,391,434,390,230,110]},{type:"bar",name:"2021",barWidth:"30%",itemStyle:{barBorderRadius:[3,3,0,0],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#44EA82"},{offset:1,color:"#39F8D1"}])},data:[123,212,135,212,151,320,182,191,234,290,330,310]},{type:"line",name:"2020指标",itemStyle:{color:"#B8894A"},data:[220,182,191,234,290,330,310,323,122,35,112,251]},{type:"line",name:"2021指标",itemStyle:{color:"#00E676"},data:[323,212,135,112,251,220,182,191,234,290,330,310]}]};
