import axios from "axios"
import { Hero } from "./types"

export const fetchHeros = async () => {
	const res = await axios({
		url:
			"https://gateway.marvel.com:443/v1/public/characters?apikey=d3ff50f4d8c300b5a1ea2db7aa151e5d&limit=25",
	})

	const heros = res.data.data.results.filter(
		(hero: any) => hero.id && hero.name && hero.thumbnail,
	) as Array<Hero>

	return heros
}
