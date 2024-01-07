import "./resultsDiv.css";
const ResultsDiv = ({ name,handleClick }) => {

	return <div className="search-result" onClick={(e)=>{handleClick(name)}}>{name}</div>;
};

export default ResultsDiv;
