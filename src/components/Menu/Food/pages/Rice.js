import React from 'react'
import {Layout} from '../../layout';
import Food from '../../foods';

const Rice = () => {
    return (
        <div>
            <h1 style={{padding: "40px 20px"}}>Rice Dish</h1>
        <Layout>
            <Food
                title="Bonito Onigiri"
                price="5.49"
                image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/29/0/FN_Onigiri-Rice-Balls_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485713435783.jpeg"
            />
            <Food
                title="Pickled Plum Onigiri"
                price="5.49"
                image="https://www.justonecookbook.com/wp-content/uploads/2020/02/Plum-Rice-Ball-9104-I.jpg"
            />
            <Food
                title="Salmon Onigiri"
                price="5.49"
                image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/29/0/FN_Onigiri-Rice-Balls_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485713435783.jpeg"
            />
        </Layout>
        </div>
    );
};

export default Rice;
