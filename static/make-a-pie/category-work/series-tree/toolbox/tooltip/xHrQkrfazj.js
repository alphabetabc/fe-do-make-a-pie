var colors=["#3CB371","#3CB371","#3CB371","#FFA500","#DC143C"],getdata=function(){let a={name:"升压站",value:0,children:[]};for(let e=1;e<=50;e++){let r={name:e+"#箱变",value:e,children:[]};for(let t=1;t<=2;t++){let n={name:`逆变器-${e}-${t}`,value:1+"-"+e+"-"+t};if(t%2==1){n.children=[];for(let l=1;l<=7;l++){let d={name:`汇流箱-${e}-${t}-${l}`,value:1+"-"+e+"-"+t+"-"+l};n.children.push(d)}}r.children.push(n)}a.children.push(r)}let o=[];return o.push(a),o=handle(o,0),console.log(o),o},handle=function(a,o,e="#00f6ff"){return a.map((r,t)=>{switch(o==1&&(e=colors.find((n,l)=>l==t%5)),(o===0||o===1)&&(r.label={position:"inside"}),o){case 0:r.symbolSize=70;break;case 1:r.symbolSize=20;break;default:r.symbolSize=10;break}return r.lineStyle={color:e},r.children?(r.itemStyle={borderColor:e,color:e},r.children=handle(r.children,o+1,e)):r.itemStyle={color:"transparent",borderColor:e},r})},option={type:"tree",backgroundColor:"#000",toolbox:{show:!0,iconStyle:{borderColor:"#03ceda"},feature:{restore:{}}},tooltip:{trigger:"item",triggerOn:"mousemove",backgroundColor:"rgba(1,70,86,1)",borderColor:"rgba(0,246,255,1)",borderWidth:.5,textStyle:{fontSize:10}},series:[{type:"tree",hoverAnimation:!0,data:getdata(),top:0,bottom:0,left:0,right:0,layout:"radial",symbol:"circle",symbolSize:10,nodePadding:20,animationDurationUpdate:750,expandAndCollapse:!0,initialTreeDepth:2,roam:!0,focusNodeAdjacency:!0,itemStyle:{borderWidth:1},label:{color:"#fff",fontSize:10,fontFamily:"SourceHanSansCN"},lineStyle:{width:1,curveness:.5}}]};
