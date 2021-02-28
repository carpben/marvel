/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import { useSelector } from "react-redux"
import { Button } from "../../components/Button"
import { styleClickable } from "../../utils/styles"
import { DRFC } from "../../utils/types"
import { ACTION_TYPE } from "../tools/actions"
import { useAppDispatch, useAppSelector } from "../tools/reduxHooks"
import { GAME_MODE, selectors } from "../tools/selectors"
import { ID } from "../tools/types"

interface Props {
	id: ID
}

export const HeroCard: DRFC<Props> = (props) => {
	const hero = useAppSelector((st) => selectors.getHero(st, props.id))
	return (
		<div
			css={{
				width: "100%",
			}}
		>
			<div
				css={{
					backgroundColor: "red",
					padding: 20,
					fontSize: 20,
					fontWeight: 700,
				}}
			>
				{hero.name}
			</div>

			<img src={hero.thumbnail.path + "." + hero.thumbnail.extension} css={{ width: "100%" }} />
		</div>
	)
}
