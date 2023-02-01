import { MouseEvent } from "react";
export interface ImageLinkFormProps { // interfejs określający jaki typ
    // i rodzaj propsów dostaniemy do komponentu
    onInputChange: (target: HTMLInputElement) => void
    onButtonSubmit: (event: MouseEvent<HTMLButtonElement>) => void
    //MouseEvent jest Typem generycznym, w którym wskazujemy z jakim elementemDOM
    // będzie pracował mouseEvent
}