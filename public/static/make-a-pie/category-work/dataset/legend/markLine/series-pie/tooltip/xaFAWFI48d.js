let markLineData=[],source=[["product","2015","2016"],["系列1-1",43.3],["系列1-2",83.1],["系列1-3",86.4],["系列1-4",72.4],["系列1-5",72.4],["系列2-1",53.9],["系列2-2",85.8],["系列2-3",145.8]];addOtherData(source,3),option={legend:{},tooltip:{},dataset:{source},series:[{type:"pie",radius:"50%",center:["25%","50%"],label:{show:!0,position:"inside"},startAngle:45,clockwise:!1,markLine:{lineStyle:{type:"solid",color:"#BFBFBF"},symbol:"none",data:markLineData}},{type:"pie",radius:"30%",center:["75%","50%"],encode:{itemName:"product",value:"2016"},label:{show:!0,position:"inside"}}]};function getMarkLineData(n){let l=myChart.getHeight(),s=myChart.getWidth()*.25,r=s+l/4*Math.cos(45*3.14/180),a=l*.5-l/4*Math.sin(45*3.14/180),t=360*(n/100),e=0;e=t<=45?45-t:360-(t-45),e<270&&e>45&&(e=270);let i=0,o=0;return i=s+l/4*Math.cos(e*3.14/180),o=l*.5-l/4*Math.sin(e*3.14/180),[[{x:r,y:a},{x:"75%",y:"35%"}],[{x:i,y:o},{x:"75%",y:"65%"}]]}function addOtherData(n,l){let h=0,s=0;n.forEach((t,e)=>{if(e>0){let i=0;for(let o of t){let c=isNaN(o)?0:Number(o);i===1&&(s+=c),i++}}});let r=n.slice(n.length-l),a=["其他"];for(let t=0;t<r.length;t++){let e=0;for(let i of r[t]){let o=isNaN(i)?0:i;e&&(a[e]?a[e]+=o:a.push(o)),e++}r[t].splice(1,0,"")}n.push(a),h=s?(a[1]/s*100).toFixed(2):100,markLineData=getMarkLineData(h)}
