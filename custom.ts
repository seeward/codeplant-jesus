
/**
* Sprite Wrapper for a codeplant.jesus lessons
*/
//% weight=100 color=#d2b48c 
//% groups='["Create Jesus", "Jesus Properties", "Jesus Animations"]'
namespace codeplant.jesus {

enum AnimationTypes {
    AttackLeft = 1,
    AttackRight = 2
}

    let _jesus: Jesus = null
    export let _jesus_still: Image[] = [img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . b e e . .
        . . . e e b . . f f f . .
        . . . f f f . . . . . . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `]

    export let _jesus_right: Image[] = [img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . b e e . .
        . . . e e b . . f f f . .
        . . . f f f . . . . . . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . . . . 4 4 4 4 4 4 . . .
        . e e e e e 4 4 4 e e e .
        . e . e e e e e e e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . . . c c c c c c c . 4 .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `, img`
        . . . . . . . . . . . . .
        . . . e f f e f e e . . .
        . . e f e e f e e f e . .
        . f f e f f f e f e f e .
        e f e e f e e f e e f e .
        f e e f f e e e 4 e e f e
        . f f e e 4 4 4 4 4 e e e
        . e e 4 4 4 4 4 4 4 4 e .
        . f f f f f f 4 4 f f f f
        . 4 f 4 f 4 e f f e 4 f .
        . . e 4 f f f 4 4 f f f .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . 4 4 4 4 4 e 4 4 . .
        . . . . 4 4 4 e 4 4 4 . .
        . e e e 4 4 4 4 4 4 e e .
        . e . e e e 4 4 4 e . e .
        . e . e e e e e e e . e .
        . 4 . e e e e e e e . 4 .
        . 4 . e e e e e e e . 4 .
        . 4 . c c c c c c c . 4 .
        . 4 . c c c c c c c . . .
        . . . c c c . c c c . . .
        . . . . 4 4 . . 4 4 . . .
        . . . e e b . . b e e . .
        . . . f f f . . f f f . .
    `]

    export let _jesus_left: Image[] = reflect(_jesus_right);
    /**
     * Creates a new dart from an image and kind
     * @param kind the kind to make the jesus 
     * @param x optional initial x position, eg: 10
     * @param y optional initial y position, eg: 70
     */
    //% blockId=jesusCreate block="sprite of kind %kind=spritekind || at x %x y %y"
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% blockSetVariable=jesus
    //% weight=100
    //% group="Create Jesus"
    export function create(kind: number,
        x: number = 10,
        y: number = 70): Jesus {
        _jesus = new Jesus(kind, x, y);
        return _jesus

    }
    //% blockId=PLayAttacks block="Jesus %a Animation"
    //% weight=100
    //% group="Jesus Animations"
    export function playAttackAnimation(a: AnimationTypes) {
        switch(a){
            case AnimationTypes.AttackLeft: 
                _jesus.playAttackLeftAnimation()
            break
            case AnimationTypes.AttackRight:
                _jesus.playAttackLeftAnimation()
            break
        }
        
    }



    //% blockId=JesusAttackLeft block="Jesus Attack Left Animation"
    //% weight=100
    //% group="Jesus Animations"
    export function playAttackLeftAnimation() {
        _jesus.playAttackLeftAnimation()
    }
    //% blockId=JesusAttackRight block="Jesus Attack Right Animation"
    //% weight=100
    //% group="Jesus Animations"
    export function playAttackRightAnimation() {
        _jesus.animateAttack()
    }
    //% blockId=JesusWalkLeft block="Jesus Walk Left Animation"
    //% weight=100
    //% group="Jesus Animations"
    export function playWalkLeftAnimation() {
        _jesus.playWalkLeftAnimation()
    }
    //% blockId=JesusWalkRight block="Jesus Walk Right Animation"
    //% weight=100
    //% group="Jesus Animations"
    export function playWalkRightAnimation() {
        _jesus.playWalkRightAnimation()
    }
    //% blockId=JesusIdle block="Jesus Idle Front Animation"
    //% weight=100
    //% group="Jesus Animations"
    export function playIdleFrontAnimation() {
        _jesus.playIdleRightAnimation()
    }
    //% blockId=JesusWalkDown block="Jesus Walk Down Animation"
    //% weight=100
    //% group="Jesus Animations"
    export function playWalkDownAnimation() {
        _jesus.playUpDownAnimation()
    }
    //% blockId=JesusWalkUp block="Jesus Walk Up Animation"
    //% weight=100
    //% group="Jesus Animations"
    export function playWalkUpAnimation() {
        _jesus.playIdleBackAnimation()
    }


    // Round input towards 0; 1.4 becomes 1.0, -0.4 becomes 0.0
    export function roundTowardsZero(input: number): number {
        return Math.floor(input) + input < 0 ? 1 : 0;
    }

    // Normalize input number to 0, 1, or -1
    export function normalize(input: number): number {
        return input ? input / Math.abs(input) : 0;
    }

    // Set the animation for looking right to be the opposite of looking left
    export function reflect(input: Image[]): Image[] {
        let output: Image[] = [];
        for (let i: number = 0; i < input.length; i++) {
            let nextImage = input[i].clone();
            nextImage.flipX();
            output.push(nextImage);
        }
        return output;
    }
}

/**
 * A jesus Platformer
 **/
//% blockNamespace=codeplant.jesus color="#d2b48c" blockGap=8
class Jesus {
    private player: Sprite;
    private stillAnimation: Image[];



    public constructor(kind: number, x: number, y: number) {


        this.stillAnimation = codeplant.jesus._jesus_still;

        this.player = sprites.create(this.stillAnimation[0], kind);
        this.player.setFlag(SpriteFlag.StayInScreen, true);
        // this.player.ay = this.gravity;
        this.player.x = x;
        this.player.y = y;

        this.playIdleRightAnimation();

    }

    /**
     * Get the Jesus's sprite
     */
    //% group="Jesus Properties"
    //% blockId=jesusSprite block="%Jesus(jesus) sprite"
    //% weight=8
    get sprite(): Sprite {
        return this.player;
    }

    playAttackLeftAnimation() {
        return animation.runImageAnimation(
            this.player,
            [img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 1 . . . . . f f e f e e . . .
                . . . . . . . . . . . . . . 1 b b . . . f e e f e e f e e .
                . . . . . . . . . . . . . . 1 b b . . f e f f f e f e f e e
                . . . . . . . . . . . . . . 1 b b . f e e f e e f e e f e e
                . . . . . . . . . . . . . . 1 b b . e e f f e 4 4 4 e e f e
                . . . . . . . . . . . . . . 1 b b . f f e e 4 4 4 4 4 e e e
                . . . . . . . . . . . . . . 1 1 b . e e 4 4 4 4 4 4 4 4 e .
                . . . . . . . . . . . . . . 1 1 1 . . f f f 4 4 f f f f f .
                . . . . . . . . . . . . . . 1 b 1 . . f 4 e f f e 4 f 4 . .
                . . . . . . . . . 1 1 . . . 1 b b . . f f f 4 4 f f f 4 . .
                . . . . . . . . 1 1 . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . .
                . . . . . . . 1 1 . . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . .
                . . . . . . . 1 . . . . . . . e e . . . 4 4 4 e 4 4 4 4 . .
                . . . . . . . 1 . . . . . . . e e . . . . 4 4 4 4 4 4 . . .
                . . . . . . . 1 1 . . . . . . e e . . e e e 4 4 4 4 . . . .
                . . . . . . . . 1 1 . . . . . e 4 4 4 e e e e e e . . . . .
                . . . . . . . . 1 1 1 . . . . . . . e e e e e e e . . . . .
                . . . . . . . . . 1 1 . . . . . . . e e e e 1 1 1 . . . . .
                . . . . . . . . . . 1 1 . . . . . . e e e 1 1 1 1 . . . . .
                . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . .
                . . . . . . . . . . . . . . . . . . c c c . 1 1 c . . . . .
                . . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . .
                . . . . . . . . . . . . . . . . . e e b . . e e b . . . . .
                . . . . . . . . . . . . . . . . . f f f . . f f f . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 1 . . . . . f f e f e e . . .
                . . . . . . . . . . . . . . 1 b b . . . f e e f e e f e e .
                . . . . . . . . . . . . . . 1 b b . . f e f f f e f e f e e
                . . . . . . . . . . . . . . 1 b b . f e e f e e f e e f e e
                . . . . . . . . . . . . . . 1 b b . e e f f e 4 4 4 e e f e
                . . . . . . . . . . . . . . 1 b b . f f e e 4 4 4 4 4 e e e
                . . . . . . . . . . . . . . 1 1 b . e e 4 4 4 4 4 4 4 4 e .
                . . . . . . . . . . . 1 1 . 1 1 1 . . f f f 4 4 f f f f f .
                . . . . . . . . . . 1 1 1 . 1 b 1 . . f 4 e f f e 4 f 4 . .
                . . . . . . . . . 1 1 . . . 1 b b . . f f f 4 4 f f f 4 . .
                . . . . . . . . 1 1 . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . .
                . . . . . . . 1 1 . . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . .
                . . . . . . . 1 . . . . . . . e e . . . 4 4 4 e 4 4 4 4 . .
                . . . . . . . 1 . . . . . . . e e . . . . 4 4 4 4 4 4 . . .
                . . . . . . . 1 1 . . . . . . e e . . e e e 4 4 4 4 . . . .
                . . . . . . . . 1 1 . . . . . e 4 4 4 e e e e e e . . . . .
                . . . . . . . . 1 1 . . . . . . . . e e e e e e e . . . . .
                . . . . . . . . . 1 1 . . . . . . . e e e e e e e . . . . .
                . . . . . . . . . . . 1 . . . . . . e e e e e e e . . . . .
                . . . . . . . . . . . . . . . . . . c c c c c c c . . . . .
                . . . . . . . . . . . . . . . . . . c c c . c c c . . . . .
                . . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . .
                . . . . . . . . . . . . . . . . . e e b . . e e b . . . . .
                . . . . . . . . . . . . . . . . . f f f . . f f f . . . . .
            `, img`
                . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . .
                . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . .
                . . . . . . . . . 1 1 1 1 1 . . f f e f e e . . . . . . . .
                . . . . . . . 1 1 1 1 1 1 . . e e e f e e f e e . . . . . .
                . . . . . 1 1 1 1 1 1 1 . . f e f f f e f e f e e . . . . .
                . . . . 1 1 1 1 1 1 1 . . f e e f e e f e e f e e . . . . .
                . . . . 1 1 1 1 1 1 1 . . e e f f e 4 4 4 e e f e . . . . .
                . . . . 1 1 1 1 1 1 1 . . f f e e 4 4 4 4 4 e e e . . . . .
                . . . 1 1 1 1 1 1 1 . . . e e 4 4 4 4 4 4 4 4 e . . . . . .
                . . . 1 1 1 1 1 1 . . . . . f f f 4 4 f f f f f . . . . . .
                . . . 1 1 1 1 1 1 . . . . . f 4 e f f e 4 f 4 . . . . . . .
                . . 1 1 1 1 1 1 . . . . . . f f f 4 4 f f f 4 . . . . . . .
                . 1 1 1 1 1 1 . . . . . e 4 4 4 4 e 4 4 4 4 4 . . . . . . .
                . 1 1 1 1 1 . . . . . e 4 e 4 4 4 e 4 4 4 4 4 . . . . . . .
                . 1 1 1 1 1 . . . . e 4 4 4 . 4 4 4 e 4 4 4 4 . . . . . . .
                . 1 1 1 1 . . . . f e e . . . . 4 4 4 4 4 4 . . . . . . . .
                . 1 1 1 . . . . d b f . . . . e e 4 4 4 4 e e . . . . . . .
                . 1 1 1 . . . d b b . . . . . . e e e e e e e . . . . . . .
                . 4 1 . . . d b b . . . . . . . e e e e e e e . . . . . . .
                . 1 1 . . d b b . . . . . . . . e e e e e e e . . . . . . .
                2 1 2 . d b b . . . . . . . . . e e e e e e e . . . . . . .
                . . . d b b . . . . . . . . . . c c c c c c c . . . . . . .
                . 2 d b b . . . . . . . . . . . c c c . c c c . . . . . . .
                4 d b b . . 4 . . . . . . . . e e b . . e e b . . . . . . .
                2 4 b . 2 . . . . . . . . . . f f f . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . f f e f e e . . . . . . .
                . . . . . . . . . . . . . . . . e e e f e e f e e . . . . .
                . . . . . . . . . . . . . . . f e f f f e f e f e e . . . .
                . . . . . . . . . . . . . . f e e f e e f e e f e e . . . .
                . . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . . . .
                . . . . . . . . . . . . . . f f e e 4 4 4 4 4 e e e . . . .
                . . . . . . . . . . . . . . e e 4 4 4 4 4 4 4 4 e . . . . .
                . . . . . . . . . . . . . . . f f f 4 4 f f f f f . . . . .
                . . . . . . . . . . . . . . . f 4 e f f e 4 f 4 . . . . . .
                . . . . . . . . . . . . . . . f f f 4 4 f f f 4 . . . . . .
                . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . .
                . . . . . . . . . . . . e 4 . 4 4 4 e 4 4 4 4 4 . . . . . .
                . . . . . . . . . . . e 4 e 4 . 4 4 4 e 4 4 4 4 . . . . . .
                . . . . . . 2 . . . e 4 4 4 . . . 4 4 4 4 4 4 . . . . . . .
                . . . . . . . . . f e e . . 4 . e e 4 4 4 4 e e . . . . . .
                2 . . . . . . . d b f . . . . . . e e e e e e e . . . . . .
                . . . 2 . . . d b b . . . . . . . e e e e e e e . . . . . .
                . . . . . . d b b . . . . . . . . e e e e e e e . . . . . .
                . . 4 . . d b b . . . . . . . . . e e e e e e e . . . . . .
                . . . . d b b . . . . . . . . . . c c c c c c c . . . . . .
                . . . d b b . . 2 . . . . . . . . c c c . c c c . . . . . .
                . 2 d b b . . . . . . . 4 . . . . 4 4 . . . 4 4 . . . . . .
                . d b b . . 4 . . . . . . . . . e e b . . e e b . . . . . .
                4 d b . 4 . . . . . . . . . . . f f f . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . f f e f e e . . . . . . .
                . . . . . . . . . . . . . . . . f e e f e e f e e . 1 1 . .
                . . . . . . . . . . . . . . . f e f f f e f e f e e . . . .
                . . . . . . . . . . . . . . f e e f e e f e e f e e . . . .
                . . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . . . .
                . . . . . . . . . . . . 1 1 f f e e 4 4 4 4 4 e e e . . . .
                . . . . . . . . . . . 1 1 . e e 4 4 4 4 4 4 4 4 e . . . . .
                . . . . . . . . . 1 1 1 . . . f f f 4 4 f f f f f . . . . .
                . . . . . . . 1 1 1 1 . . . . f 4 e f f e 4 f 4 . . . . . .
                . . . . . . 1 1 1 . . . . . . f f f 4 4 f f f 4 . . . . . .
                . . . . . 1 1 1 . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . .
                . . . . 1 1 1 . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . .
                . . . 1 1 1 . . . . . . . . . . 4 4 4 e 4 4 4 4 . . . . . .
                . . 1 1 1 1 . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . .
                . . 1 1 1 1 . . . . . . . . . . . e 4 4 4 4 e e e e . . . .
                . 1 1 1 1 1 1 . . . . . . . . . . e e e e e e e . e . . . .
                1 1 1 1 1 1 1 1 . . . . . . . . . e e e e e e e . e . . . .
                . 1 1 1 1 1 1 1 1 . . . . . . . . e e 1 1 1 1 e . 4 4 4 . .
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e e e e e . . . . . .
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . e e e e e e e . . . . . .
                . . . 1 1 1 1 1 1 1 1 1 1 . . . . c c c c c c c . . . . . .
                . . . . . . . . . . . . . . . . . c c c . c c c . . . . . .
                . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . . .
                . . . . . . . . . . . . . . . . e e b . . e e b . . . . . .
                . . . . . . . . . . . . . . . . f f f . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . f f e f e e . . . . .
                . . . . . . . . . . . . . . . . . . f e e f e e f e e . . .
                . . . . . . . . . . . . . . . . . f e f f f e f e f e e . .
                . . . . . . . . . . . . . . . . f e e f e e f e e f e e . .
                . . . . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . .
                . . . . . . . . . . . . . . . . f f e e 4 4 4 4 4 e e e . .
                . . . . . . . . . . . . . . . . e e 4 4 4 4 4 4 4 4 e . . .
                . . . . . . . . . . . . . . . . . f f f 4 4 f f f f f . . .
                . . . . . . . . . . . . . . . . . f 4 e f f e 4 f 4 . . . .
                . . . . . . . . . . . . . . . . . f f f 4 4 f f f 4 . . . .
                . . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . .
                . . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . .
                . . . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 . . . .
                . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 . . . . .
                . . . . . . . . . . . . . . . . e e e e 4 4 4 4 e e e . . .
                . . . . . . . . . . . . . . . . e . e e e e e e e . e . . .
                . . . . . . . . . . . . . . . . e . e e e e e e e . e . . .
                . . . . . . . . . . . . . . . . 4 . e e b b b d d b b b b .
                . . . . . . . . . . . . . . . . 4 e e f b b b b d d b b b d
                . . . . . . . . . . . . . . . . 4 e e f d d d d d d d d d .
                . . . . . . . . . . . . . . . . . . c c c c c c c . . . . .
                . . . . . . . . . . . . . . . . . . c c c . c c c . . . . .
                . . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . .
                . . . . . . . . . . . . . . . . . e e b . . e e b . . . . .
                . . . . . . . . . . . . . . . . . f f f . . f f f . . . . .
            `],
            75,
            false
        )
    }


    animateAttack(): void {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . . . . e f f e f e e . . . . . . . . . . . . . .
                . . . . . e f e e f e e f e . . . . . . . . . . . . .
                . . . . f f e f f f e f e f e . . . . . . . . . . . .
                . . . e f e e f e e f e e f e . . . . . . . . . . . .
                . . . f e e f f e e e 4 e e f e . . . . . . . . . . .
                . . . . f e e e 4 4 4 4 4 e e e . . . . . . . . . . .
                . 1 . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . .
                . 1 1 . . f f f f f 4 4 f f f f . . . . . . . . . . .
                . 1 1 . . 4 4 f 4 e f f e 4 f . . . . . . . . . . . .
                . 1 1 . . 4 4 f f f 4 4 f f f . . . . . . . . . . . .
                . 1 1 1 . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . 1 1 . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . 1 1 . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . .
                . . 1 1 e e e 4 4 4 4 4 4 . . . . . . . . . . . . . .
                . . . 1 1 e e e 4 4 4 4 . . . . . . . . . . . . . . .
                . . . 1 1 1 e e e e e e e b b b 1 b b b b b b b . . .
                . . . . e 1 1 1 1 1 1 1 1 1 1 b b 1 b b b b b b 1 . .
                . . . . e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . .
                . . . . e e e e e e e . . . . . . . . . . . . . . . .
                . . . . c c e e e e e . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c . c c c . . . . . . . . . . . . . . . .
                . . . . 4 4 . . . 4 4 . . . . . . . . . . . . . . . .
                . . . e e b . . . b e e . . . . . . . . . . . . . . .
                . . . f f f . . . f f f . . . . . . . . . . . . . . .
            `, img`
                . . . . . . e f f e f e e . . . . . . . . . . . . . .
                . . . . . e f e e f e e f e . . . . . . . . . . . . .
                . . . . f f e f f f e f e f e . . . . . . . . . . . .
                . . . e f e e f e e f e e f e . . . . . . . . . . . .
                . . . f e e f f e e e 4 e e f e . . . . . . . . . . .
                . . . . f e e e 4 4 4 4 4 e e e . . . . . . . . . . .
                . . . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . .
                . . . . . f f f f f 4 4 f f f f . . . . . . . . . . .
                . . . . . 4 4 f 4 e f f e 4 f . . . . . . . . . . . .
                . . . . . 4 4 f f f 4 4 f f f . . . . . . . . . . . .
                . . . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . .
                . . . . . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . .
                . . . . . e e 4 4 4 4 4 4 . . . . . . . . . . . . . .
                . . . . e e e e 4 4 4 4 . . . . . . . . . . . . . . .
                . . . . e e e e e e e e e b b b b b b b b b b 5 . 5 .
                . . . . e e e e e e e e e b b b b b b b b b 1 1 5 . .
                . . . . e e e e e e e . . 1 1 1 1 1 1 1 1 1 1 5 . 5 .
                . . . . e e e e e e e . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c c c c c . . . . . . . . . . . . . . . .
                . . . . c c c . c c c . . . . . . . . . . . . . . . .
                . . . . 4 4 . . . 4 4 . . . . . . . . . . . . . . . .
                . . . e e b . . . b e e . . . . . . . . . . . . . . .
                . . . f f f . . . f f f . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f e . . . . . . . . . . . . . .
                . e f e e f e e f e e f e e . . . . . . . . . . . . .
                . f e e f f e e e 4 e e f e . . . . . . . . . . . . .
                . . f f e e 4 4 4 4 4 e e . . . . . . . . . . . . . .
                . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . . . .
                . 1 f f f f f f 4 4 f f f f . . . . . . . . . . . . .
                . . 4 f 4 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . . e 4 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 e 4 4 4 . . . . . . . 1 1 1 . . . . .
                . . . . . 4 4 4 4 4 4 . . . . . . . . 1 1 . . . . . .
                1 1 . e e e e 4 4 4 . . . . . . . . 1 1 . . . . . . .
                . 1 1 e e e e e e e . . . . . . 1 1 1 . . . . . . . .
                . 1 1 1 1 e e e e e . . . . . . 1 1 . . . . . . . . .
                . 1 1 1 1 1 e e e e . . . . 1 1 1 . . . . . . . . . .
                . . 1 1 1 1 1 1 1 1 . . 1 1 1 1 . . . . . . . . . . .
                . . . c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . .
                . . . c c 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . .
                . . . . 4 4 1 1 1 1 1 1 . . . . . . . . . . . . . . .
                . . . e e b . . 1 1 1 . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `, img`
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f . . . . . . . . . . . . . . .
                . e f e e f e e f e e f . . . . . . . . . . . . . . .
                . f e e f f e e e 4 e e e . . . . . . . . . . . . . .
                . . f f e e 4 4 4 4 4 e e . . . . . . . . . . . . . .
                . . e e 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . .
                . 1 f f f f f f 4 4 f f f . . . . . . . . . . . . . .
                . . 4 f 4 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . . e 4 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . . . 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . 1 . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . . . .
                1 1 1 . . 4 4 4 4 4 4 4 . . . . . . . . . . . . . . .
                1 1 1 1 . 4 4 4 4 4 e e . . . . . . . . . . . . . . .
                1 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                1 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                . 1 1 1 e e e e e e e . . . . . . . . . . . . . . . .
                . . 1 1 1 e e e e e e . . . . . . . . . . . . . . . .
                . . . 1 1 1 e e e e . . . . . . . . . . . . . . . . .
                . . . c 1 1 1 c c c . 1 . . . . . . . . . . . . . . .
                . . . c c c 1 1 1 1 1 1 . . . . . . . . . . . . . . .
                . . . . 4 4 . . 1 1 1 . . . . . . . . . . . . . . . .
                . . . e e b . . b e e . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `, img`
                . . . . e f f e f e e . . . . . . . . . . . . . . . .
                . . . e f e e f e e f e . . . . . . . . . . . . . . .
                . . f f e f f f e f e f e . . . . . . . . . . . . . .
                . e f e e f e e f e e f e . . . . . . . . . . . . . .
                . f e e f f e e e 4 e e f e . . . . . . . . . . . . .
                . . f 1 e e 4 4 4 4 4 e e e . . . . . . . . . . . . .
                . . b b 1 4 4 4 4 4 4 4 e . . . . . . . . . . . . . .
                . . b b 1 f f f 4 4 f f f f . . . . . . . . . . . . .
                . . b b 1 f 4 e f f e 4 f . . . . . . . . . . . . . .
                . . b b 1 f f f 4 4 f f f . . . . . . . . . . . . . .
                . . b d 1 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . b d 1 4 4 4 4 e 4 4 . . . . . . . . . . . . . . .
                . . d b 1 4 4 4 e 4 4 4 . . . . . . . . . . . . . . .
                . . d b 1 4 4 4 4 4 4 . . . . . . . . . . . . . . . .
                . e b b 1 4 4 4 4 4 e . . . . . . . . . . . . . . . .
                . e b b 1 e e e e e e . . . . . . . . . . . . . . . .
                . e b b 1 e e e e e e . . . . . . . . . . . . . . . .
                . . e e e e e e e e e . . . . . . . . . . . . . . . .
                . . e 4 4 4 4 4 4 e . . . . . . . . . . . . . . . . .
                . . e e c c c c c c . . . . . . . . . . . . . . . . .
                . . e e c c c c c c . . . . . . . . . . . . . . . . .
                . . . c c c . c c c . . . . . . . . . . . . . . . . .
                . . . . 4 4 . . 4 4 . . . . . . . . . . . . . . . . .
                . . . e e b . . b e e . . . . . . . . . . . . . . . .
                . . . f f f . . f f f . . . . . . . . . . . . . . . .
            `],
            100,
            false
        )
    }


    playUpDownAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . 4 4 . . .
                . . . e e . . . e e . . .
                . . . f f . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . e e . . . 4 4 . . .
                . . . f f . . . e e . . .
                . . . . . . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . e e . . .
                . . . e e . . . f f . . .
                . . . f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . e e . . . 4 4 . . .
                . . . f f . . . e e . . .
                . . . . . . . . f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . 4 4 . . . e e . . .
                . . . e e . . . f f . . .
                . . . f f . . . . . . . .
            `],
            100,
            true
        )
    }


    playIdleRightAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . b e e . .
                . . . e e b . . f f f . .
                . . . f f f . . . . . . .
            `, img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `],
            100,
            true
        )
    }

    playWalkRightAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 4
                . 4 . c c c c c c c . . .
                . 4 4 c c c . c c 4 4 . .
                . . . 4 4 . . . . b e e .
                . . . b e e . . . f f f .
                . . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 4 c c c c c c c . 4 4
                . . . c c c . c c c . . .
                . . . . b e e . . 4 4 . .
                . . . . f f f . . b e e .
                . . . . . . . . . f f f .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 4 c c c c c c c . 4 .
                . . . c c c c c c c . 4 .
                . . . c c c . c c c . 4 4
                . . . 4 4 . . . 4 4 . . .
                . . . b e e . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . f f f f f f 4 4 f f f f
                . 4 f 4 f 4 e f f e 4 f .
                . . e 4 f f f 4 4 f f f .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . 4 4 4 4 4 e 4 4 . .
                . . . . 4 4 4 e 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e e 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 4
                . 4 4 c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . . b e e . b e e . .
                . . . . f f f . f f f . .
            `],
            75,
            true
        )
    }
    playIdleBackAnimation(): void {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . . . . . . 4 4 4 . . . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . . . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e . .
                . f f e f f f e f e f e .
                e f e e f e e f e e f e .
                f e e f f e e e e e e f e
                . f f e e e e e f f e e e
                . e e e f f f f f e e e .
                . f f e e e e e e e e f f
                . 4 f e e f f f f f e f .
                . . e e e e e e e e e f .
                . . . 4 e e f f e e e . .
                . . . 4 4 e e e e e 4 . .
                . . . . 4 4 4 4 4 4 4 . .
                . e e e e e 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                . 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . . b e e . .
                . . . f f f . . f f f . .
            `],
            100,
            true
        )
    }


    playWalkLeftAnimation() {
        animation.runImageAnimation(
            this.player,
            [img`
                . . . . f f e f e e . . .
                . . . f e e f e e f e e .
                . . f e f f f e f e f e e
                . f e e f e e f e e f e e
                . e e f f e 4 4 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . . f f f 4 4 f f f f f .
                . . f 4 e f f e 4 f 4 . .
                . . f f f 4 4 f f f 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . . 4 4 4 e 4 4 4 4 . .
                . . . . 4 4 4 4 4 4 . . .
                . e e e e 4 4 4 4 e e e .
                . e . e e e e e e e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c 4 4 .
                . 4 . c c c c c c c . . .
                4 4 . 4 4 c . c c c . . .
                . . e e b . . . 4 4 . . .
                . . f f f . . e e b . . .
                . . . . . . . f f f . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e e .
                . . f e f f f e f e f e e
                . f e e f e e f e e f e e
                . e e f f e 4 4 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . . f f f 4 4 f f f f f .
                . . f 4 e f f e 4 f 4 . .
                . . f f f 4 4 f f f 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . . 4 4 4 e 4 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e 4 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c . 4 .
                4 4 . c c c c c c c 4 4 .
                . . . c c c . c c c . . .
                . . . 4 4 . . 4 4 . . . .
                . . e e b . e e b . . . .
                . . f f f . f f f . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e e .
                . . f e f f f e f e f e e
                . f e e f e e f e e f e e
                . e e f f e 4 4 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . . f f f 4 4 f f f f f .
                . . f 4 e f f e 4 f 4 . .
                . . f f f 4 4 f f f 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . . 4 4 4 e 4 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e 4 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                4 4 . c c c c c c c . 4 .
                . . . c c c c c c c . 4 .
                . . . c c c . 4 4 c 4 4 .
                . . . 4 4 . e e b . . . .
                . . e e b . f f f . . . .
                . . f f f . . . . . . . .
            `, img`
                . . . . . . . . . . . . .
                . . . e f f e f e e . . .
                . . e f e e f e e f e e .
                . . f e f f f e f e f e e
                . f e e f e e f e e f e e
                . e e f f e 4 4 4 e e f e
                . f f e e 4 4 4 4 4 e e e
                . e e 4 4 4 4 4 4 4 4 e .
                . . f f f 4 4 f f f f f .
                . . f 4 e f f e 4 f 4 . .
                . . f f f 4 4 f f f 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . 4 4 4 e 4 4 4 4 4 . .
                . . . 4 4 4 e 4 4 4 4 . .
                . e e e 4 4 4 4 4 4 e e .
                . e . e e 4 4 4 4 e . e .
                . e . e e e e e e e . e .
                . 4 . e e e e e e e . 4 .
                . 4 . e e e e e e e . 4 .
                . 4 . c c c c c c c 4 4 .
                4 4 . c c c c c c c . . .
                . . . c c c . c c c . . .
                . . . . 4 4 . . 4 4 . . .
                . . . e e b . e e b . . .
                . . . f f f . f f f . . .
            `],
            75,
            true
        )
    }



}