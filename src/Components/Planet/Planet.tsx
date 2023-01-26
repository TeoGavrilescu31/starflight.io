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
    </div>
  )
}

export default Planet
