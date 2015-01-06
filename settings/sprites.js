FullScreenPokemon.prototype.settings.sprites = {
    "scale": FullScreenPokemon.scale,
    "spriteWidth": "spritewidthpixels",
    "spriteHeight": "spriteheightpixels",
    "flipVert": "flip-vert",
    "flipHoriz": "flipped",
    "paletteDefault": [
        [0, 0, 0, 0],
        [255, 255, 255, 255],
        [0, 0, 0, 255],
        [199, 199, 192, 255],
        [128, 128, 128, 255]
    ],
    "filters": {},
    "library": {
        "Character": {
            "Mother": {
                "normal": "p[0,1,2,3]x06,2222x010,x28,x07,x210,x06,x26,3222x05,x26,31222200002223111132220000223x16,3220002211121121112200222112112112220022221133112222002221x26,12220002112333321120000212x16,2120000223311113322x06,23111132x09,x26,x05,",
                "up": "",
                "left": ""
            },
            "RivalMother": {
                "normal": "p[0,1,2,3]x06,2222x010,22333322x07,2x35,2222x05,2x35,22233200002x35,223132000023333221112x05,23333211212x05,23332111212x05,2x35,11112x05,23333211322x05,233332222x07,23332122x08,233221222x07,22221x25,x08,x27,x010,x25,x06,",
                "up": "",
                "left": ""
            },
            "Player": {
                "normal": {
                    "normal": "p[0,1,2,4]x05,x26,x09,2x36,2x07,2x38,2x06,2x38,2x05,2223111132220000221x26,122000212x18,21200211112112111120002211211211220000222113311222000211x28,11200211x28,112000222332233222x05,2322332232x06,2333223332x07,222002220000",
                    "up": "p[0,1,2,3,4]x05,x26,x09,2x46,2x07,2x48,2x06,2x48,2x05,22x48,220000222x46,22200021x210,1200211x28,1120002211222211220000222244442222000212242222422120021224411442212000222244442222x05,24x26,32x06,2444224442x07,222002220000",
                    "left": "p[0,1,2,4]x05,x26,x09,2x36,2x07,2x38,2x05,221x37,2000021111x35,222000022333x27,x05,21211x26,x05,2121121122x06,2x17,2x08,231112232x08,x25,332x09,2211232x09,2211232x08,2332222x09,233332x011,2222x06,"
                },
                "walking": {
                    "normal": "p[0,1,2,4]x021,x26,x09,2x36,2x07,2x38,2x06,2x38,2x05,2223111132220000x212,000212x18,212002111121121111200222112112112200021221133112320000x210,12x05,22322221122x06,222332112x07,23322022x09,222x08,",
                    "up": "p[0,1,2,4]x021,x26,x09,2x36,2x07,2x38,2x06,2x38,2x05,22x38,220000222x36,22200021x210,1200211x28,1120022211222211220002122233332222000022232222321120000223311332112x05,2233332222x06,232222x011,222x08,",
                    "left": "p[0,1,2,4]x021,x26,x09,2x36,2x07,2x38,2x05,221x37,2000021111x35,222000022333x27,x05,21211x26,x05,2121121122x06,2x17,2x08,231112232x08,x26,32x06,x26,1122x05,233233211232x05,233x25,332x06,222000022000"
                }
            }
        },
        "Solid": {
            "BedSingle": "p[1,2,3,4]x117,0x212,0110x212,0x118,x314,11333x18,333x15,2x06,2x16,23x28,321112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2112x012,2x118,0x212,0110x212,0x118,x314,11x314,11x314,x117,",
            "Bookshelf": "p[0,1,2,3,4]0x214,02x114,221x312,4221x312,4221x312,4221x312,4221x312,4221x312,422x414,224x212,42242323232332324224232121233232422421212121121242242123232112124224222323x26,4224x212,4224x312,4224x212,422423323233233242242332121121124224211212112112422422223x27,4224x212,4224x312,4224x212,4224x35,22x35,4224x35,22x35,4224x35,22x35,4224x35,22x35,4x218,4x312,420x214,0",
            "Cabinet": "p[0,1,2,3,4]0x214,02x114,221x312,4221x312,4221x312,4221x312,4221x312,4221x312,4223x112,3223x212,3223233233233332322324424423333232232112112133123223x28,11223223x212,3223x112,3223x112,3223x212,3223233233233332322324424423333232232112112133123223x28,11223223x212,3223x112,3223x212,3223x45,22x45,3223x45,22x45,3223x45,22x45,3223x45,22x45,3x218,3x112,320x214,0",
            "ComputerDesk": "p[0,1,2,3,4]000x210,x05,2x110,200002x110,200002x110,200002x310,2000023x28,32002223214x25,32222123x28,32322123x28,32422123x28,3242212x310,242212x45,22224242212x310,242212x410,232211x210,3322x114,2244x210,44222214141414112222123x48,12422121414111141242212x310,24224x212,422x414,23x214,324x212,4224x35,22x35,4224x35,22x35,4224x35,22x35,4224x35,22x35,4x218,4x312,420x214,0",
            "ConsoleAndController": "p[0,1,2,3,4]x018,x27,3x07,24x15,423x06,2434443423x06,24x25,423x06,2x17,23x06,2143334123x06,2x17,23x06,2x47,230220000x27,33211200002x36,2141420002000222x15,20000222021441223x08,2144233x010,2112x013,220000",
            "Door": "p[1,2,3,4]323x210,32332x112,23321x310,12332133x16,33123301310000201310330131000202131033013100202213103301310202221310330133x16,31103301x38,1010330132x06,2110330130x27,310330130x27,3103301x310,10330x112,0311x212,11",
            "FenceWide": "p[0,1,2,3,4]x022,x25,x09,224333422x06,243x15,342000024x19,4200023x19,320002433x15,33420002434x35,434200324344111443420332334411144332034233331113333203424333111333420342434411144342004423441114432400344224111422400003444x25,44x06,333x45,x05,",
            "FenceVertical": "p[0,1,2,3,4]x026,2222000x26,00x26,0023224200233442002334420023344200233442002134320021133200231342004234240004224x010,",
            "Grass": "p[0,1,3,4]x06,32x06,32x05,313x05,3133300322333003223313032323130323231233330312333301312332003123320223233002232330002233200022332x08,32x06,32x05,313x05,313330032233300322331303232313032323123333031233330131233200312332022323300223233000223320002233200",
            "HouseTop": ["multiple", "horizontal", {
                "left": "p[0,1,2,3,4]x015,x217,x013,224x116,x011,22144x316,x09,2244144x316,x07,2241441x418,x05,22144144144x316,0002244144144144x316,0224144144144144x316,21441441441441x418,2144144144144144x316,2144144144144144x316,2144144144144144x316,2144144144144144x316,214414414414414x218,14414414414422x417,214414414412244x218,14414414224422x39,4x37,21441442244223334x26,4x18,21441224422x35,21111312x18,214224422x37,21113142x18,2224422x36,11121131432x38,24422x36,x15,21314342x18,022223333x17,23143442x18,0000233x19,4x26,4x18,033332x326,03333211x324,033332x126,033332x326,0333323x425,0333323x425,0x35,x226,0x331,",
                "middle": "p[1,2,3,4]x132,x032,x264,x332,x296,x332,x2128,x132,x332,x132,x08,x216,x016,3x16,33x16,3x016,1000020110000201x016,1000203110002031x016,1002032110020321x016,1020323110203231x016,1203233112032331x016,3x16,33x16,3x08,x264,x032,x232,x364,x132,x232,",
                "right": "p[0,1,2,3,4]x217,x015,x116,422x013,x316,44122x011,x316,4414422x09,x418,1441422x07,x316,44144144122x05,x316,4414414414422000x316,4414414414414220x418,14414414414412x316,4414414414414412x316,4414414414414412x316,4414414414414412x316,441441441441441x218,414414414414412x417,22441441441441x218,442214414414412x317,2244224144144124x26,44x26,433322442244144122111131221111312x35,224422144122111314221113142x37,2244224122113143221131432111x36,22442222131434221314342x15,x36,224422314344223143442x17,3333222204x26,44x26,4x19,3320000x326,233330x324,11233330x126,233330x326,233330x425,3233330x425,3233330x226,x35,0x331,0"
            }],
            "HouseCenter": ["multiple", "horizontal", {
                "left": "p[0,1,2,3,4]033332114x37,033332x110,033332x110,033332x110,03333211x38,033332x110,033332x110,033332x110,033332x310,03333211x38,033332x110,033332x310,0333323x49,0333323x49,0x35,x210,0x315,",
                "middle": "p[1,2,3,4]x216,3x16,33x16,3100002011000020110002031100020311002032110020321102032311020323112032331120323313x16,33x16,3x232,x016,x216,x332,x116,x216,",
                "right": "p[0,1,2,3,4]4x37,11233330x110,233330x110,233330x110,233330x38,11233330x110,233330x110,233330x110,233330x310,233330x38,11233330x110,233330x310,233330x49,3233330x49,3233330x210,x35,0x315,0"
            }],
            "HouseLargeTopLeft": "p[0,1,2,3,4]x015,2x013,224x011,22144x09,2244144x07,224144144x05,22144144144000224414414414402241441441441442144144144144144214414414414414421441441441441442144144144144144214414414414414421441441441441442144144144144144214414414414414421441441441441442144144144144144214414414414414421441441441441442144144144144144214414414414414421441441441441442144144144144144214414414414414421441441441441442144144144144144214414414414414421441441441441442144144144144142214414414414422421441441441224422144144142244223214414422442233321441224422x35,214224422x37,2224422x36,11124422x36,x15,022223333x17,0000233x19,",
            "HouseLargeTopMiddle": "p[1,2,3,4]x140,x040,x280,x340,2203202222032022220320222203202222032022203222022032220220322202203222022032220203x25,003x25,003x25,003x25,003x25,00x26,00x26,00x26,00x26,00x26,020222203202222032022220320222203202222032202203222022032220220322202203222022032222003x25,003x25,003x25,003x25,003x25,00x26,00x26,00x26,00x26,00x25,03202222032022220320222203202222032022203222022032220220322202203222022032220203x25,003x25,003x25,003x25,003x25,00x26,00x26,00x26,00x26,00x26,020222203202222032022220320222203202222032202203222022032220220322202203222022032222003x25,003x25,003x25,003x25,003x25,00x26,00x26,00x26,00x26,00x25,03202222032022220320222203202222032022203222022032220220322202203222022032220203x25,003x25,003x25,003x25,003x25,0x340,x2160,x140,x340,x140,x224,x016,3x16,33x16,33x16,3x26,30x26,30100002011000020110000201x26,30x26,30100020311000203110002031x016,1002032110020321100203212230x26,3022221020323110203231102032312230x26,302222120323311203233112032331x016,3x16,33x16,33x16,30x25,300x25,30",
            "HouseLargeTopRight": "p[0,1,2,3,4]2x015,422x013,44122x011,4414422x09,441441422x07,44144144122x05,4414414414422000441441441441422044144144144144124414414414414412441441441441441244144144144144124414414414414412441441441441441244144144144144124414414414414412441441441441441244144144144144124414414414414412441441441441441244144144144144124414414414414412441441441441441244144144144144124414414414414412441441441441441244144144144144124414414414414412441441441441441224144144144144124224414414414412244221441441441232244224144144123332244224414412x35,22442214412x37,224422412111x36,2244222x15,x36,22442x17,333322220x19,3320000",
            "HouseLargeCenter": ["multiple", "horizontal", {
                "left": "p[0,1,2,3,4]033332110333321103333211033332110333321103333211033332110333321103333211033332110333321103333211033332110333321103333211033332110333323303333211033332110333323303333234033332340x35,220x37,",
                "middle": "p[1,2,3,4]x08,x26,30x26,3x09,2230x26,302222x09,x25,30x28,3x16,310000201100020311002032110203231120323313x16,3x216,x08,x28,x316,x18,x28,",
                "right": "p[0,1,2,3,4]1123333011233330112333301123333011233330112333301123333011233330112333301123333011233330112333301123333011233330112333301123333033233330112333301123333033233330432333304323333022x35,0x37,0"
            }],
            "HouseWallWhitewash": "p[1,3,4]2x17,x024,x18,x024,",
            "Lab": "p[1,2,3,4]x015,x166,x028,113x064,311x024,11033x264,33011x020,1133033x264,3303311x016,1130330x368,0330311x012,11033033033220320222203202222032022220320222203202222032022220320222203202233033033011x08,113303303303320322202203222022032220220322202203222022032220220322202203222023303303303311000011303303303303303x25,003x25,003x25,003x25,003x25,003x25,003x25,003x25,0330330330330311010330330330330330x26,00x26,00x26,00x26,00x26,00x26,00x26,00x26,033033033033033011033033033033033202222032022220320222203202222032022220320222203202222032022220333033033033033011033033033033033220220322202203222022032220220322202203222022032220220322202203233033033033033011033033033033033222003x25,003x25,003x25,003x25,003x25,003x25,003x25,003223303303303303301103303303303303322200x26,00x26,00x26,00x26,00x26,00x26,00x26,002223303303303303301103303303303303322032022220320222203202222032022220320222203202222032022220320223303303303303301103303303303303320322202203222022032220220322202203222022032220220322202203222023303303303303301103303303303303303x25,003x25,003x25,003x25,003x25,003x25,003x25,003x25,0330330330330330110330330330330330x26,00x26,00x26,00x26,00x26,00x26,00x26,00x26,033033033033033011033033033033033202222032022220320222203202222032022220320222203202222032022220333033033033033011033033033033033220220322202203222022032220220322202203222022032220220322202203233033033033033011033033033033033222003x25,003x25,003x25,003x25,003x25,003x25,003x25,003223303303303303301103303303303303322200x26,00x26,00x26,00x26,00x26,00x26,00x26,002223303303303303301103303303303303322032022220320222203202222032022220320222203202222032022220320223303303303303301103303303303303320322202203222022032220220322202203222022032220220322202203222023303303303303301103303303303303303x25,003x25,003x25,003x25,003x25,003x25,003x25,003x25,0330330330330330110330330330330x368,033033033033011033033033033033x264,33033033033033011033033033033033x264,33033033033033011033033033033033x264,33033033033033011033033033033033x264,3303303303303301103303303303303x166,303303303303301103303303303311x366,113303303303301103303303301133x166,331103303303301103303303113311x225,x016,x225,11331130330330110330331133112223x16,33x16,33x16,3x26,30x26,303x16,33x16,33x16,3222113311330330110330113311x25,100002011000020110000201x26,30x26,30100002011000020110000201x25,11331103301103113311x27,100020311000203110002031x016,100020311000203110002031x27,1133113011113311x26,0001002032110020321100203212230x26,302222100203211002032110020321000x26,113311113311x26,x05,1020323110203231102032312230x26,302222102032311020323110203231x05,x26,11331011112222x07,120323311203233112032331x016,120323311203233112032331x07,22221111x05,122x09,3x16,33x16,33x16,30x25,300x25,303x16,33x16,33x16,3x09,221x05,22221003x27,3x27,3x27,x058,122220022221x026,x26,30x26,30x26,30x26,30x26,30x26,30x26,3000122220022221x026,x26,30x26,30x26,30x26,30x26,30x26,30x26,3000122220022221x084,12222002222100x226,30x26,30x26,30x26,30x26,30x26,30x26,30222200122220022221x026,2230x26,30x26,30x26,30x26,30x26,30x26,30222200122220022221x084,122220022221x027,x25,300x25,300x25,300x25,300x25,300x25,300x25,300012222002222100x224,323x210,323x240,00122220022221003x16,33x16,33x16,332x112,233x16,33x16,33x16,33x16,33x16,30012222002222100100002011000020110000201321x310,1231000020110000201100002011000020110000201001222200222210010002031100020311000203132133x16,33123100020311000203110002031100020311000203100122220022221001002032110020321100203213013100002013103100203211002032110020321100203211002032100122220022221001020323110203231102032313013100020213103102032311020323110203231102032311020323100122220022221001203233112032331120323313013100202213103120323311203233112032331120323311203233100122220022221003x16,33x16,33x16,330131020222131033x16,33x16,33x16,33x16,33x16,300122220022221x226,30133x16,31103x242,12222002222100x224,301x38,10103x240,00122220022221x026,30132x06,21103x042,122220022221x226,30130x27,3103x242,1222200222212x326,0130x27,310x342,21222200222212x326,01x310,10x342,21222200x25,x126,30x112,03x142,x25,00x231,11x212,11x247,0",
            "Pokeball": "p[0,1,2,3]00002222x06,22333322000233311333200233311333202x310,22x310,2211x36,1122x110,202x18,2002x18,200022111122x06,22220000",
            "PottedPalmTree": "p[0,1,2,3,4]002x010,20002322x06,22320022332200223342223343232232344420224443243444224234344442442333202244x25,334220x25,332244220000223344332433220234244434444233202334323243444242334434224343432223424222242342223322322223223320232020222202320002000021220022x08,242x014,32x012,2442x010,22233222x07,2424134242x07,22344322x06,23224134223200002322244222320000243x26,3420000244x36,442x05,2441344442x06,24x26,42x06,2443344442x07,24134442x09,x26,x05,",
            "Sign": "p[0,1,2,3,4]0x214,00244x27,442220022x07,223420x213,422x313,22214x17,44112221441414414414222x113,222144x16,41412221441414414141222x113,220x213,4203030003033420420303003033442342x07,303442442x08,30334224",
            "StairsDown": "p[2,3,4]000x213,000x210,x06,x28,00110000x26,00111x011,11101x09,11101x09,11101002220000111x06,2220011101002220222011x06,11202220010022201120222x05,1120112022200220112011202000022011201120002002201120100010200220222020201020",
            "StairsUp": "p[0,1,2,3,4]x013,222x011,22212x09,2221212x07,2221x25,x05,222121211120002221x25,11123332323211121112333x25,11121222444211121112221x25,11121222121224421112221x26,4421222121244422442221x25,444224421212x47,2244x25,x47,x217,",
            "Table3x2": "p[0,1,2,3,4]x0257,x230,02x130,221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4222x428,x235,x430,20x230,0024442x420,24442002133x222,33320021332x320,2333200x25,x320,x25,0",
            "Table3x3": "p[0,1,2,3,4]x033,x230,02x130,221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4221x328,4222x428,x235,x430,20x230,0024442x420,24442002133x222,33320021332x320,2333200x25,x320,x25,0",
            "TelevisionMonitor": "p[0,1,2,3,4]00x212,00021x311,200x214,021x313,221x313,22x414,224x212,422423333x46,2422423113x46,2422423333x46,242242x410,242242x410,242242x410,24224x212,4224442x46,244420x214,0",
            "WaterEdgeTop": "p[2,3,4]0x26,010222201210220122210012202000102200110200010200201020220",
            "WaterEdgeRight": "p[1,2,3,4]1131320101132012101101233101123213011323311001322131301313132301",
            "WaterEdgeBottom": ["same", ["Solid", "WaterEdgeTop"]],
            "WaterEdgeLeft": ["same", ["Solid", "WaterEdgeTop"]]
        },
        "Scenery": {
            "Book": "p[0,1,2,3]00x25,000x25,00231111222111132223133313133313222311113313331322231313131333132223x15,3x15,32223x15,31313132223133313x15,32223x15,3x15,3222x313,x217,",
            "Doormat": "p[0,1,4]0021x210,12",
            "DoormatDotted": "p[0,3,4]x07,212121x28,x17,x28,11x25,11x223,11x25,11x27,x17,x28,121212",
            "Flower": {
                "normal": "p[0,1,3,4]x011,33x05,3113000313323003122230333223330x36,000033000",
                "two": "p[0,1,3,4]x012,33x05,3113000313323333122230333223300x35,x05,3000",
                "three": "p[0,1,3,4]00033x05,311300031332300312223000322300330330330x36,000033000"
            },
            "FlowerVase": "p[0,1,2,3,4]x019,22x09,21122x07,144112021221144112022122211223213224222312212212242212022133334220042133334240044213342440004422224400",
            "Painting": "p[0,1,2,3,4]x017,x214,002x112,20021x410,120021433x47,120021433x47,120021x45,334441200214444333344120021444x36,41200214x38,4120021x410,12002x112,200x214,0",
            "Stool": "p[0,1,2,3,4]x083,x210,x05,2x110,20000211x36,1120000211x36,1120000211x36,11200002x110,200002x310,2000023x28,320000232x46,2320000232343433232000022233433322200",
            "Window": "p[0,1,2,3]x016,x217,x16,22x16,22x16,22x16,22x16,22x16,22x16,22x16,22x16,22x16,22x16,22x16,22x16,22x16,22x36,22x36,22x36,22x36,x217,x016,",
            "WindowBlinds": "p[0,1,2,3]x017,x214,002323x17,23200x214,002323x17,23200x214,002323x17,23200x214,002323x17,23200x214,002323x17,23200x214,0"
        },
        "Terrain": {
            "DirtClean": "p[1,3]x0145,101x013,1010101x013,101x026,101x013,101x027,",
            "DirtLight": "p[1,3]x018,101x05,10100010101010101010101x05,101x05,1x020,101x05,101x05,101x05,101x036,101x05,10100010101010101010101x05,101x05,1x020,101x05,101x05,101x05,101x034,",
            "DirtMedium": "p[1,3]10101011101010110100010101000101100011101000111001011101010111011011101010111010010100110101001100100110001001100x15,010x15,0110101011101010110100010101000101100011101000111001011101010111011011101010111010010100110101001100100110001001100x15,010x15,011010101110101011",
            "DirtWhite": "x1256,",
            "FloorLinedHorizontal": "p[3,4]1000",
            "FloorTiledDiagonal": "p[1,3]1x07,1x08,1x07,1x08,1x07,1x08,1x07,1x06,101x05,10100001000100010001001x05,101x05,1x08,1x07,11x07,1x08,1x07,1x08,1x07,1x08,1x07,1x06,101x05,10100001000100010001001x05,101x05,1x08,1x07,1",
            "Water": {
                "normal": "p[1,4]111100x16,00x15,00x16,00x16,00x16,00x17,00x16,00x17,000x15,x05,x16,00x18,00x16,00x17,00x16,00x17,00x16,00x15,00x16,00x16,00x16,00x17,00x16,00x17,000x15,x05,x16,00x18,00x16,00x17,00x16,00111",
                "two": "p[1,4]x15,00x16,00x15,00x16,00x16,00x16,00x17,00x16,0010x15,000x15,00100x16,00x18,00x16,00x17,00x16,00x17,00x16,00x15,00x16,00x16,00x16,00x17,00x16,0010x15,000x15,00100x16,00x18,00x16,00x17,00x16,0011",
                "three": "p[1,4]x16,00x16,00x15,00x16,00x16,00x16,00x17,00x16,0000x15,000x15,01100x16,00x18,00x16,00x17,00x16,00x17,00x16,00x15,00x16,00x16,00x16,00x17,00x16,0000x15,000x15,01100x16,00x18,00x16,00x17,00x16,001",
                "four": "p[1,4]11100x16,00x15,00x16,00x16,00x16,00x17,00x16,00x17,000x15,00010x16,00x16,0100x16,00x17,00x16,00x17,00x16,00x15,00x16,00x16,00x16,00x17,00x16,00x17,000x15,00010x16,00x16,0100x16,00x17,00x16,001111",
                "five": "p[1,4]1100x16,00x15,00x16,00x16,00x16,00x17,00x16,00x17,000x15,000x18,00x16,0000x16,00x17,00x16,00x17,00x16,00x15,00x16,00x16,00x16,00x17,00x16,00x17,000x15,000x18,00x16,0000x16,00x17,00x16,00x15,"
            },
            "WallIndoorHorizontalBands": "p[3,4]0000x112,"
        }
    }
};