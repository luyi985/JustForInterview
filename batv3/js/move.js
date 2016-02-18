game.border=function(){
    return {
        "topBorder": 0,
        "leftBorder":0,
        "bottomBorder": game.height-this.h,
        "rightBorder": game.width-this.w,
    }
}

game.move=function(role) {
	function mNext(){
        if (role.moving < 0) {
            role.moving = 100 * Math.random();
            role.movingNext = true;
        } else {
            role.movingNext = false;
        }
    }
	return[
		function(){//lf
			role.x-=role.speed;
			mNext();
		},
		function(){//rt
			role.x+=role.speed;
			mNext();
		},
		function(){//up
			role.y-=role.speed;
			mNext();
		},
		function(){//dn
			role.y+=role.speed;
			mNext();
		},
		function(){//lfup
			role.y-=role.speed;role.x-=role.speed;
			mNext();
		},
		function(){//rtup
			role.y-=role.speed;role.x+=role.speed;
			mNext();
		},	
		function(){//lfdn
			role.y+=role.speed;role.x-=role.speed;
			mNext();
		},
		function(){//rtdn
			role.y+=role.speed;role.x+=role.speed;
			mNext();
		}

	]
}