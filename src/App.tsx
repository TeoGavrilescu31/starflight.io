import { useQuery, gql } from '@apollo/client'

const DATA = gql`
  query ExampleQuery {
    allPlanets {
      planets {
        name
      }
    }
  }
`

export const App = () => {
  const { loading, error, data } = useQuery(DATA)

  if (loading) return <>Loading....</>

  if (error) return <>Error! ${error.message}</>

  return (
    <>
      <div>
        <h1>Hello Teo!</h1>
      </div>
      {JSON.stringify(data)}
    </>
  )
}
