import { css } from "@emotion/react"

export const styleBaseNormalizer = css`
	padding: unset;
	background-color: unset;
	border: unset;
	:focus {
		outline: none;
	}
`

export const styleClickable = css({
	cursor: "pointer",
})
