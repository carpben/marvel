/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { styleBaseNormalizer } from "../utils/styles"
import { DRFC } from "../utils/types"

interface Props {
	handler: () => unknown
	className?: string
}

export const Button: DRFC<Props> = (props) => (
	<button onClick={props.handler} css={[styleBaseNormalizer, { cursor: "pointer" }]} {...props} />
)
