myChart.showLoading();var uploadedDataURL="/asset/get/s/data-1594956039560-gme3lYsqq.json";$.getJSON(uploadedDataURL,function(u){let n=[],y=[],p=[],h=u.reduce((s,e,a)=>(n.push(e.date.slice(5)),s.push(e.box_plot),y.push([a].concat(e._95CI)),p.push(e.average),s),[]),c={backgroundColor:"#fff",grid:{top:70,left:33,right:33,bottom:24,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"line"},formatter(s){let e=`<span>${s[0].name}</span>`;return s.reduce((a,o)=>{let{marker:t,seriesType:l,seriesName:r,value:i}=o;return l==="boxplot"?["最小值","25%分位","中位数","75%分位","最大值"].forEach((d,x)=>{a+=`
                                        <br/>
                                        ${t}
                                        <span>${d}：${i[x+1]}</span>
                                    `}):l==="scatter"?a+=`
                                    <br/>
                                    ${t}
                                    <span>${r}：${i}</span>
                                `:l==="custom"&&(a+=`
                                    <br/>
                                    ${t}
                                    <span>${r}：${i[1]}~${i[2]}</span>
                                `),a},e)}},xAxis:{type:"category",data:n,splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCDCDC"}},axisLabel:{show:!0,margin:10,fontSize:14,color:"#262C41",interval:"auto"},axisTick:{show:!1}},yAxis:{type:"value",inverse:!1,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#DCDCDC"}},axisLabel:{show:!0,margin:10,fontSize:14,color:"#262C41"}},series:[{name:"箱线",type:"boxplot",itemStyle:{borderColor:"#01C5B2",borderWidth:1,color:"#99E8E0"},z:0,data:h},{name:"平均值",type:"scatter",symbol:"triangle",symbolSize:10,itemStyle:{color:"#FFB569"},z:2,data:p},{name:"95CI",type:"custom",renderItem:function(s,e){let a=e.value(0),o=e.coord([a,e.value(2)]),t=e.coord([a,e.value(1)]),l=5,r=Object.assign(e.style(),{stroke:e.visual("color"),strokeWidth:4});return{type:"group",children:[{type:"line",shape:{x1:o[0]-l,y1:o[1],x2:o[0]+l,y2:o[1]},style:r},{type:"line",shape:{x1:o[0],y1:o[1],x2:t[0],y2:t[1]},style:r},{type:"line",shape:{x1:t[0]-l,y1:t[1],x2:t[0]+l,y2:t[1]},style:r}]}},encode:{x:0,y:[1,2]},z:3,data:y}]};myChart.setOption(c,!0),myChart.hideLoading()});
