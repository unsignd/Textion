window.onload = () => {
    let fadeList = document.getElementsByClassName('textion');
    while (fadeList.length > 0) {
        Anim(fadeList.item(0));
        fadeList.item(0).classList.remove('textion');
    }
}

function Anim(obj) {
    const text = obj.innerText;
    let index = 1;
    let count = 0;
    let alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    obj.innerText = '';

    let changeText = setInterval(() => { //char사용하여 범위로 문자 확인
        if (count >= 2 && count % 2 == 1) {
            obj.innerText = text.substring(0, index - 1)
        } else {
            if (numList.includes(text[index - 1])) {
                console.log(text[index - 1])
                obj.innerText = text.substring(0, index - 1) + numList[Math.round(Math.random() * (numList.length - 1))];
            } else {
                obj.innerText = text.substring(0, index - 1) + alphabetList[Math.round(Math.random() * (alphabetList.length - 1))];
            }
        }
        count++;
        if (index === text.length + 1) {
            obj.innerText = text;
            clearInterval(changeText);
        } else if (count >= 2 && count % 2 == 0) {
            index++;
        }
    }, 15);
}
