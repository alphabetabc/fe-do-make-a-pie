option={title:{text:"折线图堆叠"},tooltip:{trigger:"axis",formatter:function(a){var n=`<style>
                        .tb_table {
                            display: table;
                        }
    
                        .tb_table .tb_row {
                            display: table-row;
                        }
                
                        .tb_table .tb_row .tb_cell {
                            display: table-cell;
                            color: white;
                            border: 0;
                            padding: 5px 10px;
                        }
                        .colorCircle {
                			display:inline-block;
                			margin-right:5px;
                			border-radius:10px;
                			width:10px;
                			height:10px;
                		}
                    </style>`,d="<div class='tb_table'>",b="</div>",r=a.length,l=2,s=parseInt(r/l);r%l!=0&&(s+=1);var t=a[0].axisValue;console.info(a);for(var e,i=0;i<s;i++){t+="<div class='tb_row'>";for(var o=0;o<l;o++)t+="<div class='tb_cell'>",e=i*l+o,e<r&&(t+="<span style='background-color:"+a[e].color+`' class="colorCircle"></span>`,t+=a[e].seriesName,t+=":",t+=a[e].data),t+="</div>";t+="</div>"}return n+d+t+b}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]};
