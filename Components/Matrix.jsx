import { useState } from "react";
import style from "./Matrix.module.css";

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill(null)));
  const [clicks, setClicks] = useState([]);
  const [isFinalClick, setIsFinalClick] = useState(false);

  const handleClick = (row, col) => {
    if (isFinalClick) return;

    const newMatrix = matrix.map((r, rowIndex) =>
      r.map((c, colIndex) => {
        if (rowIndex === row && colIndex === col) return 'green';
        return c;
      })
    );

    setMatrix(newMatrix);
    setClicks([...clicks, { row, col }]);

    if (row === 2 && col === 2) {
      setIsFinalClick(true);
      changeToOrange([...clicks, { row, col }], newMatrix);
    }
  };

  const changeToOrange = (clicks) => {
    clicks.forEach((click, index) => {
      setTimeout(() => {
        setMatrix((prevMatrix) =>
          prevMatrix.map((r, rowIndex) =>
            r.map((c, colIndex) => {
              if (rowIndex === click.row && colIndex === click.col) return 'orange';
              return c;
            })
          )
        );
      }, index * 500);
    });
  };

  return (
    <div className={style.matrix}>
      {matrix.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={style.box}
            style={{ backgroundColor: col || 'white' }}
            onClick={() => handleClick(rowIndex, colIndex)}
          >
            {rowIndex},{colIndex}
          </div>
        ))
      )}
    </div>
  );
};

export default Matrix; 