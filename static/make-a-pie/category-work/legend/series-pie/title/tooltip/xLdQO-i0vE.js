let data={download:[{value:135,name:"和家亲"},{value:35,name:"小米米家"}],usageDuration:[{value:135,name:"和家亲"},{value:50,name:"小米米家"}]},span="30%";option={title:[{text:"小米米家、和家亲APP对比",left:"center",textStyle:{color:"white",fontWeight:"bold"},top:"20"},{text:"下载量",left:"23%",textStyle:{color:"#bac0c0",fontWeight:"bold"},top:"10%"},{text:"使用时长",left:"73%",textStyle:{color:"#bac0c0",fontWeight:"bold"},top:"10%"}],tooltip:{trigger:"item"},backgroundColor:"#131e54",color:["#637b69","#789b6f","#3b64a6","#2672cc","#503e8d","#5d3ec5","#874f5f","#b6575c","#623363","#962e66"],legend:{orient:"horizontal",show:!0,bottom:"10%",data:["和家亲","小米米家"],textStyle:{color:"#bac0c0"}},series:[{name:"下载量",type:"pie",center:["25%","50%"],radius:[span||"0%","50%"],labelLine:{normal:{length:30,length2:80,lineStyle:{color:"#fff"}}},label:{normal:{formatter:`{a|{d}%} {b|{b}}
`,borderWidth:0,borderRadius:4,padding:[0,-50],rich:{a:{color:"#fff",fontSize:14,lineHeight:20},hr:{borderColor:"#fff",width:"100%",borderWidth:.5,height:0},b:{fontSize:14,lineHeight:20,color:"#fff"}}}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}({d}%)"},data:data.download},{name:"使用时长",type:"pie",center:["75%","50%"],radius:[span||"0","50%"],labelLine:{normal:{length:30,length2:80,lineStyle:{color:"#fff"}}},label:{normal:{formatter:`{a|{d}%} {b|{b}}
`,borderWidth:0,borderRadius:4,padding:[0,-50],rich:{a:{color:"#fff",fontSize:14,lineHeight:20},hr:{borderColor:"#fff",width:"100%",borderWidth:.5,height:0},b:{fontSize:14,lineHeight:20,color:"#fff"}}}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}分钟 ({d}%)"},data:data.usageDuration}]};