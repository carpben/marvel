/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { useSelector } from "react-redux"
import { DRFC } from "../../utils/types"
import { useAppSelector } from "../tools/reduxHooks"
import { GAME_MODE, selectors } from "../tools/selectors"
import { Game } from "./Game"
import { LeaderBoard } from "./LeaderBoard"

export const AppContainer: DRFC = () => {
	const mode = useAppSelector((st) => selectors.getMode(st))

	return (
		<div
			css={{
				maxWidth: 800,
				color: "white",
				textAlign: "center",
				margin: "auto",
			}}
		>
			<h1>
				The{" "}
				<span
					css={{
						backgroundColor: "red",
						textTransform: "uppercase",
						fontSize: 50,
					}}
				>
					Marvel
				</span>{" "}
				Dual
			</h1>

			{mode === GAME_MODE.loading ? null : mode === GAME_MODE.playing ? <Game /> : <LeaderBoard />}
		</div>
	)
}
