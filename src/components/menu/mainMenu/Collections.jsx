import React,{useContext} from 'react';
import ItemContext from '../../../contexts/ItemContext';
import {Link} from 'react-router-dom';

const Collections = () => {
    const {shopCollections}=useContext(ItemContext)

    return (
        <div className='all-collections'>
            <h1 className="collection-title">Browse our curated collections!</h1>
            <div className="collections-menu">
                {shopCollections.map(collection => {
                    return(
                        <Link to={`/collections/${collection.toLowerCase()}`}>{collection}</Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Collections;
