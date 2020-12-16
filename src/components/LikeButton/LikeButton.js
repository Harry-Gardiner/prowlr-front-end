const LikeButton = ({ patchGame }) => (

    <button
        type="button"
        className="btn btn-success btn-circle btn-xl"
        onClick={patchGame}
    >
        <i className="fas fa-bone"></i>
    </button>


);

export default LikeButton;
