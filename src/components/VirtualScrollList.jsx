import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import FeedCard from './FeedCard';
import { fetchPokemon } from '../redux/pokemonslice';


const VirtualScrollList = () => {
  const dispatch = useDispatch();
  const { items, page, hasMore, status } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPokemon({ page }));
    }
  }, [dispatch, status, page]);

  const fetchMoreData = () => {
    if (status !== 'loading') {
      dispatch(fetchPokemon({ page }));
    }
  };

  const loader = <h4>Loading...</h4>;
  const endMessage = <p>You have seen it all!</p>;

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={loader}
      endMessage={endMessage}
    >
      {items.map((item) => (
        <FeedCard key={item.id} pokemon={item} />
      ))}
    </InfiniteScroll>
  );
};

export default VirtualScrollList;
