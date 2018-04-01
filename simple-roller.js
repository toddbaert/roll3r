(function(){
    const ROLL = 'roll';
    const DATA_MAX = 'data-max';
    const DATA_SCORE = 'data-score';
    const dieSvgs = document.getElementsByClassName('die-container');
    
    Array.prototype.forEach.call(dieSvgs, function(elem){
        elem.onclick = function(e, t) {
            var that = this;
            that.classList.add(ROLL);
            setTimeout(function(){
                var max = that.getAttribute(DATA_MAX);
                that.setAttribute(DATA_SCORE, Math.ceil(Math.random() * max));
            }, 900);   
            setTimeout(function(){
                that.classList.remove(ROLL);
            }, 1000);
        };
    });
})();