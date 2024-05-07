import React, { useState } from "react";
import MovieForm from "./MovieForm";
import Button from "../../Components/Button";

const MoviesList = () => {
  const [showMovieFormModal, setShowMovieFormModal] = useState(false);
  return (
    <div>
      <div className="flex justify-end mb-1">
        <Button
          title="Add Movie"
          variant="outlined"
          onClick={() => {
            setShowMovieFormModal(true);
          }}
        />
        {/* Table Component To Do */}
        {showMovieFormModal && (
          <MovieForm
            showMovieFormModal={showMovieFormModal}
            setShowMovieFormModal={setShowMovieFormModal}
            formType="add"
          />
        )}
      </div>
    </div>
  );
};

export default MoviesList;
