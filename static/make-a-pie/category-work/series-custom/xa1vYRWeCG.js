const MyShape=echarts.graphic.extendShape({shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:Math.PI*2,clockwise:!0,step:0},style:{stroke:"#000",fill:null},buildPath:function(e,t){const l=t.cx,n=t.cy,s=Math.max(t.r,0),a=t.startAngle,o=t.endAngle,c=t.clockwise,r=Math.cos(a),i=Math.sin(a),u=Math.cos(o),g=Math.sin(o);e.moveTo(r*s+l,i*s+n),e.arc(l,n,s,a,o,!c),e.lineTo(u*s+l,g*s+n+t.step),e.arc(l,n+t.step,s,o,a,c),e.lineTo(r*s+l,i*s+n)}});echarts.graphic.registerShape("myCustomShape",MyShape);const PI2=Math.PI*2,data1=[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}],valueList=[];for(let e=0;e<data1.length;e++)valueList.push(data1[e].value);const viewData=[];let validDataCount=0;const colorList=["#f00","#0f0","#00f","#ff0","#0ff"];for(let e=0;e<data1.length;e++){const t=data1[e],l=echarts.number.getPercentWithPrecision(valueList,e,1);validDataCount+=l,viewData.push({name:t.name,value:t.value,percent:l,validDataCount,__pieColor:colorList[e%colorList.length]})}option={series:[{data:data1,type:"custom",coordinateSystem:"none",renderItem:(e,t)=>{const l=e.dataIndex,n=viewData[l],s=PI2*(n.validDataCount-n.percent)/100,a=PI2*n.validDataCount/100,o=[t.getWidth()/2,t.getHeight()/2],c=[1,.6],r=o;return{type:"group",children:[{type:"sector",scale:c,origin:r,silent:!0,z2:0,shape:{cx:o[0],cy:o[1]+20,r0:0,r:130,startAngle:s,endAngle:a},style:t.style({fill:n.__pieColor})},{type:"sector",scale:c,origin:r,silent:!0,z2:2,shape:{cx:o[0],cy:o[1]-20,r0:0,r:130,startAngle:s,endAngle:a},style:t.style({fill:n.__pieColor})},{type:"myCustomShape",scale:c,origin:r,silent:!0,z2:1,shape:{cx:o[0],cy:o[1]-20,step:40,r0:0,r:130,startAngle:s,endAngle:a},style:t.style({fill:n.__pieColor,stroke:n.__pieColor,lineWidth:0})}]}}}]};