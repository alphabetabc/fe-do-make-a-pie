var data=splitData([["2015-10-16",18.4,18.58,18.33,18.79,67,1,.04,.11,.09],["2015-10-19",18.56,18.25,18.19,18.56,55,0,-0,.08,.09],["2015-10-20",18.3,18.22,18.05,18.41,37,0,.01,.09,.09],["2015-10-21",18.18,18.69,18.02,18.98,89,0,.03,.1,.08],["2015-10-22",18.42,18.29,18.22,18.48,43,0,-.06,.05,.08],["2015-10-23",18.26,18.19,18.08,18.36,46,0,-.1,.03,.09],["2015-10-26",18.33,18.07,17.98,18.35,65,0,-.15,.03,.1],["2015-10-27",18.08,18.04,17.88,18.13,37,0,-.19,.03,.12],["2015-10-28",17.96,17.86,17.82,17.99,35,0,-.24,.03,.15],["2015-10-29",17.85,17.81,17.8,17.93,27,0,-.24,.06,.18],["2015-10-30",17.79,17.93,17.78,18.08,43,0,-.22,.11,.22],["2015-11-02",17.78,17.83,17.78,18.04,27,0,-.2,.15,.25],["2015-11-03",17.84,17.9,17.84,18.06,34,0,-.12,.22,.28],["2015-11-04",17.97,18.36,17.85,18.39,62,0,-0,.3,.3],["2015-11-05",18.3,18.57,18.18,19.08,177,0,.07,.33,.3],["2015-11-06",18.53,18.68,18.3,18.71,95,0,.12,.35,.29],["2015-11-09",18.75,19.08,18.75,19.98,202,1,.16,.35,.27],["2015-11-10",18.85,18.64,18.56,18.99,85,0,.09,.29,.25],["2015-11-11",18.64,18.44,18.31,18.64,50,0,.06,.27,.23],["2015-11-12",18.55,18.27,18.17,18.57,43,0,.05,.25,.23],["2015-11-13",18.13,18.14,18.09,18.34,35,0,.05,.24,.22],["2015-11-16",18.01,18.1,17.93,18.17,34,0,.07,.25,.21],["2015-11-17",18.2,18.14,18.08,18.45,58,0,.11,.25,.2],["2015-11-18",18.23,18.16,18,18.45,47,0,.13,.25,.19],["2015-11-19",18.08,18.2,18.05,18.25,32,0,.15,.24,.17],["2015-11-20",18.15,18.15,18.11,18.29,36,0,.13,.21,.15],["2015-11-23",18.16,18.19,18.12,18.34,47,0,.11,.18,.13],["2015-11-24",18.23,17.88,17.7,18.23,62,0,.03,.13,.11],["2015-11-25",17.85,17.73,17.56,17.85,66,0,-.03,.09,.11],["2015-11-26",17.79,17.53,17.5,17.92,63,0,-.1,.06,.11],["2015-11-27",17.51,17.04,16.9,17.51,67,0,-.16,.05,.13],["2015-11-30",17.07,17.2,16.98,17.32,55,0,-.12,.09,.15],["2015-12-01",17.28,17.11,16.91,17.28,39,0,-.09,.12,.16],["2015-12-02",17.13,17.91,17.05,17.99,102,0,-.01,.17,.18],["2015-12-03",17.8,17.78,17.61,17.98,71,0,-.09,.14,.18],["2015-12-04",17.6,17.25,17.13,17.69,51,0,-.18,.1,.19],["2015-12-07",17.2,17.39,17.15,17.45,43,0,-.19,.12,.22],["2015-12-08",17.3,17.42,17.18,17.62,45,0,-.23,.13,.24],["2015-12-09",17.33,17.39,17.32,17.59,44,0,-.29,.13,.28],["2015-12-10",17.39,17.26,17.21,17.65,44,0,-.37,.13,.32],["2015-12-11",17.23,16.92,16.66,17.26,114,1,-.44,.15,.37],["2015-12-14",16.75,17.06,16.5,17.09,94,0,-.44,.21,.44],["2015-12-15",17.03,17.03,16.9,17.06,46,0,-.44,.28,.5],["2015-12-16",17.08,16.96,16.87,17.09,30,0,-.4,.36,.56],["2015-12-17",17,17.1,16.95,17.12,50,0,-.3,.47,.62],["2015-12-18",17.09,17.52,17.04,18.06,156,0,-.14,.59,.66],["2015-12-21",17.43,18.23,17.35,18.45,152,1,.02,.69,.68],["2015-12-22",18.14,18.27,18.06,18.32,94,0,.08,.72,.68],["2015-12-23",18.28,18.19,18.17,18.71,108,0,.13,.73,.67],["2015-12-24",18.18,18.14,18.01,18.31,37,0,.19,.74,.65],["2015-12-25",18.22,18.33,18.2,18.36,48,0,.26,.75,.62],["2015-12-28",18.35,17.84,17.8,18.39,48,0,.27,.72,.59],["2015-12-29",17.83,17.94,17.71,17.97,36,0,.36,.73,.55],["2015-12-30",17.9,18.26,17.55,18.3,71,1,.43,.71,.5],["2015-12-31",18.12,17.99,17.91,18.33,72,0,.4,.63,.43],["2016-01-04",17.91,17.28,17.16,17.95,37,1,.34,.55,.38],["2016-01-05",17.17,17.23,17,17.55,51,0,.37,.51,.33],["2016-01-06",17.2,17.31,17.06,17.33,31,0,.37,.46,.28],["2016-01-07",17.15,16.67,16.51,17.15,19,0,.3,.37,.22],["2016-01-08",16.8,16.81,16.61,17.06,60,0,.29,.32,.18],["2016-01-11",16.68,16.04,16,16.68,65,0,.2,.24,.14],["2016-01-12",16.03,15.98,15.88,16.25,46,0,.2,.21,.11],["2016-01-13",16.21,15.87,15.78,16.21,57,0,.2,.18,.08],["2016-01-14",15.55,15.89,15.52,15.96,42,0,.2,.16,.05],["2016-01-15",15.87,15.48,15.45,15.92,34,1,.17,.11,.02],["2016-01-18",15.39,15.42,15.36,15.7,26,0,.21,.1,-0],["2016-01-19",15.58,15.71,15.35,15.77,38,0,.25,.09,-.03],["2016-01-20",15.56,15.52,15.24,15.68,38,0,.23,.05,-.07],["2016-01-21",15.41,15.3,15.28,15.68,35,0,.21,0,-.1],["2016-01-22",15.48,15.28,15.13,15.49,30,0,.21,-.02,-.13],["2016-01-25",15.29,15.48,15.2,15.49,21,0,.2,-.06,-.16],["2016-01-26",15.33,14.86,14.78,15.39,30,0,.12,-.13,-.19],["2016-01-27",14.96,15,14.84,15.22,51,0,.13,-.14,-.2],["2016-01-28",14.96,14.72,14.62,15.06,25,0,.1,-.17,-.22],["2016-01-29",14.75,14.99,14.62,15.08,36,0,.13,-.17,-.24],["2016-02-01",14.98,14.72,14.48,15.18,27,0,.1,-.21,-.26],["2016-02-02",14.65,14.85,14.65,14.95,18,0,.11,-.21,-.27],["2016-02-03",14.72,14.67,14.55,14.8,23,0,.1,-.24,-.29],["2016-02-04",14.79,14.88,14.69,14.93,22,0,.13,-.24,-.3],["2016-02-05",14.9,14.86,14.78,14.93,16,0,.12,-.26,-.32],["2016-02-15",14.5,14.66,14.47,14.82,19,0,.11,-.28,-.34],["2016-02-16",14.77,14.94,14.72,15.05,26,0,.14,-.28,-.35],["2016-02-17",14.95,15.03,14.88,15.07,38,0,.12,-.31,-.37],["2016-02-18",14.95,14.9,14.87,15.06,28,0,.07,-.35,-.39],["2016-02-19",14.9,14.75,14.68,14.94,22,0,.03,-.38,-.4],["2016-02-22",14.88,15.01,14.79,15.11,38,1,.01,-.4,-.4],["2016-02-23",15.01,14.83,14.72,15.01,24,0,-.09,-.45,-.4],["2016-02-24",14.75,14.81,14.67,14.87,21,0,-.17,-.48,-.39],["2016-02-25",14.81,14.25,14.21,14.81,51,1,-.27,-.5,-.37],["2016-02-26",14.35,14.45,14.28,14.57,28,0,-.26,-.46,-.33],["2016-02-29",14.43,14.56,14.04,14.6,48,0,-.25,-.41,-.29],["2016-03-01",14.56,14.65,14.36,14.78,32,0,-.21,-.36,-.25],["2016-03-02",14.79,14.96,14.72,14.97,60,0,-.13,-.29,-.22],["2016-03-03",14.95,15.15,14.91,15.19,53,1,-.05,-.23,-.21],["2016-03-04",15.14,15.97,15.02,16.02,164,1,.06,-.17,-.2],["2016-03-07",15.9,15.78,15.65,16,41,0,.04,-.19,-.21],["2016-03-08",15.78,15.96,15.21,15.99,45,0,.05,-.19,-.21],["2016-03-09",15.73,16.05,15.41,16.08,74,0,.03,-.2,-.22],["2016-03-10",15.82,15.66,15.65,15.98,19,0,-.02,-.23,-.22],["2016-03-11",15.59,15.76,15.42,15.78,32,0,.01,-.22,-.22],["2016-03-14",15.78,15.72,15.65,16.04,31,0,.03,-.2,-.22],["2016-03-15",15.81,15.86,15.6,15.99,35,0,.1,-.18,-.23],["2016-03-16",15.88,16.42,15.79,16.45,123,0,.17,-.16,-.24],["2016-03-17",16.39,16.23,16.11,16.4,46,0,.14,-.2,-.26],["2016-03-18",16.39,16.17,16.04,16.4,59,0,.13,-.22,-.28],["2016-03-21",16.21,16.22,16.11,16.44,50,0,.12,-.24,-.3],["2016-03-22",16.27,16.19,16.16,16.42,33,0,.1,-.27,-.32],["2016-03-23",16.26,16.18,16.18,16.29,19,0,.08,-.3,-.33],["2016-03-24",16.18,16.11,16.01,16.23,23,0,.04,-.33,-.35],["2016-03-25",16.12,16.13,16.1,16.2,15,0,0,-.35,-.35],["2016-03-28",16.15,15.85,15.81,16.2,22,0,-.06,-.38,-.35],["2016-03-29",15.9,15.79,15.76,16.05,19,0,-.06,-.37,-.34],["2016-03-30",15.79,16.24,15.78,16.3,29,0,-.03,-.35,-.33],["2016-03-31",16.3,16.09,16.02,16.35,25,0,-.07,-.37,-.33],["2016-04-01",16.18,16.27,15.98,16.3,38,0,-.08,-.36,-.32],["2016-04-05",16.13,16.34,16.07,16.37,39,0,-.13,-.37,-.31],["2016-04-06",16.21,16.26,16.19,16.35,30,0,-.2,-.39,-.29],["2016-04-07",16.32,16.1,16.05,16.35,29,1,-.26,-.39,-.26],["2016-04-08",16,16.16,15.98,16.21,22,0,-.28,-.37,-.23],["2016-04-11",16.16,16.31,16.15,16.57,31,0,-.3,-.33,-.19],["2016-04-12",16.41,16.29,16.12,16.41,17,0,-.31,-.3,-.14],["2016-04-13",16.39,16.48,16,16.68,40,0,-.3,-.25,-.1],["2016-04-14",16.5,16.46,16.37,16.68,22,0,-.27,-.19,-.06],["2016-04-15",16.56,16.93,16.46,17.04,58,0,-.2,-.12,-.02],["2016-04-18",16.76,17.06,16.72,17.27,50,0,-.16,-.07,.01],["2016-04-19",17.21,17.11,17.02,17.23,30,0,-.12,-.02,.03],["2016-04-20",17.11,17.33,16.8,17.36,78,0,-.04,.03,.05],["2016-04-21",17.27,17.69,17.17,17.93,79,0,.05,.08,.06],["2016-04-22",17.6,17.87,17.56,18.02,55,0,.09,.1,.05],["2016-04-25",17.75,17.9,17.41,17.96,39,1,.11,.09,.04],["2016-04-26",17.81,17.91,17.6,17.95,39,0,.12,.08,.02],["2016-04-27",17.9,17.88,17.81,17.95,25,0,.12,.06,0],["2016-04-28",17.93,17.88,17.67,17.93,28,0,.11,.04,-.01],["2016-04-29",17.87,17.75,17.73,17.92,19,0,.08,.01,-.03],["2016-05-03",17.79,17.7,17.56,17.85,35,0,.05,-.01,-.04],["2016-05-04",17.7,17.65,17.59,17.71,24,0,.02,-.04,-.05],["2016-05-05",17.65,17.62,17.46,17.7,20,0,-.03,-.06,-.05],["2016-05-06",17.62,17.32,17.3,17.65,29,0,-.1,-.09,-.05],["2016-05-09",17.33,17.3,17.21,17.45,23,0,-.13,-.1,-.03],["2016-05-10",17.11,17.04,16.98,17.41,28,0,-.15,-.09,-.01],["2016-05-11",17.06,17.15,17.06,17.32,20,0,-.12,-.05,.01],["2016-05-12",17.02,17.46,17.02,17.58,26,0,-.07,-.01,.03],["2016-05-13",17.41,17.57,17.34,17.62,23,0,-.06,.01,.03],["2016-05-16",17.55,17.5,17.48,17.64,37,0,-.06,.01,.04],["2016-05-17",17.49,17.48,17.39,17.53,13,0,-.03,.03,.05],["2016-05-18",17.41,17.82,17.39,17.87,46,0,.01,.06,.06],["2016-05-19",17.74,17.81,17.67,17.86,17,0,-.01,.05,.05],["2016-05-20",17.76,17.88,17.7,17.93,14,0,-.03,.04,.06],["2016-05-23",17.88,17.52,17.48,17.97,16,0,-.09,.02,.06],["2016-05-24",17.51,17.33,17.32,17.51,8,0,-.09,.03,.07],["2016-05-25",17.59,17.55,17.44,17.59,10,0,-.03,.07,.08],["2016-05-26",17.5,17.69,17.5,17.8,12,0,0,.09,.09],["2016-05-27",17.77,17.66,17.62,17.77,7,0,.03,.1,.09],["2016-05-30",17.75,17.84,17.62,17.87,20,0,.08,.12,.08],["2016-05-31",17.88,18,17.81,18.03,41,0,.1,.12,.07],["2016-06-01",18.09,17.83,17.73,18.09,22,0,.08,.1,.06],["2016-06-02",17.82,17.73,17.66,17.88,10,0,.07,.08,.05],["2016-06-03",17.8,17.78,17.71,17.83,9,0,.08,.08,.04],["2016-06-06",17.73,17.64,17.56,17.83,12,0,.07,.06,.03],["2016-06-07",17.76,17.8,17.59,17.87,11,0,.08,.06,.02],["2016-06-08",17.75,17.77,17.65,17.84,9,0,.04,.03,.01],["2016-06-13",17.58,17.32,17.29,17.79,16,0,-.02,-.01,0],["2016-06-14",17.33,17.38,17.29,17.5,10,0,-.01,0,0],["2016-06-15",17.25,17.39,17.25,17.46,18,0,0,.01,0],["2016-06-16",17.26,17.4,17.26,17.46,22,0,.01,.01,0],["2016-06-17",17.38,17.5,17.37,17.67,13,0,.03,.02,0],["2016-06-20",17.62,17.51,17.42,17.63,15,0,.03,.01,-0],["2016-06-21",17.53,17.54,17.5,17.7,11,0,.02,0,-.01],["2016-06-22",17.5,17.5,17.46,17.6,10,0,-.01,-.01,-.01],["2016-06-23",17.52,17.26,17.24,17.53,16,0,-.04,-.03,-.01],["2016-06-24",17.26,17.25,17.18,17.38,60,0,-.03,-.02,-0],["2016-06-27",17.25,17.28,17.18,17.33,19,0,-.01,-0,0],["2016-06-28",17.25,17.29,17.21,17.32,13,0,.02,.01,0],["2016-06-29",17.31,17.45,17.27,17.49,21,0,.07,.04,0],["2016-06-30",17.47,17.5,17.39,17.55,17,0,.11,.04,-.01],["2016-07-01",17.5,17.63,17.49,17.66,10,0,.14,.05,-.03],["2016-07-04",17.63,17.72,17.63,17.92,17,0,.16,.03,-.05],["2016-07-05",17.79,17.56,17.45,17.79,18,0,.14,0,-.07],["2016-07-06",17.53,17.42,17.31,17.54,20,0,.14,-.02,-.09],["2016-07-07",17.41,17.51,17.35,17.52,15,0,.16,-.03,-.11],["2016-07-08",17.5,17.39,17.35,17.51,15,0,.16,-.05,-.13],["2016-07-11",17.49,17.48,17.4,17.55,16,0,.17,-.07,-.15],["2016-07-12",17.48,17.71,17.46,17.75,25,0,.16,-.1,-.18],["2016-07-13",17.13,17.05,17.02,17.39,28,0,.07,-.17,-.2],["2016-07-14",17.07,17.09,17,17.16,12,0,.08,-.17,-.21],["2016-07-15",17.08,17.14,17.08,17.17,11,0,.09,-.18,-.22],["2016-07-18",17.15,17.26,17.13,17.49,24,0,.1,-.19,-.23],["2016-07-19",17.26,17.12,17.09,17.33,13,0,.07,-.21,-.25],["2016-07-20",17.1,17.07,17.02,17.14,11,0,.06,-.23,-.26],["2016-07-21",17.07,17.24,17.07,17.27,14,0,.07,-.23,-.27],["2016-07-22",17.25,17.08,17.03,17.25,10,0,.04,-.26,-.28],["2016-07-25",17.09,17.12,17.01,17.18,8,0,.04,-.26,-.28],["2016-07-26",17.05,17.17,17.05,17.2,11,0,.04,-.27,-.29],["2016-07-27",17.2,17.37,16.89,17.38,32,0,.02,-.28,-.29],["2016-07-28",17.19,17.14,17.09,17.29,19,0,-.04,-.32,-.3],["2016-07-29",17.15,17.16,17.04,17.23,12,0,-.08,-.33,-.29],["2016-08-01",17.15,17.18,17.1,17.24,19,0,-.13,-.34,-.28],["2016-08-02",17.21,17.15,17.12,17.25,9,0,-.19,-.36,-.26],["2016-08-03",17.08,17.07,17.01,17.16,9,0,-.25,-.36,-.24],["2016-08-04",17.11,17.06,16.98,17.12,11,1,-.29,-.35,-.2],["2016-08-05",17.06,17.1,17.05,17.15,16,0,-.33,-.32,-.16],["2016-08-08",17.14,17.13,17.07,17.15,13,0,-.35,-.29,-.11],["2016-08-09",17.13,17.17,17.1,17.2,25,0,-.35,-.24,-.06],["2016-08-10",17.17,17.28,17.15,17.29,18,0,-.31,-.17,-.01],["2016-08-11",17.3,17.45,17.26,17.87,31,0,-.24,-.09,.03],["2016-08-12",17.51,17.99,17.47,18,44,0,-.14,-0,.07],["2016-08-15",18.1,18.42,18.02,18.99,81,0,-.09,.04,.09],["2016-08-16",18.64,18.31,18.12,18.87,60,0,-.1,.05,.1],["2016-08-17",18.43,18.4,18.31,18.68,21,0,-.08,.08,.11],["2016-08-18",18.33,18.23,18.13,18.65,32,0,-.07,.09,.13],["2016-08-19",18.34,18.62,18.31,18.75,39,0,0,.14,.14],["2016-08-22",18.62,18.69,18.51,18.8,20,0,.01,.14,.13],["2016-08-23",18.61,18.66,18.52,19,28,0,.01,.14,.13],["2016-08-24",18.66,18.62,18.43,18.7,19,0,0,.13,.13],["2016-08-25",18.57,18.51,18.19,18.64,19,0,-0,.13,.13],["2016-08-26",18.49,18.55,18.44,18.6,16,0,.01,.13,.13],["2016-08-29",18.46,18.27,18.03,18.48,20,0,.01,.13,.13],["2016-08-30",18.24,18.44,18.23,18.52,19,0,.07,.17,.13],["2016-08-31",18.36,18.63,18.36,18.76,15,0,.13,.18,.12],["2016-09-01",18.6,18.62,18.55,18.78,15,0,.16,.18,.1],["2016-09-02",18.52,18.68,18.48,18.72,17,0,.19,.17,.08],["2016-09-05",18.68,18.75,18.57,18.82,19,0,.2,.15,.05],["2016-09-06",18.75,18.51,18.43,18.78,17,0,.18,.11,.02],["2016-09-07",18.51,18.56,18.4,18.62,17,0,.17,.08,-0],["2016-09-08",18.58,18.53,18.48,18.63,8,0,.13,.04,-.03],["2016-09-09",18.52,18.33,18.31,18.57,8,0,.06,-.02,-.05],["2016-09-12",18.16,17.9,17.81,18.18,28,0,-.02,-.07,-.06],["2016-09-13",17.91,17.91,17.9,18.08,13,0,-.05,-.08,-.05],["2016-09-14",17.99,17.54,17.48,17.99,22,0,-.09,-.09,-.05],["2016-09-19",17.55,17.81,17.55,17.88,16,0,-.06,-.06,-.03],["2016-09-20",17.8,17.74,17.67,17.85,10,0,-.06,-.05,-.02],["2016-09-21",17.75,17.88,17.75,17.95,7,0,-.03,-.03,-.02],["2016-09-22",17.99,17.97,17.88,18.17,12,0,-.02,-.02,-.01],["2016-09-23",17.99,17.98,17.93,18.09,13,0,-.01,-.01,-.01],["2016-09-26",17.91,18,17.85,18.09,14,0,-0,-.01,-.01],["2016-09-27",17.97,18.07,17.94,18.1,10,0,0,-.01,-.01],["2016-09-28",18.06,17.89,17.83,18.06,10,0,-0,-.01,-.01],["2016-09-29",17.96,18,17.92,18.07,10,0,.03,.01,-.01],["2016-09-30",17.96,18,17.95,18.1,8,0,.06,.02,-.01],["2016-10-10",18.03,18.3,18.03,18.38,19,0,.11,.04,-.02],["2016-10-11",18.33,18.33,18.26,18.49,12,0,.1,.02,-.04],["2016-10-12",18.28,18.15,18.1,18.31,10,0,.07,-.02,-.05],["2016-10-13",18.15,18.09,18.05,18.21,10,0,.06,-.03,-.06],["2016-10-14",18.1,18.1,18,18.15,12,0,.04,-.05,-.07],["2016-10-17",18.07,17.86,17.83,18.1,12,0,.01,-.07,-.08],["2016-10-18",17.86,17.93,17.84,17.99,14,0,.03,-.07,-.08],["2016-10-19",17.93,17.88,17.83,18.05,11,0,.03,-.07,-.08],["2016-10-20",17.9,17.89,17.83,17.98,12,0,.05,-.06,-.09],["2016-10-21",17.91,17.91,17.82,17.93,12,0,.07,-.06,-.09],["2016-10-24",17.93,18.31,17.86,18.42,29,0,.11,-.05,-.1],["2016-10-25",18.31,18.13,18.09,18.46,19,0,.06,-.09,-.12],["2016-10-26",18.12,17.97,17.95,18.15,14,0,.02,-.12,-.13],["2016-10-27",18.06,17.81,17.77,18.06,21,0,-.01,-.13,-.13],["2016-10-28",17.8,17.9,17.8,18.05,20,0,-.01,-.13,-.13],["2016-10-31",17.87,17.86,17.72,17.96,12,0,-.02,-.14,-.13],["2016-11-01",17.87,17.98,17.79,17.99,18,0,-.03,-.14,-.12],["2016-11-02",17.86,17.84,17.76,17.94,30,0,-.06,-.15,-.12],["2016-11-03",17.83,17.93,17.79,17.97,27,0,-.07,-.14,-.11],["2016-11-04",17.9,17.91,17.87,18,26,0,-.09,-.15,-.1],["2016-11-07",17.91,17.89,17.85,17.93,20,0,-.11,-.14,-.09],["2016-11-08",17.92,17.99,17.89,18.06,26,0,-.12,-.13,-.07],["2016-11-09",18,17.89,17.77,18.08,34,0,-.15,-.13,-.06],["2016-11-10",17.95,18,17.94,18.11,27,0,-.15,-.11,-.03],["2016-11-11",17.95,18.02,17.93,18.08,27,0,-.17,-.1,-.01],["2016-11-14",18,18.04,17.95,18.25,35,0,-.18,-.08,.01],["2016-11-15",18.1,18.18,18.03,18.24,25,0,-.18,-.06,.04],["2016-11-16",18.23,18.12,18.05,18.29,23,0,-.21,-.04,.06],["2016-11-17",18.11,18.12,18.01,18.14,27,0,-.21,-.01,.09],["2016-11-18",18.12,18.1,18.03,18.16,18,0,-.19,.03,.12],["2016-11-21",18.08,18.34,18.08,18.68,41,0,-.13,.08,.15],["2016-11-22",18.37,18.37,18.28,18.49,52,0,-.09,.12,.17],["2016-11-23",18.4,18.84,18.37,18.9,66,0,-.02,.17,.18],["2016-11-24",18.77,18.74,18.61,18.97,26,0,-.02,.17,.18],["2016-11-25",18.8,18.99,18.66,19.02,40,0,-.01,.18,.19],["2016-11-28",19.1,18.65,18.52,19.2,85,0,-.06,.16,.19],["2016-11-29",18.65,18.75,18.51,18.76,49,0,-.06,.17,.2],["2016-11-30",18.76,18.55,18.47,18.82,39,0,-.08,.17,.21],["2016-12-01",18.55,18.49,18.41,18.64,53,0,-.06,.19,.22],["2016-12-02",18.53,18.49,18.24,18.54,48,0,-.02,.21,.23],["2016-12-05",18.39,18.66,18.34,18.67,50,0,.03,.25,.23],["2016-12-06",18.66,18.6,18.57,18.78,31,0,.08,.26,.23],["2016-12-07",18.65,18.62,18.58,18.71,12,0,.15,.29,.21],["2016-12-08",18.67,18.76,18.62,18.88,26,0,.25,.32,.19],["2016-12-09",18.76,19.2,18.75,19.34,62,0,.34,.33,.16],["2016-12-12",19.16,19.25,18.9,19.65,79,1,.34,.28,.11],["2016-12-13",19.09,18.88,18.81,19.2,24,0,.27,.2,.06],["2016-12-14",18.8,18.82,18.8,19.14,32,0,.23,.13,.02],["2016-12-15",18.73,18.24,18.2,18.73,36,0,.13,.05,-.01],["2016-12-16",18.24,18.18,18.12,18.4,24,0,.1,.02,-.03],["2016-12-19",18.15,18.01,17.93,18.18,24,0,.06,-.02,-.05],["2016-12-20",17.99,17.79,17.7,17.99,29,1,.02,-.05,-.05],["2016-12-21",17.83,17.81,17.77,17.98,30,0,0,-.05,-.06],["2016-12-22",17.85,17.72,17.65,17.85,21,0,-.03,-.07,-.06],["2016-12-23",17.77,17.6,17.54,17.77,18,0,-.04,-.08,-.05],["2016-12-26",17.56,17.75,17.39,17.77,16,0,-.04,-.07,-.05],["2016-12-27",17.73,17.71,17.65,17.82,10,0,-.06,-.07,-.04],["2016-12-28",17.72,17.62,17.49,17.77,26,0,-.09,-.07,-.03],["2016-12-29",17.6,17.49,17.43,17.62,28,0,-.09,-.06,-.02],["2016-12-30",17.53,17.6,17.47,17.61,22,0,-.05,-.03,-.01],["2017-01-03",17.6,17.92,17.57,17.98,28,1,0,0,0]]);function splitData(e){for(var s=[],i=[],a=[],o=[],r=[],n=[],t=0;t<e.length;t++)s.push(e[t]),i.push(e[t].splice(0,1)[0]),a.push(e[t][4]),o.push(e[t][6]),r.push(e[t][7]),n.push(e[t][8]);return{datas:s,times:i,vols:a,macds:o,difs:r,deas:n}}var option={title:{text:"分时图",left:0},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},axisPointer:{link:{xAxisIndex:"all"}},legend:{data:["现价","比率","成交量"]},grid:[{left:"3%",right:"1%",height:"65%"},{left:"3%",right:"1%",top:"75%",height:"20%"}],xAxis:[{type:"category",data:data.times,axisLabel:{show:!1},boundaryGap:!0},{type:"category",gridIndex:1,data:data.times,axisLabel:{show:!1},boundaryGap:!0,axisPointer:{label:{show:!1}}}],yAxis:[{splitNumber:4,axisLine:{onZero:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!0,inside:!0,fontWeight:"bold",fontSize:14}},{gridIndex:0,splitNumber:4,axisLine:{onZero:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!0,inside:!0,interval:"auto",formatter:function(e){return e>0?`

`+e+"%":e+`%
`},color:function(e){var s;return e>0?s="#EC2E2C":e==0?s="#928E9E":s="#66C65D",s},fontWeight:"bold",fontSize:14}},{gridIndex:1,splitNumber:3,axisLine:{onZero:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!0}}],dataZoom:[{show:!1,xAxisIndex:[0,1],type:"slider"},{show:!1,xAxisIndex:[0,1],type:"slider",top:"97%"}],series:[{name:"现价",type:"line",data:data.deas},{name:"比率",type:"bar",xAxisIndex:0,yAxisIndex:1,data:data.macds,itemStyle:{normal:{color:function(e){var s;return e.data>=0?s="#ef232a":s="#14b143",s}}}},{name:"成交量",type:"bar",data:data.vols,xAxisIndex:1,yAxisIndex:2,itemStyle:{normal:{color:function(e){var s;return data.deas[e.dataIndex]>data.deas[e.dataIndex-1]?s="#ef232a":s="#14b143",s}}}}]};
