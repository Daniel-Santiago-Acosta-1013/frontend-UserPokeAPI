import FavoriteForm from '../components/Favorites/FavoriteForm/FavoriteForm';
import FavoritesList from '../components/Favorites/FavoritesList/FavoritesList';
import Header from '../components/Layout/Header/Header';

const FavoritesView = () => {
    return (
        <div>
            <Header />
            <FavoriteForm />
            <FavoritesList />
        </div>
    );
};

export default FavoritesView;
