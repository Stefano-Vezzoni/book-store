import "./FavoritesContent.modules.css";
import { EmptyGenericContent } from "../../../components/emptyGenericContent/EmptyGenericContent";
import { BookCard } from "../../../components/bookCard/BookCard";

//Fazer o conteudo do favorites funcionar, criar o array ,pensar aonde vai ficar etc
//Fazer o conteudo do favorites funcionar, criar o array ,pensar aonde vai ficar etc
//Fazer o conteudo do favorites funcionar, criar o array ,pensar aonde vai ficar etc
export function FavoritesContent() {
    const isEmpty = true;

    return (
        <div className="CartContentContainer">
            <h1>Your Favorites Details</h1>
            {isEmpty ? (
                <EmptyGenericContent name="cart" />
            ) : (
                <>
                    <div className="cartItemsContainer">
                        {/* {array.map((book) => (
                            <BookCard
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                price={book.price}
                                image={book.image}
                            />
                        ))} */}
                    </div>
                </>
            )}
        </div>
    );
}
