function calcular(){
    let res = document.getElementById('res')
    let tabu = document.getElementsByName('tabu')
    let op = document.getElementById('escolha')
    if (tabu[0].checked){
        res.innerHTML += `  1 X 1 = 1  <br/> 1 X 2 = 2 <br/> 1 X 3 = 3 <br/> 1 X 4 = 4 <br/> 1 X 5 = 5 <br/> 1 X 6 = 6 <br/> 1 X 7 = 7 <br/> 1 X 8 = 8 <br/> 1 X 9 = 9 <br/> 1 x 10 = 10 `
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[1].checked){
        res.innerHTML += ' 2 X 1 = 2 <br/> 2 X 2 = 4 <br/> 2 X 3 = 6 <br/> 2 X 4 = 8 <br/> 2 X 5 = 10 <br/> 2 x 6 = 12 <br/> 2 X 7 = 14 <br/> 2 x 8 = 16 <br/> 2 X 9 = 18 <br/> 2 x 10 = 20 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[2].checked){
        res.innerHTML += ' 3 X 1 = 3 <br/> 3 X 2 = 6 <br/> 3 X 3 = 9 <br/> 3 X 4 = 12 <br/> 3 X 5 = 15 <br/> 3 x 6 = 18 <br/> 3 X 7 = 21 <br/> 3 x 8 = 24 <br/> 3 X 9 = 27 <br/> 3 x 10 = 30 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[3].checked){
        res.innerHTML += ' 4 X 1 = 4 <br/> 4 X 2 = 8 <br/> 4 X 3 = 12 <br/> 4 X 4 = 16 <br/> 4 X 5 = 20 <br/> 4 x 6 = 24 <br/> 4 X 7 = 28 <br/> 4 x 8 = 32 <br/> 4 X 9 = 36 <br/> 4 x 10 = 40 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[4].checked){
        res.innerHTML += ' 5 X 1 = 5 <br/> 5 X 2 = 10 <br/> 5 X 3 = 15 <br/> 5 X 4 = 20 <br/> 5 X 5 = 25 <br/> 5 x 6 = 30 <br/> 5 X 7 = 35 <br/> 5 x 8 = 40 <br/> 5 X 9 = 45 <br/> 5 x 10 = 50 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[5].checked){
        res.innerHTML += ' 6 X 1 = 6 <br/> 6 X 2 = 12 <br/> 6 X 3 = 18 <br/> 6 X 4 = 24 <br/> 6 X 5 = 30 <br/> 6 x 6 = 36 <br/> 6 X 7 = 42 <br/> 6 x 8 = 48 <br/> 6 X 9 = 54 <br/> 6 x 10 = 60 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[6].checked){
        res.innerHTML += ' 7 X 1 = 7 <br/> 7 X 2 = 14 <br/> 7 X 3 = 21 <br/> 7 X 4 = 28 <br/> 7 X 5 = 35 <br/> 7 x 6 = 42 <br/> 7 X 7 = 49 <br/> 7 x 8 = 56 <br/> 7 X 9 = 63 <br/> 7 x 10 = 70 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[7].checked){
        res.innerHTML += ' 8 X 1 = 8 <br/> 8 X 2 = 16 <br/> 8 X 3 = 24 <br/> 8 X 4 = 32 <br/> 8 X 5 = 40 <br/> 8 x 6 = 48 <br/> 8 X 7 = 56 <br/> 8 x 8 = 64 <br/> 8 X 9 = 72 <br/> 8 x 10 = 80 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[8].checked){
        res.innerHTML += ' 9 X 1 = 9 <br/> 9 X 2 = 18 <br/> 9 X 3 = 27 <br/> 9 X 4 = 36 <br/> 9 X 5 = 45 <br/> 9 x 6 = 54 <br/> 9 X 7 = 63 <br/> 9 x 8 = 72 <br/> 9 X 9 = 81 <br/> 9 x 10 = 90 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (tabu[9].checked){
        res.innerHTML += ' 10 X 1 = 10 <br/> 10 X 2 = 20 <br/> 10 X 3 = 30 <br/> 10 X 4 = 40 <br/> 10 X 5 = 50 <br/> 10 x 6 = 60 <br/> 10 X 7 = 70 <br/> 10 x 8 = 80 <br/> 10 X 9 = 90 <br/> 10 x 10 = 100 '
        res.innerHTML += '<br/>------------------------------<br/>'
    } else if (op.value <= 10){
        window.alert('[ERRO] o número que você escolheu corresponde a uma das opções acima!')
    } else {
        res.innerHTML += ` ${op.value} X 1 = ${op.value} <br/>
        ${op.value} X 2 = ${op.value*2} <br/>
        ${op.value} X 3 = ${op.value*3} <br/>
        ${op.value} X 4 = ${op.value*4} <br/>
        ${op.value} X 5 = ${op.value*5} <br/>
        ${op.value} X 6 = ${op.value*6} <br/>
        ${op.value} X 7 = ${op.value*7} <br/>
        ${op.value} X 8 = ${op.value*8} <br/>
        ${op.value} X 9 = ${op.value*9} <br/>
        ${op.value} X 10 = ${op.value*10} <br/>`
        res.innerHTML += '<br/>------------------------------<br/>'
        
        
    }
}

// function calcular(){
//     let res = document.getElementById('res')
//     let calc = document.getElementById('tabu')
//     if (calc.value == 0){
//         window.alert("[ERRO] Não da para fazer a tabuada de 0")
//     } else {
//         res.innerHTML = `${Number(calc)} X 1 = ${Number(calc)*1}`
//         res.innerHTML += `${Number(calc)} X 2 = ${Number(calc)*1}`
//     }
// }