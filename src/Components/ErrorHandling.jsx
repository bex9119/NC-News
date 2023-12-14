const ErrorHandling = ({status, message}) => {
    return (
        <>
            <h2>{status}</h2>
        <h3>{message}</h3>
      </>
    );
}

export default ErrorHandling