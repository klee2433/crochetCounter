import Home from './assets/home.png';

function Header() {
    return (
        <header className="flex justify-between items-center px-10 mb-4">
        <div className="flex gap-2">
            <h2 className="[font-family:'Madimi_One',Helvetica] font-normal text-[#4b4a67] text-[64px] mb-12 text-center">
                Crochet Project Title
            </h2>

            <button onClick={() => alert('Home button clicked!')} className="w-[72px] h-[72px] border-none bg-transparent">
             <img src={Home} alt="Home" className="w-12 h-12 text-[#4b4a67]"/>
            </button>
          </div>
        </header>
    );
}

export default Header;