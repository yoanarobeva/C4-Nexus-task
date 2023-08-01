import "./LoadMore.css"

const LoadMore = () => {
    return (
        <div className="text-center">
            <button className="btn btn-secondary" type="button" disabled>
                <span>Load more...</span>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
        </div>
    );
}

export default LoadMore;