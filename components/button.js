import Link from 'next/link';

export const Button = (props) => {
    return(
        <button className="py-3 px-8 mt-6 rounded-full text-lg bg-red-600 hover:bg-red-500">
          <Link href={props.to}>{props.children}</Link>
        </button>
    )
} 
