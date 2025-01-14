import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProductsList = () => {
    const cards = Array(9).fill({
        imgSrc: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
        title: "Lorem libero donec",
        description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.",
    });

    return (
        <div className="container py-4 py-xl-5">
            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                {cards.map((card, index) => (
                    <div className="col" key={index}>
                        <div>
                            <Link href="/product">
                                <Image
                                    className="rounded img-fluid d-block w-100 fit-cover"
                                    width={1400}
                                    height={800}
                                    src={card.imgSrc}
                                    alt={card.title}
                                />
                                <div className="py-4">
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
