
import PropTypes from 'prop-types'; 
const FeedCard = ({ pokemon }) => {
    console.log(pokemon)
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{pokemon.pokemon}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Type: {pokemon.type}</h6>
      </div>
      <img src={pokemon.image_url} className="card-img-top" alt={pokemon.pokemon} />
      <div className="card-body">
        <p className="card-text">Abilities: {pokemon.abilities.length> 0 && pokemon.abilities.join(', ')}</p>
        <p className="card-text">Hitpoints: {pokemon.hitpoints}</p>
        <p className="card-text">Location: {pokemon.location}</p>
        {pokemon.evolutions.length > 0 && (
          <p className="card-text">Evolutions: {pokemon.evolutions.join(', ')}</p>
        )}
      </div>
    </div>
  );
};
FeedCard.propTypes = {
    pokemon: PropTypes.shape({
      pokemon: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
      hitpoints: PropTypes.number.isRequired,
      evolutions: PropTypes.arrayOf(PropTypes.string),
      location: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired
    }).isRequired
  };
export default FeedCard;
