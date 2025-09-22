import Styles from "./Card.module.css";

const Card = ({ id, name, tier, playerId, regions }) => {
  if (!id || !name) return null;

  const ids = Array.isArray(id) ? id : [id];
  const idParam = ids.join(",");

  const qs = new URLSearchParams();
  qs.set("resourceId", idParam);

  if (Array.isArray(regions) && regions.length > 0) {
    qs.set("regionId", regions.join(","));
  }
  if (playerId) qs.set("playerId", playerId);

  const url = `https://bitcraftmap.com/?${qs.toString()}`;

  return (
    <div className={Styles.card}>
      <p><strong>{name}</strong></p>
      <p>ID(s): {idParam}</p>
      {Number.isFinite(tier) && <p>Tier: {tier}</p>}
      {regions?.length > 0 && <p>Regions: {regions.join(", ")}</p>}
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    </div>
  );
};

export default Card;
