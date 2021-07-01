import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    //const handleAdd = () => {
    //    //setCategories( [...categories, 'HunterXHunter'] )
    //    setCategories( cats => [...cats, 'HunterXHunter'] )
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />


            <ol>
                { 
                    categories.map( category => 
                        <GifGrid
                            key={ category } 
                            category={ category } 
                        />
                    )
                }
            </ol>
        </>
    )
}
