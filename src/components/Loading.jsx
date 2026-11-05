
const Loading = ({ message }) => {
  return (
    <>
      <div id="loading__bar">
        <div className="loading__progress"></div>
        <div className="loading__progress"></div>
      </div>
      <div id="loading__spinner" className="hide-loading">
        <i className="fas fa-spinner cars__loading--spinner"></i>
        <p className="loading__text">{message}</p>
      </div>
    </>
  );
};

export default Loading;
