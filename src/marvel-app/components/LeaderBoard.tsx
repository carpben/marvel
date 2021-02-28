/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../../components/Button"
import { DRFC } from "../../utils/types"
import { ACTION_TYPE } from "../tools/actions"
import { useAppDispatch, useAppSelector } from "../tools/reduxHooks"
import { GAME_MODE, selectors } from "../tools/selectors"
import { ID } from "../tools/types"
import { HeroCard } from "./HeroCard"

export const LeaderBoard: DRFC = () => {
	const leaders = useAppSelector((st) => selectors.getLeaders(st))
	const dispatch = useAppDispatch()

	return (
		<div
			css={{
				marginBottom: 100,
			}}
		>
			<h2>Hall of fame</h2>
			<div
				css={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 30,
				}}
			>
				{leaders.map((leader, i) => (
					<div
						css={{
							padding: 40,
							backgroundColor: "#333",
						}}
					>
						<HeroCard id={leader.hero.id} />
						<div>
							<div>Number {i + 1}</div>
							<div>{leader.score} teams</div>
						</div>
					</div>
				))}
			</div>
			<div
				css={{
					bottom: 0,
					width: 800,
					position: "fixed",
					height: 60,
				}}
			>
				<Button
					css={{
						backgroundColor: "#0f0e",
						width: "100%",
						height: "100%",
						color: "white",
						fontSize: 24,
						fontWeight: 600,
					}}
					handler={() =>
						dispatch({
							type: ACTION_TYPE.NEW_GAME,
						})
					}
				>
					New Game
				</Button>
			</div>
		</div>
	)
}
