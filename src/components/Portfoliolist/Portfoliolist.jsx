import "./Portfoliolist.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfoliolist active" : "portfolioist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
