import React from "react";

const FeaturedProducts = () => {
    const cards = [
        {
            title: "Agua Mineral 1Lts",
            text: "Agua mineral natural de manantial, envasada en botellas de 1 litro.",
        },
        {
            title: "Botellón de Agua 18Lts",
            text: "Botellón de agua purificada de 18 litros, ideal para oficinas y hogares.",
        },
        {
            title: "Dispensador Electronico USB Recargable",
            text: "Dispensador de agua eléctrico, recargable por USB, para botellones de 18 litros.",
        },
    ];

    return (
        <div className="card-group">
            {cards.map((card, index) => (
                <div
                    className="card p-5 m-5 shadow d-flex flex-column"
                    key={index}
                    style={{ borderRadius: "15px", position: "relative" }}
                >
                    <img
                        className="card-img-top w-100 d-block"
                        src="https://via.placeholder.com/100"
                        alt="Card Image"
                        style={{ borderRadius: "15px 15px 0 0" }}
                    />
                    <div className="card-body flex-grow-1">
                        <h4 className="card-title">{card.title}</h4>
                        <p className="card-text">{card.text}</p>
                    </div>
                    <div
                        className="mt-auto"
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <button className="btn btn-primary" type="button">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProducts;
