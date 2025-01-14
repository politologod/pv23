import "../css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Script from "next/script";
import Footer from "@/universalComponents/footer/Footer";
import Navbar from "@/universalComponents/navbar/Navbar";
import FloatingCartButton from "@/universalComponents/floatingCartButton/FloatingCartButton";

export const metadata = {
	title: "PURAVIDA23 Tienda Online",
	description: "Venta y distribución de Agua Potable de la más alta calidad",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
					crossOrigin="anonymous"
					strategy="beforeInteractive"
				/>
			</head>

			<body>
				<div className="bg-light">
					<Navbar />
					{children}
					<FloatingCartButton cartCount={3} />
					<Footer />
				</div>
			</body>
		</html>
	);
}
