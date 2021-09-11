import Link from 'next/link';
import SeatMap from './SeatMap/SeatMap';

function Home() {
  return (
    <>
      <div>Home 3</div>
      <Link href="./Login">
        <a>Página de Login</a>
      </Link>
      <Link href="./Cadastro">
        <a>Cadastre-se</a>
      </Link>
      <Link href="./Home">
        <a>Home</a>
      </Link>
    </>
  )
}

export default Home