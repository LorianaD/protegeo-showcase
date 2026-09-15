import { notFoundIllustration } from "@/assets";
import { Button, Main } from "@/components";

function NotFound() {
    return (
        <Main variant="not-found">
            <div className="not-found__container">
                <img
                    src={notFoundIllustration}
                    alt=""
                    className="not-found__image"
                />

                <div className="not-found__content">
                    <p className="not-found__code">404</p>

                    <h1 className="not-found__title">
                        Page introuvable
                    </h1>

                    <p className="not-found__text">
                        La page que vous recherchez n'existe pas ou n'est plus disponible.
                    </p>

                    <Button
                        to="/"
                        label="Retour à l'accueil"
                        variant="primary"
                    />
                </div>
            </div>
        </Main>
    );
}

export default NotFound;