const data=[{value:335,name:"特困人员供养"},{value:310,name:"房屋建筑施工许可"},{value:234,name:"发票领用"},{value:135,name:"信息查询"}];option={tooltip:{trigger:"item",position:["43%","11%"],backgroundColor:"",alwaysShowContent:!0,formatter:e=>`
                         <div style="height: 240px;width: 399px;opacity: 0.1;background-color: #72BCE9;border: 1px solid #979797;text-align: right;padding: 50px">
                             <p><span style='font-size: 52px;color: rgba(255,255,255,0.85);letter-spacing: 0;text-align: right;'>${e.percent}%</span></p>
                             <hr style="margin: 10px;">
                             <p style="font-size: 24px;color: rgba(255,255,255,0.85);margin: 20px 0;">
                                <span style="width: 10px;height:10px;display: inline-block;background: ${e.color}"></span>
                                ${e.name}
                             </p>
                             <p><span style='font-size: 32px;color: rgba(255,255,255,0.85);'>${e.value}</span></p>
                         </div>
                        `},legend:{right:10,data:["特困人员供养","房屋建筑施工许可","发票领用","信息查询"]},series:[{name:"服务内容占比",type:"pie",left:"-50%",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},color:["rgba(57,234,167,0.70)","rgba(252,83,137,0.60)","rgba(255,127,31,0.70)","rgba(255,220,100,0.70)"],emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},itemStyle:{normal:{}},data},{name:"",type:"pie",left:"-50%",hoverAnimation:!1,radius:["47%","42%"],avoidLabelOverlap:!1,tooltip:{show:!1},label:{normal:{show:!1}},itemStyle:{normal:{color:"rgba(255,255,255,0.19)"}},data:[1]}]};
