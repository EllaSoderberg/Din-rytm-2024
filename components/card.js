import Link from 'next/link';

export const Card = props => {
  let isVisible = true;
  if (!props.aktuelltIsActive && props.category === "aktuellt") {
    isVisible = false;
  }
  if (!props.forskningIsActive && props.category === "forskning") {
    isVisible = false;
  }
  return (
    <div className={`${isVisible ? `` : `hidden`} block w-64 bg-green-600 my-6 mx-4 flex flex-col hover:bg-red-600 hover:cursor-pointer rounded-lg`}>
    <Link href={props.slug}>
      <div
        className="block h-40 bg-center bg-cover rounded-t-lg"
        style={{ backgroundImage:
                  "url(" +
                  `${
                    !!props.img.childImageSharp
                      ? props.img.childImageSharp.fluid.src
                      : props.img
                  }` +
                  ")",
              }}
      ></div>
      <div className="block p-2 px-4 text-white">
        <div className="text-sm uppercase">{props.category}</div>
        <div className="font-serif text-md">{props.title}</div>
        <div>
          {props.exc}
          <b>Läs mer</b>
        </div>
      </div>
      </Link>
    </div>
  );
};