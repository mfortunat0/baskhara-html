const aInput = document.querySelector("#a")
const bInput = document.querySelector("#b")
const cInput = document.querySelector("#c")
const result = document.querySelector("#result")
const resultTitle = document.querySelector("#resultTitle")

function calculate() {
    if (aInput.value && bInput.value && cInput.value) {
        const delta = (bInput.value ** 2) + (-4 * aInput.value * cInput.value)
        if (delta > 0) {
            let a = [];
            let b = [];
            console.log((bInput.value * -1), (Math.sqrt(delta) * -1), (2 * aInput.value))
            const x1 = ((bInput.value * -1) + (Math.sqrt(delta) * +1)) / (2 * aInput.value)
            const x2 = ((bInput.value * -1) + (Math.sqrt(delta) * -1)) / (2 * aInput.value)
            if (x1 % 1 !== 0) {
                a.push((bInput.value * -1) + (Math.sqrt(delta) * +1))
                a.push(2 * aInput.value)
                for (let c = (a[0] > a[1] ? a[0] : a[1]); c > 1; c--) {
                    if (a[0] % c === 0 && a[1] % c === 0) {
                        a = a.map(value => value / c)
                    }
                }
            }
            if (x2 % 1 !== 0) {
                b.push((bInput.value * -1) + (Math.sqrt(delta) * -1))
                b.push(2 * aInput.value)
                for (let c = (b[0] > b[1] ? b[0] : b[1]); c > 1; c--) {
                    if (b[0] % c === 0 && b[1] % c === 0) {
                        b = b.map(value => value / c)
                    }
                }
            }
            result.innerHTML = `
            <div class="containerText">
                <span>X¹: ${a.length ? "" : x1}</span>
            </div>
            <div class="containerText">
                <p style="text-decoration: underline;">${a.length ? a[0] : ""}</p>
                <p>${a.length ? a[1] : ""}</p>
            </div>
            <div class="containerText">
                <span>X²: ${b.length ? "" : x2}</span>
            </div>
            <div class="containerText">
                <p style="text-decoration: underline;">${b.length ? b[0] : ""}</p>
                <p>${b.length ? b[1] : ""}</p>
            </div>
        `
            resultTitle.innerHTML = "Result:"
        }
        else if (delta === 0) {
            const x = (bInput.value * -1) / (2 * aInput.value)
            if (x % 1 !== 0) {
                let a = (bInput.value * -1)
                let b = (2 * aInput.value)
                for (let c = (a > b ? a : b); c > 1; c--) {
                    if (a % c === 0 && b % c === 0) {
                        a = a / c
                        b = b / c
                    }
                }
                result.innerHTML = `
            <div class="containerText">
                <span>X: </span>
            </div>
            <div class="containerText">
                <p style="text-decoration: underline;">${a}</p>
                <p>${b}</p>
            </div>
        `
            }
            else {
                result.innerHTML = `
            <div class="containerText">
                <span>X: ${x}</span>
            </div>
        `
            }
            resultTitle.innerHTML = "Result:"
        }
        else {
            resultTitle.innerHTML = `
                <span class="resultNegative">/_\\</span> = ${delta}
            `
        }
    }
}
