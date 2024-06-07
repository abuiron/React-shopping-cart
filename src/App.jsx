import React, { useState } from 'react'
import Nav from './Nav'
import Header from './Header'
import Card from './Card'
import Footer from './Footer'

function App() {

  //products details 
  let products =[
    {
      "pName": "iPhone 9",
      "pDescription": "An apple mobile which is nothing like apple",
      "pCprice": "$549",
      "pOprice": "$1296",
      "pImages": "https://cdn.dummyjson.com/product-images/1/1.jpg"
    },
    {
      "pName": "iPhone X",
      "pDescription": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "pCprice": "$899",
      "pOprice": "$1794",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/2/1.jpg"
    },
    {
      "pName": "Samsung Universe 9",
      "pDescription": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "pCprice": "$1249",
      "pOprice": "$1546",
      "pImages":
        "https://cdn.dummyjson.com/product-images/3/1.jpg"
    },
    {
      "pName": "OPPOF19",
      "pDescription": "OPPO F19 is officially announced on April 2021.",
      "pCprice": "$280",
      "pOprice": "$1791",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/4/1.jpg"
    },
    {
      "pName": "Huawei P30",
      "pDescription": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "pCprice": "$499",
      "pOprice": "$1058",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/5/1.jpg"
    },
    {
      "pName": "MacBook Pro",
      "pDescription": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "pCprice": "$1749",
      "pOprice": "$1102",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/6/1.png"
      
    },
    {
      "pName": "Samsung Galaxy Book",
      "pDescription": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "pCprice": "$1499",
      "pOprice": "$415",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/7/1.jpg"

    },
    {
      "pName": "Microsoft Surface Laptop 4",
      "pDescription": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "pCprice": "$1499",
      "pOprice": "$1023",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/8/1.jpg"
    },
    {
      "pName": "Infinix INBOOK",
      "pDescription": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      "pCprice": "$1099",
      "pOprice": "$1183",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/9/1.jpg"
    },
    {
      "pName": "HP Pavilion 15-DK1056WM",
      "pDescription": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      "pCprice": "$1099",
      "pOprice": "$618",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/10/1.jpg"
      
    },
    {
      "pName": "perfume Oil",
      "pDescription": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      "pCprice": "$13",
      "pOprice": "$84",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/11/1.jpg"
      
    },
    {
      "pName": "Brown Perfume",
      "pDescription": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      "pCprice": "$40",
      "pOprice": "$1566",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/12/1.jpg"

    },
    {
      "pName": "Fog Scent Xpressio Perfume",
      "pDescription": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      "pCprice": "$13",
      "pOprice": "$814",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/13/1.jpg"
    },
    {
      "pName": "Non-Alcoholic Concentrated Perfume Oil",
      "pDescription": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      "pCprice": "$120",
      "pOprice": "$156",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/14/1.jpg"
      
    },
    {
      "pName": "Eau De Perfume Spray",
      "pDescription": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      "pCprice": "$30",
      "pOprice": "$1099",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/15/1.jpg"
    },
    {
      "pName": "Hyaluronic Acid Serum",
      "pDescription": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      "pCprice": "$19",
      "pOprice": "$1331",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/16/1.png"
    },
    {
      "pName": "Tree Oil 30ml",
      "pDescription": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      "pCprice": "$12",
      "pOprice": "$409",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/17/1.jpg"
      
    },
    {
      "pName": "Oil Free Moisturizer 100ml",
      "pDescription": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      "pCprice": "$40",
      "pOprice": "$131",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/18/1.jpg"
    },
    {
      "pName": "Skin Beauty Serum.",
      "pDescription": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      "pCprice": "$46",
      "pOprice": "$1068",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/19/1.jpg"
      
    },
    {
      "pName": "Freckle Treatment Cream- 15gm",
      "pDescription": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      "pCprice": "$70",
      "pOprice": "$1699",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/20/1.jpg"
    },
    {
      "pName": "- Daal Masoor 500 grams",
      "pDescription": "Fine quality Branded Product Keep in a cool and dry place",
      "pCprice": "$20",
      "pOprice": "$481",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/21/1.png"
    },
    {
      "pName": "Elbow Macaroni - 400 gm",
      "pDescription": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      "pCprice": "$14",
      "pOprice": "$1558",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/22/1.jpg"
    },
    {
      "pName": "Orange Essence Food Flavou",
      "pDescription": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      "pCprice": "$14",
      "pOprice": "$804",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/23/1.jpg"

    },
    {
      "pName": "cereals muesli fruit nuts",
      "pDescription": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      "pCprice": "$46",
      "pOprice": "$168",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/24/1.jpg"

    },
    {
      "pName": "Gulab Powder 50 Gram",
      "pDescription": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      "pCprice": "$70",
      "pOprice": "$1358",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/25/1.png"
    },
    {
      "pName": "Plant Hanger For Home",
      "pDescription": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      "pCprice": "$41",
      "pOprice": "$1786",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/26/1.jpg"
    },
    {
      "pName": "Flying Wooden Bird",
      "pDescription": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      "pCprice": "$51",
      "pOprice": "$1558",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/27/1.jpg"
    },
    {
      "pName": "3D Embellishment Art Lamp",
      "pDescription": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      "pCprice": "$20",
      "pOprice": "$1649",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/28/1.jpg"
    },
    {
      "pName": "Handcraft Chinese style",
      "pDescription": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      "pCprice": "$60",
      "pOprice": "$1534",
      "pImages": 
        "https://cdn.dummyjson.com/product-images/29/1.jpg"
    },
    {
      "pName": "Key Holder",
      "pDescription": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      "pCprice": "$30",
      "pOprice": "$292",
      "pImages":"https://cdn.dummyjson.com/product-images/30/1.jpg"
    }
  ]

  {/*using state for changing the cart in ui */}
  const [cart,setCart] = useState(0)
  
  return (
    <div className='container-fluid'>
      <div className='row'>

        {/*nav bar */}
        {/*nav bar showing the cart quantity */}

        <Nav cart={cart} setCart={setCart}></Nav>


        {/*header*/}
        {/*header is only for design in the ui */}

        <Header></Header>

        {/*secction */}
        {/*card design  */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {/*iterate the products for the card using map */}
                  {
                    products.map((e,i)=>{
                      //every card has an unique key
                      return <Card e={e} cart={cart} setCart={setCart} key={i}></Card>
                    })
                  }
                </div>
            </div>
        </section>



        {/*Footer */}
        {/*footer is for desing in the ui */}

        <Footer></Footer>


      </div>
    </div>
  )
}
export default App