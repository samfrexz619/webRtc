import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Taylor',
    lastName: 'Whyte'
  }
  return (
    <main className="flex w-full h-screen font-inter">
      <SideBar user={loggedIn} />
      {children}
    </main>
  );
}
