import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Footer from "@/components/Footer";

const lato = Lato({ 
	subsets: ["latin"],
	weight: ['400', '700']
});

export const metadata: Metadata = {
	title: "Nubank - Tenha N possibilidades ",
	description: "Nubank Landing Page",
	icons: {
		icon: '/favicon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={lato.className}>
				<Header/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}