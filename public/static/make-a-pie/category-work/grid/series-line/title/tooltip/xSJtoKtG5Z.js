var uploadedDataURL="/asset/get/s/data-1505060166282-Hy0rHJ79Z.png",baseNumber=1280,stepPrice=1,maxValue=1e3,minValue=-1e3;function format_w(e){return e=="Mon"?"":e}function format_y(e){return e>0?"{red|"+(baseNumber+e)+"}":e==0?baseNumber+e:"{green|"+(baseNumber+e)+"}"}function format_price_percent(e){return e>0?"{red|"+e/baseNumber+"}":e==0?baseNumber+e:"{green|"+e/baseNumber+"}"}function generateTime(){for(var e=[],r=30;r<60;r++)e.push("09:"+r);for(var r=0;r<60;r++)e.push("10:"+r);for(var r=0;r<30;r++)e.push("11:"+r);for(var t=13;t<15;t++)for(var r=0;r<60;r++)e.push(t+":"+r);return e.push("15:00"),e}option={title:{text:"Awesome Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},xAxis:{boundaryGap:!1,data:generateTime(),axisLabel:{interval:29,formatter:format_w},splitLine:{show:!0,lineStyle:{type:"dashed"}}},yAxis:[{type:"value",min:minValue,max:maxValue,splitNumber:10,splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{formatter:format_y,rich:{red:{color:"red",lineHeight:10},green:{color:"green",lineHeight:10}}}},{type:"value",min:minValue,max:maxValue,splitNumber:10,splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{formatter:format_price_percent,rich:{red:{color:"red",lineHeight:10},green:{color:"green",lineHeight:10}}}}],series:[{type:"line",lineStyle:{size:1},symbol:"diamond",itemStyle:{normal:{color:"rgb(44, 80, 169)",borderColor:"rgba(44, 80, 169, 0.5)",borderWidth:12}},symbol:"path://M-50 50a100 100 0 1 0 200 0a100 100 0 1 0 -200 0zM 100 100 L 300 100 L 200 300 z",opacity:"0.5",color:"rgba(25,242, 123, 0.1)",colorAlpha:.1,data:[220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310,220,182,191,234,290,330,310]}]};
