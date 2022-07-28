const products = [{
    name: "May choi game",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2021/01/playstation-5-edition-digitale-version-sans-lecteur-optique-0711719395300-0-31742729-7172-419a-9674-0b354a0211fb-247x296.jpg"
},
{
    name: "May choi game1",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2020/10/43159a-c568976327c94cc89ad2dec532cb6f10-mv2-247x296.jpg"
},
{
    name: "tay cam 1",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2022/01/dualsense-ps5-nova-pink-44-700x700-247x296.jpg"

},
{
    name: "tay cam 2",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2022/01/206889_5-247x296.jpg"

},
{
    name: "May choi game",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2021/01/playstation-5-edition-digitale-version-sans-lecteur-optique-0711719395300-0-31742729-7172-419a-9674-0b354a0211fb-247x296.jpg"
},
{
    name: "May choi game1",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2020/10/43159a-c568976327c94cc89ad2dec532cb6f10-mv2-247x296.jpg"
},
{
    name: "tay cam 1",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2022/01/dualsense-ps5-nova-pink-44-700x700-247x296.jpg"

},
{
    name: "tay cam 2",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2022/01/206889_5-247x296.jpg"

},
{
    name: "May choi game",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2021/01/playstation-5-edition-digitale-version-sans-lecteur-optique-0711719395300-0-31742729-7172-419a-9674-0b354a0211fb-247x296.jpg"
},
{
    name: "May choi game1",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2020/10/43159a-c568976327c94cc89ad2dec532cb6f10-mv2-247x296.jpg"
},
{
    name: "tay cam 1",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2022/01/dualsense-ps5-nova-pink-44-700x700-247x296.jpg"

},
{
    name: "tay cam 2",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2022/01/206889_5-247x296.jpg"

}
]

const listItem = document.getElementsByClassName("list-item");

for(let i=0;i< products.length;i++){
    let ItemBox = document.createElement('div');
    ItemBox.className = 'item';
    dispatchEvent.className = 'item' + (i+1);
    const img = document.createElement('img');
    img.src = products[i].photoURL;
    img.className = 'poster' + (i+1);
    const h1 = document.createElement('h1');
    h1.innerText = products[i].name;
    const h2 = document.createElement('h2');
    h2.innerText = products[i].price;

    ItemBox.appendChild(img)
    ItemBox .appendChild(h1);
    ItemBox.appendChild(h2);
    listItem[0].appendChild(ItemBox)
}