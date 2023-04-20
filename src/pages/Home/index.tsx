import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pokemonController } from '~/api/pokemons';
import { CommonPokemon } from '~/common/pokemons/types';
import { PokemonCardSlider } from '~/components/PokemonCard/Slider';
import { UIButton } from '~/components/UI/Button';

export function Home() {
  const navigate = useNavigate();

  const [pokemonArr, setPokemonArr] = useState<CommonPokemon[]>([]);

  pokemonController.search().then((pokemons) => setPokemonArr(pokemons));

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="h1">Pokemons</h1>
          <p>
            <strong>Pokémon</strong> (an abbreviation for Pocket Monsters in
            Japan) is a Japanese media franchise managed by The Pokémon Company,
            founded by Nintendo, Game Freak, and Creatures.
          </p>
          <p>
            The franchise was created by Satoshi Tajiri in 1996, and is centered
            around fictional creatures called "Pokémon". In Pokémon, Pokémon
            Trainers are people who catch, train, care for, and battle with
            Pokémon. The English slogan for the franchise is "Gotta Catch ‘Em
            All!". There are currently 1015 Pokémon species.
          </p>
          <p>
            The franchise began as Pocket Monsters: Red and Green (later
            released outside of Japan as Pokémon Red and Blue), a pair of video
            games for the original Game Boy handheld system that were developed
            by Game Freak and published by Nintendo in February 1996. Pokémon
            soon became a media mix franchise adapted into various different
            media. Pokémon is one of the highest-grossing media franchises of
            all time. The Pokémon video game series is the third best-selling
            video game franchise of all time with more than 440 million copies
            sold and one billion mobile downloads. The Pokémon video game series
            spawned an anime television series that has become the most
            successful video game adaptation of all time with over 20 seasons
            and 1,000 episodes in 192 countries.
          </p>
          <p>
            The Pokémon Trading Card Game is the highest-selling trading card
            game of all time with over <strong>43.2 billion</strong> cards sold.
            In addition, the Pokémon franchise includes the world's top-selling
            toy brand, an anime film series, a live-action film (Detective
            Pikachu), books, manga comics, music, merchandise, and a temporary
            theme park. The franchise is also represented in other Nintendo
            media, such as the Super Smash Bros. series, where various Pokémon
            characters are playable. <br />
            <a
              className="link"
              href="https://en.wikipedia.org/wiki/Pok%C3%A9mon"
            >
              More on wiki
            </a>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="header-container">
            <h2 className="h2">Pokemon showcase</h2>
            <UIButton to={'/pokedex'}>To Pokedex</UIButton>
          </div>
          <PokemonCardSlider pokemons={pokemonArr} />
        </div>
      </section>
    </>
  );
}
