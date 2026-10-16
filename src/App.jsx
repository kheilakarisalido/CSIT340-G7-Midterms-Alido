import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RepoCard from "./components/RepoCard";
import Repositories from "./components/Repositories";
import Profile from "./components/Profile";


function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile />
      <Repositories
        RepoCard={RepoCard}
        portfolioStars={portfolioStars}
        handleStarPortfolio={handleStarPortfolio}
        todoStars={todoStars}
        handleStarTodo={handleStarTodo}
        dotfilesStars={dotfilesStars}
        handleStarDotfiles={handleStarDotfiles}
      />
      <Footer />
    </div>
  );
}

export default App;
