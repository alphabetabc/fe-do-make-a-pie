loadMap("/asset/get/s/data-1591152454850-nnifVpUft.json","china");var item=[{name:"贵州",value:9.143,per:"23.52%"},{name:"江苏",value:80,per:"23.52%"}];function loadMap(i,a){$.get(i,function(t){if(t){echarts.registerMap(a,t);var l={backgroundColor:"#fff",tooltip:{formatter:function(e){console.log(e);let o=`<div style="width:153px;background:#fff;border: 1px solid #E5E5E5;border-radius: 3px;margin:-5px">
                            <div style="font-size:12px;color:#333;padding:10px 14px;border-bottom:1px solid #EBEBEB;">
                              ${e.name}
                            </div>`;return e.data?o+=`
                            <div style="padding:10px 14px;font-size:12px;color:#333">
                              <div style="margin-bottom:10px;">
                                <span style="display:inline-block;color:#6C767E;width:80px;font-weight: 400;">攻击量</span>
                                <span>${e.value}</span>
                              </div>
                              <div>
                                <span style="display:inline-block;color:#6C767E;width:80px;font-weight: 400;">攻击量占比</span>
                                <span>${e.data.per}</span>
                              </div>
                            </div>`:o+="</div>",o}},visualMap:{min:0,max:38,left:40,bottom:40,text:["高","低"],calculable:!1,inRange:{color:["#FEB71D","#FF0001"]},show:!0},series:[{type:"map",mapType:a,label:{normal:{show:!1},emphasis:{show:!0,color:"#fff"}},itemStyle:{normal:{borderWidth:2,borderColor:"#CCCCCC",areaColor:"#fff"},emphasis:{areaColor:"#6daade",color:"#aa14ac"}},data:item}]};myChart.setOption(l)}else alert("无法加载该地图")})}
