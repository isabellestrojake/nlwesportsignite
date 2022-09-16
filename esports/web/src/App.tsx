import './styles/main.css';
import logo from './assets/logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
  return (
  <div className="max-w-[1334px] mx-auto flex flex-col items-center my-10">
    <img src={logo} alt="logo da nlw" width="300px" height="300px"></img>
    <h1 className="text-4xl text-white font-black mt-10">
      Seu <span className="text-transparent bg-duo bg-clip-text">duo</span> está aqui
    </h1>
    <div className="grid grid-cols-6 gap-6 mt-14">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/league-of-legends.png' alt='League of Legends' />
          <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block pt-1">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/apex.png' alt='Apex' />
          <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Apex
            </strong>
            <span className="text-zinc-300 text-sm block pt-1">
              3 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/counter-strike.png' alt='Counter-Strike' />
          <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter-Strike
            </strong>
            <span className="text-zinc-300 text-sm block pt-1">
              2 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/dota-2.png' alt='Dota 2' />
          <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Dota 2
            </strong>
            <span className="text-zinc-300 text-sm block pt-1">
              3 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/fortnite.png' alt='Fortnite' />
          <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Fortnite
            </strong>
            <span className="text-zinc-300 text-sm block pt-1">
              6 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/world-of-warcraft.png' alt='World of Warcraft' />
          <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block pt-1">
              6 anúncios
            </span>
          </div>
        </a>
    </div>
    <div className="pt-1 mt-8 bg-duo self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
            </strong>
          <span className="text-zinc400 block">
            Publique um anúncio para encontrar novos players.
          </span>
        </div>
        <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  </div>
  )
}

export default App;
