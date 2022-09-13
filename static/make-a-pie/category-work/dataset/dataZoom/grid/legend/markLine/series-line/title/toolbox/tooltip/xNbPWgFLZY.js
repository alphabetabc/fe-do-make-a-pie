option={title:[{show:!0,text:"药占比趋势"},{show:!1,text:"2018药占比:44.20",top:"70",right:"80"}],legend:{show:!0},toolbox:{feature:{dataZoom:{show:!0},mySeriesGroup:{show:!0,title:"grid series互换",icon:"image://icons/run.png",onclick:`function (){									\r
									var tmp = _this.groupByName;\r
									_this.groupByName = _this.seriesName;\r
									_this.seriesName = tmp;\r
									_this.query();\r
									\r
				                }`}},left:"right"},tooltip:{trigger:"axis"},xAxis:[{show:!0,type:"category"}],yAxis:[{type:"value",min:28}],series:[{name:"2018",label:{show:!0},axisLine:{lineStyle:{color:[[.2,""],[.8,""],[100,""]]}},detail:{offsetCenter:["0%","40%"],fontFamily:"serif"},symbolOffset:[0,0],center:["50%","50%"],type:"line",encode:{itemName:"",value:"",x:"月",y:"药占比(%)",z:""},datasetIndex:0},{name:"2019",label:{show:!0},axisLine:{lineStyle:{color:[[.2,""],[.8,""],[100,""]]}},detail:{offsetCenter:["0%","40%"],fontFamily:"serif"},symbolOffset:[0,0],center:["50%","50%"],markLine:{data:[{name:"要求",yAxis:"30",lineStyle:{color:"#ff0000"},symbolOffset:[0,0]},{name:"2018",yAxis:"44.20",label:{formatter:"2018:44.20"},symbolOffset:[0,0]},{name:"2019",yAxis:"42.60",label:{formatter:"2019:42.60"},symbolOffset:[0,0]}]},type:"line",encode:{itemName:"",value:"",x:"月",y:"药占比(%)",z:""},datasetIndex:1}],grid:{},jsonText:`{
  "title": [
    {
      "show": true
    }
  ],
  "legend": {
    "show": true
  },
  "radar": {},
  "visualMap": [],
  "timeline": {
    "show": false
  },
  "toolbox": {},
  "tooltip": {
    "show": true
  },
  "xAxis": [
    {
      "show": true,
      "type": "category"
    },
    {
      "show": false,
      "type": "category"
    }
  ],
  "yAxis": [
    {
      "type": "value",
      "min": 10
    },
    {
      "show": false,
      "type": "value"
    }
  ],
  "zAxis": [
    {
      "show": true,
      "type": "value"
    },
    {
      "show": false,
      "type": "value"
    }
  ],
  "series": [
    {
      "name": "趋势",
      "label": {
        "show": true
      },
      "axisLine": {
        "lineStyle": {
          "color": [
            [
              0.2,
              ""
            ],
            [
              0.8,
              ""
            ],
            [
              100,
              ""
            ]
          ]
        }
      },
      "detail": {
        "offsetCenter": [
          "0%",
          "40%"
        ],
        "fontFamily": "serif"
      },
      "symbolOffset": [
        0,
        0
      ],
      "center": [
        "50%",
        "50%"
      ]
    },
    {
      "name": "仪表盘",
"gridIndex":1,

      "startAngle": 180,
      "endAngle": 0,
      "splitNumber": 5,
      "axisLine": {
        "lineStyle": {
          "color": [
            [
              0.3,
              "green"
            ],
            [
              0.8,
              "blue"
            ],
            [
              100,
              "red"
            ]
          ],
          "width": 4
        }
      },
      "splitLine": {
        "show": false,
        "length": 10
      },
      "detail": {
        "offsetCenter": [
          "0%",
          "40%"
        ],
        "fontFamily": "serif"
      },
      "symbolOffset": [
        0,
        0
      ],
      "center": [
        "70%",
        "25%"
      ],
      "radius": "25%"
    }
  ],
  "grid": [
    {},
    {
      "right": "100",
      "bottom": "100"
    }
  ]
}`,type:"json",table:{title:"[开单科室]药占比"},dataset:[{dimensions:["月","年","年月","总金额","药品金额","药占比(%)","年总金额","年药品金额","年度药占比"],source:[[1,2018,201801,2343230725e-2,1041883765e-2,"44.50",27091826024e-2,11984321107e-2,"44.20"],[2,2018,201802,1925479239e-2,882044301e-2,"45.80",27091826024e-2,11984321107e-2,"44.20"],[3,2018,201803,2425886067e-2,1098199194e-2,"45.30",27091826024e-2,11984321107e-2,"44.20"],[4,2018,201804,2246454513e-2,1053585452e-2,"46.90",27091826024e-2,11984321107e-2,"44.20"],[5,2018,201805,2325330846e-2,1090495882e-2,"46.90",27091826024e-2,11984321107e-2,"44.20"],[6,2018,201806,224017487e-1,1000260176e-2,"44.70",27091826024e-2,11984321107e-2,"44.20"],[7,2018,201807,2350905579e-2,952328233e-2,"40.50",27091826024e-2,11984321107e-2,"44.20"],[8,2018,201808,2339227402e-2,925757259e-2,"39.60",27091826024e-2,11984321107e-2,"44.20"],[9,2018,201809,199698898e-1,905672103e-2,"45.40",27091826024e-2,11984321107e-2,"44.20"],[10,2018,201810,2173754455e-2,987888539e-2,"45.40",27091826024e-2,11984321107e-2,"44.20"],[11,2018,201811,2489277611e-2,1095264945e-2,"44.00",27091826024e-2,11984321107e-2,"44.20"],[12,2018,201812,2235115735e-2,950941257e-2,"42.50",27091826024e-2,11984321107e-2,"44.20"]]},{dimensions:["月","年","年月","总金额","药品金额","药占比(%)","年总金额","年药品金额","年度药占比"],source:[[1,2019,201901,2314826717e-2,99148142e-1,"42.80",16813786524e-2,7166173611e-2,"42.60"],[2,2019,201902,1878533766e-2,837795754e-2,"44.60",16813786524e-2,7166173611e-2,"42.60"],[3,2019,201903,2447708787e-2,1006984185e-2,"41.10",16813786524e-2,7166173611e-2,"42.60"],[4,2019,201904,2604934389e-2,1103126701e-2,"42.30",16813786524e-2,7166173611e-2,"42.60"],[5,2019,201905,2628619379e-2,1115253856e-2,"42.40",16813786524e-2,7166173611e-2,"42.60"],[6,2019,201906,251962191e-1,1101105533e-2,"43.70",16813786524e-2,7166173611e-2,"42.60"],[7,2019,201907,2419541576e-2,1010426163e-2,"41.80",16813786524e-2,7166173611e-2,"42.60"]]}],textStyle:{fontSize:18}};
