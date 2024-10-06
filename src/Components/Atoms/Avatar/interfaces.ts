import {AvatarProps} from "antd";
import {TooltipPlacement} from "antd/lib/tooltip";

export interface IAvatarProps extends AvatarProps {
    color?: string
    userFullName?: string
    withColorizedBorder?: boolean,
    toolTipPlacement?: TooltipPlacement
    withPreview?: boolean
    userId?:string
}

export type AvatarTypes = "primary" | "secondary" | "tertiary"