import MovieDataFormRow from "./MovieDataFormRow"
import MovieSection from "./MovieSection"

const MetadataEditor = () => {
  return (
    <MovieSection title="Movie Data">
      <div>
        <form>
          <fieldset>
            <div className="flex flex-col h-64">
              <div>
                <MovieDataFormRow title="Name:">
                  <input className="movie-data-input" type="text"></input>
                </MovieDataFormRow>

                <MovieDataFormRow title="Studio:">
                    <select className="w-full py-1">
                      <option>Studio 1</option>
                      <option>Studio 2</option>
                      <option>Studio 3</option>
                      <option>Studio 4</option>
                      <option>Studio 5</option>
                    </select>
                </MovieDataFormRow>
                
                    <MovieDataFormRow title="Series:">
                    <select className="w-full py-1">
                      <option>Series 1</option>
                      <option>Series 2</option>
                      <option>Series 3</option>
                      <option>Series 4</option>
                      <option>Series 5</option>
                    </select>
                </MovieDataFormRow>
                
                <MovieDataFormRow title="Series:">
                  <input type="text" className="movie-data-input"></input>
                </MovieDataFormRow>
              </div>
              <div className="h-full flex flex-col justify-center">
                <div className="flex">
                  <button className="movie-data-button bg-green-700 hover:bg-green-600" type="submit">Update</button>
                  <button className="movie-data-button bg-red-700 hover:bg-red-600" type="submit">Remove</button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </MovieSection>
    
  )
}

export default MetadataEditor