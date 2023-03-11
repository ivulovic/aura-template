import { useEffect } from 'react';
import './style.css';

export default function MyButton(props: any): JSX.Element {
    useEffect(() => {}, []);
    return <button>{props.title}</button>
}
