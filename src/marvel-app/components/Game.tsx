/** @jsxImportSource @emotion/react */
import { useState } from "react"
import { styleClickable } from "../../utils/styles"
import { DRFC } from "../../utils/types"
import { ACTION_TYPE } from "../tools/actions"
import { useAppDispatch, useAppSelector } from "../tools/reduxHooks"
import { selectors } from "../tools/selectors"
import { ID } from "../tools/types"
import { GameProgress } from "./GameProgress"
import { HeroCard } from "./HeroCard"

export const Game: DRFC = () => {
	const nextTurn = useAppSelector((st) => selectors.getTurn(st))
	const dispatch = useAppDispatch()
	const [winner, setWinner] = useState<ID>()

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
							css={[styleClickable, { width: 300, position: "relative" }]}
							onClick={() => {
								if (heroId === winner) {
									return
								}

								setWinner(heroId)

								setTimeout(() => {
									dispatch({
										type: ACTION_TYPE.SELECT_HERO,
										heroId: heroId,
									})
								}, 1000)
							}}
							key={heroId}
						>
							<HeroCard id={heroId} />
							{winner === heroId && (
								<div
									css={{
										fontSize: 100,
										position: "absolute",
										bottom: 0,
										top: 0,
										right: 0,
										left: 0,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									✔️
								</div>
							)}
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
