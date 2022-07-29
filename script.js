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
    name: "May choi game 3",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2019/08/one-million-247x296.jpg"
},
{
    name: "May choi game 4",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2019/08/bops4prokingdomheart3gameshoptl-2226-247x296.png"
},
{
    name: "tay cam 3",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2022/01/554453-Product-4-I-637750840959241867_1080x-247x296.jpg"

},
{
    name: "tay cam 4",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2021/11/tay_ps5_dualsense_wireless_controller-mau_do-xgame_8_bad4e09b713c41da928356d2f09ecfe0_master-247x296.jpg"

},
{
    name: "May choi game 5",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2021/04/mhrise-bundle-01-247x296.jpg"
},
{
    name: "May choi game 6",
    price: "200000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2021/03/m%C3%A1y-nintendo-switch-lite-Turquoise-gi%C3%A1-r%E1%BA%BB_429160_5d26ea447f8ff0.98169649-247x296.jpg"
},
{
    name: "tay cam 5",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2019/09/a397540d94954fc09c9eef3b4ca397a8_Large-247x296.jpg"

},
{
    name: "tay cam 6",
    price: "2000000 d ",
    photoURL:"https://m10store.vn/wp-content/uploads/2020/03/nacon-revolution-pro-controller-3-for-playstation-4-613565.1-247x296.jpg"

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