import { useRouteError } from "react-router-dom";

interface RouteError {
  // Define the properties of the error object based on your requirements
  statusText?: string;
  message?: string;
  // Add other properties as needed
}

export default function ErrorPage() {
  const error: RouteError = useRouteError() as RouteError;

  // Perform type-checking before using the error object
  if (error && typeof error === "object") {
    console.error(error);

    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }

  // Handle the case where the error is not an object (optional)
  console.error("Unexpected error format:", error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
