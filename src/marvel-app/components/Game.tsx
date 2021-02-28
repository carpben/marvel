/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { useSelector } from "react-redux"
import { styleClickable } from "../../utils/styles"
import { DRFC } from "../../utils/types"
import { ACTION_TYPE } from "../tools/actions"
import { useAppDispatch, useAppSelector } from "../tools/reduxHooks"
import { GAME_MODE, selectors } from "../tools/selectors"
import { GameProgress } from "./GameProgress"
import { HeroCard } from "./HeroCard"

export const Game: DRFC = () => {
	const nextTurn = useAppSelector((st) => selectors.getTurn(st))
	const dispatch = useAppDispatch()

	return (
		<div>
			<h2>Build your team</h2>
			<h3>Pick your Hero</h3>
			{!nextTurn ? null : (
				<div
					css={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					{nextTurn.match.map((heroId) => (
						<div
							css={[styleClickable, { width: 300 }]}
							onClick={() => {
								dispatch({
									type: ACTION_TYPE.SELECT_HERO,
									heroId: heroId,
								})
							}}
						>
							<HeroCard id={heroId} />
						</div>
					))}
				</div>
			)}
			<GameProgress
				css={{
					marginTop: 20,
				}}
			/>
		</div>
	)
}
