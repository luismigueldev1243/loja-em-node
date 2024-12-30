const btnsearch = document.getElementById('btn-search')
const iptsearch = document.getElementById('rps')
const loaders = document.querySelectorAll('.spinnerdiv')

btnsearch.addEventListener('click',()=>{
    if(iptsearch.value!=''){
        let iptsearchvalue = iptsearch.value
        loaders.forEach(loader=>{
            loader.removeAttribute('hidden')
        })
       
      fetch('http://localhost:3000/precos').then((resp) => resp.json()).then((data)=>{
       for(let i = 1;i<=15;i++){
        const square = document.getElementById('sqvalue'+i);
        
        square.innerHTML ='Preço:  '+ data[iptsearchvalue][i]; 
        console.log(iptsearchvalue)
       }
    })
    }else{
    alert('por favor, digite ou selecione algo!')
    }
})


