function calcular(){
    let op = document.getElementById('escolha')
    let tab = document.getElementById('seltab')
    if (escolha.value == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(op.value)
        tab.innerHTML = ''
        for(var i = 1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${n} X ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}

