game.draw = {
    clear: function() {
        game.ctx.clearRect(0, 0, game.width, game.height);
    },
    rect: function(x, y, w, h, col) {
        game.ctx.fillStyle = col;
        game.ctx.fillRect(x, y, w, h);
    },
    circle: function(x, y, r, col) {
        game.ctx.fillStyle = col;
        game.ctx.beginPath();
        if (game.android || game.ios) {
            game.ctx.arc(x + 0, y + 0, r, 0, Math.PI * 2, false);
        } else {
            game.ctx.arc(x + 5, y + 5, r, 0, Math.PI * 2, false);
        }
        game.ctx.closePath();
        game.ctx.fill();
    },
    text: function(string, x, y, size, col) {
        game.ctx.font = 'bold ' + size + 'px Monospace';
        game.ctx.fillStyle = col;
        game.ctx.fillText(string, x, y);
    },
    batA: function(x, y) {
        //var batImg = document.getElementById("btImgA");
        var batImg = preload.imgs.batA;
        game.ctx.drawImage(batImg, x, y, 180*game.scale, 90*game.scale);
    },
    batB: function(x, y) {
        //var batImg = document.getElementById("btImgB");
        var batImg = preload.imgs.batB;
        game.ctx.drawImage(batImg, x, y, 180*game.scale, 90*game.scale);
    },
    ghostL: function(x, y) {
        //var ghostImg = document.getElementById("gImgL");
        var ghostImg = preload.imgs.ghostL
        game.ctx.drawImage(ghostImg,x, y, 200*game.scale, 200*game.scale);
    },
    ghostR: function(x, y) {
        //var ghostImg = document.getElementById("gImgR");
        var ghostImg = preload.imgs.ghostR;
        game.ctx.drawImage(ghostImg, x, y, 200*game.scale, 200*game.scale);
    },
    ghostAngerL: function(x, y) {
        //var ghostImg = document.getElementById("gAngerImgL");
        var ghostImg = preload.imgs.ghostAngerL;
        game.ctx.drawImage(ghostImg, x, y, 200*game.scale, 200*game.scale);
    },
    ghostAngerR: function(x, y) {
        //var ghostImg = document.getElementById("gAngerImgR");
        var ghostImg = preload.imgs.ghostAngerR;
        game.ctx.drawImage(ghostImg, x, y, 200*game.scale, 200*game.scale);
    },
}