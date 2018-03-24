(function(){
    const dieSvgs = document.getElementsByClassName('die-container');
    Array.prototype.forEach.call(dieSvgs, function(elem){
        elem.onclick = function(e) {
            var that = this;
            that.classList.add('roll');
            setTimeout(function(){
                //TODO: change data-score attr
            }, 500);   
            setTimeout(function(){
                that.classList.remove('roll');
            }, 1000);
        };
    });
})();