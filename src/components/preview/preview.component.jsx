import React from 'react';

import './preview.styles.scss';
import '../collection-item/collection-item-component'
import CollectionItem from '../collection-item/collection-item-component';

const PreviewCollection =({title, items})=>(

    <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
    {
        items.filter((item,idx)=>idx<4).map(({id, ...OtherItemProps})=>(
            <CollectionItem key ={id} {...OtherItemProps}/>
            
            ))
    }
    </div>
    </div>
    )

    export default PreviewCollection;