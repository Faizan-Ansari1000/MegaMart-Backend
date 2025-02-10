const express = require('express');

const product = express.Router();

//#region mobile
const mobiles = [
    {
        id: 1,
        name: 'iphone 12',
        price: '1 Lac',
        image: 'https://i0.wp.com/www.xavierstuder.com/wp-content/uploads/2021/09/872A9495-scaled.jpg?quality=25&ssl=1'
    },
    {
        id: 2,
        name: 'Samcung',
        price: '80 thousand',
        image: 'https://img.global.news.samsung.com/in/wp-content/uploads/2022/03/SM-A536_Galaxy-A53-5G_Awesome-Peach_Front.jpg'
    },
    {
        id: 3,
        name: 'Google Pixl',
        price: '70 thousand',
        image: 'https://sm.ign.com/t/ign_pk/review/g/google-pix/google-pixel-9-review_m392.1280.jpg'
    },
    {
        id: 4,
        name: 'Real me',
        price: '60 thousand',
        image: 'https://fdn2.gsmarena.com/vv/pics/realme/realme-5-rmx1911-3.jpg'
    },
    {
        id: 5,
        name: 'Infinix',
        price: '50 thousand',
        image: 'https://i0.wp.com/alltech.pk/wp-content/uploads/2024/11/Infinix-Smart-9-Metallic-Black.jpg'
    },
    {
        id: 6,
        name: 'Redme',
        price: '40 thousand',
        image: 'https://eezepc.com/wp-content/uploads/2024/03/redmi-4.webp'
    },
]
// get
product.get('/mobiles', (req, res) => {
    try {
        res.json({ isSuccessfully: true, data: mobiles });
    } catch (error) {
        console.log(error);
        res.status(500).json({ isSuccessfully: false, message: 'Failed' });
    }
});
//#endregion

//#region  laptops

const laptops = [
    {
        id: 1,
        name: 'Macbook',
        price: '4 Lac',
        image: 'https://media.istockphoto.com/id/1425655509/photo/apple-macbook-pro.jpg?s=612x612&w=0&k=20&c=Qvvkux4tUjgOnZInhR6C8zQdpnx_YHS4RhKBHZ3-ouM='
    },
    {
        id: 2,
        name: 'Samsung',
        price: '3 Lac',
        image: 'https://www.shutterstock.com/image-photo/jakarta-indonesia-monday-october-14-260nw-1581153769.jpg'
    },
    {
        id: 3,
        name: 'Dell',
        price: '2 Lac',
        image: 'https://uztech.pk/wp-content/uploads/2023/10/IMG-20230902-WA0043.jpg'
    },
    {
        id: 4,
        name: 'Hp',
        price: '1.5 Lac',
        image: 'https://intaglaptops.com/cdn/shop/products/HPLaptop15s-fr2006TU-Corei311thGenerationintaglogo2_1200x.jpg?v=1666626538'
    },
    {
        id: 5,
        name: 'Lenovo',
        price: '1 Lac',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwUw6v4FkCvIhw6P6-bQC0IEljSH76-EuaQ&s'
    },
    {
        id: 6,
        name: 'Toshiba',
        price: '80 thousand',
        image: 'https://i.pcmag.com/imagery/articles/028LkEeyzSTRfDzG0kcZK9c-3.fit_lim.v1569485047.jpg'
    },
]

product.get('/laptops', (req, res) => {
    try {
        res.status(200).json({ isSuccessfully: true, data: laptops })
    } catch (error) {
        console.log(error)
    }
})

//#endregion

//#region cosmetics
const cosmetics = [
    {
        id: 1,
        name: 'Foundation',
        price: '599',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGv-lYz3wsMLoP5q3KL0HUbo9sg0IjPUTJ8w&s'
    },
    {
        id: 2,
        name: 'EyeDhadow',
        price: '745',
        image: 'https://rivaj-uk.com/cdn/shop/files/DSC03424.jpg?v=1738646985'
    },
    {
        id: 3,
        name: 'BlushOn',
        price: '255',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQR1z9b0Xbq1GPiafzsWc9L7afwJgyomzuLQ&s'
    },
    {
        id: 4,
        name: 'Muskara',
        price: '349',
        image: 'https://m.media-amazon.com/images/I/51w-cGDjSvL._AC_SR175,263_QL70_.jpg'
    },
    {
        id: 5,
        name: 'Eye Liner',
        price: '249',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxWlsvesUqE8obyc8Nd2HHx3SWA4D451TwA&s'
    },
    {
        id: 6,
        name: 'Lisptick',
        price: '199',
        image: 'https://www.zeromakeup.com/cdn/shop/files/Lipstick-RoseNude-2.jpg?v=1727073912&width=480'
    },
]

product.get('/cosmetics', (req, res) => {
    try {
        res.status(200).json({ isSuccessfully: true, data: cosmetics })
    } catch (error) {
        console.log(error)
    }
})

//#endregion

//#region Stationary
const stationary = [
    {
        id: 1,
        name: 'Pencil',
        price: '119',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7lotd-eKl9G_mF3Q01rg94_p9TooCkgPPA&s'
    },
    {
        id: 2,
        name: 'Eraser',
        price: '199',
        image: 'https://static3.webx.pk/files/4688/Images/01-4688-584971-280121101455.jpg'
    },
    {
        id: 3,
        name: 'Shopnor',
        price: '125',
        image: 'https://img.drz.lazcdn.com/g/kf/S1dfa2af8a221413facd0f69818d949a0U.jpg_720x720q80.jpg'
    },
    {
        id: 4,
        name: 'Scales',
        price: '149',
        image: 'https://img.drz.lazcdn.com/static/pk/p/fcfef376bd8c3772051278eff663bbb2.jpg_720x720q80.jpg'
    },
    {
        id: 5,
        name: 'Calculator',
        price: '1249',
        image: 'https://www.shutterstock.com/image-illustration/scientific-calculator-black-color-3d-260nw-2477403407.jpg'
    },
    {
        id: 6,
        name: 'Books',
        price: '999',
        image: 'https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg'
    },
]

product.get('/stationary', (req, res) => {
    try {
        res.status(200).json({ isSuccessfully: true, data: stationary })
    } catch (error) {
        console.log(error)
    }
})

//#endregion

//#region Ladies
const ladiesCloth = [
    {
        id: 1,
        name: 'Gul Ahmed',
        price: '7999',
        image: 'https://www.dressyzone.com/cdn/shop/files/p15195-embroidered-net-dress_580x.jpg?v=1719991651'
    },
    {
        id: 2,
        name: 'Casual',
        price: '3999',
        image: 'https://image.made-in-china.com/202f0j00lSAhPsdakgrN/Mixed-Package-Cheap-Price-Used-Clothes-Girls-Casual-Dresses-Ladies.jpg'
    },
    {
        id: 3,
        name: 'Normal',
        price: '1999',
        image: 'https://i.pinimg.com/736x/51/d0/7b/51d07b367bb75da8e5e056266501e4ef.jpg'
    },
    {
        id: 4,
        name: 'Wedding',
        price: '12999',
        image: 'https://www.dressyzone.com/cdn/shop/files/p14769-embroidered-bridal-maxi-dress_580x.jpg?v=1719467167'
    },
    {
        id: 5,
        name: 'Zara',
        price: '1480',
        image: 'https://5.imimg.com/data5/ANDROID/Default/2021/1/VC/SF/FL/29603120/product-jpeg-500x500.jpg'
    },
    {
        id: 6,
        name: 'Mixed',
        price: '1199',
        image: 'https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww'
    },
]

product.get('/ladiesCloth', (req, res) => {
    try {
        res.status(200).json({ isSuccessfully: true, data: ladiesCloth })
    } catch (error) {
        console.log(error)
    }
})

//#endregion

//#region Gents
const gentsCloth = [
    {
        id: 1,
        name: 'Pents',
        price: '12999',
        image: 'https://5.imimg.com/data5/IOS/Default/2022/12/YW/TE/GN/9606911/product-jpeg-500x500.png'
    },
    {
        id: 2,
        name: 'Shirt',
        price: '1699',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDNbF0hqHswqdCd_UqTaPQlaxlkEDkOicKQ&s'
    },
    {
        id: 3,
        name: 'Shorts',
        price: '1999',
        image: 'https://media.istockphoto.com/id/1237985231/photo/shorts.jpg?s=612x612&w=0&k=20&c=O-52YF684BxeC8EGHu9I68ujBzaPuukYnJrcjshmKb4='
    },
    {
        id: 4,
        name: 'Trouser',
        price: '12999',
        image: 'https://static.independent.co.uk/2021/03/17/17/best%20womens%20walking%20trousers.jpg'
    },
    {
        id: 5,
        name: 'Ties',
        price: '1480',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE12Lujq9x-djFNpGC2PNY092UwyH_YO5S5w&s'
    },
    {
        id: 6,
        name: 'Belts',
        price: '1199',
        image: 'https://media.istockphoto.com/id/1029383076/photo/collection-of-leather-belts-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=wmTnklWIPJyRxpiooEVlwCewGGBq9LdxYbE8ijdxCkc='
    },
]

product.get('/gentsClothes', (req, res) => {
    try {
        res.status(200).json({ isSuccessfully: true, data: gentsCloth })
    } catch (error) {
        console.log(error)
    }
})

//#endregion

//#region Gents
const jackets = [
    {
        id: 1,
        name: 'Casual',
        price: '12999',
        image: 'https://www.stormtech.ca/cdn/shop/files/AFP-2_FRONT_HOOD_UP_Navy_Graphite.jpg?v=1736897889&width=1200'
    },
    {
        id: 2,
        name: 'Normal',
        price: '1699',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflq-YGEXxwmDLQVAi9WA16mh4UwVuCgZMaw&s'
    },
    {
        id: 3,
        name: 'New',
        price: '2500',
        image: 'https://img.drz.lazcdn.com/static/pk/p/2a12c187b33b70caeff7fbdea9536846.jpg_960x960q80.jpg_.webp'
    },
    {
        id: 4,
        name: 'Zipps',
        price: '14999',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XtYxJGSQXc_uDNsodNPXWA3Xly5LH59aWA&s'
    },
    {
        id: 5,
        name: 'Leather',
        price: '12455',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XtYxJGSQXc_uDNsodNPXWA3Xly5LH59aWA&s'
    },
    {
        id: 6,
        name: 'Upar',
        price: '9999',
        image: 'https://www.acecart.pk/cdn/shop/files/8-1_b215a744-2201-4f3a-ad3b-78b7faeedfa2.jpg?v=1713611297'
    },
]

product.get('/jackets', (req, res) => {
    try {
        res.status(200).json({ isSuccessfully: true, data: jackets })
    } catch (error) {
        console.log(error)
    }
})

//#endregion

//#region watch
const watches = [
    {
        id: 1,
        name: 'Casual',
        price: '1500',
        image: 'https://timekeepers.pk/cdn/shop/files/P3432M-15_700x700.jpg?v=1694254204'
    },
    {
        id: 2,
        name: 'Business',
        price: '4000',
        image: 'https://timekeepers.pk/cdn/shop/files/P3432M-15_700x700.jpg?v=1694254204'
    },
    {
        id: 3,
        name: 'Funost',
        price: '2500',
        image: 'https://appleman.pk/cdn/shop/files/3_e7a6e623-53d4-406e-835f-544b82af8796.png?v=1709319331&width=1920'
    },
    {
        id: 4,
        name: 'R-O',
        price: '14999',
        image: 'https://appleman.pk/cdn/shop/files/3_e7a6e623-53d4-406e-835f-544b82af8796.png?v=1709319331&width=1920'
    },
    {
        id: 5,
        name: 'Poedegar',
        price: '12455',
        image: 'https://i0.wp.com/poedagar.store/wp-content/uploads/2022/03/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210529180922-1.jpg?fit=800%2C800&ssl=1'
    },
    {
        id: 6,
        name: 'Smart watches',
        price: '9999',
        image: 'https://i0.wp.com/poedagar.store/wp-content/uploads/2022/03/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210529180922-1.jpg?fit=800%2C800&ssl=1'
    },
]

product.get('/watch', (req, res) => {
    try {
        res.status(200).json({ isSuccessfully: true, data: watches })
    } catch (error) {
        console.log(error)
    }
})

//#endregion



module.exports = product;