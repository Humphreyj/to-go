import React,{useState,useEffect,useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import '../../../styles/menu/collections.scss'


const Collections = (props) => {
    const {shopCollections}=useContext(ItemContext);
    return (
        <div className='menu-collections'
        onMouseLeave={()=> props.setCollectionsAreVisible(false)}
        >
            {shopCollections.map((collection,i) => {
                return (
                <p
                key={i}
                className='menu-collection'
                onClick={()=>props.filterCollection(collection)}
                >{collection}</p>
                )
            })}
            
        </div>
    );
}

export default Collections;
