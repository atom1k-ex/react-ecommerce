
import React from 'react';
import SHOP_DATA from './shopdata.js'
import PreviewCollection from '../../components/preview/preview.component'


class ShopPage extends React.Component{
    constructor(props){
        super(props);


        this.state ={
            shopData: SHOP_DATA
        };
    }

    render(){
        const {shopData} = this.state
        return (
            <div className='shop-page'>
            {
               shopData.map(({id, ...otherCollection}) => (<PreviewCollection key={shopData.id} {...otherCollection}/>))
            }
            </div>
        );

    }
    

}

export default ShopPage;
