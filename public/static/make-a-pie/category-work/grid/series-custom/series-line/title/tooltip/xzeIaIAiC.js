var colors=[{type:"linear",x:0,x2:1,y:0,y2:0,colorStops:[{offset:0,color:"#21bddf80"},{offset:.5,color:"#21bddf80"},{offset:.5,color:"#21bddf"},{offset:1,color:"#21bddf"}]}],barWidth=30,getCrossPoint=function(s,i,n){return(n-s[0])*(i[1]-s[1])/(i[0]-s[0])+s[1]},renderItem=function(s,i){var n=i.value(1),f=i.coord([i.value(0),n]),r=i.size([i.value(1)-i.value(0),n]),o=i.style(),e=r[0]*1.2,t=f[0]-e/2,l=f[1],h=20,a=[[t+e/2,l]],d=[[t+e/2,l]];s.dataIndex==0?a.push([t,r[1]+l]):(a.push([t+(e/2-e/1.2/2),getCrossPoint([t,r[1]+l],[t+e/2,l],t+(e/2-e/1.2/2))]),a.push([t+(e/2-e/1.2/2),getCrossPoint([t,r[1]+l],[t+e/2,r[1]+l+h],t+(e/2-e/1.2/2))])),a.push([t+e/2,r[1]+l+h]),d.push([t+e/2,r[1]+l+h]),s.dataIndex==s.dataInsideLength-1?d.push([t+e,r[1]+l]):(d.push([t+e/2+e/1.2/2,getCrossPoint([t+e/2,r[1]+l+h],[t+e,r[1]+l],t+e/2+e/1.2/2)]),d.push([t+e/2+e/1.2/2,getCrossPoint([t+e/2,l],[t+e,r[1]+l],t+e/2+e/1.2/2)])),o.stroke="#98e3f5",o.lineWidth=2;var c={type:"group",children:[{z2:3,type:"polygon",shape:{points:a},style:{fill:o.fill.colorStops[0].color,stroke:o.stroke,lineWidth:o.lineWidth},styleEmphasis:{fill:o.fill.colorStops[0].color,stroke:o.stroke,lineWidth:o.lineWidth}},{z2:3,type:"polygon",shape:{points:d},style:{fill:o.fill.colorStops[3].color,stroke:o.stroke,lineWidth:o.lineWidth},styleEmphasis:{fill:o.fill.colorStops[3].color,stroke:o.stroke,lineWidth:o.lineWidth}}]};return c};option={title:{text:"Awesome Chart"},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},tooltip:{show:!0,trigger:"item"},yAxis:{},series:[{type:"custom",itemStyle:{normal:{color:colors[0]}},data:[220,182,191,234,290,330,310],renderItem},{type:"line",lineStyle:{color:"white"},symbol:"circle",symbolSize:10,itemStyle:{color:"#25dafd"},data:[220,182,191,234,290,330,310],label:{show:!0,textStyle:{color:"white"},formatter:function(s){console.log(s)}}}]};