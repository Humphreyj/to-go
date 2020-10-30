import React,{useContext} from 'react';
import  {Link} from 'react-router-dom';
import ItemContext from '../../contexts/ItemContext';


const FeaturedCollections = () => {
    const {currentlyFeaturedCollections} = useContext(ItemContext)
    return (
        <div className='featured-collections-container'>
                {currentlyFeaturedCollections.map((collection,i) => {
                     return(
                        <div className="collections-div">
                            <img className="collection-thumbnail" src={collection.img} alt=""/>
                            <div className="collection-summary">
                                <h4 className="collection-name" to={`/collections/${collection.name}`}>{collection.name}</h4>
                                <p className="collection-decsription">{collection.description}</p>
                                <Link className="collection-link" to={`/collections/${collection.name}`}>
                                    <button>Shop {collection.name}</button>
                                </Link>
                            </div>
                            
                        </div>
                    )
                })}
        </div>
    );
}

export default FeaturedCollections;
