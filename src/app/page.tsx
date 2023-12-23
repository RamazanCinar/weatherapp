import { css } from '../../styled-system/css';

export default function Home() {
  const test = '123';
  return (
    <>
      <h1 className={css({ color: 'red' })}> My Weather app</h1>
    </>
  );
}
