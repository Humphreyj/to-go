import React,{useContext} from 'react';
import  {Link} from 'react-router-dom';
import ItemContext from '../../contexts/ItemContext';


const FeaturedCollections = () => {
    const {currentlyFeaturedCollections} = useContext(ItemContext)
    return (
        <div className='featured-collections-container'>
            <h4 className="featured-collections-header">Shop our featured collections</h4>
            <div className='featured-collections'>
                {currentlyFeaturedCollections.map((collection,i) => {
                     return(
                        <div className="collections-div">
                            <img className="collection-thumbnail" src={collection.img} alt=""/>
                            <Link className="collection-name" to={`/collections/${collection.name}`}>{collection.name}</Link>
                        </div>
                    )
                })}
            </div>
            
            
        </div>
    );
}

export default FeaturedCollections;
