import Styles from './Card.module.css'

const Card = ({ id, name, tier, playerId }) => {
  if (!id || !name) return null;

  // Support single id or array of ids
  const ids = Array.isArray(id) ? id : [id];
  const idParam = ids.join(",");

  // Build URL; only include playerId if present
  const base = `https://bitcraftmap.com/?resourceId=${idParam}&regionId=1,2,3,4,5,6,7,8,9`;
  const url = playerId ? `${base}&playerId=${playerId}` : base;

  return (
    <div className={Styles.card}>
      <p><strong>{name}</strong></p>
      {Number.isFinite(tier) && <p>Tier: {tier}</p>}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </div>
  )
}

export default Card
