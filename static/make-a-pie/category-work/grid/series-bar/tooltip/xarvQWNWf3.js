const xData=["00:00","01:00","02:00","03:00","04:00","05:00","06:00"],barData=[5,20,36,10,10,20];option={tooltip:{show:!0,trigger:"axis",confine:!0,formatter(a){return`<div>
                                        <div>${xData[a[0].dataIndex]}~${xData[a[0].dataIndex+1]}</div>
                                            <div><span style="width:10px;height:10px;display: inline-block;background:${a[0].color}"></span> ${a[0].data}</div>
                                  </div>`}},xAxis:[{data:barData,show:!1},{data:xData,axisLabel:{interval:0,show:!0},position:"bottom",boundaryGap:!1,axisPointer:{show:!1}}],yAxis:{type:"value",show:!1},series:[{data:barData,type:"bar",backgroundStyle:{color:"rgba(220, 220, 220, 0.8)"}}]};
