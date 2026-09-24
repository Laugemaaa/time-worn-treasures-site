import { useLocalizedText } from "./localizedText";
export function LocalizedText({text}: {text:string}) {const tx=useLocalizedText();return <>{tx(text)}</>;}
