import Card from '@/app/Components/Card'
import Icon from '@/app/Components/Icon'
import ImageGallery from '@/app/Components/ImageGallery'
import ItemGrid from '@/app/Components/ItemGrid'
import React from 'react'


export default function page() {
    return (
        <div>
            <ItemGrid />
            <ImageGallery/>
            <Card />
            <Icon/>
       
        </div>
    )
}
