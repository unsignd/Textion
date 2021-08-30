window.onload = () => {
    let fadeList = document.getElementsByClassName('textion');
    let timeout = 65;
    let repeat = 2;
    let delay = 0;
    let type = 0;
    let item, inner;

    while (fadeList.length > 0) {
        item = fadeList.item(0);
        inner = item.innerHTML;
        item.innerHTML = '';
        
        for (let i = 0; i <= 5000; i++) {
            if (item.classList.contains('timeout-' + i))
                timeout = i;

            if (item.classList.contains('repeat-' + i))
                repeat = i;

            if (item.classList.contains('delay-' + i))
                delay = i;
        }

        if (item.classList.contains('type-1'))
            type = 1;

        Anim(item, timeout, repeat, delay, inner, type);
            
        item.classList.remove('textion');
    }
};

function Anim(obj, loopTimeout, repeatCount, loopDelay, innerText, animType) {
    const text = innerText;
    const textArr = text.split(' ');
    const lowerList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const capitalList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const spanText = document.createElement('span');
    let index = 1;
    let count = 0;
    let changeText;

    spanText.className = 'textion-span';

    setTimeout(() => {
        spanText.style.setProperty('color', obj.style.color);
        switch (animType) {
            case 0:
                changeText = setInterval(() => {
                    if (count === repeatCount || index === text.length) {
                        spanText.innerText = text[index - 1];
                    } else {
                        if (numList.includes(text[index - 1])) {
                            spanText.innerText = numList[Math.round(Math.random() * (numList.length - 1))];
                        } else if (capitalList.includes(text[index - 1])) {
                            spanText.innerText = capitalList[Math.round(Math.random() * (capitalList.length - 1))];
                        } else {
                            spanText.innerText = lowerList[Math.round(Math.random() * (lowerList.length - 1))];
                        }
                    }
                    count++;
                    obj.appendChild(spanText);
                    if (index === text.length + 1) {
                        obj.innerHTML = text;
                        clearInterval(changeText);
                    } else if (count + 1 === repeatCount) {
                        count = 0;
                        index++;
                        obj.innerHTML = text.substring(0, index - 1);
    
                        spanText.style.setProperty('opacity', '0');
                        opacityLerp(spanText, loopTimeout);
                    }
                }, loopTimeout);
                break;
            case 1:
                //split as space
                break;
        }
    }, loopDelay);
}

function opacityLerp(obj, timeout) {
    setTimeout(() => {
        let changeOpacity = setInterval(() => {
            if (parseFloat(obj.style.opacity) >= 0.95) {
                obj.style.setProperty('opacity', '1');
                clearInterval(changeOpacity);
            }
            obj.style.setProperty('opacity', parseFloat(obj.style.opacity) + (1 - parseFloat(obj.style.opacity)) * 4 / timeout);
        }, 10);
    }, 10);
}
