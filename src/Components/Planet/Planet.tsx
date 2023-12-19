import { Planets } from '../../Assets'
import './Planet.scss'

interface PlanetInterface {
  planet: { name: string; id: string }
}
const Planet = ({ planet }: PlanetInterface) => {
  const { name, id } = planet
  return (
    <div className="planet">
      {name}
      <span> {id}</span>
      {name == 'Tatooine' ? (
        <img src={Planets[name]} alt={name} draggable={false} />
      ) : (
        ''
      )}
    </div>
  )
}

export default Planet
