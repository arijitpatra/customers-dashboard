import { Link, useRouteError } from "react-router-dom";
import Header from "../../components/Header";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <Header />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button>Go to home</button>
      </Link>
    </div>
  );
}
