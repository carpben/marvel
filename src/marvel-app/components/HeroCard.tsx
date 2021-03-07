/** @jsxImportSource @emotion/react */
import { DRFC } from "../../utils/types"
import { useAppSelector } from "../tools/reduxHooks"
import { selectors } from "../tools/selectors"
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
