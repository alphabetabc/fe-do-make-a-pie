var testdata=[{mainId:"0000",parentIds:["0001","0002","0003","0004","0011"],siteName:"该站点",saleTotal:"98487",upsite:"5",subordinate:"8",rank:"10"},{mainId:"0001",parentIds:["321","332","0323","2334"],siteName:"上级1",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0002",parentIds:["12131","23102"],siteName:"上级2",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0003",parentIds:["2211"],siteName:"上级3",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0004",parentIds:["151","08042"],siteName:"上级4",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0011",parentIds:["151","08042"],siteName:"上级5",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0005",parentIds:["0000"],siteName:"下级1",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0006",parentIds:["0000","08042"],siteName:"下级2",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0007",parentIds:["0000"],siteName:"下级3",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0008",parentIds:["0000"],siteName:"下级4",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0009",parentIds:["0000"],siteName:"下级5",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0010",parentIds:["0000"],siteName:"下级6",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0011",parentIds:["0000"],siteName:"下级7",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"},{mainId:"0012",parentIds:["0000"],siteName:"下级8",saleTotal:"98487",upsite:"5",subordinate:"14",rank:"10"}],parentsList=[],testline=[];let upSiteNum,nextSiteNum;for(const e in testdata)if(testdata[e].mainId==="0000")testdata[e].x=1e3/2,testdata[e].y=500,parentsList=testdata[e].parentIds,upSiteNum=testdata[e].upsite>10?10:testdata[e].upsite,nextSiteNum=testdata[e].subordinate>10?10:testdata[e].subordinate;else if(_.includes(testdata[e].parentIds,"0000")){testdata[e].x=(e-upSiteNum-1)*(1e3/nextSiteNum),testdata[e].y=200;const n=testdata[0].x,s=testdata[0].y,a=[];a.push([n,s]),a.push([n,s-150]),a.push([(e-upSiteNum-1)*(1e3/nextSiteNum),s-150]),a.push([(e-upSiteNum-1)*(1e3/nextSiteNum),testdata[e].y]);const i={coords:a};testline.push(i)}else{testdata[e].x=(e-1)*(1e3/(upSiteNum-1)),testdata[e].y=800;const n=testdata[0].x,s=testdata[0].y,a=[];a.push([n,s]),a.push([n,s+150]),a.push([(e-1)*(1e3/(upSiteNum-1)),s+150]),a.push([(e-1)*(1e3/(upSiteNum-1)),testdata[e].y]);const i={coords:a};testline.push(i)}for(var nodes=_.cloneDeep(testdata),charts={nodes:[],linesData:testline},j=0;j<nodes.length;j++){var x=parseInt(nodes[j].x),y=parseInt(nodes[j].y),node={siteName:nodes[j].siteName,value:[x,y],symbolSize:30,mainId:nodes[j].mainId,saleTotal:nodes[j].saleTotal,upsite:nodes[j].upsite,subordinate:nodes[j].subordinate,rank:nodes[j].rank,itemStyle:{normal:{color:"#12b5d0"}}};charts.nodes.push(node)}option={tooltip:{formatter:function(e){let t="";if(e.seriesType==="graph")return t="站点名称:"+e.data.siteName+"<br/>",t+="销售总额:"+e.data.saleTotal+"元<br/>",e.data.mainId==="0000"?(t+="上级:"+e.data.upsite+"个<br/>",t+="下级:"+e.data.subordinate+"个<br/>"):t+="排名:"+e.data.rank+"<br/>",t}},xAxis:{min:0,max:1e3,show:!1,type:"value"},yAxis:{min:0,max:1e3,show:!1,type:"value"},series:[{type:"graph",coordinateSystem:"cartesian2d",label:{normal:{show:!0,position:"bottom",color:"#000000"}},data:charts.nodes},{type:"lines",polyline:!0,coordinateSystem:"cartesian2d",lineStyle:{normal:{width:2,color:"#000000",curveness:.3}},data:charts.linesData}]};