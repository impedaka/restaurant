import React from 'react'
import Foods from '../../foods'
import {Layout} from '../../layout';
import uniqid from 'uniqid';
const Popular = () => {
    return (
        <div>
            <h1 style={{padding: "40px 20px"}}>Popular Items</h1>
        <Layout>
            <Foods
                id={uniqid()}
                title="California Roll"
                price="6.00"
                image="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/e1b03b14-e8f2-4a5f-b06b-210856bd9b65-retina-large.jpg"
            />
            <Foods
                id={uniqid()}
                title="Shumai"
                price="5.99"
                image="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/0f06ad43-a9a2-4a7b-9ce5-7857a9e821ec-retina-large.jpg"
            />
            <Foods
                id={uniqid()}
                title="Edamame"
                price="4.25"
                image="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/47bb1b38-604d-429e-8e2c-870df724f18a-retina-large.jpg"
            />
            <Foods
                id={uniqid()}
                title="Spicy California Roll"
                price="6.50"
                image="https://img-global.cpcdn.com/recipes/6512265831383040/400x400cq70/photo.jpg"
            />
            <Foods
                id={uniqid()}
                title="Spicy Tuna Avocado Roll"
                price="7.00"
                image="https://pickledplum.com/wp-content/uploads/2018/01/spicy-tuna-roll-horizontal.jpg"
            />
            <Foods
                id={uniqid()}
                title="Gyoza"
                price="6.99"
                image="https://www.justonecookbook.com/wp-content/uploads/2020/04/Gyoza-3112-I.jpg"
            />
            <Foods
                id={uniqid()}
                title="Crunchy Roll"
                price="12.15"
                image="https://izzycooking.com/wp-content/uploads/2021/03/Crunchy-Roll-3.jpg"
            />
            <Foods
                id={uniqid()}
                title="Philadelphia Roll (Regular)"
                price="7.25"
                image="https://izzycooking.com/wp-content/uploads/2020/04/Philadelphia-roll-thumbnail.jpg"

            />
            <Foods
                id={uniqid()}
                title="Shrimp Tempura Roll"
                price="10.25"
                image="https://www.favfamilyrecipes.com/wp-content/uploads/2020/10/Shrimp-Tempura-Godzilla-Rolls-8-500x375.jpg"
            />
            <Foods
                id={uniqid()}
                title="Spicy Salmon Avocado Roll"
                price="7.00"
                image="https://res.cloudinary.com/bunch-media-library/image/upload/w_440,h_380,c_fill,q_auto,f_auto,fl_lossy/v1518672393/recipes/uxxojwf2hvevpl1wpebs.jpg"
            />
        </Layout>
        </div>
    )
}

export default Popular;