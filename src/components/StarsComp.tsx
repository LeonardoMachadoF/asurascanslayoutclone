import { Star } from "phosphor-react";

type Props = {
    rate: number;
    size: number;
}

export const StarsComp = ({ rate, size }: Props) => {
    return (
        <div className="flex items-center">
            <Star size={size} weight='fill' color="orange" />
            <Star size={size} weight='fill' color="orange" />
            <Star size={size} weight='fill' color="orange" />
            <Star size={size} weight='fill' color="orange" />
            <Star size={size} weight='fill' color="orange" />
            <span className={`ml-1 mt-1`} style={{ fontSize: `${size}px` }}>{rate}</span>
        </div>
    );
}