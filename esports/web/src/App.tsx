import './styles/main.css';
import logo from './assets/logo.svg';
import { GameBannner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games/').then(response => {
        setGames(response.data)
      })
  }, []);

  return (
  <div className="max-w-[1334px] mx-auto flex flex-col items-center my-10">

    <img src={logo} alt="logo da nlw" width="300px" height="300px"></img>

    <h1 className="text-4xl text-white font-black mt-10">
      Seu <span className="text-transparent bg-duo bg-clip-text">duo</span> está aqui
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-14">
      {games.map(game => {
        return (
          <GameBannner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        )
      })}
    </div>

    <Dialog.Root>
      <div className="pt-1 mt-8 bg-duo self-stretch rounded-lg overflow-hidden">
        <CreateAdBanner />
        <CreateAdModal />
      </div>
    </Dialog.Root>

  </div>
  )
}

export default App;
