option={color:["#458FE3","#48C964","#FFAE37","#FB8989","#CA89FB"],title:{text:"2017年1月1日-2018年12月31日短时强降水个例统计图",x:"center",top:"10%",textStyle:{color:"#2D527C",fontSize:"16",fontWeight:"bold"}},legend:{top:"14%"},grid:{left:"10%",right:"10%",top:"20%",bottom:"20%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"rgba(255, 255, 255, 0.8)",formatter:t=>{let i=`<span>${t[0].name}</span><br>`;return t.forEach((o,e)=>{let{marker:a,seriesName:l,value:n}=o;i+=`${a}
        <span style="display:inline-block;margin-right:4px;width:70px;height:18px;line-height:24px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${l}</span>
        <span style="display:inline-block;margin-right:12px;">${String(n)=="NaN"?"-":n}</span>
        ${(e+1)%2===0?"<br>":""}`}),i}},toolbox:{show:!0,top:"10%",right:"4%",feature:{dataView:{optionToContent:t=>{var i=t.xAxis[0].data,o=t.series,e=`<div class="echartstableview"><table style="width:100%;text-align:center">
                        <thead><tr><th>时间</th>`;return o.forEach((a,l)=>{e+=`<th>${a.name}</th>`}),e+="</tr></thead><tbody>",i.forEach((a,l)=>{e+=`<tr><td>${a}</td>`,o.forEach((n,r)=>{e+=`<td>${n.data[l]}</td>`}),e+="</tr>"}),e+="</tbody></table></div>",e}},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{axisTick:{show:!1},axisLabel:{textStyle:{color:"#707070",fontSize:14}},axisLine:{lineStyle:{color:"#707070",type:"dashed"}},data:["2017/1/1","2017/2/1","2017/3/1","2017/4/1","2017/5/1"]},yAxis:{name:"气温（℃）",nameTextStyle:{color:"#707070",fontSize:14},axisLabel:{textStyle:{color:"#707070",fontSize:14},showMaxLabel:!1},axisLine:{show:!0,symbol:["none","arrow"],symbolOffset:[0,4],lineStyle:{color:"#707070"}},splitLine:{show:!1},boundaryGap:[0,.1]},series:[{name:"500hPa",type:"line",symbolSize:14,data:[-10,-2,12,0,5]},{name:"700hPa",type:"line",symbolSize:14,data:[7,8,9,7,19]},{name:"850hPa",type:"line",symbolSize:14,data:[5,3,6,5,14]},{name:"925hPa",type:"line",symbolSize:14,data:[0,-3,0,5,10]},{name:"地面",type:"line",symbolSize:14,data:[1,5,5,9,4]}]};
