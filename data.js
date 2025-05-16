var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.1344048552760988,
        "pitch": -0.008161700056579235,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.1344048552760988,
          "pitch": -0.008161700056579235,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.9278000269473985,
          "pitch": 0.2138237671346701,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": 1.2702565524362601,
          "pitch": 0.2989818046567603,
          "rotation": 0.7853981633974483,
          "target": "1-living"
        },
        {
          "yaw": 1.298227098003796,
          "pitch": 0.10711534047857008,
          "rotation": 5.497787143782138,
          "target": "6-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 3.10039272657456,
          "pitch": -0.009272614534292956,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": 1.8277534826206132,
          "pitch": 0.028105009330719355,
          "rotation": 0,
          "target": "3-prayer"
        },
        {
          "yaw": 1.3550873853032392,
          "pitch": 0.0767737865912963,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.8752411612932853,
          "pitch": 0.10762311876246855,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": 0.94935137729966,
          "pitch": 0.00974619048153258,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.2230679558783777,
          "pitch": -0.17108176560519084,
          "rotation": 0.7853981633974483,
          "target": "9-staircase"
        },
        {
          "yaw": -1.1660884468744754,
          "pitch": 0.06697744005142425,
          "rotation": 0.7853981633974483,
          "target": "7-gfbedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living1",
      "name": "LIVING1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.1324546298999394,
          "pitch": 0.0022011226148741514,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": -0.7599772502813273,
          "pitch": 0.051461367960310866,
          "rotation": 5.497787143782138,
          "target": "3-prayer"
        },
        {
          "yaw": -1.02715345005584,
          "pitch": 0.09533060388547554,
          "rotation": 6.283185307179586,
          "target": "0-foyer"
        },
        {
          "yaw": -1.4116440222827826,
          "pitch": 0.1123723763423925,
          "rotation": 4.71238898038469,
          "target": "5-dining"
        },
        {
          "yaw": -1.4867091045688863,
          "pitch": 0.03134651324355531,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -3.0726926312325187,
          "pitch": -0.21199696319167494,
          "rotation": 0,
          "target": "9-staircase"
        },
        {
          "yaw": 0.809190822384652,
          "pitch": 0.05851426516657554,
          "rotation": 0,
          "target": "6-utility"
        },
        {
          "yaw": 0.9744393828748983,
          "pitch": 0.046930961894748435,
          "rotation": 0,
          "target": "8-gftoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-prayer",
      "name": "PRAYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.04523371520364172,
        "pitch": 0.004550139389206009,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.04523371520364172,
          "pitch": 0.004550139389206009,
          "rotation": 0,
          "target": "3-prayer"
        },
        {
          "yaw": 1.4191492385793154,
          "pitch": 0.24462138398108202,
          "rotation": 0,
          "target": "2-living1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.006161072099938991,
        "pitch": 0.09571146853776114,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 3.1302592102,
          "pitch": 0.25439873579231964,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": 2.766085359416543,
          "pitch": 0.12419614085193764,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": 2.862589883538056,
          "pitch": 0.15116823411321256,
          "rotation": 0.7853981633974483,
          "target": "1-living"
        },
        {
          "yaw": 2.823548391582948,
          "pitch": 0.0361924907137805,
          "rotation": 0,
          "target": "8-gftoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.15853995273553068,
          "pitch": 0.013155608256088414,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": -0.41237211888137715,
          "pitch": 0.05284588915652755,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": -0.2686934341503502,
          "pitch": 0.062006538006771805,
          "rotation": 0.7853981633974483,
          "target": "1-living"
        },
        {
          "yaw": -0.3155203715378665,
          "pitch": -0.01688606008149307,
          "rotation": 0,
          "target": "8-gftoilet"
        },
        {
          "yaw": -3.138965229083926,
          "pitch": 0.021936044525043386,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-utility",
      "name": "UTILITY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.0062933269211917775,
        "pitch": 0.035664795312774444,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.0062933269211917775,
          "pitch": 0.035664795312774444,
          "rotation": 0,
          "target": "6-utility"
        },
        {
          "yaw": 1.1612614489075384,
          "pitch": 0.048400834226425715,
          "rotation": 0,
          "target": "8-gftoilet"
        },
        {
          "yaw": -3.0608705630564046,
          "pitch": 0.1458151739956861,
          "rotation": 0,
          "target": "7-gfbedroom"
        },
        {
          "yaw": -2.194412982635873,
          "pitch": 0.12100302593032453,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -2.2733033258584197,
          "pitch": -0.1391259955949895,
          "rotation": 0,
          "target": "9-staircase"
        },
        {
          "yaw": -1.6831220426294955,
          "pitch": 0.19690355489813172,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": -1.6493802888019538,
          "pitch": 0.05652895986654016,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.890770735491012,
          "pitch": 0.09043796072940147,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": -1.8649289166103653,
          "pitch": -0.0010724189600246348,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gfbedroom",
      "name": "GF.BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "7-gfbedroom"
        },
        {
          "yaw": -0.4067668835565428,
          "pitch": 0.12175802021790894,
          "rotation": 0,
          "target": "6-utility"
        },
        {
          "yaw": -0.5118627176388912,
          "pitch": 0.06765565960187203,
          "rotation": 5.497787143782138,
          "target": "2-living1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gftoilet",
      "name": "GF.TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.06470385581973304,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.06470385581973304,
          "pitch": 0,
          "rotation": 0,
          "target": "8-gftoilet"
        },
        {
          "yaw": -1.19103350620896,
          "pitch": 0.1097190291376684,
          "rotation": 0,
          "target": "6-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-staircase",
      "name": "STAIRCASE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "9-staircase"
        },
        {
          "yaw": 1.4599568782469063,
          "pitch": 0.2618312426633054,
          "rotation": 0,
          "target": "2-living1"
        },
        {
          "yaw": 1.2923913590686595,
          "pitch": 0.4390562614944873,
          "rotation": 3.141592653589793,
          "target": "1-living"
        },
        {
          "yaw": 0.9206063260944362,
          "pitch": 0.20297347033544,
          "rotation": 5.497787143782138,
          "target": "3-prayer"
        },
        {
          "yaw": 0.7216495784789387,
          "pitch": 0.2069144397693563,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.4583773457603826,
          "pitch": 0.33881315923545685,
          "rotation": 4.71238898038469,
          "target": "5-dining"
        },
        {
          "yaw": 0.45629455830099275,
          "pitch": 0.2040260411096675,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.0709062831307925,
          "pitch": 0.20739395352470424,
          "rotation": 0,
          "target": "6-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-verandha",
      "name": "VERANDHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0025784959160581877,
        "pitch": 0.15286756880925978,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.0025784959160581877,
          "pitch": 0.15286756880925978,
          "rotation": 0,
          "target": "10-verandha"
        },
        {
          "yaw": -1.3789124492307412,
          "pitch": 0.020439016461082815,
          "rotation": 0,
          "target": "12-ffbedroom1"
        },
        {
          "yaw": -2.776264539955026,
          "pitch": 0.0529315561799244,
          "rotation": 0,
          "target": "11-highceiling-area"
        },
        {
          "yaw": 1.516848783993745,
          "pitch": 0.1179556505440491,
          "rotation": 0,
          "target": "15-ffbedroom2"
        },
        {
          "yaw": 0.9756179777605354,
          "pitch": 0.06990111652530118,
          "rotation": 0,
          "target": "18-staircase1"
        },
        {
          "yaw": -0.37535322483862466,
          "pitch": 0.2724166947875588,
          "rotation": 8.63937979737193,
          "target": "9-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-highceiling-area",
      "name": "HIGHCEILING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2579409239652903
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "11-highceiling-area"
        },
        {
          "yaw": -3.134385287589277,
          "pitch": 0.024387194283754354,
          "rotation": 0,
          "target": "10-verandha"
        },
        {
          "yaw": -1.5613186396147753,
          "pitch": 0.715244213219032,
          "rotation": 3.141592653589793,
          "target": "9-staircase"
        },
        {
          "yaw": -0.9618785115856383,
          "pitch": 0.1428598839240447,
          "rotation": 0,
          "target": "18-staircase1"
        },
        {
          "yaw": -0.7044199208393067,
          "pitch": 0.11078605123536533,
          "rotation": 0,
          "target": "15-ffbedroom2"
        },
        {
          "yaw": 0.7806834812162986,
          "pitch": 0.14130573396596802,
          "rotation": 0,
          "target": "12-ffbedroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ffbedroom1",
      "name": "FF.BEDROOM1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.01776271858969558,
          "pitch": 0.4252847087895155,
          "rotation": 0,
          "target": "12-ffbedroom1"
        },
        {
          "yaw": -0.0510289853186805,
          "pitch": 0.046537791885517876,
          "rotation": 0,
          "target": "17-ffbr2dressing"
        },
        {
          "yaw": -0.385882950783925,
          "pitch": 0.07225426707980986,
          "rotation": 4.71238898038469,
          "target": "10-verandha"
        },
        {
          "yaw": -0.3795401828125353,
          "pitch": -0.009698499277542183,
          "rotation": 4.71238898038469,
          "target": "11-highceiling-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ffbrdressing",
      "name": "FF.BR.DRESSING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0005600793365800882,
        "pitch": 0.057272619328763597,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.0005600793365800882,
          "pitch": 0.057272619328763597,
          "rotation": 0,
          "target": "13-ffbrdressing"
        },
        {
          "yaw": 1.379410415001125,
          "pitch": 0.02117931115476246,
          "rotation": 0,
          "target": "14-ffbr1toilet"
        },
        {
          "yaw": 2.762597694233685,
          "pitch": 0.2659353702035716,
          "rotation": 0,
          "target": "12-ffbedroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ffbr1toilet",
      "name": "FF.BR1.TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "14-ffbr1toilet"
        },
        {
          "yaw": -1.3177479904315312,
          "pitch": -0.011699037295436199,
          "rotation": 0,
          "target": "13-ffbrdressing"
        },
        {
          "yaw": -1.597624866086548,
          "pitch": -0.0009212775190103883,
          "rotation": 4.71238898038469,
          "target": "12-ffbedroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ffbedroom2",
      "name": "FF.BEDROOM2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.08197730225638367,
          "pitch": 0.14937128024308421,
          "rotation": 0,
          "target": "15-ffbedroom2"
        },
        {
          "yaw": -0.9340733300970268,
          "pitch": 0.0790513715078518,
          "rotation": 0,
          "target": "16-ffbr2toilet"
        },
        {
          "yaw": -1.0162053534614142,
          "pitch": 0.015200329324029482,
          "rotation": 4.71238898038469,
          "target": "17-ffbr2dressing"
        },
        {
          "yaw": -2.355808453532461,
          "pitch": 0.0581345025590565,
          "rotation": 0,
          "target": "10-verandha"
        },
        {
          "yaw": -2.4269217924912425,
          "pitch": 0.1054843276200721,
          "rotation": 11.780972450961727,
          "target": "11-highceiling-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ffbr2toilet",
      "name": "FF.BR2.TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "16-ffbr2toilet"
        },
        {
          "yaw": -1.3053729461434518,
          "pitch": 0.11923907580920634,
          "rotation": 0,
          "target": "17-ffbr2dressing"
        },
        {
          "yaw": -1.476746295017442,
          "pitch": 0.18510629769860998,
          "rotation": 4.71238898038469,
          "target": "15-ffbedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ffbr2dressing",
      "name": "FF.BR2.DRESSING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "13-ffbrdressing"
        },
        {
          "yaw": 1.6033524397487149,
          "pitch": 0.04378477092020816,
          "rotation": 0,
          "target": "16-ffbr2toilet"
        },
        {
          "yaw": 3.1038527569055105,
          "pitch": 0.10374675049837911,
          "rotation": 0,
          "target": "15-ffbedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-staircase1",
      "name": "STAIRCASE1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.01902593984555523,
        "pitch": 0.009989847576845179,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.01902593984555523,
          "pitch": 0.009989847576845179,
          "rotation": 0,
          "target": "18-staircase1"
        },
        {
          "yaw": 0.0976567033229756,
          "pitch": -0.6213487306759795,
          "rotation": 0,
          "target": "19-staircase2"
        },
        {
          "yaw": -1.4475151071736043,
          "pitch": 0.39811417603131183,
          "rotation": 0.7853981633974483,
          "target": "10-verandha"
        },
        {
          "yaw": -1.9523503391724688,
          "pitch": 0.272505119860428,
          "rotation": 4.71238898038469,
          "target": "11-highceiling-area"
        },
        {
          "yaw": -1.6989652237178525,
          "pitch": 0.16101573029236782,
          "rotation": 0,
          "target": "12-ffbedroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-staircase2",
      "name": "STAIRCASE2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.004500466306046391,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.15002260811904122,
          "pitch": 0.06581801802567,
          "rotation": 0,
          "target": "19-staircase2"
        },
        {
          "yaw": -0.02657761348651455,
          "pitch": 0.0863454832485484,
          "rotation": 3.141592653589793,
          "target": "18-staircase1"
        },
        {
          "yaw": -0.057595796114068065,
          "pitch": 0.4905757997259901,
          "rotation": 3.9269908169872414,
          "target": "11-highceiling-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
