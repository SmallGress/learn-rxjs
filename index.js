window.onload = function() {
    var input = document.getElementById("input");
    var btn = document.getElementById("add");
    var ul = document.getElementById("input-list");
    /**
     * {
     *  value: string,
     *  state: string {doing|finish}
     * }
     */
    hasList = [];

    function ArrayToTemplate() {
        if (hasList.length) {
            Rx.Observable.from(hasList)
                .map((e,i) => `
                    <li>
                        <span class="${e.state === "finish" ? "end" : ""}">${e.value}</span>
                        <button class="${e.state === "doing" ? "endBtn" : "restart"}" data-index="${i}">
                            ${e.state === "doing" ? "end" : "重启"}
                        </button>
                        <button class="clear" data-index="${i}">X</button>
                    </li>
                `)
                .reduce((e1,e2) => e1 + e2)
                .subscribe((e) => {
                    ul.innerHTML = e;

                    bindEvent();
                })
        } else {
            ul.innerHTML = "";
        }
    }

    Rx.Observable.fromEvent(btn,"click")
        .map(e => input.value)
        .filter(e => !!e)
        .filter(e => {
            var value = !hasList.find(a => a.value == e);
            if (value) {
                hasList.push({
                    value: e,
                    state: "doing"
                });
                return true;
            } else {
                return false;
            }
        })
        .subscribe((e) => {
            ArrayToTemplate();
        });

    function bindEvent() {
        var endBtns = Array.from(document.getElementsByClassName("endBtn")),
            reStartBtns = Array.from(document.getElementsByClassName("restart")),
            clearBtns = Array.from(document.getElementsByClassName("clear"))
        var btns = Array.prototype.concat(endBtns,reStartBtns,clearBtns);

        btns.forEach(e => {
            Rx.Observable.fromEvent(e, "click")
                .map(e => {
                    return {
                        index:e.target.dataset.index,
                        event: e.target.className
                    }
                })
                .subscribe(e => {
                    if (e.event === "endBtn") {
                        hasList[e.index].state = "finish";
                    } else if (e.event === "restart") {
                        hasList[e.index].state = "doing";
                    } else {
                        hasList.splice(e.index,1);
                    }

                    ArrayToTemplate();
                })
        })
    }
}