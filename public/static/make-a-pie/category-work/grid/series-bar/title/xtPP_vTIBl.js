const createColorStops=e=>{const r=[.9,.8,.4,.3,.2,.3,.4,.8,.9];let o=[];for(let t=0;t<9;t++)o.push({offset:t/8,color:"rgba("+e+","+r[t]+")"});return o};option={title:{text:"Awesome Chart"},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{},series:[{data:[220,182,191,234,290,330,310],type:"bar",itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:createColorStops("60,136,198")}}}]};