import React from "react";
import MovieInfo from "./MovieInfo";
import renderer from "react-test-renderer";

describe("<MovieInfo />", () => {
  let movieData;

  beforeEach(() => {
    movieData = {
      title: "",
      poster_path: "",
      genres: [],
      release_date: "",
      overview: "",
    };
  });

  it("should set the movie info with movie object and close action", () => {
    const tree = renderer
      .create(<MovieInfo movie={movieData} close={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // A bit overkill, but just to know how to use inlineSnapshot.
  it("should show default no-image when not provided in movie object", () => {
    movieData.poster_path = "";
    const tree = renderer
      .create(<MovieInfo movie={movieData} close={() => {}} />)
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="MovieInfo"
      >
        <div
          className="top-info"
        >
          <span>
            netflix roulette
          </span>
          <label
            onClick={[Function]}
          >
            <img
              alt=""
              src="//localhost/search.png"
            />
          </label>
        </div>
        <main>
          <section>
            <p
              className="title-genre search-section"
            >
              <label>
                
                 
                <span />
              </label>
            </p>
            <p
              className="genre"
            >
              <label>
                
              </label>
            </p>
            <p
              className="release-duration"
            >
              <label>
                NaN
              </label>
              <span>
                 min
              </span>
            </p>
            <p
              className="description"
            >
              <label>
                
              </label>
            </p>
          </section>
        </main>
      </div>
    `);
  });
});
