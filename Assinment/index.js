function orderFood(){

    // let order = document.getElementById('items').value ;

     let box = document.createElement('div');
     box.setAttribute('id','box')

     let img = document.createElement('img');
     img.setAttribute('id','ordered-image')

     let p = document.createElement('p')
     p.setAttribute('id','order_p')
    

    

    let order_no = Math.floor(Math.random()*101);



    let order = document.getElementById("items").value;

  let s = Check();
//   console.log(s)
  

  let mypromise = new Promise(function (resolve, reject) {
    let time = Math.random()  *10000 ;

    setTimeout(function () {
      if (s === true) {
        resolve(order_no);
      } else {
        reject();
      }
    }, time);
  });
  mypromise.then(function (res) {
    // console.log(`Order number ${res} is ready`);
    

        if(order == 'vada pao')
        {
            img.src='https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg'
            p.innerText=`Order number ${res} is ready`
        }
        if(order == 'paneer tikka')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='https://www.cookwithmanali.com/wp-content/uploads/2021/06/Hariyali-Paneer-Tikka.jpg'
        }
        if(order == 'shawarma roll')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma-600x600.jpg'
        }
        if(order == 'veg thupka')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='https://www.cookshideout.com/wp-content/uploads/2014/04/Instant-Pot-Thukpa-FI.jpg'
        }
        if(order == 'spring Roll')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg'
        }
        if(order == 'litti chokha')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='https://i0.wp.com/onewholesomemeal.com/wp-content/uploads/2020/01/Litti-Chokha.jpg?fit=864%2C1080&ssl=1'
        }
        if(order == 'fried momos')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='https://gomyoffer.in/wp-content/uploads/2021/06/9f4fe24694227616517902776bfbbf00.jpg'
        }
        if(order == 'hakka noodles')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x375.jpg'
        }
        if(order == 'chicken kosha')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='http://1.bp.blogspot.com/-n6JmvxuA3hs/UB7NXkCk1rI/AAAAAAAAAkY/HDYKsESxMfc/s1600/chkn+kosha1.jpg'
        }
        if(order == 'veg kabaab')
        {
          p.innerText=`Order number ${res} is ready`
          img.src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mc5ea80c3zzqkqvekplq'
        }
  });

  




   box.append(img,p);
   document.getElementById('output').append(box);

}

function Check(){
    return true;
}