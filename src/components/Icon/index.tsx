import { ReactElement, ReactNode } from "react";

type IconProps = {
    isHidden: boolean,
    onClick: () => void,
    children: ReactNode,
}

const Icon = ({ isHidden, onClick, children }: IconProps): ReactElement => {

    return (
        <div hidden={isHidden} onClick={onClick}>
            {children}
        </div>
    )
}

export default Icon;