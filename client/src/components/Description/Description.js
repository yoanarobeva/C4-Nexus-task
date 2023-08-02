import "./Description.css";

const categoriesDesc = {
    "undefined": {
        name: "All Products",
        description: "Products - Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur asperiores molestiae quos voluptatem expedita a hic qui beatae, ad, nulla et quam veniam repudiandae? Dignissimos molestias assumenda cumque natus."
    },
    "women": {
        name: "Women's Shoes",
        description: "Women's - Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur asperiores molestiae quos voluptatem expedita a hic qui beatae, ad, nulla et quam veniam repudiandae? Dignissimos molestias assumenda cumque natus."
    },
    "men": {
        name: "Men's Shoes",
        description: "Men's - Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur asperiores molestiae quos voluptatem expedita a hic qui beatae, ad, nulla et quam veniam repudiandae? Dignissimos molestias assumenda cumque natus."
    },
    "bags": {
        name: "Bags",
        description: "Bags - Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur asperiores molestiae quos voluptatem expedita a hic qui beatae, ad, nulla et quam veniam repudiandae? Dignissimos molestias assumenda cumque natus."
    },
    "accessories": {
        name: "Accessories",
        description: "Accessories - Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur asperiores molestiae quos voluptatem expedita a hic qui beatae, ad, nulla et quam veniam repudiandae? Dignissimos molestias assumenda cumque natus."
    }
}

const Description = ({category}) => {
    return (
        <div className="description">
            <h4>{categoriesDesc[category].name}</h4>
            <p>{categoriesDesc[category].description}</p>
        </div>
    );
}

export default Description;