import './ErrorPage.css'

const ErrorPage = ({ error }) => {
    return (
        <section className="error">
            <div className="error__inner">
                <h2 className="error__title">Ошибка загрузки данных</h2>
                <div className="error__description">
                    <p>Код ошибки: <span>{error ? error : "404"}</span>, проверьте адрес и попробуйте перезагрузить страницу</p>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
