import { Helmet } from "react-helmet-async";

const MetaData = ({ title, description, name, type }) => {
    return (
        <>
            <Helmet>
                <title>{`${title} EDU STORE`}</title>
                <meta name="description" content={description} />
                {/* End standard metadata tags */}
                {/* Facebook tags */}
                <meta property="og:type" content={type} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                {/* End Facebook tags */}
                {/* Twitter tags */}
                <meta name="twitter:creator" content={name} />
                <meta name="twitter:card" content={type} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {/* End Twitter tags */}
                <meta http-equiv="X-UA-Compatible" content="IE=7" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content={description} />
                <meta
                    name="keywords"
                    content="food, store, drink, junkfood, online"
                />
                <meta
                    http-equiv="Content-Type"
                    content="text/html;charset=UTF-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
        </>
    );
};

export default MetaData;
