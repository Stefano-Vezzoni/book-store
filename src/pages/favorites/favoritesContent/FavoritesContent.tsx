import "./FavoritesContent.modules.css";
import { EmptyGenericContent } from "../../../components/emptyGenericContent/EmptyGenericContent";
import { useFavBooks } from "../../../hooks/useFavBooks";
import { FavoriteItem } from "../favoriteItem/FavoriteItem";

export function FavoritesContent() {
    const { favBooks } = useFavBooks();

    return (
        <div className="FavoritesContentContainer">
            <h1>Your Favorites Details</h1>

            {favBooks.length === 0 ? (
                <EmptyGenericContent name="favorite" />
            ) : (
                <>
                    <div className="favoriteItemsContainer">
                        {favBooks.map((book) => (
                            <div key={book.id}>
                                <FavoriteItem book={book} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
