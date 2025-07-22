import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to ALX Project 0x02</h1>
      </main>
    </div>
  );
}
