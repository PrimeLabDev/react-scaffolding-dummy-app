import Image from 'next/image';
import { StylesHelloStyles } from './index.styles';

const Hello = () => {
  return (
    <StylesHelloStyles>
      <section className="hello">
        <div className="image">
          <Image src="/img/me.png" alt="Hakorimana Emmanuel" width={300} height={300} />
        </div>
        <h1>{`Hi,I'm Hakorimana Emmanuel`}</h1>
        <p>I blog about web development - especially frontend frameworks like angular or React</p>
      </section>
    </StylesHelloStyles>
  );
};

export default Hello;
