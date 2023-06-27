const chapter_names = [
    'Пролог',
    'Глава первая', 'Глава вторая', 'Глава третья', 'Глава четвертая', 'Глава пятая',
    'Глава шестая', 'Глава седьмая', 'Глава восьмая', 'Глава девятая', 'Глава десятая',
    'Глава одиннадцатая', 'Глава двенадцатая', 'Глава тринадцатая', 'Глава четырнадцатая', 'Глава пятнадцатая',
    'Глава шестнадцатая', 'Глава семнадцатая', 'Глава восемнадцатая', 'Глава девятнадцатая', 'Глава двадцатая',
    'Глава двадцать первая', 'Глава двадцать вторая', 'Глава двадцать третья',
];

const chapter_ids = [
    1,
    57, 152, 221, 331, 446,
    544, 602, 728, 819, 910,
    969, 1034, 1134, 1233, 1333,
    1441, 1545, 1603, 1690, 1757,
    1822, 1898, 1983,
]

const conan_ids = [
    59,
    62,
    63,
    65,
    67,
    68,
    70,
    71,
    75,
    77,
    79,
    81,
    82,
    84,
    87,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    97,
    98,
    100,
    101,
    103,
    104,
    106,
    111,
    112,
    114,
    119,
    123,
    124,
    128,
    129,
    135,
    140,
    142,
    146,
    153,
    154,
    155,
    156,
    158,
    161,
    162,
    164,
    165,
    166,
    167,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    178,
    179,
    180,
    182,
    207,
    214,
    222,
    223,
    225,
    229,
    235,
    236,
    241,
    242,
    245,
    249,
    250,
    251,
    253,
    254,
    258,
    260,
    264,
    265,
    267,
    268,
    269,
    270,
    271,
    274,
    276,
    281,
    283,
    284,
    286,
    288,
    291,
    297,
    298,
    301,
    302,
    305,
    308,
    311,
    314,
    315,
    316,
    320,
    322,
    325,
    327,
    329,
    332,
    333,
    335,
    337,
    340,
    345,
    347,
    349,
    390,
    412,
    418,
    419,
    420,
    421,
    422,
    423,
    426,
    427,
    428,
    433,
    437,
    442,
    443,
    445,
    447,
    448,
    450,
    452,
    454,
    455,
    456,
    457,
    458,
    460,
    461,
    463,
    467,
    469,
    471,
    472,
    473,
    493,
    494,
    495,
    496,
    497,
    499,
    500,
    501,
    502,
    503,
    506,
    508,
    510,
    512,
    516,
    519,
    520,
    522,
    523,
    526,
    527,
    528,
    529,
    531,
    533,
    534,
    545,
    546,
    550,
    553,
    556,
    564,
    566,
    572,
    574,
    575,
    582,
    585,
    586,
    587,
    589,
    592,
    593,
    594,
    598,
    601,
    638,
    641,
    643,
    646,
    650,
    652,
    653,
    656,
    658,
    662,
    664,
    666,
    669,
    675,
    676,
    677,
    681,
    685,
    688,
    689,
    691,
    692,
    693,
    695,
    696,
    698,
    699,
    700,
    703,
    704,
    711,
    713,
    714,
    717,
    718,
    719,
    720,
    723,
    724,
    725,
    726,
    729,
    730,
    735,
    739,
    742,
    744,
    746,
    748,
    752,
    758,
    760,
    802,
    804,
    807,
    808,
    810,
    812,
    813,
    814,
    818,
    820,
    821,
    847,
    851,
    854,
    856,
    857,
    860,
    868,
    871,
    875,
    880,
    881,
    883,
    885,
    886,
    889,
    893,
    894,
    896,
    899,
    907,
    911,
    925,
    927,
    928,
    931,
    932,
    938,
    940,
    943,
    947,
    949,
    950,
    951,
    952,
    953,
    955,
    957,
    959,
    961,
    970,
    971,
    972,
    973,
    974,
    975,
    976,
    977,
    978,
    981,
    983,
    984,
    985,
    987,
    988,
    989,
    990,
    992,
    996,
    998,
    1001,
    1002,
    1003,
    1005,
    1006,
    1007,
    1008,
    1011,
    1012,
    1014,
    1016,
    1017,
    1018,
    1019,
    1022,
    1024,
    1025,
    1026,
    1027,
    1029,
    1030,
    1031,
    1032,
    1035,
    1036,
    1037,
    1038,
    1040,
    1042,
    1044,
    1045,
    1046,
    1048,
    1053,
    1057,
    1058,
    1060,
    1063,
    1065,
    1067,
    1068,
    1071,
    1072,
    1073,
    1076,
    1082,
    1086,
    1099,
    1100,
    1106,
    1115,
    1116,
    1117,
    1118,
    1119,
    1120,
    1121,
    1123,
    1125,
    1127,
    1129,
    1130,
    1131,
    1132,
    1136,
    1154,
    1161,
    1162,
    1164,
    1166,
    1169,
    1170,
    1171,
    1173,
    1176,
    1177,
    1183,
    1184,
    1187,
    1191,
    1194,
    1197,
    1200,
    1204,
    1205,
    1206,
    1210,
    1211,
    1219,
    1224,
    1226,
    1229,
    1230,
    1231,
    1232,
    1234,
    1235,
    1237,
    1239,
    1241,
    1242,
    1250,
    1254,
    1267,
    1307,
    1308,
    1311,
    1312,
    1315,
    1318,
    1319,
    1323,
    1327,
    1332,
    1334,
    1336,
    1338,
    1339,
    1342,
    1344,
    1346,
    1348,
    1350,
    1353,
    1357,
    1358,
    1362,
    1365,
    1367,
    1369,
    1370,
    1371,
    1373,
    1374,
    1378,
    1379,
    1382,
    1384,
    1387,
    1388,
    1391,
    1399,
    1401,
    1406,
    1408,
    1410,
    1412,
    1414,
    1415,
    1416,
    1417,
    1418,
    1419,
    1424,
    1426,
    1427,
    1428,
    1431,
    1432,
    1433,
    1435,
    1436,
    1437,
    1439,
    1442,
    1444,
    1450,
    1454,
    1470,
    1471,
    1472,
    1473,
    1476,
    1477,
    1482,
    1485,
    1489,
    1490,
    1493,
    1498,
    1503,
    1504,
    1509,
    1517,
    1520,
    1522,
    1525,
    1527,
    1532,
    1533,
    1540,
    1546,
    1547,
    1549,
    1550,
    1551,
    1552,
    1553,
    1554,
    1556,
    1557,
    1560,
    1561,
    1570,
    1579,
    1582,
    1583,
    1584,
    1587,
    1589,
    1604,
    1606,
    1608,
    1613,
    1614,
    1616,
    1618,
    1620,
    1621,
    1622,
    1623,
    1625,
    1629,
    1636,
    1640,
    1641,
    1643,
    1644,
    1645,
    1646,
    1655,
    1660,
    1673,
    1675,
    1676,
    1678,
    1687,
    1691,
    1692,
    1693,
    1695,
    1697,
    1699,
    1700,
    1727,
    1728,
    1729,
    1730,
    1731,
    1741,
    1742,
    1743,
    1744,
    1747,
    1749,
    1751,
    1753,
    1758,
    1759,
    1760,
    1761,
    1763,
    1765,
    1767,
    1768,
    1769,
    1771,
    1772,
    1774,
    1775,
    1776,
    1777,
    1778,
    1780,
    1781,
    1782,
    1783,
    1785,
    1787,
    1788,
    1789,
    1790,
    1792,
    1795,
    1798,
    1799,
    1823,
    1824,
    1825,
    1826,
    1827,
    1828,
    1830,
    1831,
    1834,
    1835,
    1837,
    1851,
    1852,
    1855,
    1856,
    1858,
    1859,
    1862,
    1863,
    1864,
    1867,
    1868,
    1870,
    1871,
    1875,
    1879,
    1880,
    1884,
    1885,
    1886,
    1890,
    1893,
    1895,
    1913,
    1915,
    1916,
    1918,
    1919,
    1920,
    1921,
    1923,
    1924,
    1926,
    1927,
    1928,
    1929,
    1932,
    1933,
    1935,
    1936,
    1937,
    1942,
    1944,
    1945,
    1947,
    1950,
    1951,
    1952,
    1953,
    1954,
    1956,
    1957,
    1958,
    1959,
    1961,
    1964,
    1966,
    1967,
    1968,
    1971,
    1973,
    1979,
    1982,
    1985,
    1987,
    1990,
    1991,
    1993,
    1995,
    2002,
    2003,
    2004,
    2007
];