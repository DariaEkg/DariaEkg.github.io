import { NextPageContext } from 'next';

type Props = { statusCode?: number };

export default function Error({ statusCode }: Props) {
  return (
    <p>
      {statusCode
        ? `Ошибка ${statusCode}`
        : 'Произошла ошибка на клиенте'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
