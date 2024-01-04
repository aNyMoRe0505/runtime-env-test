import { env } from 'next-runtime-env';


export default function Client({ bar }) {
  return (
    <>
      <h1>Client</h1>
      <h1>FOO: {env('NEXT_PUBLIC_FOO')}</h1>
      <h1>BAR: {bar}</h1>
    </>
  )
}

export const getStaticProps = () => {
  console.log(env('NEXT_PUBLIC_FOO'));
  return {
    props: {
      bar: env('BAR') || '',
    },
  };
};
