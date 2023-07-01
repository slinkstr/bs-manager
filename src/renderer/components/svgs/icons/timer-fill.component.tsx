import { CSSProperties } from "react";

export function TimerFillIcon(props: { className?: string; style?: CSSProperties }) {
    return (
        <svg className={props.className} style={props.style} xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M16.25 4.458q-.625 0-1.062-.437-.438-.438-.438-1.104 0-.625.438-1.063.437-.437 1.062-.437h7.5q.625 0 1.062.437.438.438.438 1.063 0 .666-.438 1.104-.437.437-1.062.437ZM20 23.208q.625 0 1.062-.437.438-.438.438-1.104v-6.709q0-.625-.438-1.062-.437-.438-1.062-.438t-1.062.438q-.438.437-.438 1.062v6.709q0 .666.438 1.104.437.437 1.062.437Zm0 13.959q-3.167 0-5.938-1.209-2.77-1.208-4.854-3.291-2.083-2.084-3.291-4.855-1.209-2.77-1.209-5.937 0-3.167 1.209-5.937 1.208-2.771 3.291-4.855Q11.292 9 14.062 7.792 16.833 6.583 20 6.583q2.75 0 5.188.896 2.437.896 4.437 2.521l1.25-1.208q.417-.459 1.042-.459T33 8.792q.458.458.458 1.104 0 .646-.458 1.062l-1.208 1.209q1.541 1.833 2.52 4.229.98 2.396.98 5.479 0 3.167-1.209 5.937-1.208 2.771-3.291 4.855-2.084 2.083-4.854 3.291-2.771 1.209-5.938 1.209Z" />
        </svg>
    );
}
