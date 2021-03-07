/** @jsxImportSource @emotion/react */
import { getPercentage } from "../../utils/numbers"
import { DRFC } from "../../utils/types"
import { useAppSelector } from "../tools/reduxHooks"
import { selectors } from "../tools/selectors"

interface Props {
	className?: string
}

export const GameProgress: DRFC<Props> = (props) => {
	const turnCount = useAppSelector((st) => selectors.getTurnCount(st))

	return (
		<div css={{ height: 45, width: "100%", backgroundColor: "#555", position: "relative" }} {...props}>
			<div
				css={{
					width: `${getPercentage(5, turnCount)}%`,
					height: "100%",
					backgroundColor: "green",
				}}
			/>
			<div
				css={{
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div>{turnCount}/5</div>
			</div>
		</div>
	)
}
