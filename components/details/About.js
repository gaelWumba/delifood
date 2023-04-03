import { View, Text, Image } from 'react-native'
import React from 'react'


const getRestaurantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F100555153%2Fimage.jpg&f=1&nofb=1&ipt=e70f8af8299c3828c6262565aef8483521ec42af960b308e641256a789ac681d&ipo=images',
    price: '€€',
    reviews: '1500',
    rating: 4.5,
    categories: [{ title: 'Thai', title: 'Comfor Food' }],
}



export default function About(props) {
    const {name, image, price, reviews, rating, categories } = props.route.params;
    const formatedCategories = categories.map((category) => category.title).join(' - ');
    const description = `${formatedCategories} ${price ? ' - ' + price : ''} ${rating ? ' - ' + rating : ''} (${reviews} reviews) `;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: '100%', height: "72%" }} />
);

const RestaurantTitle = (props) => (
    <Text
        style={{
            fontSize: 25,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 5,
        }}
    >
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text
        style={{
            fontSize: 18,
            fontWeight: '400',
            marginTop: 5,
            marginHorizontal: 5,
        }}
    >
        {props.description}
    </Text>
)