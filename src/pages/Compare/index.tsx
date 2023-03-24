import { PokemonCompareTable } from '~/components/PokemonCompareTable';

export function Compare() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="h1">Pokemon comparation</h1>
          <PokemonCompareTable />
        </div>
      </section>
    </div>
  );
}
