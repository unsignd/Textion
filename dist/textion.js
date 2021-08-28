window.onload = () => {
    let fadeList = document.getElementsByClassName('textion');
    let delay = 50;
    let repeat = 2;

    while (fadeList.length > 0) {
        item = fadeList.item(0);
        
        for (let i = 0; i <= 500; i++) {
            if (item.classList.contains('delay-' + i))
                delay = i;

            if (item.classList.contains('repeat-' + i))
                repeat = i;
        }

        Anim(item, delay, repeat);
        item.classList.remove('textion');
    }
}

function Anim(obj, loopDelay, repeatCount) {
    const text = obj.innerText;
    const lowerList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const capitalList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let index = 1;
    let count = 0;

    let changeText = setInterval(() => {
        if (numList.includes(text[index - 1])) {
            console.log(text[index - 1])
            obj.innerText = text.substring(0, index - 1) + numList[Math.round(Math.random() * (numList.length - 1))];
        } else if (capitalList.includes(text[index - 1])) {
            obj.innerText = text.substring(0, index - 1) + capitalList[Math.round(Math.random() * (capitalList.length - 1))];
        } else {
            obj.innerText = text.substring(0, index - 1) + lowerList[Math.round(Math.random() * (lowerList.length - 1))];
        }
        count++;
        if (index === text.length + 1) {
            obj.innerText = text;
            clearInterval(changeText);
        } else if (count >= repeatCount && count % repeatCount == 0) {
            index++;
        }
    }, loopDelay);
}
