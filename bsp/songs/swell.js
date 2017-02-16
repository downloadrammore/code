BSP.SONG = (function(SONG = {}) {
/* ----------------------------- */

SONG.title   = "swell"
SONG.author  = "bryc"
SONG.date    = "feb-10-2017"
SONG.comment = "remake of swell.v2m"
SONG.bpm     = 94
SONG.wave    = [2,2,2,1,3,1]
SONG.cVol    = [0.17,0.17,0.17, 0.2,0.2,0.17]

SONG.seq = [

[ //CHORD1
    ['f#6'],       ,       ,       ,
           ,       ,['f#6'],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
    ['f#6'],       ,       ,       ,
           ,       ,['e6' ],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
],
[ //CHORD2
    ['d#6'],       ,       ,       ,
           ,       ,['d#6'],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
    ['d#6'],       ,       ,       ,
           ,       ,['c#6' ],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
],
[ // CHORD3
    ['c#6'],       ,       ,       ,
           ,       ,['b5' ],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
    ['a#5'],       ,       ,       ,
           ,       ,['a5' ],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
],
[ // BASS
    ['b2' ],       ,       ,       ,
    1      ,['b2',0.25 ],['f#3'],       ,
           ,       ,1      ,['f#3',0.25 ],
    ['f#3'],1      ,['a2' ],1      ,
    ['d#3'],       ,       ,       ,
    1      ,['d#3',.25],['a2' ],       ,
           ,       ,1      ,['a2',.25 ] ,
    ['a2' ],       ,       ,1      ,
],
[ // STAB
    ['f#6'],1      ,['f#6',.5],1      ,
    ['f#6',.25],1      ,['f#6'],1      ,
    ['f#6',.5],1      ,['f#6',.25],1      ,
    ['f#6',.1],1       ,['f#6',.05],1       ,
    ['d#6'],1      ,['d#6',.5],1      ,
    ['d#6',.25],1      ,['e6'],1      ,
    ['e6',.5],1      ,['e6',.25],['e6'],
    ['d#6'],1      ,['e6'],1      ,
],
[ // MELO
    ['c#6',0.75],       ,       ,       ,
    ['d#5'],       ,['b4' ],       ,
    ['f#5'],       ,['g#5'],       ,
           ,       ,['a#5'],       ,
           ,       ,       ,       ,
    ['b5' ],       ,['g#5'],       ,
           ,       ,['f#5'],['e5' ],
    ['d#5'],['c#5'],['b4' ],       ,
],
]

/* ----------------------------- */
return SONG;
/* ----------------------------- */
})();