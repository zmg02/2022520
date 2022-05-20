new TypeIt("#qxhzmg", {
    loop: true,
    cursorSpeed: 1000,
    speed: 100
})
    .type("QXH && ZMG")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第九个520...")
    .pause(3000)
    .go();

new TypeIt('#talkToqxh', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();