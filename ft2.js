const btnKEY = document.getElementById('btn-keyword')
const iptKEY = document.getElementById('keyword-ipt')
const keyworddiv = document.querySelector('.keyworddiv')
const maindiv = document.getElementById('main-div')
const type1s = document.getElementById('type1-selected')
const type2s = document.getElementById('type2-selected')
const rpsprice = document.getElementById('rps-price')
const changeipt = document.getElementById('change-price-ipt')
const sendchanged = document.getElementById('send-changed')

btnKEY.addEventListener('click',()=>{
    if(iptKEY.value != ''){
       fetch("http://localhost:3000/precos").then((resp) =>{ return resp.json()}).then((data)=>{
        if (iptKEY.value == data["keyword"].key){
            alert('the key is correct!')
            keyworddiv.setAttribute('hidden',1)
            maindiv.classList.remove('blur-item')
        }
       })
    }else if(iptKEY.value != '' && iptKEY.value == data["keyword"].key){
        alert('a senha foi colocada ,mas nao esta correta!')
    }else{
        alert('please write the keyword!')
    }
})

type1s.addEventListener('input',()=>{
    type2s.removeAttribute('disabled')    
})
type2s.addEventListener('input',()=>{
    fetch("http://localhost:3000/precos")
        .then((resp) =>{
             return resp.json()
        })
        .then((data)=>{
            rpsprice.innerHTML = data[type1s.value][type2s.value]
        })
})


sendchanged.addEventListener('click',()=>{
    if(changeipt.value == ''){
        alert('please,select the price to be changed!')
    }
    let tp1svl = type1s.value
    let tp2svl = type2s.value
    let res = changeipt.value


     fetch("http://localhost:3000/changeprice",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ft:tp1svl,sn:tp2svl,num: res})
      })
})