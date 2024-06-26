import Link from 'next/link';

export const Textbox = props => {
  return (
    <Link
      href={props.slug}
      className="z-40 flex-1 lg:w-1/4 w-full p-10 my-4 lg:mx-8 bg-red-600 break-words text-center rounded-sm shadow-xl"
    >
      <h3 className="text-l pb-2 font-bold uppercase">{props.title}</h3>
      <p className="text-sm">{props.text}</p>
    </Link>
  );
};
