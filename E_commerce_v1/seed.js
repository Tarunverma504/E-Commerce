const Product = require('./models/product');



const products=[
    {
        name:' Iphone 11',
        price:100,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. ",
        img:'https://unsplash.com/photos/Co-usQ-kpO0'
    },
    {
        name:'Laptop',
        price:100,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. ",
        img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'ipad',
        price:100,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. ",
        img:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:' Airpods',
        price:100,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. ",
        img:'https://media.istockphoto.com/photos/airpod-with-black-background-picture-id1254998855?b=1&k=20&m=1254998855&s=170667a&w=0&h=YJy6_99mPI8dbVoRAJ2CKU_aNhH5EjEeVFN15zSjpUw='
    },
    {
        name:'Drone',
        price:100,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. ",
        img:'https://media.istockphoto.com/photos/drone-white-cloudy-dusk-sky-picture-id492683865?b=1&k=20&m=492683865&s=170667a&w=0&h=PtECbEZJ1Yxq0h_pGUzGZnGxnkPENqz5X8ZMcNiKst8='
    },
    {
        name:'Shoes',
        price:100,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. ",
        img:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='
    },
    {
        name:'Jeans',
        price:100,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. ",
        img:'https://images.unsplash.com/photo-1623120389902-6c846c80f4c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnMnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
     
]

const seedDB=async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');

}

module.exports=seedDB;