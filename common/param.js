export const SIZE = 64
export const OPACITY_AVAILABLE = [0.2, 0.5, 0.8, 1]
export const RADIUS_AVAILABLE = [
    2,
    3,
    4,
    5,

    6,
    7,
    8,
    10,

    12,
    14,
    16,
    18,

    22,
    26,
    30,
    40,
]

export const COLOR_PALETTE = []

// prettier-ignore
for(let r=0;r<256;r+= 50)
for(let v=0;v<256;v+= 50)
for(let b=0;b<256;b+= 42)
    COLOR_PALETTE.push([r,v,b]);

// COLOR_PALETTE.length = 252   ~ 1 << 8
