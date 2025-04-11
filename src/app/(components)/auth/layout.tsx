import Header from "./header/page";
import Footer from "./footer/page";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100 w-full min-h-screen relative">
      <div className="absolute bg-blue-100 h-70 w-full"></div>
      <div className="fixed w-full">
        <Header></Header>
      </div>
      <main className="pt-24 px-10 absolute w-full">{children}</main>
      <div className="fixed bottom-8 w-full">
        <Footer></Footer>
      </div>
    </div>
  );
}
