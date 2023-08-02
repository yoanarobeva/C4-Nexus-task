import "./LoadMore.css"

const LoadMore = ({onLoadMore, isLoading, disableLoadMore}) => {
    return (
        <div className="text-center">
            <button className="btn btn-secondary" type="button" disabled={isLoading ? true : false} onClick={onLoadMore}>
                {isLoading ?
                    <>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                    </> 
                :
                    <span>Load more...</span>
                }
            </button>
        </div>
    );
}

export default LoadMore;